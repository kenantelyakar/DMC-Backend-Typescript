"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonconformanceApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'NonconformanceApi'.
 * This API is part of the 'sapdme_nonconformance' service.
 */
exports.NonconformanceApi = {
    /**
     * Logs a nonconformance for SFCs at a given operation for a given plant.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    logNonConformanceUsingPost1: (body) => new openapi_1.OpenApiRequestBuilder('post', '/log', {
        body
    }),
    /**
     * Check for open nonconformance by the given SFCs.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    checkForOpenNonConformancesUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/checkForOpen', {
        body
    }),
    /**
     * Closes a nonconformance by the given incident ID.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    closeNonConformanceUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/close', {
        body
    }),
    /**
     * Opens a nonconformance by the incident ID.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    openNonconformanceUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/open', {
        body
    }),
    /**
     * Retrieves a nonconformance list for a given plant by various optional parameters.
     * @param queryParameters - Object containing the following keys: operationActivity, plant, resource, routing, routingStepId, sfc.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getNonConformancesUsingGet1: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/nonconformances', {
        queryParameters
    })
};
