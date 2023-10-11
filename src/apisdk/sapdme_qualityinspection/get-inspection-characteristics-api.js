"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInspectionCharacteristicsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'GetInspectionCharacteristicsApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
exports.GetInspectionCharacteristicsApi = {
    /**
     * Get all the inspection characteristics for a specific inspection operation of an inspection lot.
     * @param inspectionLot - The inspection lot for which you want to retrieve inspection characteristics.
     * @param inspectionOperation - The inspection operation/activity number
     * @param queryParameters - Object containing the following keys: plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getInspectionCharacteristicsUsingGet1: (inspectionLot, inspectionOperation, queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/lots/{inspectionLot}/operations/{inspectionOperation}/characteristics', {
        pathParameters: { inspectionLot, inspectionOperation },
        queryParameters
    })
};
