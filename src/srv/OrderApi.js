"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderApi = void 0;
const AxiosCaller_1 = __importDefault(require("./util/AxiosCaller"));
const ApiType_1 = require("./enum/ApiType");
const RequestType_1 = require("./enum/RequestType");
class OrderApi {
    static async getOrders(plant, order) {
        return await AxiosCaller_1.default.callDMC(ApiType_1.ApiType.ORDER, "/orders", RequestType_1.RequestType.GET, {
            plant: plant,
            order: order
        });
    }
    ;
    static async getSfcDetails(plantReq, sfcReq) {
        let queryParameters = {
            plant: plantReq,
            sfc: sfcReq
        };
        return await AxiosCaller_1.default.callDMC(ApiType_1.ApiType.SFC, "/sfcdetail", RequestType_1.RequestType.GET, queryParameters);
    }
    ;
}
exports.OrderApi = OrderApi;
