"use strict";
const ApiResponse_1 = require("../dto/ApiResponse");
const sap_cf_axios_1 = require("sap-cf-axios");
const RequestType_1 = require("../enum/RequestType");
const cfAxios = require('sap-cf-axios').default;
const dmcAxios = cfAxios("DMC_OAuth");
class AxiosCaller {
    static async callDMC(apiType, method, reqType, params) {
        function catchError(err) {
            let resp = new ApiResponse_1.ApiResponse();
            if (err instanceof sap_cf_axios_1.AxiosError) {
                resp.status = err.response?.status;
                resp.data = err.response?.data;
                resp.message = err.response?.data.message;
            }
            else if (err.data) {
                resp.status = 500;
                resp.data = err.data.message;
                resp.message = "Error";
            }
            else {
                resp.status = 500;
                resp.data = "Unknown error: Axioscaller: 24";
                resp.message = "Error";
            }
            return resp;
        }
        if (reqType == RequestType_1.RequestType.GET) {
            const searchParams = Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
            return await dmcAxios.get(apiType + method + "?" + searchParams)
                .then(function (value) {
                let resp = new ApiResponse_1.ApiResponse();
                resp.data = value.data;
                return resp;
            })
                .catch(catchError);
        }
        else if (RequestType_1.RequestType.POST || RequestType_1.RequestType.PUT || RequestType_1.RequestType.PATCH) {
            return await dmcAxios.post((apiType + method), params)
                .then(function (value) {
                let resp = new ApiResponse_1.ApiResponse();
                resp.data = value.data;
                return resp;
            })
                .catch(catchError);
        }
    }
}
module.exports = AxiosCaller;
