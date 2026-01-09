1) Difference between var, let, and const
    var, let, and const are used to declare variables in JavaScript, but they work in different ways.

   var is the older method and it is function-scoped, meaning it is available throughout a function. It can be redeclared and changed, which can cause problems.

   let is block-scoped, so it works only inside a block such as a loop or an if statement. It can be changed but not redeclared in the same scope.

   const is also block-scoped, but its value cannot be changed after it is assigned. It is used for fixed values.

2) Difference between map(), forEach(), and filter()

  These are all array methods, but they are used for different purposes.

  forEach() is used to go through each element of an array and perform an action. It does not create a new array.

  map() creates a new array by changing each element.

  filter() creates a new array by selecting only the elements that match a condition.

 3) What are arrow functions in ES6?

    Arrow functions are a modern and shorter way of writing functions introduced in ES6.
    They make the code easier to read and write, especially for small functions.
    They are commonly used in modern JavaScript.

4) How does destructuring assignment work in ES6?

   Destructuring assignment allows you to take values from arrays or objects and store them into separate variables in a simple way.
   It helps reduce repetition and makes the code cleaner and easier to understand.
   
5) What are template literals and how are they different from string concatenation?

  Template literals are a type of string written using backticks.
  They allow you to place variables directly inside a string, making it easier to create dynamic text.
  String concatenation requires joining strings and variables using plus signs, which is harder to read.
  Template literals are clearer, especially when working with longer strings or multiple values.

