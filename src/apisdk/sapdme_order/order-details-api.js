"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'OrderDetailsApi'.
 * This API is part of the 'sapdme_order' service.
 */
exports.OrderDetailsApi = {
    /**
     * Finds the detailed data like order header, SFC list, associated custom data for the given plant and order.
     * @param queryParameters - Object containing the following keys: expand, order, plant, language.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getOrders: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/orders', {
        queryParameters
    })
};
