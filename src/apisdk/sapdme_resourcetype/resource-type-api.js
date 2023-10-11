"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceTypeApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ResourceTypeApi'.
 * This API is part of the 'sapdme_resourcetype' service.
 */
exports.ResourceTypeApi = {
    /**
     * Finds a resource type containing resources by plant and name
     * @param queryParameters - Object containing the following keys: plant, resourceType.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/resourcetypes', {
        queryParameters
    }),
    /**
     * Creates a resource type with associated resources
     * @param body - resourceType
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/resourcetypes', {
        body
    }),
    /**
     * Updates a resource type for a given plant
     * @param body - resourceType
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateUsingPatch: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/resourcetypes', {
        body
    }),
    /**
     * Removes the resource type for a given plant.
     * @param body - resourceType
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteUsingDelete: (body) => new openapi_1.OpenApiRequestBuilder('delete', '/resourcetypes', {
        body
    })
};
