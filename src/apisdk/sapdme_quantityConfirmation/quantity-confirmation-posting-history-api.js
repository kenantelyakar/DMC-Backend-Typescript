"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantityConfirmationPostingHistoryApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'QuantityConfirmationPostingHistoryApi'.
 * This API is part of the 'sapdme_quantityConfirmation' service.
 */
exports.QuantityConfirmationPostingHistoryApi = {
    /**
     * Get a list of quantity confirmation posting history entries for a given order, plant, and SFC
     * @param queryParameters - Object containing the following keys: order, plant, sfc, page, size, sort.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getQuantityConfirmationV1PostingHistory: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/quantityConfirmation/v1/postingHistory', {
        queryParameters
    })
};
