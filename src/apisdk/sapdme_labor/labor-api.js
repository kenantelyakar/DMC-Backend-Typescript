"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaborApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'LaborApi'.
 * This API is part of the 'sapdme_labor' service.
 */
exports.LaborApi = {
    /**
     * Retrieves the shift assignments including non-availability of assigned labors to shop floor supervisors of a plant  for a date range. An additional user filter is provided to retrieve shift plans specific to a supervisor.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getLaborShiftPlansUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/laborshiftplans', {
        body
    })
};
