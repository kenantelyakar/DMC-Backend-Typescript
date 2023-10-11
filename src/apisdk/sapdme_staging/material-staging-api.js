"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialStagingApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'MaterialStagingApi'.
 * This API is part of the 'sapdme_staging' service.
 */
exports.MaterialStagingApi = {
    /**
     * Initiates a staging request to EWM for a given plant. You can post the staging request at order level, or at Shop Floor Control (SFC) level. You can use this API call only if you've enabled MES-driven staging in Extended Warehouse Management integration.
     * @param body - Request paramters to initiate the staging request to Extended Warehouse Management
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    sendStaingRequestUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/staging/stagingRequest', {
        body
    }),
    /**
     * Retrieves all staging requests to Extended Warehouse Management for a given plant. You can fill various parameters to narrow down the results.
     * @param queryParameters - Object containing the following keys: plant, stagingRequestNumber, productionSupplyAreas, stagingRequestItemStatuses, orders, components, operations, maxCreationTime, minCreationTime, maxPlannedDeliveryTime, minPlannedDeliveryTime, page, size, sort.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findStagingRequestsUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/staging/stagingRequests', {
        queryParameters
    })
};
