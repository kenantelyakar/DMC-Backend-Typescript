"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsIssueApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'GoodsIssueApi'.
 * This API is part of the 'sapdme_processorder' service.
 */
exports.GoodsIssueApi = {
    /**
     * Performs goods issue for a BOM or non-BOM component.
     * @param body - Request object to perform goods issue.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createV1Goodsissue: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/goodsissue', {
        body
    })
};
