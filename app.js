// write a loop of numbers from 1 to 10.
Ans:
for (var i = 1; i <= 10 ; i++){
    console.log(i)
}

// Write a loop to print even numbers from 1 to 20.
Ans:
for (var i = 2; i <= 20; i += 2){
    console.log(i)
}


// Write a loop to print odd numbers from 1 to 15.
Ans:
for (var i = 1; i <= 15; i += 2){
    console.log(i)
}


// Write a loop to calculate and print the factorial of a number (let's say 5).
Ans:
// Function to calculate factorial of a number
function calculateFactorial(number) {
    let factorial = 1;

    // Calculate factorial
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

// Define the number for which we want to calculate the factorial
var number = 5;

// Calculate factorial using the function
var result = calculateFactorial(number);

// Print the result
console.log(`The factorial of ${number} is: ${result}`);


// Write a loop to print the multiplication table of a number (let's say 7) up to 10.
Ans:
// Define the number for which we want to print the multiplication table
var numBer = 7;

// Loop to print the multiplication table up to 10
for (var i = 1; i <= 10; i++) {
    // Calculate the product
    var product = numBer * i;

    // Print the multiplication table entry
    console.log(`${numBer} x ${i} = ${product}`);
}





//  Write a loop to print the Fibonacci series up to the 10th term. (The Fibonacci sequence is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.-10)

Ans:
// Function to print Fibonacci series up to n terms
function printFibonacciSeries(n) {
    // Initialize the first two terms of the Fibonacci series
    var a = 0; // First term
    var b = 1; // Second term

    // Print the first two terms manually
    console.log(a); // First term: 0
    console.log(b); // Second term: 1

    // Loop to generate and print the remaining terms
    for (var i = 3; i <= n; i++) {
        // Calculate the next term in the sequence
         var next = a + b;

        // Print the next term
        console.log(next);

        // Update values for the next iteration
        a = b;
        b = next;
    }
}

// Define the number of terms to print (up to the 10th term)
var numTerms = 10;

// Call the function to print the Fibonacci series up to numTerms terms
printFibonacciSeries(numTerms);



// • Write a loop to find and print the sum of digits of a number (let's say 123).
Ans:
// Function to calculate and print the sum of digits of a number
function sumOfDigits(number) {
    // Convert the number to a string to iterate over each digit
    var numString = number.toString();
    var sum = 0;

    // Loop through each character (digit) in the string representation of the number
    for (var i = 0; i < numString.length; i++) {
        // Convert the current character (digit) back to a number and add to the sum
        sum += parseInt(numString[i]);
    }

    // Print the sum of digits
    console.log(`The sum of digits of ${number} is: ${sum}`);
}

// Define the number for which we want to find the sum of digits (e.g., 123)
var number = 123;

// Call the function to calculate and print the sum of digits
sumOfDigits(number);


// Write a loop to print the reverse of a string (let's say "hello").

Ans:
// Function to reverse a string and print the reversed string
function reverseString(str) {
    var reversed = ''; // Initialize an empty string to store the reversed string

    // Loop from the last character to the first character of the input string
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Append each character to the reversed string
    }

    // Print the reversed string
    console.log(`The reverse of "${str}" is: "${reversed}"`);
}

// Define the string that we want to reverse (e.g., "hello")
var inputString = "hello";

// Call the function to reverse the string and print the reversed string
reverseString(inputString);




//  Write a loop to print the square of numbers from 1 to 10.
Ans:
// Loop to print the square of numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
    var square = i * i; // Calculate the square of the current number
    
    // Print the square of the current number
    console.log(`The square of ${i} is: ${square}`);
}



// Write a loop to find and print the smallest element in an array (let's say [3, 7, 2, 9, 5]).
Ans:
// Function to find and print the smallest element in an array
function findSmallestElement(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return; // If array is empty, return early
    }

    var smallest = arr[0]; // Assume the first element is the smallest

    // Loop through the array starting from the second element
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]; // Update smallest if current element is smaller
        }
    }

    // Print the smallest element found
    console.log(`The smallest element in the array [${arr.join(', ')}] is: ${smallest}`);
}

// Define the array for which we want to find the smallest element
var numbers = [3, 7, 2, 9, 5];

// Call the function to find and print the smallest element in the array
findSmallestElement(numbers);
