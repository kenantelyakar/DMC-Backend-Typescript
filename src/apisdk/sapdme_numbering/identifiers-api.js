"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifiersApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'IdentifiersApi'.
 * This API is part of the 'sapdme_numbering' service.
 */
exports.IdentifiersApi = {
    /**
     * Create identifiers for business objects upon specified events at a plant.
     * @param body - Request object to create identifiers.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createIdentifiers: (body) => new openapi_1.OpenApiRequestBuilder('post', '/identifiers', {
        body
    })
};
