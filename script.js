const numbers = [1, 2, 3, 4, 5, 6, 7];

// Sort 'numbers' in descending order
numbers.sort(compareFunction);

// // Log the sorted array
// console.log(numbers);

// Compare function for descending order
function compareFunction(a, b) {
    return b - a;
}

console.log(numbers);
