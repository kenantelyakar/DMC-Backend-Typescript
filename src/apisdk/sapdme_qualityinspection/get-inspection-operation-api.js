"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInspectionOperationApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'GetInspectionOperationApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
exports.GetInspectionOperationApi = {
    /**
     * Get inspection operation information for a specific inspection operation of an inspection lot.
     * @param inspectionLot - The inspection lot for which you want to retrieve inspection operation information
     * @param inspectionOperation - The inspection operation/activity number
     * @param queryParameters - Object containing the following keys: plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getInspectionOperationUsingGet1: (inspectionLot, inspectionOperation, queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/lots/{inspectionLot}/operations/{inspectionOperation}', {
        pathParameters: { inspectionLot, inspectionOperation },
        queryParameters
    })
};
