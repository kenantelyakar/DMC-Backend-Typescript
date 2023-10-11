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
 * This API is part of the 'sapdme_processorder' service.
 */
exports.ActivityConfirmationApi = {
    /**
     * Confirms activities at a phase of an order. Be aware that the API is deprecated, and will be decommissioned and retired from production in a few releases. It's recommended to use the new successor API <a href=https://api.sap.com/api/sapdme_activityConfirmation/resource>/v1/confirm</a>.
     * @param body - Request object for activity confirmation.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createV1ActivityConfirm: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/activity/confirm', {
        body
    })
};
