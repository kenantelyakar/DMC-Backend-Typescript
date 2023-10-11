"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionOperatorDashboardApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ProductionOperatorDashboardApi'.
 * This API is part of the 'sapdme_pod' service.
 */
exports.ProductionOperatorDashboardApi = {
    /**
     * This end point creates a new a POD with the given POD identity and configuration. The configuration must be a string representing a valid json.
     * @param body - configRequest
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createPodConfigurationUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/configurations', {
        body
    }),
    /**
     * The end point retrieves a POD configuration and  saves it to a local file system. If the call is made directly by supported browsers, the browser will prompt for a local file selection, otherwise a the configuration is returned directly as the output.
     * @param queryParameters - Object containing the following keys: plant, podId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    exportPodUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/export', {
        queryParameters
    }),
    /**
     * The body of this call must conform to the requirements of HTTP form-data format.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    importPodUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/import', {
        body
    })
};
