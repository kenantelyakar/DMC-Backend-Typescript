"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolUsageLoggingApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ToolUsageLoggingApi'.
 * This API is part of the 'sapdme_tool' service.
 */
exports.ToolUsageLoggingApi = {
    /**
     * Enables automatic logging of tool usage for SFCs that have already been started and are not yet done. Only tools specified with automatic logging method would be logged.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    saveToolUsageLogsUsingPost2: (body) => new openapi_1.OpenApiRequestBuilder('post', '/toolUsageLogs', {
        body
    })
};
