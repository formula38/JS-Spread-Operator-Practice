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
countTheArgs('cat', 'dog'); //2
countTheArgs('cat', 'dog', 'frog', 'bear'); //4

// Write a function called combineTwoArrays that takes in two arrays as arguments,
// and returns a single array that combines both (using the spread operator).


// Write a function called sumEveryOther that takes in any amount of arguments,
// and returns the sum of every other argument.
sumEveryOther(5, 6, 3, 4, 1); //9
sumEveryOther(10, 2, 11); //21


// Write a function called onlyUniques that can take in any number of arguments,
// and returns an array of only the unique arguments.
onlyUniques('cat', 'cat', 'dog', 'pig'); //['cat', 'dog', 'pig']
onlyUniques(1, 4, 7, 1, 2, 7, 4); //[1, 4, 7, 2]


// Write a function called combineAllArrays that takes in any number of arrays as
// arguments and combines all of them into one array.


// Write a function called squareAndSum that takes in any number of arguments,
// squares them, then sums all of the squares.
sumAndSquare(2, 4, 3); //29
sumAndSquare(1, 2); //5


