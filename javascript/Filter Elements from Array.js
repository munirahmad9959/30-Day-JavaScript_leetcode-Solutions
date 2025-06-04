/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
    const newArr = [];
    let newIndex = 0; 

    let i = 0;
    while (i < arr.length) {
        const result = fn(arr[i], i);
        if (result) {
            newArr[newIndex++] = arr[i]; 
        }
        i++;
    }
    
    newArr.length = newIndex;
    
    return newArr;
};

