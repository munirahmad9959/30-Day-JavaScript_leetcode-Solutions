/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */


function debounce(fn, t) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
}

// Testing the debounced function with provided examples
function testDebounce() {
  let start = Date.now();
  
  // Example 1
  const dlog1 = debounce((...inputs) => console.log([Date.now() - start, inputs]), 50);
  setTimeout(() => dlog1(1), 50);
  setTimeout(() => dlog1(2), 75);

  // Example 2
  const dlog2 = debounce((...inputs) => console.log([Date.now() - start, inputs]), 20);
  setTimeout(() => dlog2(1), 50);
  setTimeout(() => dlog2(2), 100);

  // Example 3
  const dlog3 = debounce((...inputs) => console.log([Date.now() - start, inputs]), 150);
  setTimeout(() => dlog3(1, 2), 50);
  setTimeout(() => dlog3(3, 4), 300);
  setTimeout(() => dlog3(5, 6), 300);
}

testDebounce();
