const me = "Rudresh";

me = "Rudresh Narwal" // will throw an error

const colors = ["Red", "Green", "Yellow", "Blue"];

colors[0] = "Orange"; // will update the list to [ 'Orange', 'Green', 'Yellow', 'Blue' ]


console.log(colors);


const testMap = {
    'ABC' : 'abc'
};

testMap['ABC'] = 'def'; // will update map to { ABC: 'def' }

console.log(testMap);


/*
The documentation states:

...constant cannot change through re-assignment
...constant cannot be re-declared

When you're adding to an array or object you're 
not re-assigning or re-declaring the constant, 
it's already declared and assigned, you're just 
adding to the "list" that the constant points to.
*/