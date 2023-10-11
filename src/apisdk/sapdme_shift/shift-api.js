"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ShiftApi'.
 * This API is part of the 'sapdme_shift' service.
 */
exports.ShiftApi = {
    /**
     * Searches for a shift for a given plant and returns the details for the same
     * @param queryParameters - Object containing the following keys: plant, shift.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/shifts', {
        queryParameters
    }),
    /**
     * Creates a shift for a given plant
     * @param body - The Shift to create
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/shifts', {
        body
    }),
    /**
     * Updates a shift for a given plant
     * @param body - The shift to update.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateUsingPatch: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/shifts', {
        body
    }),
    /**
     * Removes a shift for a given plant
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteUsingDelete: (body) => new openapi_1.OpenApiRequestBuilder('delete', '/shifts', {
        body
    })
};
