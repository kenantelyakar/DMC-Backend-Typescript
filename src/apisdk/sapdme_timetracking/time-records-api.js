"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRecordsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'TimeRecordsApi'.
 * This API is part of the 'sapdme_timetracking' service.
 */
exports.TimeRecordsApi = {
    /**
     * Find all time records using various filter parameters. (Note: By default the service doesn't return any deleted time records. However, you can use the 'status' parameter to retrieve deleted records.)
     * @param queryParameters - Object containing the following keys: plant, type, userId, start, end, resource, workCenter, operation, operationVersion, stepId, shopOrder, sfc, status, routing, routingVersion, routingType, standardValue, activity, page, size, sort.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findAllTimeRecords: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/time-records', {
        queryParameters
    }),
    /**
     * Find a time record by providing its ID.
     * @param id - The ID of the time record
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findById: (id) => new openapi_1.OpenApiRequestBuilder('get', '/v1/time-records/{id}', {
        pathParameters: { id }
    }),
    /**
     * Delete a defined time record for a user.
     * @param id - The ID of the time record
     * @param queryParameters - Object containing the following keys: note.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    timeRecordDelete: (id, queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/v1/time-records/{id}', {
        pathParameters: { id },
        queryParameters
    }),
    /**
     * Approve a batch of time records.
     * @param body - List of time record IDs
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    approve: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/time-records/approve', {
        body
    }),
    /**
     * Approve a defined time record for a user.
     * @param id - The ID of the time record
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    approveById: (id) => new openapi_1.OpenApiRequestBuilder('post', '/v1/time-records/approve/{id}', {
        pathParameters: { id }
    })
};
