"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageIdentifiersConfigurationApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ManageIdentifiersConfigurationApi'.
 * This API is part of the 'sapdme_numbering_identifier_config' service.
 */
exports.ManageIdentifiersConfigurationApi = {
    /**
     * With this operation, identifiers configuration for business objects upon specified events at a plant can be retrieved.
     * @param queryParameters - Object containing the following keys: plant, id.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getConfig: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/config', {
        queryParameters
    }),
    /**
     * With this operation, identifiers configuration for business objects upon specified events at a plant can be updated.
     * @param body - Request object to update an identifier configuration.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateConfig: (body) => new openapi_1.OpenApiRequestBuilder('put', '/config', {
        body
    }),
    /**
     * With this operation, identifiers configuration for business objects upon specified events at a plant can be created.
     * @param body - Request object to create an identifier configuration.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createConfig: (body) => new openapi_1.OpenApiRequestBuilder('post', '/config', {
        body
    }),
    /**
     * With this operation, identifiers configuration for business objects upon specified events at a plant can be deleted.
     * @param queryParameters - Object containing the following keys: plant, id.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteConfig: (queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/config', {
        queryParameters
    })
};
