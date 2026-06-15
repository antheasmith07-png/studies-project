/**
 * DATATYPES:
 * 
 * 0: (introduction)
 * Simply put, Datatypes are values(data) and the type of value(description) of that value.
 * 
 * 1: There are Primitive Datatypes. Simple Datatypes do not hold or collect
 * other value types and they do not alter the original value and have a limited size. 
 * They can only be copied by value.
 * Example of Simple Datatypes:
 * Number, Boolean, String, Nan, Undefined, and Null
 * 
 * 2. There are Complex Datatypes.These datatypes can aggregrate other values and have an 
 * can grow infinitely in size. Since it is indefinite in size, complex datatypes are 
 * assigned by reference instead of value.
 * Examples of Complex Datatypes:
 * Arrays, Objects, and Functions
 * 
 * 3. Datatypes in Javascript have many properties and methods. You can also use the typeOf
 * method to determine what kind of datatype a particular part of your code is.
 */

1. //Simple Datatypes
var number = 1;
var string = 'Anthea';
var boolean = true;
var nan = NaN;
var undefined = Undefined;
var nul = null;

2. //Complex Datatypes
// Array stores ordered collection of items by index
var array = ['box', 'square', 'cube']; 

// Objects stores data with named keys and values for more dynamic data
var object = {
    name: 'Anthea',
    age: '37',
    location: 'New Orleans'
};
// Functions are a reusable block of code design to perform certain tasks.
// it can take in inputs and return outputs
var sum = function(x, y) {
   return x + y;
} 
console.log(sum(3, 4)); //Should log 7

3. //Type of method
console.log(typeof 42); //should produce 'number'
console.log(typeof 'Nola'); //should produce 'string