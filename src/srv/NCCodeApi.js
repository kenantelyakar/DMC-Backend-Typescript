"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCCodeApi = void 0;
const AxiosCaller_1 = __importDefault(require("./util/AxiosCaller"));
const ApiType_1 = require("./enum/ApiType");
const RequestType_1 = require("./enum/RequestType");
const ApiResponse_1 = require("./dto/ApiResponse");
class NCCodeApi {
    static async createNCCode(data) {
        let apiResp = new ApiResponse_1.ApiResponse();
        for (let d of data) {
            let r = {
                status: d.NCStatus,
                code: d.NCCode,
                description: d.NCDescription,
                category: d.NCCategory,
                plant: d.plant
            };
            apiResp = await AxiosCaller_1.default.callDMC(ApiType_1.ApiType.NC_CODE, "/nonconformancecodes", RequestType_1.RequestType.POST, r);
            if (typeof apiResp.status == "number")
                if (apiResp.status > 299)
                    break;
        }
        return apiResp;
    }
}
exports.NCCodeApi = NCCodeApi;
