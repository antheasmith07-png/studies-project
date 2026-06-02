/**
 * OPERATORS:
 * 
 * 0: (introduction)
 * Operators act on our data. They are special symbols that perform operations on variables and values
 * 1:Operators are classed by what they do and how many operands they act upon. 
 * Unary Operators act on 1 value. Binary Operators act on 2 values. Ternary Operators act on 3 values.
 * 2. Types of Operators include: 
 * Assignment Operators: Assign values to variables (ex. =, +=, -=)
 * Arithmetic Operators: Used for mathematical calculations (ex. +, -, *, /)
 * Comparison Operators: Compare two values and return a boolean (ex. ==, ===, >, <)
 * Logical Operators: Combine boolean values (ex. && for AND, || for OR, ! for NOT)
 * String Operators: Combine strings using the concatanation operator (ex. +, +=) and comparison operators can be used on strings as well
 * Conditional/Ternary Operators: allow us to perform different actions for different conditions. 
 *                                  Conditional statements run different code depending on true or false conditions.
 *     If Statement: Executes a block of code if a specified condition is true.
        If-Else Statement: Executes one block of code if the condition is true, and another if it is false.
        Else If Statement: Allows checking multiple conditions sequentially.
        Ternary Operator: A shorthand for if-else, using the syntax condition ? exprIfTrue : exprIfFalse.
        Switch Statement: Evaluates an expression and executes code based on matching case values.
 * Unary Operators: Operates on and converts one value 
 *      Unary Plus (+): Converts a variable to a number.
        Unary Negation (-): Converts a variable to a number and negates it.
        Increment (++): Increases a variable's value by one.
        Decrement (--): Decreases a variable's value by one.
        Logical NOT (!): Inverts the boolean value of a variable.
        Bitwise NOT (~): Inverts the bits of a number.    
 *   //3. To initialize an operator you must properly place the operator symbol by the operand
        you want to change or compare.
        
        //1. Identify what the code wants you to and to what values
            ex. add the values of x and y.
 */       var  x = 3;
          var  y = 5;
        //2. Decide what operator works best for the needed outcome. In this case it is the Arithmetic operator + for add.
        var add = x + y; // add = 3 + 5, should log 8

        //3. Operators can be used at any point to operate different code on the samevalues
        var multiply = x * y; // should log 15
        var decrement = x--;// should decrease x by 1, logs 2
        