import { add, subtract, pi } from './math.js';
import { greet } from './greet.js';
import { capitalize } from './utils.js';

console.log(`Add: ${add(5, 3)}`); 
console.log(`Subtract: ${subtract(5, 3)}`); 
console.log(`Value of Pi: ${pi}`); 
const userName = "john";
console.log(greet(userName)); 
const lowerCaseString = "hello world";
console.log(capitalize(lowerCaseString)); 