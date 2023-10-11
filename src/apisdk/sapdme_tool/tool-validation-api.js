"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolValidationApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ToolValidationApi'.
 * This API is part of the 'sapdme_tool' service.
 */
exports.ToolValidationApi = {
    /**
     * Validate loaded tools by checking the alignment between loaded tools and PRT assignments.
     * There are 2 possible validation results: PRT_PASSED, FAILED.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    prtLoadValidationPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/prtLoadValidation', {
        body
    })
};
