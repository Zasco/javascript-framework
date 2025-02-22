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
};