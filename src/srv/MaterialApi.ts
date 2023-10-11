import AxiosCaller from "./util/AxiosCaller";
import {ApiType} from "./enum/ApiType";
import {RequestType} from "./enum/RequestType";
import {MaterialResponse} from "../apisdk/sapdme_material";

export class MaterialApi {
    static async getMaterialInfo(plant: string | undefined, material: string | undefined): Promise<MaterialResponse> {
        return await AxiosCaller.callDMC(ApiType.MATERIAL, "/materials", RequestType.GET, {
              plant: plant,
              material: material
        });
    };
}