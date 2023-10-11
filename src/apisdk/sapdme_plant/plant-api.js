"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'PlantApi'.
 * This API is part of the 'sapdme_plant' service.
 */
exports.PlantApi = {
    /**
     * Finds all plants or or specific plant by name.
     * @param queryParameters - Object containing the following keys: plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getPlantUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/plants', {
        queryParameters
    })
};
