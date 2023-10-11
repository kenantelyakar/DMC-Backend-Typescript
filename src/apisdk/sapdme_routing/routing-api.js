"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'RoutingApi'.
 * This API is part of the 'sapdme_routing' service.
 */
exports.RoutingApi = {
    /**
     * This endpoint can be called to find a routing by search parameters. The required parameters are plant, routing name, and type. The version is optional. If a version is not present, the current routing version will be returned.
     * @param queryParameters - Object containing the following keys: plant, routing, type, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findRoutingByPlantAndNameAndTypeUsingGet1: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/routings', {
        queryParameters
    }),
    /**
     * Updates a list of routings for the given plant.
     * @param body - The list of routings to update.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateRoutingsPut1: (body) => new openapi_1.OpenApiRequestBuilder('put', '/routings', {
        body
    }),
    /**
     * Creates a list of routings for the given plant.
     * @param body - The list of routings to create.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createRoutingsPost1: (body) => new openapi_1.OpenApiRequestBuilder('post', '/routings', {
        body
    }),
    /**
     * Deletes a routing by plant, routing name, version, and type.
     * @param queryParameters - Object containing the following keys: plant, routing, version, type.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteRoutingDelete1: (queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/routings', {
        queryParameters
    })
};
