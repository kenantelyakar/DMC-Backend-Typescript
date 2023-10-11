"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkInstructionsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'WorkInstructionsApi'.
 * This API is part of the 'sapdme_workinstruction' service.
 */
exports.WorkInstructionsApi = {
    /**
     * Retrieves the list of work instructions based on the passed context. Reference to at least one of the objects should be passed apart from the plant. API returns empty list if only plant is provided. When sfc is provided as a parameter then list of attached work instructions is determined based on current sfc state (similar to what POD does).
     * @param queryParameters - Object containing the following keys: operationactivity, plant, resource, routing, routingstepid, routingtype, sfc.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getV1Attachedworkinstructions: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/attachedworkinstructions', {
        queryParameters
    }),
    /**
     * Reads a work instruction based on the passed key fields - plant, work instruction name, and work instruction version.
     * @param queryParameters - Object containing the following keys: plant, workinstruction, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getV1Workinstructions: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/workinstructions', {
        queryParameters
    }),
    /**
     * Updates a work instruction which can be attached to other objects like a material, resource, order and work center.
     * @param body - The list of work instructions to update.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateV1Workinstructions: (body) => new openapi_1.OpenApiRequestBuilder('put', '/v1/workinstructions', {
        body
    }),
    /**
     * Creates a work instruction which can be attached to other objects like Material, Resource, Order and Work center etc.
     * @param body - Request object to create work instruction
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createV1Workinstructions: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/workinstructions', {
        body
    }),
    /**
     * Deletes a work instruction based on the key fields passed, such as plant, version and work instruction name.
     * @param queryParameters - Object containing the following keys: plant, workinstruction, version.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteV1Workinstructions: (queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/v1/workinstructions', {
        queryParameters
    }),
    /**
     * Creates a work instruction which can be attached to other objects like a material, resource, order and work center.
     * @param body - The list of work instructions to create.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createV2Workinstructions: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v2/workinstructions', {
        body
    })
};
