const prompt = require('prompt-sync')();

// Function to check if a number is greater than 7
function checkNumber(num) {
    if (num > 7) {
        console.log("Hello");
    } else {
        console.log("Number is not greater than 7");
    }
}

// Function to check if the entered name is "John"
function checkName(name) {
    if (name.trim() === "John") {
        console.log("Hello, John");
    } else {
        console.log("There is no such name");
    }
}

// Function to print array elements that are multiples of 3
function printMultiplesOfThree(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }

    const multiplesOfThree = arr.filter(num => num % 3 === 0);
    if (multiplesOfThree.length > 0) {
        console.log("Multiples of 3:", multiplesOfThree);
    } else {
        console.log("No multiples of 3 found");
    }
}

// Interactive Input

// 1. Checking if a number is greater than 7
let enteredNumber = Number(prompt("Enter a number: "));
checkNumber(enteredNumber);

// 2. Checking if the entered name is "John"
let enteredName = prompt("Enter a name: ");
checkName(enteredName);

// 3. Checking multiples of 3 in an array
let arrayInput = prompt("Enter a list of numbers separated by commas: ");
let numericArray = arrayInput.split(',').map(num => {
    const parsedNum = Number(num.trim());
    return isNaN(parsedNum) ? null : parsedNum;
}).filter(num => num !== null); // Convert valid numbers, filter out NaN values

// Call the function to check multiples of 3
printMultiplesOfThree(numericArray);