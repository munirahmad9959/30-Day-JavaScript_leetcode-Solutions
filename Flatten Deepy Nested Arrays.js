/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    
    let result = []

    if(n === 0){
        return arr;
    } else {
        arr.forEach((element) => {
            result = result.concat(Array.isArray(element)? flat(element, n - 1):[element]);
        })
    }
    return result;
    
};


const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 2;

console.log(flat(arr, n));