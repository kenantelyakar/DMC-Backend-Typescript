"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'MaterialApi'.
 * This API is part of the 'sapdme_material' service.
 */
exports.MaterialApi = {
    /**
     * Finds a material by plant, name, and version.
     * @param queryParameters - Object containing the following keys: material, plant, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findMaterialByPlantAndNameUsingGet1: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/materials', {
        queryParameters
    }),
    /**
     * Creates a list of materials for given plants.
     * @param body - List of materials to create.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createUsingPost4: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/materials', {
        body
    }),
    /**
     * Every material that will be updated must have the material, plant, and version fields specified. Only the specified fields will be updated. Any unspecified fields will remain unchanged.
     * @param body - List of materials to update
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateUsingPatch4: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/v1/materials', {
        body
    }),
    /**
     * Deletes a material by plant, name, and version.
     * @param queryParameters - Object containing the following keys: material, plant, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteUsingDelete4: (queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/v1/materials', {
        queryParameters
    }),
    /**
     * Searches materials by plant; or by plant and material; or by plant, material, and version.
     * @param queryParameters - Object containing the following keys: plant, material, version, page, size.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findMaterialsByPlantUsingGet2: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v2/materials', {
        queryParameters
    })
};
