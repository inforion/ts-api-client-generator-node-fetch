import { Response } from 'node-fetch';

import { NodeFetchAdapterConfig } from './node-fetch-adapter-config';

export const defaultConfig: NodeFetchAdapterConfig<any> = {
    transformResponse: <T>(response: Response) => response.json() as Promise<T>
};