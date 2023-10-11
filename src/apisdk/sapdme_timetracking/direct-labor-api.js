"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectLaborApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'DirectLaborApi'.
 * This API is part of the 'sapdme_timetracking' service.
 */
exports.DirectLaborApi = {
    /**
     * Create a start event to start labor tracking for a user working on an SFC.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    directLaborStart: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/direct-labor/start', {
        body
    }),
    /**
     * Create a stop event to stop labor tracking for a user working on an SFC.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    directLaborStop: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/direct-labor/stop', {
        body
    }),
    /**
     * Create a time record to track direct labor for a user working on an SFC.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    directLaborCreate: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/direct-labor', {
        body
    }),
    /**
     * Update a defined direct labor time record for a user.
     * @param id - The ID of the time record
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    directLaborEdit: (id, body) => new openapi_1.OpenApiRequestBuilder('patch', '/v1/direct-labor/{id}', {
        pathParameters: { id },
        body
    })
};
