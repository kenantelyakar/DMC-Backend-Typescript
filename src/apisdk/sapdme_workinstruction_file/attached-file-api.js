"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachedFileApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'AttachedFileApi'.
 * This API is part of the 'sapdme_workinstruction_file' service.
 */
exports.AttachedFileApi = {
    /**
     * This API is called to download file content by using the provided external URL.
     * @param queryParameters - Object containing the following keys: externalFileUrl.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    downloadFileGet1: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/file', {
        queryParameters
    }),
    /**
     * This API is called to upload a file. The external URL of the uploaded file can be used during the creation of work instruction attachments.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    uploadFileUsingPost1: (body) => new openapi_1.OpenApiRequestBuilder('post', '/file', {
        body
    })
};
