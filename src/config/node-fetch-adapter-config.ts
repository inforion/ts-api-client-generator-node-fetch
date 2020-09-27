import { Agent } from 'https';
import { Response } from 'node-fetch';
import { ClientAdapterConfig } from 'ts-api-client-generator';

export interface NodeFetchAdapterConfig<TContext> extends ClientAdapterConfig<Response, TContext> {
    agent?: Agent;
}

export type AnyNodeFetchAdapterConfig = NodeFetchAdapterConfig<any>;