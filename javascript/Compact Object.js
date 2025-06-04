/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        const filteredArray = obj.map((element) => compactObject(element)).filter((element) => element !== undefined);
        return filteredArray.length > 0 ? filteredArray : [];
    } else if (typeof obj === 'object' && obj !== null) {
        const result = {}
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const element = obj[key];
                const compactedValue = compactObject(element)
                if (compactedValue !== undefined) {
                    result[key] = compactedValue;
                }
            }
        }
        return Object.keys(result).length > 0 ? result : undefined
    } else {
        return Boolean(obj) ? obj : undefined
    }
};


//same implementation using reduce function
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        return obj.reduce((acc, element) => {
            const compactedElement = compactObject(element);
            if (compactedElement !== undefined) {
                acc.push(compactedElement);
            }
            return acc;
        }, []);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).reduce((acc, key) => {
            const compactedValue = compactObject(obj[key]);
            if (compactedValue !== undefined) {
                acc[key] = compactedValue;
            }
            return acc;
        }, {});
    } else {
        return Boolean(obj) ? obj : undefined;
    }
};



// Test cases
console.log(compactObject([null, 0, false, 1])); // Output: [1]
console.log(compactObject({"a": null, "b": [false, 1]})); // Output: {"b": [1]}
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // Output: [5, [], [16]]