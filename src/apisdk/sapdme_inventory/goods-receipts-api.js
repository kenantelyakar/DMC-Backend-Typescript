"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsReceiptsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'GoodsReceiptsApi'.
 * This API is part of the 'sapdme_inventory' service.
 */
exports.GoodsReceiptsApi = {
    /**
     * Gets posted goods receipts that are performed in the Order POD app, the Post-Production Reporting POD app, and with the Goods Receipt public API. The request parameters are case sensitive. As the serial number functionality is not fully supported, thus serial numbers are not returned in this API.
     * @param queryParameters - Object containing the following keys: plant, order, sfc, material, page, size.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getPostedGoodsReceiptsUsingGet1: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/inventory/goodsReceipts', {
        queryParameters
    }),
    /**
     * Posts goods receipts for products in the plant where Inventory Management is enabled in SAP Digital Manufacturing. The goods receipts are posted in both SAP Digital Manufacturing and the integrated ERP system. You can only post a single goods receipt at one time. For the goods receipt filled with serial number, you can only post one product.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    postErpGoodsReceiptsUsingPost2: (body) => new openapi_1.OpenApiRequestBuilder('post', '/inventory/erpGoodsReceipts', {
        body
    }),
    /**
     * Posts goods receipts for products in the plant where Extended Warehouse Management is enabled in SAP Digital Manufacturing. The goods receipts are posted in both SAP Digital Manufacturing and the integrated EWM system. You can only post a single goods receipt at one time. For the goods receipt filled with serial number, you can only post one product.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    postEwmGoodsReceiptsUsingPost2: (body) => new openapi_1.OpenApiRequestBuilder('post', '/inventory/ewmGoodsReceipts', {
        body
    }),
    /**
     * Retrieves the summarized information, such as material, batch number, storage location, of posted goods receipts for a given order or Shop Floor Control. You can retrieve goods receipts managed by both Inventory Management (IM) and Extended Warehouse Management (EWM).
     * @param queryParameters - Object containing the following keys: plant, sfc, order.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getGoodsReceiptSummaryUsingGet2: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/inventory/goodsReceipts/summarize', {
        queryParameters
    }),
    /**
     * Cancels goods receipts that are successfully posted in SAP Digital Manufacturing as well as the integrated ERP system. You can only cancel a single goods receipt at one time.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    cancelPostedGoodsReceiptUsingPost2: (body) => new openapi_1.OpenApiRequestBuilder('post', '/inventory/goodsReceipts/cancel', {
        body
    })
};
