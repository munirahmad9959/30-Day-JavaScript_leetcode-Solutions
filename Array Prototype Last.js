/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    if (this.length == 0) {
        return -1;
    }
    return this[this.length - 1]
};



const arr = [];
console.log(arr.last()); // 3

// if array is empty return -1 else the last number
