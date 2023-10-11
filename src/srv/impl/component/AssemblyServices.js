"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssemblyServices = void 0;
const BomApi_1 = require("../../BomApi");
const OrderApi_1 = require("../../OrderApi");
const ComponentEntry_1 = require("../../dto/induction/component/ComponentEntry");
const InductionComponent_1 = require("../../dto/induction/component/InductionComponent");
const MaterialApi_1 = require("../../MaterialApi");
const db_1 = require("../../../db");
const ApiResponse_1 = require("../../dto/ApiResponse");
class AssemblyServices {
    static async getBOMInfoBySfc(plant, sfc) {
        let apiResp = new ApiResponse_1.ApiResponse();
        try {
            let oCArray = [];
            let componentsResponse = new ComponentEntry_1.ComponentEntry();
            /*get bom components from standard services*/
            let sfcResp = await OrderApi_1.OrderApi.getSfcDetails(plant, sfc);
            let orderResp = await OrderApi_1.OrderApi.getOrders(plant, sfcResp.order.order);
            let bomResp = await BomApi_1.BomApi.getBom(orderResp.bom.bom, orderResp.plant, orderResp.bom.type);
            /*get material descriptions*/
            const mat = bomResp[0].components.map(async (item) => {
                return await MaterialApi_1.MaterialApi.getMaterialInfo(plant, item.material.material);
            });
            const materials = await Promise.all(mat);
            const getMaterials = [].concat.apply([], materials);
            let sfcAssyRows = await db_1.db.sfcAssy.findBySfc(sfc);
            for (let c of bomResp[0].components) {
                let indComponent = new InductionComponent_1.InductionComponent();
                let foundMaterial = getMaterials.filter((f) => { return f.material == c.material.material; });
                /*Find Tolerance*/
                if (c.customValues != undefined)
                    indComponent.tolerance = Number(c.customValues.filter((x) => {
                        if (x.attribute == "TOLERANCE")
                            return x.value;
                    }));
                /*Find sumQty from Z_SFC_ASSY table*/
                if (sfcAssyRows != null) {
                    let foundAssyRow = sfcAssyRows.find((x) => x.bom_component_bo.trim() === c.material.material);
                    if (foundAssyRow != undefined)
                        indComponent.sumQty = foundAssyRow.qty;
                }
                if (indComponent.tolerance == 0)
                    indComponent.tolerance = 10;
                indComponent.materialDesc = foundMaterial[0].description;
                indComponent.materialQty = c.quantity;
                indComponent.theoreticQuantity = c.totalQuantity;
                /*assign upperLimit for row*/
                if (indComponent.tolerance !== undefined && indComponent.theoreticQuantity !== undefined)
                    indComponent.upperLimit = (100 + indComponent.tolerance) * indComponent.theoreticQuantity / 100;
                indComponent.uom = c.unitOfMeasure;
                indComponent.material = c.material.material;
                oCArray.push(indComponent);
            }
            componentsResponse.orderQuantity = orderResp.releasedQuantity;
            componentsResponse.order = orderResp.order;
            componentsResponse.bomQuantity = Number(bomResp[0].customValues.filter((a) => { return a.attribute == "BOM_QUANTITY"; })[0].value);
            componentsResponse.components = oCArray;
            apiResp.data = componentsResponse;
        }
        catch (e) {
            apiResp.data = e.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }
        return apiResp;
    }
    static async saveInductionComponents(sfcBo, shopOrderBo, operationBo, resourceBo, prodMaterialBo, objectData, plant, userId) {
        let resp = new ApiResponse_1.ApiResponse();
        try {
            let messageString = "";
            for (let c of objectData) {
                let consumeQty = c.userDefQty;
                if (c.userDeleteQty > 0)
                    consumeQty = c.userDeleteQty * -1;
                if (consumeQty == 0)
                    continue;
                let a = await db_1.db.sfcAssy.add(sfcBo, shopOrderBo, resourceBo, operationBo, prodMaterialBo, consumeQty, c.material, userId);
                messageString += " -Material: " + c.material + " Quantity: " + a.qty;
            }
            resp.message = "Bileşen Girişi tamamlandı SFC:" + sfcBo + messageString;
        }
        catch (e) {
            resp.message = e.toString();
            resp.status = 500;
        }
        return resp;
    }
    static async checkInductionComponentEntry(sfcBo, operationBo, resourceBo) {
        let resp = new ApiResponse_1.ApiResponse();
        try {
            let a = await db_1.db.sfcAssy.checkComponentEntry(sfcBo, operationBo, resourceBo);
            resp.data = { sfcEntryCount: a };
        }
        catch (e) {
            resp.message = e.toString();
            resp.status = 500;
        }
        return resp;
    }
}
exports.AssemblyServices = AssemblyServices;
