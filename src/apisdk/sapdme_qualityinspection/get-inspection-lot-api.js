"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInspectionLotApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'GetInspectionLotApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
exports.GetInspectionLotApi = {
    /**
     * Get inspection lot information for a given inspection lot.
     * @param inspectionLot - The inspection lot for which you want to retrieve inspection information
     * @param queryParameters - Object containing the following keys: plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getInspectionLotUsingGet1: (inspectionLot, queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/lots/{inspectionLot}', {
        pathParameters: { inspectionLot },
        queryParameters
    })
};
