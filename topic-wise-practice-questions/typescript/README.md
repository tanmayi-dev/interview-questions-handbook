# TypeScript

[Questions with Solutions](./solutions.md)

- What is the difference between JavaScript and TypeScript ?
- Why to use TypeScript and how does it help us ?
- Explain concept of immutability
- Why should we avoid using `any` ?
- What is the difference between `type` and `interface` ?
- What is a `union` type ?
- What are Generics ? and how they are useful in ts ?
- What is the difference between `any` and `unknown` ?
- What is a `discriminated uion` ?
- Explain the concept of `overcasting`
- Why is a `Type Guard` function ?
- What is `void` and `any` types ?
- Difference between `extends` and `implements`
- Difference between `any`, `unknown`, `never` and `void`
- What cool features of typescript do you like ?
    - Contracts - good answer 
- Unions and Type Discrimination - [refer](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)
    - [Coding Task : TypeScript - type discrimination](../coding-tasks/coding-task-type-discrimination.md)
        - write correct typing for the following JSON response.
        - log user permissions for admin users, otherwise log user friends. Should be strictly type safe, without e.g. `as`
- Utility Types - [refer](https://www.typescriptlang.org/docs/handbook/utility-types.html)
    - Which ones do you use regularly ? Do you implement new type constructors yourself ?
    - Ask to explain difference between e.g., Omit and Exclude   
- [Version Bumping Coding Question](./coding-tasks/version-bumping.md)
    ```ts
    /**
     * Version Bumping
     * Write a function that gets a version as input in this template [0-9].[0-9].[0-9].[0-9] (example: 1.8.3.4) and bumping it by 1. Means: 1.8.3.4 => 1.8.3.5, 1.2.3.9 => 1.2.4.0 etc…
     * You can assume the input will be valid and you can ignore 9.9.9.9 case.
     */
    
    function bumpUpVersion(version: string) {
      // ...
    }
    
    console.log(bumpUpVersion('1.8.3.4'), '<-- 1.8.3.5');
    console.log(bumpUpVersion('0.0.3.4'), '<-- 0.0.3.5');
    console.log(bumpUpVersion('1.8.3.9'), '<-- 1.8.4.0');
    console.log(bumpUpVersion('1.9.9.9'), '<-- 2.0.0.0');
    ```
- [Timeouts Coding Question](./coding-tasks/timeouts.md)
  ```ts
  // In what order will the numbers 1-4 be logged
  // to the console when the code below is executed? Why?
  
  (function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
  })();

  ```
