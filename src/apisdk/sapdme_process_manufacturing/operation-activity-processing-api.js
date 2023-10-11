"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationActivityProcessingApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'OperationActivityProcessingApi'.
 * This API is part of the 'sapdme_process_manufacturing' service.
 */
exports.OperationActivityProcessingApi = {
    /**
     * Starts an Operation activity at the default or alternate resource of a work center at user-specified time or in real time.
     * @param body - Request object to start an Operation activity.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createOperationActivityStart: (body) => new openapi_1.OpenApiRequestBuilder('post', '/operationActivity/start', {
        body
    }),
    /**
     * Completes an operation activity at the default or alternate resource of a work center at user-specified time or in real time.
     * @param body - Request object to complete an Operation activity.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createOperationActivityComplete: (body) => new openapi_1.OpenApiRequestBuilder('post', '/operationActivity/complete', {
        body
    })
};
