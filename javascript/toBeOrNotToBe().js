/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expected) {
            if (expected === val) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (expected !== val) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};


// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.