"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLotApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'ProcessLotApi'.
 * This API is part of the 'sapdme_processlot' service.
 */
exports.ProcessLotApi = {
    /**
     * This endpoint can be called to obtain a single Process Lot. As a search parameters it uses Plant and Process Lot Number.
     * @param queryParameters - Object containing the following keys: processLot, plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    findProcessLotByPlantAndNumberUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/processLot', {
        queryParameters
    }),
    /**
     * This endpoint can be called to create a new Process Lot. The required parameters are Plant and Process Lot Number. Process Lot Members are optional.
     * @param body - Process Lot body
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    createProcessLotUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/processLot', {
        body
    }),
    /**
     * This endpoint can be called to delete the Process Lot without Members. As parameters it uses Plant and Process Lot Number.
     * @param queryParameters - Object containing the following keys: processLot, plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteProcessLotUsingDelete: (queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/processLot', {
        queryParameters
    }),
    /**
     * This endpoint can be called to add Members of the existing Process Lot. The required parameters are Plant, Process Lot Number, Members, and the Modified Date and Time.
     * @param body - Process Lot body
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    addMembersUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/processLot/members', {
        body
    }),
    /**
     * This endpoint can be called to remove all the Members of the Process Lot. As parameters it uses Plant and Process Lot Number.
     * @param queryParameters - Object containing the following keys: processLot, plant.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteAllMembersByPlantAndNumberUsingDelete: (queryParameters) => new openapi_1.OpenApiRequestBuilder('delete', '/processLot/members', {
        queryParameters
    }),
    /**
     * This endpoint can be called to remove Members of the Process Lot. As parameters it uses Plant, Process Lot Number and list of Members.
     * @param body - Process Lot body
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    deleteMembersByPlantAndNumberUsingPost: (body) => new openapi_1.OpenApiRequestBuilder('post', '/processLot/removeMembers', {
        body
    })
};
