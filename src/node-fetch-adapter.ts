import fetch, { Response } from 'node-fetch';
import {
    AnyMethodConfig,
    ApiResponse,
    ClientAdapter,
    ConnectionConfig,
    ConnectionError,
    EndpointConfigContextType,
    EndpointFunctionArgument,
    EndpointFunctionReturnValue,
    EndpointReturnType
} from 'ts-api-client-generator';

import {
    defaultConfig,
    NodeFetchAdapterConfig
} from './config';
import { getFetchParameters } from './fetch-parameters';

export default class NodeFetchAdapter<TContext> extends ClientAdapter<Response, TContext> {
    public adapterConfig: NodeFetchAdapterConfig<TContext>;

    constructor(
        adapterConfig?: NodeFetchAdapterConfig<TContext>
    ) {
        super(adapterConfig);
        this.adapterConfig = adapterConfig == null
            ? defaultConfig
            : { ...defaultConfig, ...adapterConfig };
    }

    // eslint-disable-next-line class-methods-use-this
    public async makeRequest<TMethod extends AnyMethodConfig>(
        functionArgument: EndpointFunctionArgument<TMethod> | undefined,
        methodConfig: TMethod,
        path: string,
        connectionConfig: ConnectionConfig
    ): EndpointFunctionReturnValue<TMethod, Response> {
        const { url, init } = getFetchParameters(
            functionArgument,
            methodConfig,
            path,
            connectionConfig,
            this.adapterConfig
        );

        const response = await fetch(url, init);

        if (response.ok) {
            return new ApiResponse<EndpointReturnType<TMethod>, EndpointConfigContextType<TMethod>, Response>(
                response,
                /* @ts-ignore */
                functionArgument?.transformResponse ?? this.adapterConfig.transformResponse,
                methodConfig.context
            );
        }

        throw new ConnectionError(
            response,
            `Connection error: ${response.status} ${response.statusText}. ${response.url}`
        );
    }
}