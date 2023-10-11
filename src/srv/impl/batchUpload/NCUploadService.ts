import {ApiResponse} from "../../dto/ApiResponse";
import {NCBatchUpload} from "../../dto/batchUpload/NCBatchUpload";
import {NCCodeApi} from "../../NCCodeApi";

export abstract class NCUploadService {
    static async uploadBatch(data: NCBatchUpload[]): Promise<ApiResponse> {
        let apiResp = new ApiResponse();
        try {
            apiResp = await NCCodeApi.createNCCode(data);
        }catch (e: any){
            apiResp.data = e.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }
        return apiResp;
    }
}