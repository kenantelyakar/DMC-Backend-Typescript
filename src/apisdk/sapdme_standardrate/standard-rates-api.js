"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardRatesApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'StandardRatesApi'.
 * This API is part of the 'sapdme_standardrate' service.
 */
exports.StandardRatesApi = {
    /**
     * Retrieves Standard Rates for a given plant based on a Resource or Workcenter.
     * @param queryParameters - Object containing the following keys: plant, resource, workcenter.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getV1StandardRatesByResourceOrWorkCenter: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/standardRatesByResourceOrWorkCenter', {
        queryParameters
    }),
    /**
     * Creates standard rates provided in the request.
     * @param body - The request for creating standard rates
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createV1StandardRates: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/standardRates', {
        body
    }),
    /**
     * The request to update the standard rate.
     * @param body - The request for updating standard rates
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateV1StandardRates: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/v1/standardRates', {
        body
    }),
    /**
     * The request to delete the standard rate.
     * @param body - The request for deleting standard rates
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteV1StandardRates: (body) => new openapi_1.OpenApiRequestBuilder('delete', '/v1/standardRates', {
        body
    })
};
