/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vapi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Squads {
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

export class Squads {
    constructor(protected readonly _options: Squads.Options) {}

    /**
     * @param {Vapi.SquadsListRequest} request
     * @param {Squads.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.squads.list()
     */
    public async list(
        request: Vapi.SquadsListRequest = {},
        requestOptions?: Squads.RequestOptions
    ): Promise<Vapi.Squad[]> {
        const {
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
                "squad"
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
            return _response.body as Vapi.Squad[];
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
    }

    /**
     * @param {Vapi.CreateSquadDto} request
     * @param {Squads.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.squads.create({
     *         members: [{}]
     *     })
     */
    public async create(request: Vapi.CreateSquadDto, requestOptions?: Squads.RequestOptions): Promise<Vapi.Squad> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                "squad"
            ),
            method: "POST",
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
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Vapi.Squad;
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
    }

    /**
     * @param {string} id
     * @param {Squads.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.squads.get("id")
     */
    public async get(id: string, requestOptions?: Squads.RequestOptions): Promise<Vapi.Squad> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                `squad/${encodeURIComponent(id)}`
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
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Vapi.Squad;
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
    }

    /**
     * @param {string} id
     * @param {Squads.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.squads.delete("id")
     */
    public async delete(id: string, requestOptions?: Squads.RequestOptions): Promise<Vapi.Squad> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                `squad/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
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
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Vapi.Squad;
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
    }

    /**
     * @param {string} id
     * @param {Vapi.UpdateSquadDto} request
     * @param {Squads.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.squads.update("id", {
     *         members: [{}]
     *     })
     */
    public async update(
        id: string,
        request: Vapi.UpdateSquadDto,
        requestOptions?: Squads.RequestOptions
    ): Promise<Vapi.Squad> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                `squad/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
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
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Vapi.Squad;
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
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
