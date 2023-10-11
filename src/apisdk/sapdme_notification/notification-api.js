"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'NotificationApi'.
 * This API is part of the 'sapdme_notification' service.
 */
exports.NotificationApi = {
    /**
     * Send a custom notification to subscribing custom POD plugins. The notification will be routed to any custom plugin that has subscribed to the given event and subscription values. Note that this API cannot send notifications for SAP internal events, such as SFC Start. See the POD Plugin Developer's Guide for details.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createSend: (body) => new openapi_1.OpenApiRequestBuilder('post', '/send', {
        body
    })
};
