"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialApi = void 0;
const AxiosCaller_1 = __importDefault(require("./util/AxiosCaller"));
const ApiType_1 = require("./enum/ApiType");
const RequestType_1 = require("./enum/RequestType");
class MaterialApi {
    static async getMaterialInfo(plant, material) {
        return await AxiosCaller_1.default.callDMC(ApiType_1.ApiType.MATERIAL, "/materials", RequestType_1.RequestType.GET, {
            plant: plant,
            material: material
        });
    }
    ;
}
exports.MaterialApi = MaterialApi;
