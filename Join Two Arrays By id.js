/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const cache = new Map();

    const deepMergeObjects = (obj1, obj2) => {
        const result = { ...obj1 };
        for (const [key, value] of Object.entries(obj2)) {
            if (obj1.hasOwnProperty(key) && typeof value === 'object' && value !== null && !Array.isArray(value)) {
                result[key] = deepMergeObjects(obj1[key], value);
            } else {
                result[key] = value;
            }
        }
        return result;
    };

    arr1.forEach(item => {
        cache.set(item.id, item);
    });

    arr2.forEach(item => {
        if (cache.has(item.id)) {
            const mergedObject = deepMergeObjects(cache.get(item.id), item);
            cache.set(item.id, mergedObject);
        } else {
            cache.set(item.id, item);
        }
    });

    return Array.from(cache.values()).sort((a, b) => a.id - b.id);
};

// Example 1
const arr1_1 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 }
];
const arr2_1 = [
    { id: 3, x: 5 }
];
console.log(join(arr1_1, arr2_1)); // Output: [{ id: 1, x: 1 }, { id: 2, x: 9 }, { id: 3, x: 5 }]

// Example 2
const arr1_2 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 }
];
const arr2_2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 }
];
console.log(join(arr1_2, arr2_2)); // Output: [{ id: 1, x: 2, y: 3 }, { id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 }]

// Example 3
const arr1_3 = [
    { id: 1, b: { b: 94 }, v: [4, 3], y: 48 }
];
const arr2_3 = [
    { id: 1, b: { c: 84 }, v: [1, 3] }
];
console.log(join(arr1_3, arr2_3)); // Output: [{ id: 1, b: { b: 94, c: 84 }, v: [1, 3], y: 48 }]
