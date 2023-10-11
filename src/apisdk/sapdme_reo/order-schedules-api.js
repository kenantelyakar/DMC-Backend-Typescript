"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchedulesApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'OrderSchedulesApi'.
 * This API is part of the 'sapdme_reo' service.
 */
exports.OrderSchedulesApi = {
    /**
     * Retrieve all operations scheduled on a shop floor for a date range.
     * @param body - request
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getShopOrderScheduleUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/shoporderschedules', {
        body
    })
};
