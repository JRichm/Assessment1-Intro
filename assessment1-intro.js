// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE
console.log("\nProblem One");

let name = "James";
let age = 22;
let isHungry = true;

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguages' that include 4 coding language of your choice. 
*/

//CODE HERE
console.log("\nProblem Two");

let codingLanguages = ["C#", "Java", "Python", "HTML"];

/* 
    Access the 3rd element of the 'codingLanguages' array.
*/

//CODE HERE
console.log("\nProblem Three");

console.log("3rd element of codingLanguages: " + codingLanguages[2]);

/*
    Copy the array using one of the arrays built in functions, and call it 'codingLanguage2.'
*/

//CODE HERE
console.log("\nProblem Four");

codingLanguage2 = codingLanguages.slice(0, codingLanguages.length)
console.log("Copy of codingLanguages: " + codingLanguage2);

/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE
console.log("\nProblem Five");

codingLanguage2.push("Ruby");
console.log("Updated array: " + codingLanguage2);

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE
console.log("\nProblem Six");

instruments.pop();
console.log("Updated instruments: " + instruments);

/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE
console.log("\nProblem Seven");

instruments.shift();
console.log("Updated instruments: " + instruments);

/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE
console.log("\nProblem Eight");

instruments.unshift("guitar");
console.log("Updated instruments: " + instruments);
/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE
console.log("\nProblem Nine");

instruments.splice(2, 1, "glockenspiel")
console.log("Updated instruments: " + instruments);
/* 

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
console.log("\nProblem Ten");

if (num % 2 === 0) console.log(num + " is an even number")
else console.log(num + " is an odd number");

// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE
console.log("\nProblem Eleven");

if (score < 10) console.log("Failed");
else if (score < 41) console.log("The grade is C.");
else if (score < 41) console.log("The grade is B.");
else if (score > 70) console.log("The grade is A.");


// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
console.log("\nProblem Twelve");

let total = 0;

for (let x = 0; x < price.length; x++) 
    total += price[x];

console.log("Final Total: " + total);

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

let averagePrice = total / price.length;
console.log("Average price per item :" + averagePrice);

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
console.log("\nProblem Thirteen");
for (let y = 0; y < colors.length; y++) {
    switch(colors[y]) {
        case 'red':
            console.log("apple");
            break;
        case 'green':
            console.log("melon");
            break;
        case 'yellow':
            console.log("banana");
            break;
    }
}


// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
        -- github
        -- git init
        -- git clone
        -- git status
        -- git add
        -- git commit
        -- git push
    - How to push git to github
*/

