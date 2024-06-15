/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {

    const cache = new Map();

    const mergeObjects = (obj1, obj2) => { return { ...obj1, ...obj2 } }


    arr1.forEach(items => {
        cache.set(items.id, items);
    })

    arr2.forEach(items => {
        if (cache.has(items.id)) {
            const mergedObjects = mergeObjects(cache.get(items.id), items)
            cache.set(items.id, items)
        } else {
            cache.set(items.id, items)
        }
    })

    return Array.from(cache.values()).sort((a, b) => {
        a.id - b.id;
    })

};


console.log(arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 }
],
    arr2 = [
        { "id": 3, "x": 5 }
    ])