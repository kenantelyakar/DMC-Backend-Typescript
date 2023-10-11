"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetpointGroupMaintenanceAPIEndpointsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'SetpointGroupMaintenanceAPIEndpointsApi'.
 * This API is part of the 'sapdme_setpoint_v2' service.
 */
exports.SetpointGroupMaintenanceAPIEndpointsApi = {
    /**
     * This operation is a query that accepts group names and matches them starting with the specified string. The version, group names, and status must match exactly.
     * @param queryParameters - Object containing the following keys: $top, plant, setpointgroup, $skip, status, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    geSetPointGroupsUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/groups', {
        queryParameters
    }),
    /**
     * This operation creates a Setpoint Group with its parameters/indicators, contexts, and custom values.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createSetPointGroupUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/groups', {
        body
    }),
    /**
     * If the Setpoint Group is marked as used in production, it cannot be edited. Any optional values that are not specified in the request will be retained. If any child collections are modified, they will be replaced entirely.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    modifySetPointGroupUsingPatch: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/groups', {
        body
    }),
    /**
     * If the Setpoint Group is marked as used in production, it cannot be deleted.
     * @param queryParameters - Object containing the following keys: plant, setpointgroup, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteSetPointGroupUsingDelete: (queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/groups', {
        queryParameters
    })
};
