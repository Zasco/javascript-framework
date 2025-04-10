import { traits } from 'javascript-framework/module/core';

/**
 * @since alpha-2.0.0
 */
export default class LogUtils {
    /** @throws If instantiated (see {@link traits.SingletonTrait.singletonConstructor}) */
    constructor() {
        traits.SingletonTrait.singletonConstructor.call(this);
    }

    /**
     * Exposes an object.
     * 
     * @since alpha-2.0.0
     * @static
     * @param {Object} obj The object to expose.
     * @returns {{
     *  'constructor': *, 
     *  'prototype': *, 
     *  'properties': string[], 
     *  'descriptors': {[property: string]: PropertyDescriptor}, 
     *  'toString': string, 
     *  'type': *, 
     * }} An object containing the constructor, prototype, properties, descriptors, toString, and type of the exposed object.
     */
    static exposeObject(obj) {
        return {
            'constructor': obj.constructor, 
            'prototype': Object.getPrototypeOf(obj), 
            'properties': Object.getOwnPropertyNames(obj), 
            'descriptors': Object.getOwnPropertyDescriptors(obj), 
            'toString': obj.toString(), 
            'type': Object.prototype.toString.call(obj), 
        };
    }

    // [TODO] Allow node-fetch `Response` object as a valid param type here. Find how to support browser/Node environments...
    /**
     * Exposes a `Response` object.
     * 
     * @since alpha-2.0.0
     * @static
     * @param {Response} response
     * @returns {{
     *  'status': number, 
     *  'statusText': string, 
     *  'headers': {[header: string]: string}, 
     *  'body': ReadableStream<Uint8Array> | null,
     * }}
     */
    static exposeResponse(response) {
        return {
            'status': response.status,
            'statusText': response.statusText,
            'headers': Object.fromEntries(response.headers),
            // [NOTE] The `size` property only exists in the node-fretch `Response` object.
            //'size': response.size,
            'body': response.body,
        };
    }
};