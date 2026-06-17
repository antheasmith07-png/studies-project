/**
 * LOOPS:
 * 
 * 0: (introduction)
 * Loops are a handy feature in Javascript. It allows the program to execute a block of code
 * as many times as needed. It specifically is great for iterating over collections of data
 * allowing for you to isolate the data one item at a time. This is important because you can
 * manipulate a large data set to do a specific task. There are various types of loops, but 3
 * are mainly used. The For Loop, The For - In Loop, and The While Loop.
 * 
 * 1. The For Loop is mainly used for arrays and is used to iterate over a block of code a specific
 * number times. The structure of a for loop has 3 parts. It initializes the loop at a starting index, then ends the
 * loop once a certain condition is met, and increments/decrements the loop by 1, which moves you to the next
 * iteration in the loop. This code is held within parenthesis starting with the word for.
 * 
 * 2. The For-in Loop is used for objects. It allows you to pull out all of the keys in the object and iterate
 * and gives you access to the the key's values. The for in loop is structured within parenthesis and tells
 * the program to look for key "in" Object name.
 * 
 * 3. The While Loop allows you to loop over the block of code as many times as you need as long as the 
 * conditional statement is true. The structure is to initialize a variable and in the while loop set up 
 * a condition that tells the loop to run while this statement is true, then increment or decrement to move
 * to the next iteration in the loop.
 */

//1. The For Loop
for (var i =0; i < array.length; i++) //Initialization; Where the loop will stop; How the loop will iterate

//2. The For-in Loop
for (var key in Object);

//3. The While Loop
var count = 0; //start of loop
while(count < 20) { //stop of loop
    console.log(count); // log result
    count ++; //increment by 1 and move to next iteration
}
