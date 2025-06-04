/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    let timeoutId;

    const cancelFn = () => {
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
            timeoutId = undefined;
        }
    };

    timeoutId = setTimeout(() => {
        fn(...args);
        timeoutId = undefined;
    }, t);

    // Return the cancel function
    return cancelFn;
};

// Example usage:
const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;

const cancelFn = cancellable(fn, args, t);

setTimeout(cancelFn, cancelTimeMs); // This should not cancel the function as it runs after 20ms
