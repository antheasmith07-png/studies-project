/**
 * VARIABLES:
 * 
 * 0: Variables are named containers that hold data that can be stored referenced 
 * and changed within the program. It can store all types of data like 
 * numbers, text, strings, booleans, arrays, and objects.
 * 
 * 1. To create a variable we declare it using the keyword var, followed by a
 * name for the variable. A variable can also be declared using the 'let' and 'const' 
 * keyword.
 * 
 * 2. There are two phases of using variables: declaration and initialization.
 * 
 * 3. Variables declared with var can be reassigned at any time, but not with const.
 * 
 */
//1. Declaration //
// To declare a variable assign a name after the var keyword that represents the data you want to store.
var number;
console.log(number)//will log undefined since it hasn't been assigned

//2. Initailization //
//To initialize a variable you must assign a value to the variable that was declared using the = sign
number = 37;
console.log(number)// will print 37 to the console

//3. Reassignment
// A variable's value can be reassigned by changing it's value

number = 22;//will print 22 to the console now instead of 37