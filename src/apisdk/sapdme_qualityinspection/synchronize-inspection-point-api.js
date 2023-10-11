"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynchronizeInspectionPointApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'SynchronizeInspectionPointApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
exports.SynchronizeInspectionPointApi = {
    /**
     * Synchronizes the created inspection point to the integrated ERP system for an inspection operation of a given inspection lot
     * @param inspectionLot - The inspection lot for which the inspection point is synchronized
     * @param inspectionOperation - The inspection operation/activity for which the inspection point is synchronized
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    syncInspectionPoint2ErpUsingPost1: (inspectionLot, inspectionOperation, body) => new openapi_1.OpenApiRequestBuilder('post', '/lots/{inspectionLot}/operations/{inspectionOperation}/points/createInERP', {
        pathParameters: { inspectionLot, inspectionOperation },
        body
    })
};
