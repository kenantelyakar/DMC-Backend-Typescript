"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOMApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'BOMApi'.
 * This API is part of the 'sapdme_bom' service.
 */
exports.BOMApi = {
    /**
     * Finds a BOM by plant, name and type.
     * @param queryParameters - Object containing the following keys: bom, plant, type, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findBomByPlantAndNameAndTypeUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/boms', {
        queryParameters
    }),
    /**
     * Creates a list of BOMs.
     * @param body - List of components to create
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/boms', {
        body
    }),
    /**
     * Updates a list of objects. Every material to update must have bom, plant, version, type fields specified. Only fields to update can be specified. Every unspecified field will remain unchanged.
     * @param body - List of BOMs to update.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateUsingPatch: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/boms', {
        body
    }),
    /**
     * Deletes a BOM by plant, name, version, and type.
     * @param queryParameters - Object containing the following keys: bom, bomType, plant, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteUsingDelete: (queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/boms', {
        queryParameters
    })
};
