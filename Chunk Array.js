function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}

// Test cases
console.log(chunkArray([1, 2, 3, 4, 5], 1));  // Output: [[1], [2], [3], [4], [5]]
console.log(chunkArray([1, 9, 6, 3, 2], 3));  // Output: [[1, 9, 6], [3, 2]]
console.log(chunkArray([8, 5, 3, 2, 6], 6));  // Output: [[8, 5, 3, 2, 6]]
console.log(chunkArray([], 1));  // Output: []
