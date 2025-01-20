# JavaScript Questions

- [Js Visualized](https://dev.to/lydiahallie/series/3341)
- [lydia hallie](https://www.lydiahallie.io/)
- [fe interview questions](https://github.com/khan4019/front-end-Interview-Questions)

#### Index

- [JS Questions](#questions)
- [JS Questions with Solutions](./solutions.md)
- [Coding Questions](./coding-questions/README.md)


## JS Questions <a id="questions"></a>

- Explain Hoisting in js
- Difference between primitive data types and non-primitive data types
- What are the distinctions among the keywords `var`, `let` and `const` ?
- Difference between `let` and `var` keywords
- What is `optional chaining` ? and what problem does it solve ?
- What is `spread` operator and when do we use it ?
- What is `template literal`?
- What is `null coalescence` operator ?
- Promises and Async Functions
  - Difference between `promise` and `async/await`
  - Explain `promise chaining` in javascript
  - Async error handling
  - [Coding Task : Promise / RxJs - Parallel Network Requests](./coding-tasks/promise-rxjs-parallel-network-requests.md)
    - Write a code that makes multiple requests to the server in parallel and returns all results at once
    - Support proceeding even if some request fail, still return data from the rest
    - Rewrite it with RxJS instead of promises
- How does javascript figure out that a promise is resolved ?
- Difference between `async` and `defer`
- How to delete property-specific values ?
- What is negative inifinity ?
- What is `strict` mode in JS and how can it be enabled ?
- Explain `call`, `apply` and `bind`
- Explain `filter`, `map` and `reduce`
- Write a polyfill of a `reduce` function
- Pure Functions
  - What is a pure function ?
  - Why is it important ?
  - Is `Math.random()` pure ? 
- Arrow Functions
- What are Generator Functions ?
- What is `yield` operator ?
- Explain Event Bubbling and DOM
- Explain Event Loop in JS
  - How setTime and promises are queued
- What is ECMAscript ? Can you name 3 new features added to JS between 2015 to 2022 ?
- How would you create a private variable in javascript ?
- Explain Currying in javascript
- What is Closure ? Provide an example
- Implement Function.prototype.bind polyfill
- Prototypal Inheritance in javascript and how does `prototype chain` works ?
- Difference between TypeScript and JavaScript
- Explore Debounce and Throttle in js
- Explain Garbage Collection and Memory Leaks
  - Ask to provide examples
- Explain Recursion and its limitations
- Composition vs Inheritance
- Ask to explain any OOP or SOLID Principle with code examples
- What happens if you have two functions with same name and same number of arguments and same return type ?
- What will happen to DOM tree if some issue happens in the script tag ?
  ```js
  <body>
    <script src="index.js">
    <div>
    </div>
  </body>
  ```
- Guess the output
  ```js
  const work = "hello";
  word[1] = "m";
  console.log(word); // hello, strings are immutable
  ``` 
- Guess the output
  ```js
  console.log(a); // Uncaught ReferenceError: a is not defined

  const a = 1; 
  ```
-  Is the code given below valid? If yes, what property of JS does it use?
  ```js
  // valid code - Hoisting
  x = 5; // Assign 5 to x
  elem = document.getElementById("demo"); // Find an element
  elem.innerHTML = x; // Display x in the element

  var x; // Declare x
  ```
- Is this function correct or incorrect js
  ```js
  const arr = [1,2,3]
  arr.forEach(function(val) {
    if(val%2 === 0) {
      break;
    }
    console.log(val);
  })
  ```
- What is the output for each of the following ?
  ```js
  > -1/0
  > 1/0
  > -Infinity - Infinity
  > -Infinity + Infinity
  > Infinity - 1
  ```

---


