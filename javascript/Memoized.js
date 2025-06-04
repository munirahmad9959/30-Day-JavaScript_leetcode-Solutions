/**
 * @param {Function} fn
 * @return {Function}
 */

//using object dataType
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
          console.log("Cached result found!");
          return cache[key];
        }

        const result = fn(...args);

        cache[key] = result;
        return cache[key];
    }
}



//using mapping dataType
const memoize = function (fn) {

  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Cached result found!");
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }
}


