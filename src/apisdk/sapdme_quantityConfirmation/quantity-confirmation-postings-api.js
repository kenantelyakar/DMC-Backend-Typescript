"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantityConfirmationPostingsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'QuantityConfirmationPostingsApi'.
 * This API is part of the 'sapdme_quantityConfirmation' service.
 */
exports.QuantityConfirmationPostingsApi = {
    /**
     * Combine quantity confirmation details and summary for a given plant, SFC, and operation activity.
     * @param queryParameters - Object containing the following keys: plant, sfc, operationActivity.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getQuantityConfirmationV1Postings: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/quantityConfirmation/v1/postings', {
        queryParameters
    })
};
