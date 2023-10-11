import AxiosCaller from "./util/AxiosCaller";
import {ApiType} from "./enum/ApiType";
import {RequestType} from "./enum/RequestType";
import type { BOM } from '../apisdk/sapdme_bom';

export class BomApi{
    static  async getBom(bom: any, plant: string,type: any) : Promise<BOM[]>{
        return await AxiosCaller.callDMC(ApiType.BOM,"/boms",RequestType.GET, {
            bom: bom,
            plant: plant,
            type: type
        });
    }
}