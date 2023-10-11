"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageLocationsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'StorageLocationsApi'.
 * This API is part of the 'sapdme_inventory' service.
 */
exports.StorageLocationsApi = {
    /**
     * Retrieves various types of storage locations for a given plant. You can retrieve storage locations of a particular type, or a specific storage location by its name.
     * @param queryParameters - Object containing the following keys: isCentralStorageLocation, isEWMManagedStorageLocation, isProductionStorageLocation, page, plant, size, sort, storageLocation.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getStorageLocationsUsingGet2: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/storageLocations', {
        queryParameters
    })
};
