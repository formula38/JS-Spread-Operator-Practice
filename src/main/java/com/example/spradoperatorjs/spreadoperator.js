// Write a function that can take in any number of arguments, and returns the sum
// of all of the arguments.
function sumOfNumbers(...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
console.log();
console.log("sumOfNumbers");
console.log(sumOfNumbers(1, 2, 3, 4));
console.log();

// Write a function called addOnlyNums that can take in any number of arguments
// (including numbers or strings), and returns the sum of only the numbers.
function addOnlyNums(...arr) {
    let sum = 0;
    for (const num of arr) {
        if (typeof num === "number")
            sum += num;
    }
    return sum;
}
console.log("addOnlyNums");
console.log(addOnlyNums(1, 'cat', 3, 4)); //8
console.log();

// Write a function called `countTheArgs` that can take any number of arguments,
// and returns the number of arguments that are passed in.
function countTheArgs(...args) {
    let count = 0;
    for (let arg of args) {
        count += 1;
    }
    return count;
}
console.log("countTheArgs");
console.log(countTheArgs('cat', 'dog')); //2
console.log(countTheArgs('cat', 'dog', 'frog', 'bear')); //4
console.log();

// Write a function called combineTwoArrays that takes in two arrays as arguments,
// and returns a single array that combines both (using the spread operator).
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];

}

let array1 = ['cat', 'dog'];
let array2 = ['frog', 'bear'];

console.log("combineTwoArrays");
console.log(combineTwoArrays(array1, array2));
console.log();

// Write a function called sumEveryOther that takes in any amount of arguments,
// and returns the sum of every other argument.
function sumEveryOther(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
console.log("sumEveryOther");
console.log(sumEveryOther(5, 6, 3, 4, 1)); //9
console.log(sumEveryOther(10, 2, 11)); //21
console.log();

// Write a function called onlyUniques that can take in any number of arguments,
// and returns an array of only the unique arguments.
function onlyUniques(...args) {
    let uniques = [];
    for (let arg of args) {
        if (!uniques.includes(arg)) {
            uniques.push(arg);
        }
    }
    return uniques;
}
console.log("onlyUniques");
console.log(onlyUniques('cat', 'cat', 'dog', 'pig')); //['cat', 'dog', 'pig']
console.log(onlyUniques(1, 4, 7, 1, 2, 7, 4)); //[1, 4, 7, 2]
console.log();


// Write a function called combineAllArrays that takes in any number of arrays as
// arguments and combines all of them into one array.
function combineAllArrays(...arrays) {
    return [...arrays];
}

let array3 = ['cat', 'dog'];
let array4 = ['frog', 'bear'];

console.log("combineAllArrays");
console.log(combineAllArrays(array3, array4));
console.log(combineAllArrays(...array3, ...array4));
console.log();


// Write a function called squareAndSum that takes in any number of arguments,
// squares them, then sums all of the squares.
function sumAndSquare(...numbers) {
    let sum = 0;
    for (const num of numbers) {
        let sqr = num**2;
        sum += sqr;
    }
    return sum;
}
console.log("sumAndSquare");
console.log(sumAndSquare(2, 4, 3)); //29
console.log(sumAndSquare(1, 2)); //5
console.log();


