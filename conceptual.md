### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Using async/await we can handle asynchronous code to pause execution of code while the promise waits to resolved. 

- What is a Promise?
  A promise is a javascript object that is pending to resolve based off of the asynchronous code that is running. 

- What are the differences between an async function and a regular function?
  Async functions return promises and the code waits for the promise to resolve. 
- What is the difference between Node.js and Express.js?
  Node.js allows you to execute javascript code server side. Express.js is a web framework for node.js. 
- What is the error-first callback pattern?
  Error-first callback pattern is used in node.js to pass errors and results in callback functions. 
- What is middleware?
  Middleware is software that is nested between application and the server to interact and modify requests and responses. 

- What does the `next` function do?
  The next function is used to move to the next middleware function in the stack.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  The code could be more efficient by using Promise.all instead of using await for each line. 
  We could also add error handling to this function.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
