/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
	return s.trim().split(/\s+/).reverse().join(" ")
};

const s = "the sky is blue"
console.log("the output is: ",reverseWords(s))
