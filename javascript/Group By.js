/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let object = {};
    for (let i = 0; i < this.length; i++) {
        let element = this[i];
        let key = fn(element);
        
        if (!object.hasOwnProperty(key)) {              //works same as if(!object[key])
            object[key] = [];
        }
        object[key].push(element);
    }
    return object;
};

//First Test Case
console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}


//Second Test Case
const array = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
]

console.log(array.groupBy(fn = function (list) {
    return String(list[0]);
}));


//Third Test Case
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(newArray.groupBy(fn = function (n) {
    return String(n > 5);
}));
