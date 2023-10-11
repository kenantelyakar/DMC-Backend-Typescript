"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityConfirmationApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ActivityConfirmationApi'.
 * This API is part of the 'sapdme_activityConfirmation' service.
 */
exports.ActivityConfirmationApi = {
    /**
     * Post activity confirmations for an operation activity, Sfc, order executed at a given workcenter and plant.
     * @param body - Request object to perform activity confirmations.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createConfirm: (body) => new openapi_1.OpenApiRequestBuilder('post', '/confirm', {
        body
    }),
    /**
     * Confirms activities for the parameters provided as input by automatically calculating the standard values. The standard values are calculated based on the elapsed operation time, on a simple prorated basis.
     * @param body - Request object to confirm activities.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createAutoconfirm: (body) => new openapi_1.OpenApiRequestBuilder('post', '/autoconfirm', {
        body
    }),
    /**
     * Retreives the activity confirmation posting summary for the specified operation activity.
     * @param body - Request object to retrieve posting.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getPostingsSummary: (body) => new openapi_1.OpenApiRequestBuilder('get', '/postings/summary', {
        body
    })
};
