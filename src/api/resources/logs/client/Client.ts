/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vapi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Logs {
    interface Options {
        environment?: core.Supplier<environments.VapiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Logs {
    constructor(protected readonly _options: Logs.Options) {}

    /**
     * @param {Vapi.LogsGetRequest} request
     * @param {Logs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.logs.get()
     */
    public async get(
        request: Vapi.LogsGetRequest = {},
        requestOptions?: Logs.RequestOptions
    ): Promise<core.Page<Vapi.Log>> {
        const list = async (request: Vapi.LogsGetRequest): Promise<Vapi.LogsPaginatedResponse> => {
            const {
                orgId,
                type: type_,
                assistantId,
                phoneNumberId,
                customerId,
                squadId,
                callId,
                page,
                sortOrder,
                limit,
                createdAtGt,
                createdAtLt,
                createdAtGe,
                createdAtLe,
                updatedAtGt,
                updatedAtLt,
                updatedAtGe,
                updatedAtLe,
            } = request;
            const _queryParams: Record<string, string | string[] | object | object[]> = {};
            if (orgId != null) {
                _queryParams["orgId"] = orgId;
            }
            if (type_ != null) {
                _queryParams["type"] = type_;
            }
            if (assistantId != null) {
                _queryParams["assistantId"] = assistantId;
            }
            if (phoneNumberId != null) {
                _queryParams["phoneNumberId"] = phoneNumberId;
            }
            if (customerId != null) {
                _queryParams["customerId"] = customerId;
            }
            if (squadId != null) {
                _queryParams["squadId"] = squadId;
            }
            if (callId != null) {
                _queryParams["callId"] = callId;
            }
            if (page != null) {
                _queryParams["page"] = page.toString();
            }
            if (sortOrder != null) {
                _queryParams["sortOrder"] = sortOrder;
            }
            if (limit != null) {
                _queryParams["limit"] = limit.toString();
            }
            if (createdAtGt != null) {
                _queryParams["createdAtGt"] = createdAtGt;
            }
            if (createdAtLt != null) {
                _queryParams["createdAtLt"] = createdAtLt;
            }
            if (createdAtGe != null) {
                _queryParams["createdAtGe"] = createdAtGe;
            }
            if (createdAtLe != null) {
                _queryParams["createdAtLe"] = createdAtLe;
            }
            if (updatedAtGt != null) {
                _queryParams["updatedAtGt"] = updatedAtGt;
            }
            if (updatedAtLt != null) {
                _queryParams["updatedAtLt"] = updatedAtLt;
            }
            if (updatedAtGe != null) {
                _queryParams["updatedAtGe"] = updatedAtGe;
            }
            if (updatedAtLe != null) {
                _queryParams["updatedAtLe"] = updatedAtLe;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                    "logs"
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "@vapi/server-sdk",
                    "X-Fern-SDK-Version": "0.0.0-alpha6",
                    "User-Agent": "@vapi/server-sdk/0.0.0-alpha6",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return _response.body as Vapi.LogsPaginatedResponse;
            }
            if (_response.error.reason === "status-code") {
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.VapiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.VapiTimeoutError();
                case "unknown":
                    throw new errors.VapiError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        let _offset = request?.page != null ? request?.page : 1;
        return new core.Pageable<Vapi.LogsPaginatedResponse, Vapi.Log>({
            response: await list(request),
            hasNextPage: (response) => (response?.results ?? []).length > 0,
            getItems: (response) => response?.results ?? [],
            loadPage: (_response) => {
                _offset += 1;
                return list(core.setObjectProperty(request, "page", _offset));
            },
        });
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
