import {BomComponent, CustomValue} from '../../../apisdk/sapdme_bom';
import {BomApi} from "../../BomApi";
import {OrderApi} from "../../OrderApi";
import {ComponentEntry} from "../../dto/induction/component/ComponentEntry";
import {InductionComponent} from "../../dto/induction/component/InductionComponent";
import {MaterialApi} from "../../MaterialApi";
import {MaterialResponse} from "../../../apisdk/sapdme_material";
import {db} from '../../../db';
import {ApiResponse} from "../../dto/ApiResponse";
import {ISfcAssy} from "../../../db/models";
import {
    ActivityConfirmationApi,
    ActivityConfirmationRequest,
    ActivityRequest
} from "../../../apisdk/sapdme_processorder";

export abstract class AssemblyServices{
    static  async getBOMInfoBySfc(plant: string , sfc: string): Promise<ApiResponse>{
        let apiResp = new ApiResponse();
        try{
            let oCArray :InductionComponent[] = [];
            let componentsResponse = new ComponentEntry();
            /*get bom components from standard services*/
            let sfcResp = await  OrderApi.getSfcDetails(plant, sfc);
            let orderResp = await OrderApi.getOrders(plant, sfcResp.order.order);
            let bomResp = await BomApi.getBom(orderResp.bom.bom,orderResp.plant,orderResp.bom.type);
            /*get material descriptions*/
            const mat = bomResp[0].components.map(async (item: BomComponent) => {
                return await MaterialApi.getMaterialInfo(plant,item.material.material);
            });
            const materials = await Promise.all(mat);
            const getMaterials= [].concat.apply([], materials);
            let sfcAssyRows = await db.sfcAssy.findBySfc(sfc);
            for (let c of bomResp[0].components) {
                let indComponent = new InductionComponent();
                let foundMaterial : MaterialResponse = getMaterials.filter((f:MaterialResponse) => {return f.material == c.material.material});
                /*Find Tolerance*/
                if (c.customValues != undefined)
                    indComponent.tolerance = Number(c.customValues.filter((x: CustomValue) => {
                        if (x.attribute == "TOLERANCE")
                            return x.value;
                    }));
                /*Find sumQty from Z_SFC_ASSY table*/
                if(sfcAssyRows != null )
                {
                    let foundAssyRow = sfcAssyRows.find((x) => x.bom_component_bo.trim() === c.material.material);
                    if(foundAssyRow != undefined)
                        indComponent.sumQty = foundAssyRow.qty;
                }
                if (indComponent.tolerance == 0)
                    indComponent.tolerance = 10;
                indComponent.materialDesc = foundMaterial[0].description;
                indComponent.materialQty = c.quantity;
                indComponent.theoreticQuantity = c.totalQuantity;
                /*assign upperLimit for row*/
                if(indComponent.tolerance !== undefined && indComponent.theoreticQuantity !== undefined)
                    indComponent.upperLimit = (100+indComponent.tolerance) * indComponent.theoreticQuantity / 100;

                indComponent.uom = c.unitOfMeasure;
                indComponent.material = c.material.material;
                oCArray.push(indComponent);
            }
            componentsResponse.orderQuantity = orderResp.releasedQuantity;
            componentsResponse.order = orderResp.order;
            componentsResponse.bomQuantity = Number(bomResp[0].customValues.filter((a: CustomValue)=> {return a.attribute == "BOM_QUANTITY"})[0].value);
            componentsResponse.components = oCArray;
            apiResp.data = componentsResponse;
        }
        catch (e: any){
            apiResp.data = e.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }
        return apiResp;
    }

    static async saveInductionComponents(sfcBo: string,shopOrderBo: string, operationBo: string, resourceBo: string,prodMaterialBo: string,objectData: InductionComponent[], plant: string, userId: string):Promise<ApiResponse>{
        let resp :ApiResponse= new ApiResponse();
        try{
            let messageString :string = "";
            for(let c of objectData )
            {
                let consumeQty : number = c.userDefQty;
                if(c.userDeleteQty > 0)
                    consumeQty = c.userDeleteQty * -1;
                if(consumeQty == 0) continue;
                let a : ISfcAssy =await db.sfcAssy.add(sfcBo, shopOrderBo, resourceBo, operationBo, prodMaterialBo, consumeQty, c.material, userId);
                messageString += " -Material: "+ c.material + " Quantity: " + a.qty;
            }
            resp.message = "Bileşen Girişi tamamlandı SFC:" + sfcBo + messageString;
        } catch (e :any) {
            resp.message = e.toString();
            resp.status = 500;
        }

        return resp;
    }
    static async checkInductionComponentEntry(sfcBo:string, operationBo:string, resourceBo:string) :Promise<ApiResponse>{
        let resp :ApiResponse= new ApiResponse();
        try{
            let a = await db.sfcAssy.checkComponentEntry(sfcBo, operationBo, resourceBo);
            resp.data = {sfcEntryCount : a};
        }
        catch (e :any) {
            resp.message = e.toString();
            resp.status = 500;
        }
        return resp;
    }
}