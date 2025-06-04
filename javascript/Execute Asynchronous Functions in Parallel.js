/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length); 
        let resolvedCount = 0;
        let hasRejected = false;

        functions.forEach((fn, index) => {
            fn().then(result => {
                results[index] = result;
                resolvedCount += 1;

                if (resolvedCount === functions.length) {
                    resolve(results); 
                }
            }).catch(error => {
                if (!hasRejected) {
                    hasRejected = true;
                    reject(error); 
                }
            });
        });
    });
};

// Example usage:

// Example 1:
const promise1 = promiseAll([() => new Promise(res => res(42))]);
promise1.then(console.log).catch(console.error); // [42]

// Example 2:
const promise2 = promiseAll([
    () => new Promise(res => setTimeout(() => res(1), 200)), 
    () => new Promise((_, rej) => setTimeout(() => rej("Error"), 100))
]);
promise2.then(console.log).catch(console.error); // "Error"

// Example 3:
const promise3 = promiseAll([
    () => new Promise(res => setTimeout(() => res(4), 50)), 
    () => new Promise(res => setTimeout(() => res(10), 150)), 
    () => new Promise(res => setTimeout(() => res(16), 100))
]);
promise3.then(console.log).catch(console.error); // [4, 10, 16]
