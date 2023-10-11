"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OEEApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'OEEApi'.
 * This API is part of the 'sapdmi_vishleshki' service.
 */
exports.OEEApi = {
    /**
     * You can retrieve all the availability downtime losses for the given input parameters.</br> The difference between <i>startDateTime</i> and <i>endDateTime</i> cannot be greater than <b>7 days</b>.<br> The <i>startDateTime</i> and <i>endDateTime</i> cannot be at a later point in time.<br>A maximum of <b>5 Resources</b> can be provided at a time.<br><b>Note: </b>You can provide either parent resource or child resource. If you provide parent resource, data is retrieved based on the parent resource availability calculation described [here](https://help.sap.com/docs/sap-digital-manufacturing/insights/parent-resource-availability-calculation?state=DRAFT).<br><b>All those shifts whose start time lies within the <i>startDateTime</i>  and <i>endDateTime</i> are considered for calculation.
     * @param queryParameters - Object containing the following keys: plant, resources, startDateTime, endDateTime, timeElementType, timeElements.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getDowntimeLosses: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/availabilityLosses', {
        queryParameters
    }),
    /**
     * You can retrieve production summary for the given input parameters.<br> The difference between <i>startDateTime</i> and <i>endDateTime</i> cannot be greater than <b>7 days</b>.<br> The <i>startDateTime</i> and <i>endDateTime</i> cannot be at a later point in time.<br> A maximum of <b>5 Resources</b> can be provided at a time.<br><b>Note: </b>Only parent resource is supported.<br><b>All those shifts whose start time lies within the <i>startDateTime</i>  and <i>endDateTime</i> are considered for calculation</b>.
     * @param queryParameters - Object containing the following keys: plant, resources, startDateTime, endDateTime.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getProductionSummary: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/productionSummary', {
        queryParameters
    }),
    /**
     * You can retrieve all the time element durations for the given input parameters.<br> The difference between <i>startDateTime</i> and <i>endDateTime</i> cannot be greater than <b>7 days</b>.<br> The <i>startDateTime</i> and <i>endDateTime</i> cannot be at a later point in time.<br> A maximum of <b>5 Resources</b> can be provided at a time.<br><b>Note: </b>Only parent resource is supported.<br><b>All those shifts whose start time lies within the <i>startDateTime</i>  and <i>endDateTime</i> are considered for calculation</b>.
     * @param queryParameters - Object containing the following keys: plant, resources, startDateTime, endDateTime, timeElementType.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getTimeBuckets: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/timeElementsByTimeElementType', {
        queryParameters
    }),
    /**
     * You can retrieve all the performance losses for the given input parameters.<br> The difference between <i>startDateTime</i> and <i>endDateTime</i> cannot be greater than <b>7 days</b>.<br> The <i>startDateTime</i> and <i>endDateTime</i> cannot be at a later point in time.<br> A maximum of <b>5 Resources</b> can be provided at a time.<br><b>Note: </b>Only parent resource is supported.<br><b>All those shifts whose start time lies within the <i>startDateTime</i>  and <i>endDateTime</i> are considered for calculation</b>.
     * @param queryParameters - Object containing the following keys: plant, resources, startDateTime, endDateTime, timeElementType.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getPerformanceLosses: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/performanceLosses', {
        queryParameters
    }),
    /**
     * You can retrieve all the speed losses for the given input parameters.</br> The difference between <i>startDateTime</i> and <i>endDateTime</i> cannot be greater than <b>7 days</b>.<br> The <i>startDateTime</i> and <i>endDateTime</i> cannot be at a later point in time.</br><b>All those shifts whose start time lies within the <i>startDateTime</i>  and <i>endDateTime</i> are considered for calculation.</b><br>If no value is provided for the optional <i>type</i> query parameter then both tagged and untagged speed losses are retrieved</b>.<br><b>Note: </b>Only parent resource is supported.
     * @param queryParameters - Object containing the following keys: plant, resource, order, operationActivity, startDateTime, endDateTime, type.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getSpeedLosses: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/speedLosses', {
        queryParameters
    }),
    /**
     * You can retrieve all the quality losses for the given input parameters.<br> The difference between <i>startDateTime</i> and <i>endDateTime</i> cannot be greater than <b>7 days</b>.<br> The <i>startDateTime</i> and <i>endDateTime</i> cannot be at a later point in time.</br><b>All those shifts whose start time lies within the <i>startDateTime</i>  and <i>endDateTime</i> are considered for calculation.</b><br> A maximum of <b>5 Resources</b> can be provided at a time.<br><b>Note: </b>Only parent resource is supported.<br> A maximum of <b>5 Time Elements</b> can be provided at a time</b>.
     * @param queryParameters - Object containing the following keys: plant, resources, startDateTime, endDateTime, timeElementType, timeElements.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getQualityLosses: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/v1/qualityLosses', {
        queryParameters
    })
};
