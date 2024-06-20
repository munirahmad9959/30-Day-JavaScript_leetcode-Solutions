/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {

    if (Array.isArray(obj)) {
        return obj.filter(element => {
            if (element === null) return false;
            if (Array.isArray(element) || typeof element === 'object') {
                return compactObject(element).length > 0
            }
            return Boolean(element);
        });
    } else if (typeof obj === 'object' && obj !== null) {
        const compactedObject = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (value === null) continue;
                if (Array.isArray(value) || typeof value === 'object') {
                    const compactedValue = compactObject(value);
                    if (compactedValue.length > 0) {
                        compactedObject[key] = compactedValue;
                    }
                } else if (Boolean(value)) {
                    compactedObject[key] = value;
                }
            }
        }
        return compactedObject;
    } else {
        return obj;
    }
};

const obj = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(obj));