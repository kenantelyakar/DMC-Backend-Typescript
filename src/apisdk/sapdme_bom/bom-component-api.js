"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOMComponentApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'BOMComponentApi'.
 * This API is part of the 'sapdme_bom' service.
 */
exports.BOMComponentApi = {
    /**
     * Creates a list of components for a paeticular BOM and BOM version.
     * @param bom - bom
     * @param version - version
     * @param body - Components to create.
     * @param queryParameters - Object containing the following keys: bomType, plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createBomComponentsUsingPost: (bom, version, body, queryParameters) => new openapi_1.OpenApiRequestBuilder('post', '/boms/{bom}/{version}/components', {
        pathParameters: { bom, version },
        body,
        queryParameters
    }),
    /**
     * Updates a list of objects. Every component to update must have sequence field specified. Only fields to update can be specified. Every unspecified field will remain unchanged.
     * @param bom - bom
     * @param sequence - sequence
     * @param version - version
     * @param body - List of components to update
     * @param queryParameters - Object containing the following keys: bomType, plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateComponentUsingPatch: (bom, sequence, version, body, queryParameters) => new openapi_1.OpenApiRequestBuilder('patch', '/boms/{bom}/{version}/components/{sequence}', {
        pathParameters: { bom, sequence, version },
        body,
        queryParameters
    }),
    /**
     * Deletes a component by sequence.
     * @param bom - bom
     * @param sequence - sequence
     * @param version - version
     * @param queryParameters - Object containing the following keys: bomType, plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteComponentUsingDelete: (bom, sequence, version, queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/boms/{bom}/{version}/components/{sequence}', {
        pathParameters: { bom, sequence, version },
        queryParameters
    })
};
