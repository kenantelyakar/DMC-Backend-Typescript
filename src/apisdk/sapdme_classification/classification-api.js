"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificationApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ClassificationApi'.
 * This API is part of the 'sapdme_classification' service.
 */
exports.ClassificationApi = {
    /**
     * Retrieve a list of classes and characteristics by multiple material, class type and classes.
     * @param body - Object represents the request for getAllAssignedObjects.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createRead: (body) => new openapi_1.OpenApiRequestBuilder('post', '/read', {
        body
    })
};
