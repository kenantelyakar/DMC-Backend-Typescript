"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsIssueSummaryApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'GoodsIssueSummaryApi'.
 * This API is part of the 'sapdme_processorder' service.
 */
exports.GoodsIssueSummaryApi = {
    /**
     * Goods Issue summary results for an order and plant. Be aware that the API is deprecated, and will be decommissioned and retired from production in a few releases. It's recommended to use the new successor API <a href=https://api.sap.com/api/sapdme_processorder/resource/Goods_Issue_Summary>/v2/goodsIssue/summary</a>.
     * @param queryParameters - Object containing the following keys: plant, order, material, operationActivity, stepId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    goodsSummary: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/goodsIssue/summary', {
        queryParameters
    }),
    /**
     * Goods Issue summary results for an order, sfc, operationActivity, stepId and plant.
     * @param queryParameters - Object containing the following keys: plant, order, sfc, operationActivity, stepId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    goodsSummaryV2: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v2/goodsIssue/summary', {
        queryParameters
    })
};
