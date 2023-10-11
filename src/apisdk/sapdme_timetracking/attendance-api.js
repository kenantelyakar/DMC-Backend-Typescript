"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'AttendanceApi'.
 * This API is part of the 'sapdme_timetracking' service.
 */
exports.AttendanceApi = {
    /**
     * Create a start event for attendance to clock in a user.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    attendanceStart: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/attendance/start', {
        body
    }),
    /**
     * Create a stop event for attendance to clock out a user.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    attendanceStop: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/attendance/stop', {
        body
    }),
    /**
     * Create a time record for a user to record attendance.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    attendanceCreate: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/attendance', {
        body
    }),
    /**
     * Update a defined attendance time record for a user.
     * @param id - The ID of the time record
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    attendanceEdit: (id, body) => new openapi_1.OpenApiRequestBuilder('patch', '/v1/attendance/{id}', {
        pathParameters: { id },
        body
    })
};
