/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (Object.keys(obj).length === 0) {
        return true;                            // return true if object is empty else false
    }
    return false;
};



const result = isEmpty({name :"Munir", age: 20});
console.log(`Result is: ${result}`);

