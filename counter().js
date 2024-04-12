/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function (n) {

    let count = n;
    return () => {
        let createCount = count;
        count++;
        return createCount;
    }

};


const counter = createCounter(10)
console.log(counter("call"));
console.log(counter("call"));
console.log(counter("call")); 
