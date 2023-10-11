"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardValuesApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'StandardValuesApi'.
 * This API is part of the 'sapdme_standardvalue' service.
 */
exports.StandardValuesApi = {
    /**
     * Retrieves standard values for recipes or routing associated with operation activities.
     * @param queryParameters - Object containing the following keys: plant, workCenter, operationActivity, operationActivityVersion, object, objectType, objectVersion, stepId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getDetails: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/details', {
        queryParameters
    })
};
