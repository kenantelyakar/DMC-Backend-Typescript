"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'OperationApi'.
 * This API is part of the 'sapdme_operation' service.
 */
exports.OperationApi = {
    /**
     * Retrieves master operation activity for the provided activityId, plant and order name or SFC name.
     * @param queryParameters - Object containing the following keys: activityId, order, plant, routing, routingType, routingVersion, sfc.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findMasterOperationUsingGet1: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/masterOperation', {
        queryParameters
    })
};
