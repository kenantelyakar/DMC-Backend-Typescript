"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InspectionLogApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'InspectionLogApi'.
 * This API is part of the 'sappqm_aiml_scenarios' service.
 */
exports.InspectionLogApi = {
    /**
     * Provides all the inspection logs (images, predictions, and operator actions) for a SFC.
     * @param queryParameters - Object containing the following keys: fileID, fromDate, toDate, inspectionViewName, loggedNCCode, material, operation, plant, resource, routing, scenarioID, scenarioVersion, sfc, source.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getInspectionStateUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/inspectionLog', {
        queryParameters
    }),
    /**
     * Logs the image of the SFC, predictions by the AI/ML model and operations( Log NCS and mark as conformant/ nonconformant ) performed by the operator.
     * @param body - Plant and SFC are mandatory fields in the request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    saveInspectionStateUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/inspectionLog', {
        body
    }),
    /**
     * Provides all the inspection logs (images, predictions, and operator actions) for a SFC.
     * @param queryParameters - Object containing the following keys: fileID, fromDate, toDate, inspectionViewName, loggedNCCode, material, operation, plant, resource, routing, scenarioID, scenarioVersion, sfc, skip, source, top.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getInspectionLogsForContextUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/aiml/v1/inspectionLogsForContext', {
        queryParameters
    })
};
