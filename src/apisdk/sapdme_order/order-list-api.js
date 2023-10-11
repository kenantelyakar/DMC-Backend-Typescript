"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderListApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'OrderListApi'.
 * This API is part of the 'sapdme_order' service.
 */
exports.OrderListApi = {
    /**
     * Finds a list of orders for a given plant.
     * @param queryParameters - Object containing the following keys: plant, material, materialVersion, releaseStatuses, executionStatuses, workCenters, order, customerOrder, customer, plannedStartDate, plannedCompletionDate, scheduledStartDate, scheduledCompletionDate, page, size.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getOrdersList: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/orders/list', {
        queryParameters
    })
};
