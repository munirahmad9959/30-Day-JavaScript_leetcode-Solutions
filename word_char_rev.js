
rev_word = (word)=>{
	let result = ""
	for(let i = word.length-1; i>=0; i--){
		result+= word[i]
	}
	return result
}


console.log("Reversed word is: ", rev_word("hello"))
