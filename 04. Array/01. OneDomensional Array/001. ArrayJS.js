// 1. Creating an array using array literal
const arr = ['html', 'css', 'js', 'react']; //use for efficiency, readability and speed
// console.log(arr);

// 2. Creating an array using the JavaScript new keyword
// const newArr = new Array();
// const newArr = new Array(3);
const newArr = new Array(4);
newArr[0] = 1;
newArr[1] = 2;
newArr[2] = 3;
// console.log(newArr);
// console.log(newArr[3]);

const threeArray = new Array("3", "4", "5");
// console.log(threeArray);

const fourthArray = new Array(2, 3);
// console.log(fourthArray);


// Accessing array elements
// console.log(arr);
// console.log(arr[0]);


// change element of array
// arr[3] = 'nodejs';
// console.log(arr);


// Convert an Array to String: toString()
// console.log(arr.toString());


// length od array
// console.log(arr.length);
// arr.length = 5;
// console.log(arr);
// arr.length = 2;
// console.log(arr);


// for loop in Array
for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// for..of
const veggies = ['Potato', "Onion", 'Cucumber', 'Carrot', 'Radish', 'Spinach'];
for(veg of veggies) {
    // console.log(veg);
}

for(let key in veggies) { //don't use for..in for arrays
    // console.log(veggies[key]);
}

// in-built fucntions in JavaScript
const numbers = new Array();
// 1. numbers.push(1): adds an element to the end.
// let len = numbers.push(1);
// len = numbers.push(2);
// console.log(len);
// console.log(numbers);

// 2. numbers.pop(1): takes an element from the end
// let poppedNumber = numbers.pop();
// console.log(poppedNumber);
// console.log(numbers);

// 3.  numbers.shift(1): Extracts the first element of the array and returns it
// console.log(numbers);
// console.log(numbers.shift());
// console.log(numbers);


// 4. numbers.unshift(1): Add the element to the beginning of the array
// console.log(numbers);
// console.log(numbers.unshift());
// console.log(numbers);


// add element using length
numbers[numbers.length] = "nodejs";
// console.log(numbers);

// typeof numbers
// console.log(typeof numbers);


// Recognizing a JavaScript Array
// 1. By using Array.isArray() method
// console.log(Array.isArray(numbers));

// 2. By using instanceof method
// console.log(numbers instanceof Array);


// mix of values
let mix = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
// console.log(mix[1].name); // John

// get the function at index 3 and run it
// mix[3](); // hello

// at(): for -ve indexing
const check = [3, 2, 1];
// console.log(check.at(-2));

// arr.at(-2);
// mix.at(-1)();
