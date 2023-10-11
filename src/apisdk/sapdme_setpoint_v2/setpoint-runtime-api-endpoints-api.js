"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetpointRuntimeAPIEndpointsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'SetpointRuntimeAPIEndpointsApi'.
 * This API is part of the 'sapdme_setpoint_v2' service.
 */
exports.SetpointRuntimeAPIEndpointsApi = {
    /**
     * This operation searches for all the released and current version Setpoints that meet the given criteria.
     * @param queryParameters - Object containing the following keys: material.name, material.version, operation.name, operation.version, parameter, plant, resource, setPointGroup, sfcs.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findSetPointsUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/find', {
        queryParameters
    }),
    /**
     * This operation can only be used with Setpoints that have an associated asset. Setpoints without an asset will be skipped, and Setpoints with parameters/indicators that do not correspond to an actual machine indicator will fail.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createWrite: (body) => new openapi_1.OpenApiRequestBuilder('post', '/write', {
        body
    })
};
