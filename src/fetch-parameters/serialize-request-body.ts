import { BodyInit } from 'node-fetch';
import { URLSearchParams } from 'url';

function isArrayBuffer(value: unknown): value is ArrayBuffer {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}

// eslint-disable-next-line unicorn/prevent-abbreviations
function isUrlSearchParams(value: unknown): value is URLSearchParams {
    return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}

export function serializeRequestBody(body: unknown): BodyInit {
    return isArrayBuffer(body) || isUrlSearchParams(body)
        ? body
        : JSON.stringify(body);
}