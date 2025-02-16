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
- [Functional Programming](#func-prog)
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

#### Primitive vs Object

- explain differences, name a few examples
- how are primitives and objects stored in memory ?
- can you change a string ?
- if you create a lot of the same strings, will they consume more memory ? 

#### Operators

- name a few examples of unary, binary and ternary operators
- difference between `==` and `===`
- spread / rest syntax `...` - list applications
- difference between `??` and `||` 

#### Data Structures
  
- list data structures native to JS
  - array, object, Set, Map, WeakSet, WeakMap, TypedArray 
- name a few data structures that are not native in JS, but can still be achieved
  - stack, queue, linked list, graph, binary tree, ...
- explain difference between array and Set, between object and Map 

#### Big-O notation
  
- definition
- some examples of complexities in Big-O notation
- provide a few examples of algorithms with O(1), O(log n), O(n), O(n^2) complexities

#### OOP

- name 4 principles of OOP (encapsulation, abstraction, inheritance, polymorphism)
- explain any of the SOLID principles
- explain OOP in modern Javascript, and in modern frontend development; do you use OOP yourself ?

#### Functions
  
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
- explain `bind`, `call`, `applly`
- explain **Immediately Invoked Function Expresssions (IIFE)**
- explain **generator** functions

#### Asynchronous executions
  
- explain difference between **synchronous** and **asynchronous** execution
- explain **promises**
  - difference from callback-style programming
  - **states** of a promise (pending, fulfilled, rejected)
  - **methods** on a promise (`then`, `catch`, `finally` with explanations)
  - describe differences between `Promise.all`, `Promise.allSettled`, `Promise.race`, `Promise.any`
  - is it acceptables to pass an async function to promise executor ? (no, because it creates a [deferred anti-pattern](https://stackoverflow.com/questions/23803743/what-is-the-explicit-promise-construction-antipattern-and-how-do-i-avoid-it/23803744#23803744))
  - Coding Task : [Promise/RxJs - parallel network requests](https://github.com/tanmayi-dev/interview-questions-handbook/blob/main/coding-tasks/promise-rxjs-parallel-network-requests.md)
    - write a code that makes multiple requests to the server in parallel and returns all results at once
    - support proceeding even if some request fail, still return data from the rest
    - error handling

- Explain **async/await** and differences from promises

#### Event Loop

- Explain **event loop**
  - differences between **call stack** and **event queue**
  - interaction with `setTimeout`, `setInterval`, promises
  - how does even loop handle asynchronous code ?
  - explain **non-blocking I/O**, examples
  - explain **stack overflow** error
  - `requestAnimationFrame`    
- Can you describe how the JavaScript even loop works ?
- Can you explain the difference between the task queue and the microtask queue in JavaScript ?
- What will be the output ?
    ```js
    console.log('Start');

    setTimeout(() => {
      console.log('Task Queue: setTimeout');
    }, 0);

    Promise.resolve()
      .then(() => {
        console.log('Microtask Queue: Promise 1');
      })
      .then(() => {
        console.log('Microtask Queue: Promise 2');
      });

    queueMicrotask(() => {
      console.log('Microtask Queue: queueMicrotask');
    });

    console.log('End');
    ``` 

#### Memory management

- explain **garbage collection** in JavaScript
- explain **memory leaks**
  - how can memory leaks occur ?
  - how do closures affect memory issues ? and even listeners ?
  - what are common causes for memory leaks in modern JS applications ? how to avoid them ?
  - how would you produce a memory leak in a React application on purpose ?
- difference between **stack** and **heap** memory
- how do you usually **debug** memory issues ?
- explain `WeakMap`, `WeakSet`    

#### Web Storage API

- Can you list the Web Storage APIs that you are familiar with API ? (local storage, sessions storage, indexedDb, WebSQL, Cookies, Cache Storage (service workers))
- Can you explain the difference between local storage and session storage


---

## Functional Programming <a id="func-prog"></a>

- Explain **key principles** of functional programming
    - **immutability** : data can't be changed after creation
    - **pure functions** : no side-effects
    - **first-class functions** : functions as values, function composition
- Which are other, **alternative paradigms** ? How are they different ?
    - mentions of imperative/procedural programming, OOP
- Explain **Higher Order Functions**
- Explain function **currying**

#### Pure Functions

- Explain what makes a function **pure**
    - no side effects, deterministic, uses only passed arguments
- Explain what are **side effects** in a function
- What do pure functions achieve ? Can we write a program using just pure functions ?
- Is function that just returns **current date** pure ? and **Math.random** ? 
    - Can pure function call impure function ?
- Where do you use pure functions in your work ?

 ### Immutability

 - Explain immutability
 - Explain **advantages** and **drawbacks** of immutability
   - Advantages : predictability, easier to debug, easier to optimize, safe for asynchronous flows
   - Drawbacks : performance overhead
   - Explain why for each of advantages and drawbacks
 - Explain differences in **memory usage** between programs using mutable and immutable data

---

## TypeScript <a id="ts"></a>

#### Basics

- Explain **generics** (type constructors)
- Describe differences between **type** and **interface**
- Difference between **array** and **tuple** types
- **union** `|` and **intersection** `&`
- `as` type assertion, issues
- type guards
  - `typeof`, `instanceof`
  - **discriminated unions** [doc](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions)
- [Coding Task - Typescript - type discrimination](https://github.com/tanmayi-dev/interview-questions-handbook/blob/main/coding-tasks/typescript-type-discrimination.md)
  - write correct typing for the JSON response
  - log user permissions for admin users, otherwise log user friends. should be strictly type safe
  - how to narrow types wihtout explicit discriminators
    - expected : custom type guards with `is`  
- explain `as const`
- explain `satisfies`, when would you use it instead of `as` ?
- name a few [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html). Which ones do you use more often ? Explain differences between `Omit` and `Exclude`, `Pick` and `Extract`
- explain `abstract class`
- What does an interface transpile into in TypeScript ?
- What are differences between `unknown` and `any` types in TypeScript ? When should you use `unknown` instead of `any` ?
- What is the purpose of `never` type in TypeScript ? Can you provide an example of a function that returns `never` ?

#### Advanced

- What are Conditional Types ?
- What are utility types in TypeScript ?
- 
---


## React <a id="react"></a>

---


## Backend Related <a id="be"></a>

---


## Web Performance <a id="web-performance"></a>

---


## Coding Questions <a id="coding"></a>

---
