/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let items = arr1.concat(arr2);

    let result = {};

    for (const obj of items) {
        if (!result[obj.id]) {
            result[obj.id] = obj;
            continue;
        }

        result[obj.id] = { ...result[obj.id], ...obj };
    }

    return Object.values(result);
};

console.log(join(arr1 = [
    { "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }
],
    arr2 = [
        { "id": 1, "b": { "c": 84 }, "v": [1, 3] }
    ])
);