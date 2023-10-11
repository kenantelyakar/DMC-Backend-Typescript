"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonconformanceGroupApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'NonconformanceGroupApi'.
 * This API is part of the 'sapdme_nonconformancegroup' service.
 */
exports.NonconformanceGroupApi = {
    /**
     * Reads nonconformance groups by plant and group
     * @param queryParameters - Object containing the following keys: group, plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/nonconformancegroups', {
        queryParameters
    }),
    /**
     * Creates a nonconformance group for a given plant
     * @param body - The Nonconformance group to create
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createUsingPost1: (body) => new openapi_1.OpenApiRequestBuilder('post', '/nonconformancegroups', {
        body
    }),
    /**
     * Updates a nonconformance group for a given plant
     * @param body - The nonconformance group to update.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateUsingPatch1: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/nonconformancegroups', {
        body
    }),
    /**
     * Deletes a nonconformance group for a given plant
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteUsingDelete1: (body) => new openapi_1.OpenApiRequestBuilder('delete', '/nonconformancegroups', {
        body
    })
};
