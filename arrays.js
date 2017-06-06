let colors = ["red", "blue", "green", "yellow", "orange", "teal"];
let numbers = [20, 10, 5, 8, 30, 100, 19];

let reversedColors = colors.reverse()
console.log("oooh, pretty", reversedColors);


//sort only sorts the 1st letter/number in string

let sortedColors = colors.sort()
console.log("sorted", sortedColors);

let sortaSorted = numbers.sort();
console.log("sorta", sortaSorted);

//pass in a function that takes 2 arguments- 1st & 2nd and compares them blah blah

let sortedNums = numbers.sort(function(first, second){
	return first - second;
});
console.log("sortedNums", sortedNums);

//join takes everything from array and turns it into a string--> work on overly-excited
//inside join argument you can tell it what string to add bewteen every element

let joinedColors = colors.join(" The Color ");
console.log("joined", joinedColors);

//slice goes from start of what you want to end-as in start of next item- to read fully through
//slice creates a new array

let fruits = ["banana", "orange", "lemon", "apple", "mango"];
let citrus = fruits.slice(1,3)
console.log("citrus?", citrus );

//another tool for overly-excited?


colors.forEach(function(color) {
	console.log(`I like the color ${color}`);
});











