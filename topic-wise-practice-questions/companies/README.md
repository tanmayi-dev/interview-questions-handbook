## Two paradigms of javascript

- JavaScript supports both **object-oriented programming with prototypal inheritance** as well as functional programming.

**Procedural Programming:**

- Focuses on using functions to group together a set of instructions.
- Emphasizes the order in which functions are executed to accomplish tasks.
- Variables are often global or local to functions.
- Example: Writing a series of functions to perform specific tasks sequentially.

```js
function calculateTax(income) {
  // Perform tax calculation
  return income * 0.15;
}

function displayResult(amount) {
  console.log("The calculated tax is: " + amount);
}

const income = 50000;
const taxAmount = calculateTax(income);
displayResult(taxAmount);
```

**Object-Oriented Programming (OOP):**

- Organizes code into objects that bundle together data and related behavior.
- Utilizes concepts like classes, objects, inheritance, and encapsulation.
- Encourages reusable and modular code by promoting the creation of classes and objects.
- Example: Defining classes and creating instances to model real-world entities.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.
```

**Functional Programming:**

- Treats computation as the evaluation of mathematical functions.
- Emphasizes the use of pure functions (output depends only on input) and avoids mutable data.
- Functions are first-class citizens, allowing them to be assigned to variables, passed as arguments, and returned from other functions.
- Supports higher-order functions, closures, and functional composition.
- Example: Using higher-order functions like map, filter, and reduce to process arrays.

**Event-Driven Programming:**

- Focuses on responding to events or user actions in an asynchronous manner.
- Utilizes event listeners and handlers to execute code in response to events.
- Commonly used in browser-based applications to create interactive user interfaces.
- Example: Registering event listeners to respond to user clicks or keyboard inputs.

**Imperative Programming:**

- Describes the steps and procedures needed to solve a problem.
- Focuses on explicitly defining how to achieve a desired outcome.
- Often combined with other paradigms, such as procedural or object-oriented programming.

**Declarative Programming:**

- Focuses on describing what should be achieved rather than how to achieve it.
- Encourages the use of higher-level abstractions and patterns.
- Promotes code readability and maintainability.
- Example: Using declarative constructs like HTML to define the structure of a web page.

## Prototype based programming

- Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object.

## Explain Prototypal Inheritance

Prototypal inheritance is a fundamental concept in JavaScript's object-oriented programming. In JavaScript, objects can inherit properties and methods from other objects, creating a prototype chain. Here's an example of prototypal inheritance in JavaScript:

```js
// Parent object constructor
function Animal(name) {
  this.name = name;
}

// Adding a method to the parent object's prototype
Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound.");
};

// Child object constructor
function Dog(name, breed) {
  // Call the parent constructor
  Animal.call(this, name);
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a method to the child object's prototype
Dog.prototype.bark = function () {
  console.log(this.name + " barks.");
};

// Create instances
const dog1 = new Dog("Buddy", "Labrador");
const dog2 = new Dog("Max", "Golden Retriever");

// Using inherited methods
dog1.speak(); // Output: Buddy makes a sound.
dog2.speak(); // Output: Max makes a sound.

// Using child-specific methods
dog1.bark(); // Output: Buddy barks.
dog2.bark(); // Output: Max barks.
```

## What are pure functions

- Always produces the same output for the same input.
- No side effects: It doesn't modify external state or interact with the outside world.
- Deterministic behavior: The result is entirely predictable and consistent.
- Benefits of pure functions: Easier to reason about, test, and maintain.

```js
// Pure function example

function add(a, b) {
  return a + b;
}

const result1 = add(3, 5); // Result: 8
const result2 = add(3, 5); // Result: 8 (always the same)
```

```js
// Impure Function

// An impure function is a function that can produce different outputs for the same inputs or has side effects like modifying external state.

let total = 0;

function addToTotal(amount) {
  total += amount;
  return total;
}

const result3 = addToTotal(10); // Result: 10
const result4 = addToTotal(10); // Result: 20 (different output for the same input)
```

## What are Higher Order Functions

Higher-order functions are a concept in functional programming where functions can accept other functions as arguments and/or return functions as results.

- these functions treat functions as first-class citizens, enabling powerful and flexible programming paradigms.

Key characteristics of higher-order functions:

- Functions as Arguments: Higher-order functions can take one or more functions as arguments.
- Functions as Return Values: Higher-order functions can return new functions as their results.
- Abstraction and Reusability: They enable abstraction by allowing you to encapsulate behavior in functions and pass them around.
- Composition: Higher-order functions can be used to compose new functions by combining existing ones

```js
// Higher Order Function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10 (2 * 5)
console.log(triple(5)); // Output: 15 (3 * 5)
```

## What is hoisting ?

Hoisting is a JavaScript behavior where variable and function **declarations** are moved to the top of their containing scope during the compilation phase, regardless of where they are defined within that scope. This means you can use variables and call functions before they are declared in the code.

## Below is a code snippet. Explain the error and give the correct way to write it

```js
hello(); // Output: "Hello, world!"

function hello() {
  console.log("Hello, world!");
}

goodbye(); // Output: Uncaught TypeError: goodbye is not a function

var goodbye = function () {
  console.log("Goodbye, world!");
};
```

- hello function is hoisted
- var goodbye is hoisted and initialized with **undefined**
- goodbye() gives TypeError

Below is the solution

```js
hello(); // Output: "Hello, world!"

const hello = () => {
  console.log("Hello, world!");
};

goodbye(); // Output: "Goodbye, world!"

// make into arrow function
const goodbye = () => {
  console.log("Goodbye, world!");
};
```

## What are first class functions

- A programming language is said to have First-class functions when functions in that language are treated like any other variable.
- For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

e. Tell the rules of react hooks
f. Which redux do you use?
g. What did you use in Nodejs
h. What is rest api? Different between PUT, PATCH, POST
i. What is docker and explain what ever you know about docker
j. What do you know about kubernetes
k. Calculate the dog age in human years using the following formula: if the dog is <= 2 years
old, humanAge = 2 _ dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge _ 4.
/_Calculate the dog age in human years using the following formula: if the dog is <= 2
years old, humanAge = 2 _ dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge

- 4.  Exclude all dogs that are less than 18 human years old (which is the same as keeping
      dogs that are at least 18 years old)
      Calculate the average human age of all adult dogs
      Create this as one function and run for both test datasets
      TEST Data 1: [5,2,4,1,15,8,3]
      TEST Data 2: [16,6,10,5,6,1,4]
      \*/
      testData1 =[5,2,4,1,15,8,3]
      testData2 = [16,6,10,5,6,1,4]
      console.log('Output1',CalculateAge(testData1));
      console.log('Output2',CalculateAge(testData2));
      l. How to achieve immutability for objects
      m. Explain Closures
      n. Do you use Enzyme for unit testing?
      o. GHA - CI CD Pipeline
      p. Difference between Deep Copy and Shallow Copy
      q. Why Reactjs is fast in its performance?
      r. Context API in react

b. Temp Table vs Table variable
c. ArrayList vs LinkedList

## How does Memory management in c# work

Memory management in C# is primarily managed by the Common Language Runtime (CLR), which is responsible for allocating and deallocating memory for objects, tracking references, and performing garbage collection. Here's an overview of how memory management works in C#:

Managed Memory Allocation: In C#, you use the new keyword to allocate memory for objects. When you create an object, the CLR allocates memory for it on the managed heap. The managed heap is organized into three segments: the young generation, the large object heap, and the free list.

Reference Counting: The CLR uses reference counting to keep track of how many references exist to an object. When an object's reference count drops to zero, the object becomes eligible for garbage collection.

Garbage Collection (GC): The CLR performs automatic garbage collection to reclaim memory from objects that are no longer referenced or reachable. The .NET Garbage Collector periodically identifies and collects objects that are no longer in use. GC helps prevent memory leaks and ensures efficient memory usage.

Generational Garbage Collection: The GC divides objects into three generations based on their age. Most objects start in the first generation (Gen 0). Objects that survive a collection are promoted to higher generations. This approach improves collection efficiency by focusing on short-lived objects.

Finalization: C# provides a mechanism for finalization using destructors (~ClassName). Finalizers are used to clean up unmanaged resources when an object is garbage collected. However, they can introduce performance and reliability issues. It's generally recommended to use the IDisposable pattern for resource management.

Memory Profiling: Tools like Visual Studio and third-party profilers allow you to analyze memory usage and identify memory leaks in your applications. These tools help you understand how memory is allocated, which objects are consuming memory, and whether there are any inefficiencies.

Memory Management Best Practices:

Utilize the using statement or IDisposable for deterministic cleanup of unmanaged resources.
Avoid keeping unnecessary references to objects to allow them to be garbage collected.
Minimize the use of finalizers and prefer the IDisposable pattern.
Be cautious with large objects that go directly to the large object heap.
Use memory profiling tools to identify and address memory-related issues.

e. Can you explain what is MVC bundling
f. What restful is and how it works
g. Threads vs Tasks in c#

## SOLID principles

S - single responsibility principle,
O - open-closed principle,
L - Liskov substitution principle,
I - interface segregation principle, and
D - dependency inversion principle.

j. Explain a bit about the life cycle of a project,
k. Describe what is OOA (Object Oriented Architecture).

## Condition that any OO Language must meet.

Basic OOP and programming questions.
b. Bubble sort, C# , SOLID basics
c. How do you override the implementation of the put() method in Hashmap for duplicate
keys?
d. What is the difference between a POST and PUT request?
e. What monitoring and logging do you use?
f. What is the concept of candidate key in sql? Link
g. Stored procedures, Joins and some questions based off of .NET/ C#
h. What are triggers
i. basic coding like factorial
j. Give some real-life examples of data structures
k. Basic SQL queries, printing fibonacci series using recursion, and questions of such
difficult
l. How is waterfall method different from RAD
m. They asked some algorithmic questions. And some DBMS, OOP, SDLC questions
n. Past projects and experiences
Define data engineering
b. Explain OOPS, DSA Basic Questions, Project review
c. List and string manipulation.
d. Joins in DBMS. Queries reg extracting relations between 2 tables
e. Printing the right and left diagonal of a 2D matrix, some SQL questions
f. how to remove duplication in a dataframe
g. what are ACID principles in designing database
h. describe row lock and table lock
