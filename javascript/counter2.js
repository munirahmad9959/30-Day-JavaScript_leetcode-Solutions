/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let number = init;
    return {
        increment: (init) => {
            return ++number;
        },
    
        decrement: (init) => {
            return --number;
        },
        
        reset: () => {
            number = init;
            return number;
        }
    
    }
};


const counter = createCounter(0)
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset()); 
console.log(counter.reset()); 
