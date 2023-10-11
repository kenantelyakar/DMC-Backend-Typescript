"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialGroupApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'MaterialGroupApi'.
 * This API is part of the 'sapdme_materialgroup' service.
 */
exports.MaterialGroupApi = {
    /**
     * Finds a material group by plant and name.
     * @param queryParameters - Object containing the following keys: plant, materialGroup.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findMaterialGroupsByPlantAndNameUsingGet1: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/materialGroups', {
        queryParameters
    }),
    /**
     * Creates a list of material groups for the given plant.
     * @param body - The list of material groups to create.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createMaterialGroupUsingPost1: (body) => new openapi_1.OpenApiRequestBuilder('post', '/materialGroups', {
        body
    }),
    /**
     * Updates a list of material groups. Every material group that will be updated must have the material group and plant fields specified. Only the specified fields will be updated. Any unspecified fields will remain unchanged.
     * @param body - List of material groups to update
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateMaterialGroupUsingPatch1: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/materialGroups', {
        body
    }),
    /**
     * Deletes a material group by plant and name.
     * @param queryParameters - Object containing the following keys: plant, materialGroup.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteMaterialGroupUsingDelete1: (queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/materialGroups', {
        queryParameters
    })
};
