"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssemblyApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'AssemblyApi'.
 * This API is part of the 'sapdme_assembly' service.
 */
exports.AssemblyApi = {
    /**
     * Auto assembles components on the given operation and resource.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    autoAssembleComponentsUsingPost1: (body) => new openapi_1.OpenApiRequestBuilder('post', '/autoAssemble', {
        body
    }),
    /**
     * Retrieves list of all the planned BOM components which can be assembled for the given SFC and operation activity.
     * @param queryParameters - Object containing the following keys: plant, sfc, operationActivity, assemblyDataTypes, requireCustomData.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getPlannedComponents: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/plannedComponents', {
        queryParameters
    }),
    /**
     * Checks the resource bin component quantity is enough to make time based auto assembly.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createComponentsQuantityCheck: (body) => new openapi_1.OpenApiRequestBuilder('post', '/components/quantity/check', {
        body
    }),
    /**
     * Returns the components already assembled with data collected during assembly.
     * @param queryParameters - Object containing the following keys: plant, sfc, operationActivity, assemblyDataTypes.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getAssembledComponents: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/assembledComponents', {
        queryParameters
    }),
    /**
     * Assembles planned BOM component.
     * @param body - Request to add a component.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createAssembledComponents: (body) => new openapi_1.OpenApiRequestBuilder('post', '/assembledComponents', {
        body
    }),
    /**
     * Removes assembled BOM component.
     * @param body - Request to remove a added component.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteAssembledComponents: (body) => new openapi_1.OpenApiRequestBuilder('delete', '/assembledComponents', {
        body
    })
};
