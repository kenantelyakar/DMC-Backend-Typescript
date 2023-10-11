import AxiosCaller from "./util/AxiosCaller";
import {ApiType} from "./enum/ApiType";
import {RequestType} from "./enum/RequestType";
import {FindOrderResponse} from "../apisdk/sapdme_order";
import {SfcDetailResponse} from "../apisdk/sapdme_sfc";

export class OrderApi{
    static async getOrders(plant: string |undefined, order: string |undefined): Promise<FindOrderResponse> {
        return await AxiosCaller.callDMC(ApiType.ORDER, "/orders", RequestType.GET, {
            plant: plant,
            order: order
        });
    };

    static async getSfcDetails(plantReq: string, sfcReq: string): Promise<SfcDetailResponse> {
        let queryParameters = {
            plant: plantReq,
            sfc: sfcReq
        }
        return await AxiosCaller.callDMC(ApiType.SFC, "/sfcdetail", RequestType.GET, queryParameters);
    };
}