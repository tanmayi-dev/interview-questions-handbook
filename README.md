# Interview Questions Handbook - Last Minute Guide

[SOLUTIONS](https://github.com/tanmayi-dev/interview-practice-questions/tree/main)

These are just questions for last minute preparation without the solutions.
Solutions can be found in the folder - links will be added under each question

- [Fundamental Programming Concepts](#prog-concepts)
- [HTTP / Networks](#http)
- [HTML](#html)
- [Accessibility](#a11y)
- [CSS / SCSS](#css)
- [JavaScript](#js)
- [TypeScript](#ts)
- [React](#react)
- [Backend Related](#be)
- [Web Performance](#web-performance)
- [Coding Questions](#coding)


## Fundamental Programming Concepts <a id="prog-concepts"></a>

---

## HTTP / Networks <a id="http"></a>

---


## HTML <a id="html"></a>

---


## Accessibility <a id="a11y"></a>

---


## CSS / SCSS <a id="css"></a>

---


## JavaScript <a id="js"></a>

- List JS data types you know
  - primitives (string, number, boolean, undefined, null, symbol, bigint)
  - objects (regular object, array, function, date, regex) 
- Primitive vs Object
  - explain differences, name a few examples
  - how are primitives and objects stored in memory ?
  - can you change a string ?
  - if you create a lot of the same strings, will they consume more memory ? 
- Operators
  - name a few examples of unary, binary and ternary operators
  - difference between `==` and `===`
  - spread / rest syntax `...` - list applications
  - difference between `??` and `||` 
- Data Structures
  - list data structures native to JS
    - array, object, Set, Map, WeakSet, WeakMap, TypedArray 
  - name a few data structures that are not native in JS, but can still be achieved
    - stack, queue, linked list, graph, binary tree, ...
  - explain difference between array and Set, between object and Map 
- Big-O notation
  - definition
  - some examples of complexities in Big-O notation
  - provide a few examples of algorithms with O(1), O(log n), O(n), O(n^2) complexities
- OOP
  - name 4 principles of OOP (encapsulation, abstraction, inheritance, polymorphism)
  - explain any of the SOLID principles
  - explain OOP in modern Javascript, and in modern frontend development; do you use OOP yourself ?
- Functions
  - difference between **regular** function and **arrow** function
    - `this` binding, `arguments`, being a constructor, implicit return
    - explain `this`;
    - explain the difference between using regular and arrow function as a class method
  - different between function **declaration** and **expression**
  - explain **closures**
  - explain **memoization** in relation to functions
    - [memoize - StackBlitz](https://stackblitz.com/edit/vitejs-vite-8t3zqayb?file=src%2Fmain.js)
      ```js
      function memoize(fn) {
        const cache = {};

        return (...args) => {
          const key = JSON.stringify(args);

          if (cache[key] === undefined) {
            cache[key] = fn(...args);
          }

          return cache[key];
        };
      }
      ```
  - explain **recursion**
    - limitations; which error is thrown when recursion reaches limit of the stack ?
    - tail call optimizaiton 
- Asynchronous executions
- Memory management
- Web Storage API
- Event Loop 

---



## TypeScript <a id="ts"></a>

---


## React <a id="react"></a>

---


## Backend Related <a id="be"></a>

---


## Web Performance <a id="web-performance"></a>

---


## Coding Questions <a id="coding"></a>

---
