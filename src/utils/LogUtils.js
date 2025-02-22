/**
 * @since ${NEXT_VERSION}
 */
export default {
    /**
     * Exposes an object.
     * 
     * @since ${NEXT_VERSION}
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
    exposeObject(obj) {
        return {
            'constructor': obj.constructor, 
            'prototype': Object.getPrototypeOf(obj), 
            'properties': Object.getOwnPropertyNames(obj), 
            'descriptors': Object.getOwnPropertyDescriptors(obj), 
            'toString': obj.toString(), 
            'type': Object.prototype.toString.call(obj), 
        };
    },

    // [TODO] Allow node-fetch `Response` object as a valid param type here. Find how to support browser/Node environments...
    /**
     * Exposes a `Response` object.
     * 
     * @since ${NEXT_VERSION}
     * @param {Response} response
     * @returns {{
     *  'status': number, 
     *  'statusText': string, 
     *  'headers': {[header: string]: string}, 
     *  'body': ReadableStream<Uint8Array> | null,
     * }}
     */
    exposeResponse(response) {
        return {
            'status': response.status,
            'statusText': response.statusText,
            'headers': Object.fromEntries(response.headers),
            // [NOTE] The `size` property only exists in the node-fretch `Response` object.
            //'size': response.size,
            'body': response.body,
        };
    },
};