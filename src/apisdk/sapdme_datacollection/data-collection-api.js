"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCollectionApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'DataCollectionApi'.
 * This API is part of the 'sapdme_datacollection' service.
 */
exports.DataCollectionApi = {
    /**
     * This endpoint can be called to log values for data collection parameters against an SFC at a given operation, resource and location.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    logDataCollectionUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/log', {
        body
    }),
    /**
     * Returns all the previously collected parameter data for given SFC(s) at the given operation and resource.
     * @param queryParameters - Object containing the following keys: dcGroup.name, dcGroup.version, operation.name, operation.version, parameterName, plant, resource, sfcs.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getLoggedSfcDataUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/parameters', {
        queryParameters
    }),
    /**
     * Returns a data collection group for a given plant, and optionally for a given version. If no version is specified, then the endpoint returns the latest version of the data collection group.
     * @param queryParameters - Object containing the following keys: group, plant, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getDataCollectionGroupsUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/groups', {
        queryParameters
    }),
    /**
     * Updates the data collection group. Before you call this endpoint, provide the value for “modifiedDataTime” parameter. The value is obtained from the get response.
     * @param body - Data Collection Group Update
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateDataCollectionGroup: (body) => new openapi_1.OpenApiRequestBuilder('put', '/groups', {
        body
    }),
    /**
     * Creates a new data collection group for processing product related data.
     * @param body - Data Collection Group Create
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createDataCollectionGroup: (body) => new openapi_1.OpenApiRequestBuilder('post', '/groups', {
        body
    }),
    /**
     * Deletes a given data collection group for a given plant and version.
     * @param queryParameters - Object containing the following keys: group, plant, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteDataCollectionGroup: (queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/groups', {
        queryParameters
    }),
    /**
     * This endpoint can be called to obtain a list of data collection groups in effect for an SFC in order to collect data against.
     * @param queryParameters - Object containing the following keys: operation, plant, resource, sfc, stepId, workCenter.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findDataCollectionGroupsUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sfc/groups', {
        queryParameters
    }),
    /**
     *  Retrieves parameters of SFCs based on the input filters. You can provide either SFCs or startDateTime and endDateTime.
     * @param queryParameters - Object containing the following keys: dcGroup.name, dcGroup.version, operation.name, operation.version, parameterName, plant, resource, sfcs, pageNumber, pageSize, startDateTime, endDateTime.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getLoggedMeasuresUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/measurements', {
        queryParameters
    })
};
