"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceReasonCodeApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ResourceReasonCodeApi'.
 * This API is part of the 'sapdme_oee_resourcereasoncode' service.
 */
exports.ResourceReasonCodeApi = {
    /**
     * Retrieves resource reason code for the provided machine code and resource.
     * @param queryParameters - Object containing the following keys: plant, resource, machineCode.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getV1ResourceReasonCodes: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/resourceReasonCodes', {
        queryParameters
    })
};
