/**
 * FUNCTIONS:
 * 
 * 0: (introduction)
 * Functions are reusable blocks of code that perform specific tasks. Functions can
 * be assigned to variables which allows for more efficient programming. They can also be 
 * passed into other functions as arguments and be returned from them. It is great for
 * reusability and organization.
 * 
 * 1. Functions are defined by using a keyword or => syntax. They are then called or invoked
 * by using the given name followed by parenthesis and curly brackets. 
 * 
   2. Functions take in inputs called parameters and returns the output. 
   
   3. Arguments are passed into the paramaters when the values are known.
 */

   1. //Define
   var greatFunction = function(x, y) {

   };

   2. //Invoking
  var greatFunction = function(x, y) { //input paramaters
    return x - y; // return output
   };

   3. //Calling Function

   greatFunction(10, 6);

   console.log(greatFunction(10, 6)); //returns 4