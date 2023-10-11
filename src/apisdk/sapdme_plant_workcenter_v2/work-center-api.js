"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkCenterApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'WorkCenterApi'.
 * This API is part of the 'sapdme_plant_workcenter_v2' service.
 */
exports.WorkCenterApi = {
    /**
     * Searches for a work center for a given plant and returns the details for the same.
     * @param queryParameters - Object containing the following keys: plant, workCenter, assignedUser, resourceMembers.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/workcenters', {
        queryParameters
    }),
    /**
     * Creates a work center for a given plant.
     * @param body - The work center to create
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/workcenters', {
        body
    }),
    /**
     * Updates a work center for a given plant.
     * @param body - The work center to update
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateUsingPatch: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/workcenters', {
        body
    }),
    /**
     * Removes a work center for a given plant
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteUsingDelete: (body) => new openapi_1.OpenApiRequestBuilder('delete', '/workcenters', {
        body
    })
};
