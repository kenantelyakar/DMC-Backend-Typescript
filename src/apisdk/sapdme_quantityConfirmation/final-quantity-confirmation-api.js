"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalQuantityConfirmationApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'FinalQuantityConfirmationApi'.
 * This API is part of the 'sapdme_quantityConfirmation' service.
 */
exports.FinalQuantityConfirmationApi = {
    /**
     * Post final quantity confirmation without updating the quantity for a given SFC of an order. When the API call succeeds, the operation/phase status will be set to 'CNF' in the integrated ERP system.
     * @param body - Request object to perform final quantity confirmation without updating the quantity.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createQuantityConfirmationV1ReportOperationActivityFinalConfirmation: (body) => new openapi_1.OpenApiRequestBuilder('post', '/quantityConfirmation/v1/reportOperationActivityFinalConfirmation', {
        body
    })
};
