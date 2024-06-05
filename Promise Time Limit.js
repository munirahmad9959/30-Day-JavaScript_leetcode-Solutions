/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result) => {
                    clearTimeout(timeout); 
                    resolve(result); 
                })
                .catch((error) => {
                    clearTimeout(timeout); 
                    reject(error); 
                });
        });
    };
};

// Example 1
(async () => {
    const fn1 = async (n) => { 
        await new Promise(res => setTimeout(res, 100)); 
        return n * n; 
    }
    const inputs1 = [5];
    const t1 = 50;

    const limited1 = timeLimit(fn1, t1);
    const start1 = performance.now();
    let result1;
    try {
        const res1 = await limited1(...inputs1);
        result1 = { "resolved": res1, "time": Math.floor(performance.now() - start1) };
    } catch (err) {
        result1 = { "rejected": err, "time": Math.floor(performance.now() - start1) };
    }
    console.log(result1); // Output: {"rejected":"Time Limit Exceeded","time":50}
})();

// Example 2
(async () => {
    const fn2 = async (n) => { 
        await new Promise(res => setTimeout(res, 100)); 
        return n * n; 
    }
    const inputs2 = [5];
    const t2 = 150;

    const limited2 = timeLimit(fn2, t2);
    const start2 = performance.now();
    let result2;
    try {
        const res2 = await limited2(...inputs2);
        result2 = { "resolved": res2, "time": Math.floor(performance.now() - start2) };
    } catch (err) {
        result2 = { "rejected": err, "time": Math.floor(performance.now() - start2) };
    }
    console.log(result2); // Output: {"resolved":25,"time":100}
})();

// Example 3
(async () => {
    const fn3 = async (a, b) => { 
        await new Promise(res => setTimeout(res, 120)); 
        return a + b; 
    }
    const inputs3 = [5, 10];
    const t3 = 150;

    const limited3 = timeLimit(fn3, t3);
    const start3 = performance.now();
    let result3;
    try {
        const res3 = await limited3(...inputs3);
        result3 = { "resolved": res3, "time": Math.floor(performance.now() - start3) };
    } catch (err) {
        result3 = { "rejected": err, "time": Math.floor(performance.now() - start3) };
    }
    console.log(result3); // Output: {"resolved":15,"time":120}
})();

// Example 4
(async () => {
    const fn4 = async () => { 
        throw "Error";
    }
    const inputs4 = [];
    const t4 = 1000;

    const limited4 = timeLimit(fn4, t4);
    const start4 = performance.now();
    let result4;
    try {
        const res4 = await limited4(...inputs4);
        result4 = { "resolved": res4, "time": Math.floor(performance.now() - start4) };
    } catch (err) {
        result4 = { "rejected": err, "time": Math.floor(performance.now() - start4) };
    }
    console.log(result4); // Output: {"rejected":"Error","time":0}
})();
