"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynchronizeInspectionSingleResultsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'SynchronizeInspectionSingleResultsApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
exports.SynchronizeInspectionSingleResultsApi = {
    /**
     * Synchronizes inspection single results recorded in SAP Digital Manufacturing back to integrated ERP system for all characteristics under an inspection operation of a given inspection lot.
     * @param inspectionLot - The inspection lot for which the single results are synchronized
     * @param inspectionOperation - The inspection operation/activity for which the single results are synchronized
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    syncSingleResults2ErpUsingPost1: (inspectionLot, inspectionOperation, body) => new openapi_1.OpenApiRequestBuilder('post', '/lots/{inspectionLot}/operations/{inspectionOperation}/results/recordInERP', {
        pathParameters: { inspectionLot, inspectionOperation },
        body
    })
};
