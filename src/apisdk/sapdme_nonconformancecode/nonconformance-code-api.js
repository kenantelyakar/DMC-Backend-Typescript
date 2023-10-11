"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonconformanceCodeApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'NonconformanceCodeApi'.
 * This API is part of the 'sapdme_nonconformancecode' service.
 */
exports.NonconformanceCodeApi = {
    /**
     * Reads a nonconformance code for a given plant and returns the details for the same
     * @param queryParameters - Object containing the following keys: code, plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readNonConformanceCodesUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/nonconformancecodes', {
        queryParameters
    }),
    /**
     * Creates a nonconformance code for a given plant
     * @param body - nonConformanceCode
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/nonconformancecodes', {
        body
    }),
    /**
     * Updates a nonconformance code for a given plant
     * @param body - The nonconformance code to update.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateUsingPatch: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/nonconformancecodes', {
        body
    }),
    /**
     * Deletes a nonconformance code for a given plant
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteUsingDelete: (body) => new openapi_1.OpenApiRequestBuilder('delete', '/nonconformancecodes', {
        body
    })
};
