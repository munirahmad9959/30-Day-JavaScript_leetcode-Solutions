/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let object = {};
    for (let i = 0; i < this.length; i++) {
        let key = fn(this[i]);
        let newArr = [];
        newArr.push(...this);
        object[key] = newArr.filter((element) => element === parseInt(key));
    }
    return object;
};

let array = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
]

console.log(array.groupBy(fn = function (list) {
    return String(list[0]);
})) //{ "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] }


// First Case: [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}

