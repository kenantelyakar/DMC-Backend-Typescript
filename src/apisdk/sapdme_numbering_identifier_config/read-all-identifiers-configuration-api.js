"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAllIdentifiersConfigurationApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ReadAllIdentifiersConfigurationApi'.
 * This API is part of the 'sapdme_numbering_identifier_config' service.
 */
exports.ReadAllIdentifiersConfigurationApi = {
    /**
     * With this operation, you can retrieve all identifiers configurations for the specified event at a plant. You can define the event types like SFC Release, SFC Serialize etc.
     * @param queryParameters - Object containing the following keys: plant, event.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getMaterialIdentifierConfigurations: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/materialIdentifierConfigurations', {
        queryParameters
    })
};
