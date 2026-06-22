/**
 * STRING MANIPULATION:
 * 
 * 0: (introduction)
 * String Manipulation uses built in methods to alter and create a new the string. It allows us
 * to work with the string datatype in multiple ways.
 * 
 * 1: To manipulate a string, we use built in methods. The most common ones that we have used are
 * .length, concat(), slice(), toUpperCase(), and toLowerCase(). 
 * 
 * 2: Depending on what the code calls for, we can combine these built in methods to create
 * the desired result.
 * 
 */

// 1: Example of String Manipulation
var name = "Anthea";
name.toUpperCase(); //Will output the name variable in all caps

var city = "Marrero"
city.length; // Will provide the length of the word which should be 6 characters

// 2: Example of combining String methods for String Manipulation

name.toUpperCase().concat(" " + city); //if logged to the console the result would be 'ANTHEA Marrero'