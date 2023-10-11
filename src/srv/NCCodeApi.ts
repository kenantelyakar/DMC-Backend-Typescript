import AxiosCaller from "./util/AxiosCaller";
import {ApiType} from "./enum/ApiType";
import {RequestType} from "./enum/RequestType";
import {ApiResponse} from "./dto/ApiResponse";
import {NCBatchUpload} from "./dto/batchUpload/NCBatchUpload";

export class NCCodeApi {
    static  async createNCCode(data: NCBatchUpload[]) : Promise<ApiResponse>{
        let apiResp = new ApiResponse();
        for(let d of data){
            let r : Object ={
                status : d.NCStatus,
                code : d.NCCode,
                description : d.NCDescription,
                category: d.NCCategory,
                plant : d.plant
            };
            apiResp = await AxiosCaller.callDMC(ApiType.NC_CODE,"/nonconformancecodes",RequestType.POST, r);
            if(typeof  apiResp.status == "number")
                if(apiResp.status > 299) break;
        }
        return apiResp;
    }
}