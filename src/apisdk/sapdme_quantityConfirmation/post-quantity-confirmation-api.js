"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostQuantityConfirmationApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'PostQuantityConfirmationApi'.
 * This API is part of the 'sapdme_quantityConfirmation' service.
 */
exports.PostQuantityConfirmationApi = {
    /**
     * Post yield or scrap quantity confirmation for a given SFC of an order.
     * @param body - Request object to perform yield and scrap quantity confirmation.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createQuantityConfirmationV1Confirm: (body) => new openapi_1.OpenApiRequestBuilder('post', '/quantityConfirmation/v1/confirm', {
        body
    })
};
