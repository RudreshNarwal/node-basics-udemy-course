/*  ------Example1-----------------

What is a closure?
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing)
function’s variables — a scope chain. Basically, inner function  preserve outer function variables.

* The closure has three scope chains:
-it has access to its own scope — variables defined between its curly brackets
-it has access to the outer function’s variables
-it has access to the global variables

Eg:::
  function outer() {
   var b = 10;
   function inner() {     
         var a = 20; 
         console.log(a+b);
    }
   return inner;
    }
    var X = outer(); 
    var Y = outer(); 
    //end of outer() function executions
    X(); // X() invoked the first time   ----> o/p : 30
    X(); // X() invoked the second time ----> o/p : 30
    Y(); // Y() invoked the first time  ----> o/p : 30

  * Here we have two functions:
    - an outer function outer which has a variable b, and returns the inner function
    - an inner function inner which has its variable called a, and accesses an outer variable b, within its function body
    
   * The scope of variable b is limited to the outer function, and the scope of variable a is limited to the inner function.
    
   Let’s see step-by-step what happens when the outer() function is first invoked:
   1. Variable b is created, its scope is limited to the outer() function, and its value is set to 10.
   2. The next line is a function declaration, so nothing to execute.
   3.On the last line, return inner looks for a variable called inner, finds that this variable inner is actually a function,
    and so returns the entire body of the function inner.
    [Note that the return statement does not execute the inner function — a function is executed only when followed by () — ,
     but rather the return statement returns the entire body of the function.]
    The contents returned by the return statement are stored in X.
    Thus, X will store the following:
    function inner() {
    var a=20;
    console.log(a+b);
    }
    Function outer() finishes execution, and all variables within the scope of outer() now no longer exist. 

   
    Thus, when outer() is invoked the second time:
    1. A new variable b is created, its scope is limited to the outer() function, and its value is set to 10.
    2. The next line is a function declaration, so nothing to execute.
    3. return inner returns the entire body of the function inner.
    4. The contents returned by the return statement are stored in Y.
    5. Function outer() finishes execution, and all variables within the scope of outer() now no longer exist.

    Let us examine step-by-step what happens when X() is executed the first time:
     1. Variable a is created, and its value is set to 20.
     2. JavaScript now tries to execute a + b. Here is where things get interesting. 
     3. JavaScript knows that a exists since it just created it. However, variable b no longer exists. 
        Since b is part of the outer function, b would only exist while the outer() function is in execution.
        Since the outer() function finished execution long before we invoked X(), any variables within the 
        scope of the outer function cease to exist, and hence variable b no longer exists.

     Closures:-
        The inner function can access the variables of the enclosing function due to closures in JavaScript. 
        In other words, the inner function preserves the scope chain of the enclosing function at the time the
        enclosing function was executed, and thus can access the enclosing function’s variables.
        In our example, the inner function had preserved the value of b=10 when the outer() function 
        was executed, and continued to preserve (closure) it.   

     So the inner function has three scope chains:
       1. access to its own scope — variable a
       2. access to the outer function’s variables — variable b, which it enclosed
       3. access to any global variables that may be defined   

*/

/* 
--------Example2------------------
function outer() {
var b = 10;
var c = 100;
   function inner() {
        
         var a = 20; 
         console.log("a= " + a + " b= " + b);
         a++;
         b++;
    }
   return inner;
}
var X = outer();  // outer() invoked the first time
var Y = outer();  // outer() invoked the second time
//end of outer() function executions
X(); // X() invoked the first time
X(); // X() invoked the second time
X(); // X() invoked the third time
Y(); // Y() invoked the first time

output:::
When you run this code, you will see the following output in the console.log:
a=20 b=10
a=20 b=11
a=20 b=12
a=20 b=10

*/