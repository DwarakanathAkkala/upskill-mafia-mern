// Question 1
function table(number) {
    console.log(`Multiplication table for ${number}`);

    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} X ${i} = ${result}`);
    }
}

table(9);


// -------------------------
// Question 2 //

// var Example
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 (accessible outside the block)
}
exampleVar();

// let 
function exampleLet() {
    if (true) {
        let y = 20;
    }
    // console.log(y); // ReferenceError: y is not defined (block-scoped)
}
exampleLet();

// const Example
function exampleConst() {
    const z = 30;
    // z = 40; // TypeError: Assignment to constant variable
}
exampleConst();


// "let" and "const" provide block-scoping and do not allow redeclaration in the same scope,
//  while "var" is function-scoped and allows redeclaration.
// "const" additionally prevents reassignment after initialization.



// --------------
// Question 3
function max(array) {

    let maximum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i];
        }
    }

    console.log("Maximum number in the array is " + maximum);

    if (maximum % 2 == 0) {
        console.log("The maximum number is even");
    }
    else console.log("The maximum number is odd");

}

let arrayExample = [3, 7, 1, 9, 4, 6];
let maxElement = max(arrayExample);


// --------------
// Question 4
let Person = {
    Name: "Dwarakanath Akkala",
    Age: 26,
    City: "Hyderabad",
    greet: function () {
        let firstName = this.Name.split(' ')[0];
        console.log("Hello " + firstName);
    }
};

// Calling the greet function
Person.greet();


// -----------------
// Question 5
let currentNumber = 1;

function displayNumber() {
    console.log(currentNumber);

    if (currentNumber === 10) {
        clearInterval(intervalId); // Stop the interval when the number reaches 10
    } else {
        currentNumber++;
    }
}

// Set interval to call displayNumber every 10 seconds
let intervalId = setInterval(displayNumber, 10000);


// ----------------







