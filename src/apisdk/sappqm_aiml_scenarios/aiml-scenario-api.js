"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIMLScenarioApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'AIMLScenarioApi'.
 * This API is part of the 'sappqm_aiml_scenarios' service.
 */
exports.AIMLScenarioApi = {
    /**
     * Retrieves the active AI/ML scenarios for provided input.
     * @param queryParameters - Object containing the following keys: deploymentType, material, operation, plant, resource, routing, sfc.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getActiveAiMlScenariosUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/active-scenarios', {
        queryParameters
    }),
    /**
     * Download a file uploaded for an AI/ML scenario for a given scenario id and version.
     * @param fileName - File Name
     * @param id - Scenario ID
     * @param version - Scenario Version
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    downloadAiMlScenarioFileUsingGet: (fileName, id, version) => new openapi_1.OpenApiRequestBuilder('get', '/scenario/{id}/version/{version}/file/{fileName}', {
        pathParameters: { fileName, id, version }
    })
};
