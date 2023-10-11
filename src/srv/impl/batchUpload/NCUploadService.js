"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCUploadService = void 0;
const ApiResponse_1 = require("../../dto/ApiResponse");
const NCCodeApi_1 = require("../../NCCodeApi");
class NCUploadService {
    static async uploadBatch(data) {
        let apiResp = new ApiResponse_1.ApiResponse();
        try {
            apiResp = await NCCodeApi_1.NCCodeApi.createNCCode(data);
        }
        catch (e) {
            apiResp.data = e.toString();
            apiResp.message = "Error";
            apiResp.status = 500;
        }
        return apiResp;
    }
}
exports.NCUploadService = NCUploadService;
