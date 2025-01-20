### Coding <a id="coding"></a>

The candidate uses the IDE of their choice and shares the screen. They should be in an environment where they can run the tests, either in Node or a web browser.

When it's time to code, paste a description of the problem into Chat so that the candidate can copy it into their IDE. Give them a couple of minutes to read and understand it. When they're ready to start, encourage them to verbalize their thoughts and to ask questions.

Here's a question we use:

```js
/*
Write a function that determines whether a string has balanced
pairs of (), [], and {}. Balanced pairs are matching pairs such
that for each left-hand character there is a corresponding
right-hand character, and only balanced pairs between them.
Balanced strings: "(a{b[c]d}e)" "(a)(b)[c]" "[()()]{}" ""
Unbalanced strings: "(a{b)c}" "((a)" ")[b]"
*/

function isBalanced(input) {
  // Your code goes here
}

function runTests() {
  console.log("Running Tests...");

  const runTest = (input, expected) => {
    const passed = isBalanced(input) === expected ? "Passed" : "Failed";
    console.log(passed + "(expected " + expected + "): " + input);
  };

  runTest("((a)[(b){c(d)}]){e}", true);
  runTest(")", false);
  runTest("a(b[c)d]", false);
  runTest("(a)(b)[c{d}e]", true);
  runTest("(a)(b)[c{de]", false);
  runTest("((((", false);
  console.log("Done.");
}

runTests();
```

## Development Questions <a id="devQues"></a>

### D1: (We are skipping this question for now) What are your thoughts about JavaScript as compared to other languages? What are some of the pros and cons of its differences? Feel free to guide candidate toward discussion of the following:

- Weak typing vs Strong typing

  - Strong typing lets the compiler catch errors. Weak typing can be faster and easier to develop with.

- Interpreted vs compiled

  - Interpreted languages are generally easier to debug, but you won't see errors until you try to run your code (there is no compiler to catch errors).

- Single-threaded vs multi-threaded

  - Single-threaded is simpler as there aren't concurrency issues, but a single thread can block the app. Bonus: web workers

- Frameworks and libraries
  - JavaScript has a gazillion frameworks/libraries, and they come and go. At least with Java you know which one to use.

### D2: What JavaScript frameworks/libraries have you used?

- What do you like or not like about them?

### D3: What are some ways to improve a webapp's performance?

- Reduce number of requests
- Move heavy work to server
- Efficient code, eg memoization
- On-demand loading of packages
- Minification/compression of resources and assets
- Virtual DOM or anything that reduces DOM writes such as batching updates
- Image spriting
- Web sockets to remove need to poll

### D4: What are some security concerns for webapps? How are they mitigated?

- Same-origin policy (mitigation)
- XSS (cross-site scripting) : Attacker arranges for JavaScript to be run in victim's browser. Need to sanitize any untrusted input.
- CSRF (cross-site-request-forgery) : Attacker gets victim's browser to make request that performs an action on another site. Can use CORS or add a token/crumb that the client must return.

### D5: Describe the process used to add a new feature to a product, including all teams and roles involved.

Possible process: PM creates requirements, designer creates mockup, senior engineers design solution including negotiating server API if needed, test plan created development done, QA does testing and signs off, support trained, RE (release engineering) pushes feature out. A possible twist for this question is to ask about what the candidate would do in a fast-paced start up environment where all of these teams aren't necessarily in place.

## Algorithms <a id="algo"></a>

### A1: Find an equivalent node in two trees

Given identical trees A and B, there is a node X in tree A. How would you find the equivalent node Y in tree B? Notes: These are generic trees, not DOMs. Data is not unique to each node. Nodes do not have pointers to their parent nodes. All you have to start with are pointers to A, B, and X.

- Traverse each tree in parallel. When pointer in A reaches X, pointer in B has found Y.
- Traverse A to find X. Record the path and play it back in B.
- Flatten each tree and find the index of X in A. Y will be at the same index in B.

## Technical - Frontend Development <a id="technical"></a>

### T1: Describe the differences between classic and prototypical inheritance, with examples.

Classic (Java, C++): Blueprint, top-down, compile-time. Prototypal (JavaScript): Composition via object instances, bottom-up, prototype chain, run-time.

### T2: What's the difference between reflow and repaint?

Give some examples of when each would happen. Which is more expensive?

Reflow requires the browser to redo the layout and is more expensive. It will happen when an element is added or removed, or its size changes. Repaint does not require a new layout, and happens when something like a background color is changed.

### T3: (We are skipping this question for now) What is the difference between == and ===?

`==` is loose equivalence, and does type coercion following certain rules. `===` is strict equivalence, where the two values must be equal and of the same type.

### T4: What data types does JavaScript support?

number, string, boolean, null, undefined, object, and symbol (okay to omit this last one)

### T5: What are `call()`, `apply()`, and `bind()`?

`call()` and `apply()` run a function in the given scope with the given arguments. call() takes an argument list, `apply()` takes an array. `bind()` creates a closure with the given scope and arguments, and returns a function.

### T6: What are closures? Why are they useful?

A closure is an inner function that has access to (closes over) the variables and arguments that were in scope when it was created. It can be used for name-spacing / data hiding / private variables, currying (partial application) / function factories, object literal notation, IIFE (immediately invoked function expression), etc.

### T7: What is the DOM?

Document Object Model. A tree structure used by the browser to represent a web page / HTML document, and that can be manipulated via JavaScript.

### T8: What is event bubbling? How do you control it?

Event bubbling starts at the target node, which is checked for handlers, and then proceeds to the target's parent, and so on up to the root node. It can be halted by calling stopPropagation() on the event. Bonus points for mentioning the capture phase.

### T9: What is event delegation? Why use it?

Event delegation is setting a handler on a higher-level container element rather than on many child elements. That way the number of handlers created is much smaller. The element in which the event happened is available in the event's 'target' property.

### T10: How is data typically retrieved by a webapp?

An instance of XmlHttpRequest (provided by the browser) is used to send a request over HTTP to the server, by calling `open()` and then send(). A callback is provided that will be run with the returned data, probably in JSON but possibly in XML.

### T11: What can you tell me about CSS specificity? What is !important?

Specificity in decreasing order: Inline styles; IDs; classes, attributes and pseudo-classes; elements and pseudo-elements.

Bonus for knowing some pseudo-classes (:hover, :focus, etc) and pseudo-elements (:before, :after, etc). !important causes a declaration to override all other applicable declarations, and breaks cascading. Use only with good reason.

### T12: What is REST? Name some REST verbs and when they would be used.

Representational state transfer, a system for describing a server API or collection of endpoints. REST verbs are HTTP methods. Typically, GET reads data, POST creates a record, PUT does an update, and DELETE removes a record.

Bonus for tying methods to CRUD (create, read, update, delete).

### T13: What are promises in JavaScript? How do they work? Why use them?

A promise represents a value that will be returned later by an asynchronous operation. On creation, a promise takes as its argument a function with code to run (which is run immediately as promises are 'eager'). That function takes as arguments up to two functions: one to run if the code succeeds (the promise is resolved), and/or one to run if the code fails (the promise is rejected). A promise that has not been resolved or rejected is pending. Promises have a then()method (are 'thenable'), so they can be chained. They are useful because they get you out of callback hell, where a series of one or more asynchronous calls buried deep in function calls results in a deeply nested stack of callbacks being passed down and back up the chain.

## React <a id="#react"></a>

### R1: How is React different from other similar frameworks?

JSX vs templates, two-way data binding vs one-way data flow, DOM manipulation, less opinionated (framework vs library), community and innovation.

### R2: Explain how React code actually results in visual changes on the user's browser in as much detail as possible.

JSX is transpiled into vanilla javascript which calls internals from the React library (Bonus for mentioning any of these internals such as React.createElement or ReactDOM.render). The React internals track updates to state, context, and props to decide when components need to render. Rendering means using the React code written by the developer to construct a Virtual DOM. The Virtual DOM is then compared with the actual DOM using React's reconciliation or diffing algorithm to decide the minimum changes that need to be applied to the actual DOM. Finally, the necessary changes are actually applied in a targeted way with browser/DOM internals.

### R3: What are hooks and why did the React team develop them?\*\*

Hooks are an abstraction for stateful logic and side effects in functional react components. They replace the lifecycle methods in React class components. Hooks allow for a more functional style of programming; they are reusable and composable across components.
