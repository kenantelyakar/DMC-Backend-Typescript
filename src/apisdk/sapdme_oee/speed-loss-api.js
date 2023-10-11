"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeedLossApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'SpeedLossApi'.
 * This API is part of the 'sapdme_oee' service.
 */
exports.SpeedLossApi = {
    /**
     * Create a new speed loss with Reason Code tagged. You can tag the existing un-tagged speed loss with a reason code for a given duration.
     * @param body - Request object to create speed loss.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createV1SpeedLoss: (body) => new openapi_1.OpenApiRequestBuilder('post', '/v1/speedLoss', {
        body
    })
};
