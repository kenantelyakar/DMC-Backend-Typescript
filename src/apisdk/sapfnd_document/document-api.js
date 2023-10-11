"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'DocumentApi'.
 * This API is part of the 'sapfnd_document' service.
 */
exports.DocumentApi = {
    /**
     * Retrieves a list of documents by name.
     * @param queryParameters - Object containing the following keys: document.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getDocumentsUsingGet1: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/documents', {
        queryParameters
    }),
    /**
     * Prints a given document on a given printer. Data for the document is retrieved from an SFC or order provided in parameters.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    printDocumentUsingPost1: (body) => new openapi_1.OpenApiRequestBuilder('post', '/print', {
        body
    })
};
