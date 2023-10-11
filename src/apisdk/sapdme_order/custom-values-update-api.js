"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomValuesUpdateApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'CustomValuesUpdateApi'.
 * This API is part of the 'sapdme_order' service.
 */
exports.CustomValuesUpdateApi = {
    /**
     * Updates custom values for the given order
     * @param body - Request to update custom values
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateOrdersCustomValues: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/orders/customValues', {
        body
    })
};
