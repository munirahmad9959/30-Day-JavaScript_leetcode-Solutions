const prompt = require('prompt-sync')();
count_char = (word) => {
	let result = ""
	let i = 0
	while (i < word.length) {
		let char = word[i]

		let count = 1

		while (i + count < word.length && word[i + count] === char) {
			count+=1
		}
		console.log("Count is: ", count)

		if (count > 2) {
			result += char + count
			console.log("result is: ", result)
		}
		else {
			for (let j = 0; j < count; j++) {
				result += char
			}
		}
		i += count
	}
	return result
}
const word = prompt("Enter the word: ");
console.log("Desired output is: ", count_char(word))


