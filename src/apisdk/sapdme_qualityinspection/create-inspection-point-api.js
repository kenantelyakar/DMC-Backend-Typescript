"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInspectionPointApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'CreateInspectionPointApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
exports.CreateInspectionPointApi = {
    /**
     * Create an inspection point for a given inspection operation of an inspection lot. The inspection point is created in SAP Digital Manufacturing only and is not synchronized to integrated ERP systems. /nThe prerequisites of using the API is that you have configured inspection points in the Configure Inspection Points app in SAP Digital Manufacturing. This service is applicable to process orders and order-based production orders in integration with SAP S/4HANA.
     * @param inspectionLot - The inspection lot for which the inspection point is created
     * @param inspectionOperation - The inspection operation/activity for which the inspection point is created
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createInspectionPointUsingPost1: (inspectionLot, inspectionOperation, body) => new openapi_1.OpenApiRequestBuilder('post', '/lots/{inspectionLot}/operations/{inspectionOperation}/points', {
        pathParameters: { inspectionLot, inspectionOperation },
        body
    })
};
