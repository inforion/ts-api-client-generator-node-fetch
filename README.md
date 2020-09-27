# node-fetch Adapter for ts-api-client-generator

[![NPM version](https://img.shields.io/npm/v/ts-api-client-generator-node-fetch.svg)](https://www.npmjs.com/package/ts-api-client-generator-node-fetch)

## Description

An adapter that makes HTTP requests for [ts-api-client-generator](https://github.com/inforion/ts-api-client-generator)
via [node-fetch](https://www.npmjs.com/package/node-fetch) package.

Please see [ts-api-client-generator](https://github.com/inforion/ts-api-client-generator) docs to learn how to use instantiated adapters.

## Installation

Install this package and its peer dependencies using NPM:

```
npm install ts-api-client-generator-node-fetch node-fetch ts-api-client-generator
```

or using Yarn:

```
yarn add ts-api-client-generator-node-fetch node-fetch ts-api-client-generator
```

## Instantiate

```ts
import NodeFetchAdapter from 'ts-api-client-generator-node-fetch'

const adapter = new NodeFetchAdapter</* optional, type of context */>({
    transformResponse: /* optional function, for details please see ts-api-client-generator docs */,
    agent: /* optional, https.Agent instance */
})
```