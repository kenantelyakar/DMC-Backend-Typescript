"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleResultsRecordingApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'SingleResultsRecordingApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
exports.SingleResultsRecordingApi = {
    /**
     * Record single-value results for an inspection characteristic for a given inspection lot.
     * @param inspectionCharacteristic - The inspection characteristic for the operation
     * @param inspectionLot - The inspection lot for the operation
     * @param inspectionOperation - The operation/activity for which you want to record inspection results
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateSingleResultsUsingPost1: (inspectionCharacteristic, inspectionLot, inspectionOperation, body) => new openapi_1.OpenApiRequestBuilder('post', '/lots/{inspectionLot}/operations/{inspectionOperation}/characteristics/{inspectionCharacteristic}/results', {
        pathParameters: {
            inspectionCharacteristic,
            inspectionLot,
            inspectionOperation
        },
        body
    })
};
