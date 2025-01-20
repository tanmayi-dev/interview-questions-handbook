# React


####  Side effects in render functions?
<details>
<summary>Answer</summary>
<p>

- useEffect - [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
  ```
    useEffect(() => {
      // Your side effect logic here

      return () => {
        // Cleanup logic here (optional)
      };
    }, [dependencies]);
  ```

  Effect Function:

The first argument to useEffect is a function where you can define your side effect.
This function runs after the component renders, allowing you to interact with the DOM or perform other operations.
Cleanup Function:

The effect function can return another function (the cleanup function). This cleanup function is called when the component unmounts or before the effect is re-run due to a dependency change.
It's commonly used to clean up subscriptions, timers, or any other resources that need to be released.
Dependency Array:

The second argument to useEffect is an array of dependencies. The effect will only run when the values in this array change.
If you provide an empty array ([]), the effect runs only once after the initial render, similar to componentDidMount.
If you omit the dependency array, the effect runs after every render, which can lead to performance issues if not used carefully.

<p>
</details>


####  useMemo?
<details>
<summary>Answer</summary>
<p>

- [good article by Josh Comeau](https://www.joshwcomeau.com/react/usememo-and-usecallback/)
- [useMemo](https://react.dev/reference/react/useMemo)

**useMemo**:
- It should be used for expensive calculations that don't need to be recomputed on every render.
- This can help improve the performance of your application by avoiding unnecessary recalculations.
- Use Cases :
  - Filtering or sorting large lists of data
  - Performing complex mathematical calculations - calculating prime numbers list
  - Generating unique IDs or tokens
  - Data in Context Providers

<p>
</details>




####  useCallback?
<details>
<summary>Answer</summary>
<p>

- [useCallback](https://react.dev/reference/react/useCallback)

**useCallback**:
- `useCallback` should be used when you want to prevent unnecessary re-renders of child components that receive a callback function as a prop.
- This can help improve the performance of your application by avoiding unnecessary updates to the DOM.
- Use Cases :
  - Event handlers (e.g., onClick, onChange)
  - Functions passed to context providers
  - Functions passed as props to memoized child components

<p>
</details>



####  React.memo?
<details>
<summary>Answer</summary>
<p>

- [memo](https://react.dev/reference/react/memo)

<p>
</details>




#### Can you explain difference between useMemo and useCallback in React with use cases ?


<details>
<summary>Answer</summary>
<p>



Both `useMemo` and `useCallback` are used for **memoization**, but they serve different purposes. `useMemo` is used to memoize the **result of a function (a value)** and only **recompute** it when one of the dependencies in the dependency array changes. On the other hand, `useCallback` is used to **memoize a callback function** and only **recreate** it when one of the dependencies in the dependency array changes.

In other words, `useMemo` is used for optimizing expensive computations, while `useCallback` is used for preventing unnecessary re-renders of child components that receive callback functions as props.

</p>
</details>



#### Should I always use useMemo and useCallback for optimization?
<details>
<summary>Answer</summary>
<p>

No, you should only use `useMemo` and `useCallback` when you're **experiencing performance issues**, and you've **identified that the cause is expensive computations or unnecessary re-renders**. Adding these hooks indiscriminately can actually hurt performance, as the overhead of managing memoization may outweigh the benefits in some cases

or

The best way to use these hooks is in response to a problem. If you notice your app becoming a bit sluggish, you can use the React Profiler to hunt down slow renders. In some cases, you'll be able to improve performance by restructuring your application. In other cases, useMemo and useCallback can help speed things up.

</p>
</details>




#### Can I use useMemo and useCallback with async functions?
<details>
<summary>Answer</summary>
<p>

No, both `useMemo` and `useCallback` are designed for synchronous functions only. If you need to memoize the result of an async function, you can use the `useAsync` custom hook or a library like `react-query` that provides caching and data-fetching functionality.
    
</p>
</details>




#### How do I know if useMemo or useCallback is improving the performance of my application?
<details>
<summary>Answer</summary>
<p>

To determine if `useMemo` or `useCallback` is improving the performance of your application, you can use React Developer Tools to inspect component re-renders, and browser profiling tools to measure the time spent on expensive computations. 

Additionally, you can use performance metrics such as `First Contentful Paint (FCP)`, `Largest Contentful Paint (LCP)`, and `Total Blocking Time (TBT)` to evaluate the overall performance of your application.

<details>
<summary>Extra Notes : </summary>
<p>

### Performance Metrics to Measure useMemo and useCallback Improvements

#### 1. First Contentful Paint (FCP)
- **What it measures**: The time from when the page starts loading to when any part of the page's content (e.g., text, images) is rendered.
- **Why it's useful**: Helps determine how quickly users see content on the screen.
- **How to measure**:
  - **Chrome DevTools**: 
    - Open DevTools → Go to the **Performance** tab → Start recording → Load your application. 
    - Look for "First Contentful Paint" in the timeline after running the profiling.
  - **Lighthouse**: 
    - Run a Lighthouse report from Chrome DevTools → **Lighthouse** tab → Click **Generate Report**.
    - Check the "First Contentful Paint" score.

#### 2. Largest Contentful Paint (LCP)
- **What it measures**: The time from when the page starts loading to when the largest visible element (e.g., image, text block) is fully rendered.
- **Why it's useful**: It indicates when the page’s main content has been loaded and is visible to the user.
- **How to measure**:
  - **Chrome DevTools**: 
    - In the **Performance** tab after profiling, look for "Largest Contentful Paint" in the timeline.
  - **Lighthouse**: 
    - Run a Lighthouse report and check the "Largest Contentful Paint" score.

#### 3. Total Blocking Time (TBT)
- **What it measures**: The total time during page load where the main thread is blocked, preventing user interaction (e.g., heavy JavaScript execution).
- **Why it's useful**: Helps you identify long-running tasks (like re-renders or expensive computations) that could be improved with `useMemo` or `useCallback` optimizations.
- **How to measure**:
  - **Chrome DevTools**: 
    - Look at the breakdown in the **Performance** tab under "Main Thread" to see blocking time.
  - **Lighthouse**: 
    - Check the "Total Blocking Time" score in the report.

---

### Steps to Use Performance Metrics:

#### 1. **Use Chrome DevTools to Profile Your App**:
  - Open **Chrome DevTools** (`F12` or right-click → Inspect).
  - Go to the **Performance** tab.
  - Start recording and perform typical actions in your app.
  - Stop recording and analyze the timeline. Look for unnecessary re-renders and measure how much time is spent in certain functions (e.g., re-rendering components, running expensive calculations).

#### 2. **Run Lighthouse Audits**:
  - Open **Chrome DevTools** → Go to the **Lighthouse** tab.
  - Click **Generate Report** to run an audit.
  - The report will show scores for FCP, LCP, TBT, and other key metrics. Compare these metrics before and after applying `useMemo` or `useCallback`.

#### 3. **Analyze Renders with React Developer Tools**:
  - Install the **React Developer Tools** browser extension.
  - Open your app and inspect it using the **Profiler** tab in React DevTools.
  - Start profiling your app while interacting with it.
  - Check which components are re-rendering unnecessarily or taking too long to render. If you apply `useMemo` or `useCallback`, you should see fewer unnecessary re-renders.


</p>
</details>
    
</p>
</details>


#### How can you create a react app without create-react-app ?

<details>
<summary>Answer</summary>
<p>

- `create-react-app` provides a convenient way to set up a new React project with a predefined structure and development environment, creating a React app from scratch gives you more control over the configuration and dependencies
- Below there are two ways listed
  - using CDN
  - by installing all dependencies needed and configuring them

**1. Using CDN**

- Creating a React app using a CDN (Content Delivery Network) involves linking to external libraries directly in your HTML file, rather than setting up a local development environment with tools like Babel and Webpack.

* This approach is simpler but might not provide all the features and conveniences of a full development environment.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>React App with CDN</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- React and React-DOM CDNs -->
    <script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script>

    <!-- Your React component code -->
    <script>
      // Define your React component
      function App() {
        return React.createElement("div", null, "Hello, React with CDN!");
      }

      // Render the React component
      ReactDOM.render(
        React.createElement(App),
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

**2. Setting up by installing dependencies**

- Initialize Package.json : `npm init`
- Install React and React-DOM : `npm i react react-dom`
- Create index.html to server the app

```html
<!-- index.html-->
<!DOCTYPE html>
<html>
  <head>
    <title>My React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./src/index.js"></script>
  </body>
</html>
```

- Create react component

```jsx
// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Create this file

ReactDOM.render(<App />, document.getElementById("root"));
```

- Intall Bable and Webpack : `npm @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server --save-dev`
- Create Babel Configuration
- Create Webpack configuration

</p>
</details>

---

#### How can you optimize React performance using code splitting?

<details>
<summary>Answer</summary>
<p>

- Code splitting involves breaking your application into smaller chunks (bundling) and loading them on demand.
- React.lazy and Suspense are used to achieve code splitting, which can significantly reduce the initial loading time of your application.

Code example using React.lazy and Suspense:

```jsx
import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
```

</p>
</details>

---

#### How can you handle side effects in React using useEffect?

<details>
<summary>Answer</summary>
<p>

The useEffect hook allows you to perform side effects in functional components. You can use it to handle tasks like data fetching, subscriptions, or manually changing the DOM.

Code example:

```jsx
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
  // Fetch data from an API
  fetch('https://lnkd.in/d5PWjfXF')
   .then((response) => response.json())
   .then((data) => setData(data));
 }, []);

 return (
  // Display data here
 );
};
```

</p>
</details>

---

#### What is React's Context API, and how can you use it to manage global state?

<details>
<summary>Answer</summary>
<p>

React's Context API provides a way to pass data through the component tree without having to pass props manually at every level. It enables efficient global state management in applications, allowing components to access and update shared data.

Code Example:

```jsx
// Creating a context
const MyContext = React.createContext();

// Using the context provider
const MyProvider = ({ children }) => {
  const [state, setState] = React.useState(initialState);
  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

// Consuming the context in a component
const MyComponent = () => {
  const { state, setState } = React.useContext(MyContext);
  // Use state and setState here
};
```

</p>
</details>

---

#### What are React Hooks, and how do they improve functional component functionality?

<details>
<summary>Answer</summary>
<p>

React Hooks are functions that enable functional components to use state and other React features without writing a class. They make it easier to reuse logic and manage component state in functional components.

```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
```

</p>
</details>

---

#### What are React's controlled and uncontrolled components, and when should you use each?

<details>
<summary>Answer</summary>
<p>

Controlled components have their state controlled by React through props and react to user input via event handlers. Uncontrolled components store their state internally in the DOM and are controlled by the DOM itself.

Code example of a controlled component:

```jsx
import React, { useState } from "react";

const MyInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};
```

</p>
</details>

---

#### How does React's Virtual DOM work, and what are its advantages over the real DOM?

<details>
<summary>Answer</summary>
<p>

React's Virtual DOM is a representation of the actual DOM (Document Object Model) in memory, and it acts as an intermediary between your React components and the real browser DOM.
Steps:

1. Initial Rendering
   When you create a React component, it's not directly rendered to the actual DOM. Instead, React creates a virtual representation of that component in memory.
2. Virtual DOM Tree
   This virtual representation, often called the Virtual DOM tree, is a lightweight copy of the actual DOM. It's a tree structure where each node represents a component or an element and its properties.
3. Component Updates
   When a component's state or props change, a process called "reconciliation" begins. React calculates the difference between the previous Virtual DOM tree and the updated one.
4. Diffing Algorithm
   The diffing algorithm efficiently identifies the minimal number of changes needed to transition from the old Virtual DOM tree to the new one. This optimization helps in minimizing direct manipulation of the actual DOM, which can be a costly operation.
5. Updating Actual DOM
   Once the minimal set of changes is determined, React applies those changes to the real DOM. However, it does this in a highly optimized manner, reducing the number of expensive DOM operations.
6. Performance Gains
   By using this approach, React reduces the need to frequently update the actual DOM directly. Instead of re-rendering the entire page, React only updates the specific parts of the page that have changed, resulting in improved performance and a smoother user experience.

</p>
</details>

---

#### Explain Reconciliation

<details>
<summary>Answer</summary>
<p>

**Reconciliation (in React):**

- Reconciliation is the process in which React updates the user interface (UI) to reflect changes in the application's state or props.
- It's a core part of how React manages updates efficiently.
- When you make changes to a component's state or props, React doesn't immediately update the actual Document Object Model (DOM) in the browser.
- Instead, it performs a series of steps to calculate the difference between the previous state of the UI (represented by the Virtual DOM) and the new state.
- This difference is often referred to as the "diff."

  Here's how the reconciliation process works:

- A component's state or props change.
- React generates a new Virtual DOM representation of the component.
- React compares the new Virtual DOM with the previous one using a diffing algorithm.
- The algorithm determines the minimal set of changes needed to update the actual DOM.
- Only the necessary changes are applied to the real DOM, resulting in a more efficient update process.

**Diffing Algorithm**

Some concepts used by this algorithm are :

- Two elements of different types will produce different trees.
- Breadth-First Search (BFS) is applied because if a node is found as changed, it will re-render the entire subtree hence - Depth First Approach is not exactly optimal. (Ref: Fig.2)
- When comparing two elements of the same type, keep the underlying node as same and only update changes in attributes or styles.
- React uses optimizations so that a minimal difference can be calculated in O(N) efficiently using this Algorithm.

- Steps of Diffing Process
  - Tree level Diffing
  - Component level Diffing
  - Element Level diffing

<!-- **Steps of Diffing Process at 3 levels**:

1. Tree-level Diffing

   - **Generate Virtual DOM Trees:** Create virtual representations of the component trees for both the previous and current states.
   - **Root Node Comparison:** Compare the root nodes of the previous and current Virtual DOM trees.
   - **Component Identity Check:** Determine whether the root components are the same. If they are not, the entire sub-tree is marked for updates.

2. Component-level Diffing

   - Once differences at the tree level are identified, React drills down to the individual components that need updating. The steps at the component level are as follows:

   - **Component Type Check:** Check whether the types of the components (e.g., functional, class-based) are the same in the previous and current states.

   - **Props and State Comparison:** Compare the props and state of the components. If there are differences, the component is marked for updates.

   - **Update or Replace:** If a component is marked for an update, React decides whether to update the component in place or replace it with a new one.

3. Element-level Diffing

   - At the lowest level, React compares the individual elements within a component to determine the specific changes that need to be applied. The steps at the element level include:

   - **Key Comparison:** For lists of elements (e.g., in a map function), React uses the key attribute to optimize updates. It checks for keys to determine if elements have been added, removed, or reordered.

   - **Type Comparison:** Compare the types of elements in the previous and current states.

   - **Update, Replace, or Delete:** Depending on the differences, React will decide whether to update the element's attributes and content, replace the entire element, or delete it.

   - **Child Element Diffing:** If an element has child elements, the diffing process is recursively applied to those children. -->

</p>
</details>

---

#### Explain the role of keys in React lists and why they are essential.

<details>
<summary>Answer</summary>
<p>

Keys help React identify each list item uniquely and efficiently update and re-render components when the list changes. They improve performance by minimizing re-renders and avoiding issues like incorrect component recycling.

Code Example:

```jsx
// Without keys
const itemsWithoutKeys = items.map((item) => <li>{item}</li>);

// With unique ids as keys
const itemsWithKeys = items.map((item) => <li key={items.id}>{item}</li>);
```

</p>
</details>

---

#### Explain the concept of higher-order components (HOCs) in React.

<details>
<summary>Answer</summary>
<p>
Higher-order components are functions that take a component as an input and return an enhanced component with additional props or functionality. They are commonly used for code reuse, logic abstraction, and cross-cutting concerns.

Code example:

```jsx
const withLogger = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    console.log("Component props:", props);
    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
};

// Usage
const MyComponent = (props) => {
  // Component logic here
};

export default withLogger(MyComponent);
```

</p>
</details>

---

#### What is the significance of React Fragments, and when should you use them?

<details>
<summary>Answer</summary>
<p>

React Fragments allow you to group multiple components **without introducing an additional parent element in the DOM.** They are useful when you need to return multiple elements from a component's render method.

Code example:

```jsx
import React, { Fragment } from "react";

const MyComponent = () => {
  return (
    <Fragment>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </Fragment>
  );
};
```

</p>
</details>

---

#### How can you handle form data in React components?

<details>
<summary>Answer</summary>
<p>

You can manage form data using controlled components, where form elements are bound to state and updated through event handlers.

Code example of a controlled input:

```jsx
import React, { useState } from "react";

const MyForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with 'inputValue'
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

- Extra Point
  Use the FormData constructor (available natively to almost all browsers) to create formData object of the required form and then extract one or all the fields which are required.

e.g. in submit form event listener define something like:

```js
function handleFormSubmit(event) {
const myForm = new FormData(event.target);
const userName = myForm.get(‘username’);
// userName variable now has username form field value.
}
```

You can read more about the FormData API in MDN web docs!

</p>
</details>

---

#### What is Props Drilling in React? How can you avoid that?

<details>
<summary>Answer</summary>
<p>

Example of Prop Drilling

```jsx
// Component A
function A({ value }) {
  return <B value={value} />;
}

// Component B
function B({ value }) {
  return <C value={value} />;
}

// Component C
function C({ value }) {
  return <div>{value}</div>;
}

// App
function App() {
  const data = "Hello, Props Drilling!";
  return <A value={data} />;
}
```

Props drilling in React refers to the process of passing props down through multiple levels of nested components. It happens when a component needs to pass data or functions to its child component, and then that child component needs to pass it further down to its own child component, and so on.

As the component hierarchy grows deeper, this can lead to passing props through several intermediate components, making the code less maintainable and potentially causing performance issues.

To avoid props drilling, you can use one of the following techniques:

1. **React Context API:**
   The Context API allows you to create a context that holds data or functions and make it available to all child components without explicitly passing it down as props. Components can access the context data directly from the provider.

2. **Using State Management Library like Redux:**
   Redux is a state management library that provides a centralized store accessible from any component. It allows components to retrieve and update data without the need to pass props through the entire component tree.

3. **Render Props and Higher-Order Components (HOCs):**
   You can use render props or HOCs to wrap components and provide them with the necessary props without drilling them down through intermediate components. These techniques can encapsulate the logic of passing props and provide a cleaner interface to components.

</p>
</details>

---


#### What is one-way binding and two-way binding?

<details>
<summary>Answer</summary>
<p>

</p>
</details>
---

<!-- Tag: AT&T

### There are two components A and B. When you update value of a variable in component A then it should be available in component B for usage. Which react hook will you use for this?

<details>
<summary>Answer</summary>
<p>
useReducer
</p>
</details>

---

Tag: AT&T

### Convert the given arr of dates into the result format. Use javascript Date function.

```json
YYYY-MM-DD

Given Format:

const arr=[
{"date":"2022-01-01", "value": "10"},
{"date":"2022-01-02", "value": "10"},
{"date":"2022-01-03", "value": "11"},
{"date":"2022-02-01", "value": "1"},
{"date":"2022-02-02", "value": "1"},
{"date":"2022-02-03", "value": "10"}]

Result Format:

{"january-22": 31, "february-22": 12}

---

Explanation:

For January -
{"date":"2022-01-01", "value": "10"}
{"date":"2022-01-02", "value": "10"}
{"date":"2022-01-03", "value": "11"}

{"january-22": 31}
Here,
month = january (01 - MM written as january)
year = 22 (2022 - YYYY written as 22)
date = exclude it
value = 10+10+11 = 31 (add all values for a given month)


For February -
{"date":"2022-02-01", "value": "1"},
{"date":"2022-02-02", "value": "1"},
{"date":"2022-02-03", "value": "10"}

{"february-22": 12}
Here,
month = february (02 - MM written as january)
year = 22 (2022 - YYYY written as 22)
date = exclude it
value = 1+1+10 = 12 (add all values for a given month)


````

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

Tag: AT&T

### What are react fragments? There are 3 divs inside a react fragment, can you change background color of all 3 divs without actually selecting the div and targeting the react fragment?

```
<>
<div></div>
<div></div>
<div></div>
</>
```

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is the difference between Virtual DOM, Shallow DOM and DOM in ReactJS?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is controlled and uncontrolled component in ReactJS?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What are hooks in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is jsx , babel and webpack?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is Redux?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is Reducer, Action, Store in Redux?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is Middleware in Redux?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### Explain data flow in Redux

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is Redux-Thunk?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is Redux-Saga?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is the difference between Redux-Thunk and Redux-Saga?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### React has one-way binding or two-way biding?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### Difference between class component and functional component

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### How can we implement componentWillUnmount in functional component?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### useEffect, useState, useMemo, useCallback hooks in detail

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### Explain lifecycle method in Reactjs

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is difference between export default and export in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is portal in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

### What is reconciliation in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is useRef in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is server side rendering in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is useStrict in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is fragment in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is react router in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What are node_modules in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is the default localhost server port in Reactjs? How can we change the local server port?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is HOC in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is pure component in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is difference state and props in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### How to optmize Reactjs app?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is difference between Reactjs and Angularjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is prop drilling in Reactjs? How to overcome it?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is context api in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### What is super, constructor, render function in Reactjs?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

# Advanced React Questions

---

### How React's reconciliation Algorithm Works?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### How does React handles aysnchronous updates?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

### How does React solves optimization problem and is it good to always optimize?

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

###

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---
###

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---

###

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---
###

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---
###

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---
###

<details>
<summary>Answer</summary>
<p>
</p>
</details>
---
###

<details>
<summary>Answer</summary>
<p>
</p>
</details>


####

<details>
<summary>Answer</summary>
<p>

</p>
</details>

####

<details>
<summary>Answer</summary>
<p>

</p>
</details>

####

<details>
<summary>Answer</summary>
<p>

</p>
</details>

####

<details>
<summary>Answer</summary>
<p>

</p>
</details>

####

<details>
<summary>Answer</summary>
<p>

</p>
</details>
--- -->
