/*
In JavaScript there’s two kinds of scope: 
1. function-scope 
2. block-scope


1. Function-scope:::::
        function myFn() {
        var foo = 'peekaboo!';
        
        console.log(foo); // 'peekaboo!'
        }

        console.log(foo); // ReferenceError: foo is not defined

        Note: Using var, variables are function-scoped because their visibility is limited to the function. 
        When you try to use it outside of the function, you’ll get an error.

2. Block-scope::::
    if (true) {
        var foo = 'peekaboo!';
        let bar = 'i see u';
        const baz = 'baby blue!';

        console.log(foo); // 'peekaboo!';
        console.log(bar); // 'i see u';
        console.log(baz); // 'baby blue!';
        }

    console.log(foo); // 'peekaboo!';
    console.log(bar); // ReferenceError: bar is not defined
    console.log(baz); // ReferenceError: baz is not defined

    Note:: Notice the visibility of foo isn’t limited by the if-statement block. 
           However, both bar and baz are limited in visibility to the block of code.


 
 a.  var::  - var declarations are globally scoped or function/locally scoped.
            - var variables can be re-declared and updated
           
     Eg::    
                for (var i = 0; i < 3; i++) {
                console.log(i);
                }

                console.log(i);

            o/p::  // 0
                    // 1
                    // 2
                    // 3    

     * Hoisting of var::: - Hoisting is JavaScript's default behavior of moving declarations to the top.
                         - In JavaScript, a variable can be declared after it has been used.
                         - In other words; a variable can be used before it has been declared.

                         x = 5; // Assign 5 to x
                        console.log(foo); // Display x
                        var x; // Declare x

            Using a let or const variable before it is declared will result in a ReferenceError.
                  carName = "Volvo";
                  console.log(carName); //ReferenceError
                   let carName;
     
    * Problem with var::: 
                      var greeter = "hey hi";
                        var times = 4;
                        if (times > 3) {
                            var greeter = "say Hello instead"; // greater is reassigned
                        }
                        console.log(greeter) // "say Hello instead"    
                        
                        
b.   let::: - let is block scoped.   
            - It also solves the problem with var that we just covered.
            
        eg:: 
            1. for (let i = 0; i < 3; i++) {
                console.log(i);
                }

                console.log(i);

                o/p::   // 0
                        // 1
                        // 2
                        // ReferenceError: i is not defined 
               
            2.  var greeter = "hey hi";
                        var times = 4;
                        if (times > 3) {
                            var greeter = "say Hello instead"; // greater is reassigned
                        }
                        console.log(greeter) // "hey hi"      
                        
c. const::: - const declarations are block scoped
            - const cannot be updated or re-declared

            const testMap = {
                'ABC' : 'abc'
            };

            testMap['ABC'] = 'def'; // will update map to { ABC: 'def' }

            console.log(testMap);


            The documentation states:
            ...constant cannot change through re-assignment
            ...constant cannot be re-declared
            When you're adding to an array or object you're 
            not re-assigning or re-declaring the constant, 
            it's already declared and assigned, you're just 
            adding to the "list" that the constant points to.
        
                          
*/