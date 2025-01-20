### Index

- [A11y HTML](#html)
- [CSS](#css)
- [JavaScript](#js)
- [TypeScript](#ts)
- [React](#react)
- [Recoil](#recoil)
- [Web Related](#web)
- [Advanced Web](#advanced)
- [Tooling](#tooling)
- [Design Patterns](#design)
- [Coding Questions](#coding)
- [Backend Questions](#be)
- [SOLID Principles](#solid)
- [GraphQL Questions](#graphql)
- [Jenkins](#jenkins)
- [Github Actions](#gha)
- [Experience](#exp)

## Accessibility/Semantic HTML <a id="html"></a>

### How can you improve accessibility of a page? (moderate)
- Semantic HTML :
  - (`<main>`, `<header>`, `<footer>`, `<article>`, `<section>`, `<table>`, `<strong>` instead of `<b>`, `<em>` instead of `<i>`)
  - Example of non-semantic elements : `<div>`, `<span>`, `<b>`, `<i>`
  - Helps **screen readers** and **assisstive technologies** 
- Ensure Keyboard Navigation
  - links, buttons, form controls should be accessible via keyboard
  -  Use `tabindex` to control keyboard focus
  -  `tabindex="-1"` is not reachable via keyboard navigation
  -  `tabindex="0"` focusable in sequential keyboard navigation
  -  `tabindex="1"` or _positive_ value means focusable in sequential keyboard navigation with **its order defined by the value of number**
- Proper contrast ratios
  - Minimum AA : The visual presentation of text and images of text has a contrast ration of at least `4.5 : 1`, except for large text which should have a contrast ratio of at least `3:1`
  - Enhanced AAA : The visual presentation of text and images of text has a contrast ratio of at least `7:1`, expect for large text which should have a contrast ratio of at least `4.5 : 1`
- Add ARIA attributes
  - ARIA - Accessible Rich Internet Applications
  - ARIA attributes provide additional meaning to non-semantic HTML elements and assistive technologies by conveying roles, states and properties
  - ARIA labels : `aria-label`, `aria-labelledby`
  - ARIA roles : `role="button"`
  - ARIA live regions : `aria-live`
- Provide Text Alternatives for Non-Text Content
  - Non-text content like **images**, **video**, and **audio** need text alternatives so users with visual and auditory impairments can understand them
  - Use descriptive `alt` attributes for images, `captions` and `transcripts` for videos, and `aria-label` for icons.
- Design for Screen Readers **
  - Ensure the logical reading order of elements, use ARIA landmarks like `role="navigation"`
  - **Hide decorative images from screen readers using `aria-hidden="true"`**
- Ensure Responsive and Zoom-friendly Layouts
  - Users with low vision zoom into the content or use larger text settings
  - Implement responsive design using relative units like `rem` , `em`, and ensure layouts adapt well when zoomed
  - WCAG states that text should be resizable up to 200% without loss of content or functionality
- Test with Accessiblity Tools
  - Automated testing using Axe, Lighthouse, WAVE
  - Manually test with Screen readers like VoiceOver and NVDA    
- WCAG - Web Content Accessibility Guidelines
- HTML `lang` attribute
  - `<html lang="en">`
  - This identifies the primary language of the page to the browser, search engines, translation software and screen readers 

 
### What role do the semantic elements play in accessibility? (moderate)

- Semantic elements in HTML play a crucial role in accessibility by **providing meaning and structure** to the content of a web page.
- These elements convey information about the **relationships and roles of different parts of the content**, making it easier **for assistive technologies and browsers** to interpret and present the information to users.  

### Name some semantic elements and their meaning. (moderate)
- **`<section>`**: Defines a section in a document, such as chapters or thematic groups of content.
- **`<header>`**: Represents introductory content or a set of navigational links for a section or page.
- **`<footer>`**: Defines the footer for a section or page, typically containing metadata, copyright, or navigation.
- **`<nav>`**: Represents a section of navigation links.
- **`<main>`**: Represents the main content of the document, excluding headers, footers, and navigation.
- **`<em>`**: Emphasizes text, indicating stress or importance.
- **`<strong>`**: Indicates strong importance, seriousness, or urgency for its content.
- **`<h1>` – `<h6>`**: Represent headings from the most important (`<h1>`) to the least important (`<h6>`).
- **`<code>`**: Represents a fragment of computer code.
- **`<article>`**: Represents independent, self-contained content like a blog post or news article.
- **`<aside>`**: Contains content that is tangentially related to the main content, such as sidebars or pull quotes.
- **`<blockquote>`**: Defines a section that is quoted from another source.
- **`<address>`**: Provides contact information, typically for the author of the document or a section.
- **`<details>`**: Represents a disclosure widget from which the user can obtain additional information.
- **`<summary>`**: Provides a summary or label for the `<details>` element.
- **`<dialog>`**: Defines a dialog box or other interactive component like a window.
- **`<dfn>`**: Represents the defining instance of a term.
- **`<cite>`**: Represents a reference to a creative work.
- **`<abbr>`**: Represents an abbreviation or acronym.
- **`<bdo>`**: Overrides the current text direction.
- **`<q>`**: Represents a short inline quotation.
- **`<figure>`**: Encapsulates content like images, diagrams, or code listings, usually with a caption.
- **`<figcaption>`**: Provides a caption or description for the content in a `<figure>`.
- **`<time>`**: Represents a specific time or date.
- **`<mark>`**: Highlights or marks text that is of special interest or relevance.
 

### What if the <img> is decorative? like an icon. How do you hide it from screen readers? (moderate)
- You can hide element from screen readers by adding `aria-hidden="true"`

 
## SCSS/CSS <a id="css"></a>

### What is a gap property good for? and how it is different to margin? (moderate)
- `gap` property specifies spacing between elements in **Grid and Flexbox layouts** only
- `gap` ensures uniform spacing between items
- It automatically detect presence of elements and is applied only when needed
- Using `margins` to achieve the same effect can lead to wrong content representation and unnecessary spaces around elements.
- In grid layouts, you can set different values for rows(`row-gap`) and columns(`column-gap`) allowing for more control in 2 dimensions
- Using `gap` we can avoid extra elements or classes to create spacing
- Comparison :
  - `gap` applies to space between flex or grid items. Remains in specified container, does not influence other margines of container
  -  `margin` applies space around an element, affecting its external spacing
  -  `gap` is part of layout and does not affect the box model
  -  `margin` can affect the flow of elements and potentially cause overflow issues if not managed correclty
  -  `gap` only works with grid and flexbox layouts. Outside this context like block elements, it has not effect
  -  `margin` works in any layout context, including block, inline, flex, grid
  -  `gap` allows **single value** to set uniform spacing or **two values** for row and column
  -  `margin` can accept 4 values - top, right, bottom left

 
### Can you describe CSS Box Model? (moderate)
- CSS box model is a fundamental concept that describes how elements on a web page are structured and how they interact with each other. It consists of the following components:
- **Content** : The innermost part of the box, which contains the actual content of the element, such as text, images, or other media.
- **Padding** : The space between the content and the element's border. Padding helps create space around the content, improving readability and aesthetics.
- **Border** : The border surrounds the padding and content. It can be styled with various properties such as color, width, and style to create visual distinctions between elements.
- **Margin** : The space between the border of an element and its neighboring elements. Margins provide separation between elements on the page.

 
### What does !important mean in CSS? and why you should avoid using it? (moderate)
- When a property is marked with `!important`, it essentially tells the browser to treat that rule with the highest priority, regardless of its specificity or source order.
- When a style rule contains `!important`, it takes precedence over other conflicting styles.
- `!important` can lead to specificity issues, making it harder to debug and maintain styles.
- It can override styles that you might not expect it to, causing confusion and making the code less predictable.
- Basically it overrides the cascading property of css 

### Explain Cascading Nature of CSS
- CSS stands for Cascading Style Sheets
- Specificity : More specific selects have higher priority.
- Source Order : If two styles have the same specificyt, the lattern one in the stylesheet takes precendence
- Inline Styles : Styles applied directly on an element have higher specificity than styles defined in external stylesheets
 
### Explain CSS specificity (moderate)  

- CSS specificity is a set of rules that determine which style rules are applied to an HTML element when there are conflicting styles
- Order from **highest to lowest**:
  - Inline styles
  - ID selectors `#myId { color : blue; }`
  - Class, Attribute and Pseudo-Class Selectors
    - `.myClass { color: green; }`
    - `[type="text"] { color: yellow; }`
    - `:hover { color: orange; }`
  - Element (Type) selectors and pseudo-elements
    - `div { color: purple; }`
  - Universal Selector
    - `* { color: black; }`
  - Browser Default Styles
- Specificity Calcuation : Each type of selector has a specificity value
  -  Inline : 1000
  -  ID Selectors : 100
  -  Class, attribute, and pseudo class selectors : 10
  -  Element (Type) selector : 1
  -  Universal Selector : 0
      ```css
     #header { color: red; }              /* Specificity: 100 */
      .nav-item { color: blue; }           /* Specificity: 10 */
      div { color: green; }                /* Specificity: 1 */
      * { color: yellow; }                 /* Specificity: 0 */
     ```
     ```html
     <div id="header" class="nav-item">Text</div>
     ```
  

### Explain the 3 ways to target elements ? What will win ?

### Which technique do you know for centering an element veritcally ?

### Why would you use css for animation ?
- CSS can use GPU

### What is the difference between Flexbox and Grid ?

### What is the difference between inline, inline-block and block ?

### Between png, jpeg and svg. Which is the preferable image source and why ?

### How would you add an animation effect to a button ?

### What is difference between (advanced)
```css
box-sizing: content-box; (default)
box-sizing: border-box;
```
- With border-box, the width and height of an element include the content area, padding, and border.
- With content-box, the width and height of an element are calculated based only on the content area, excluding padding and border.


### What are CSS Modules ?
- CSS modules can be created using the `[name].module.css` file naming convention
- CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format `[filename]\_[classname]\_\_[hash]`
- 

## JavaScript <a id="js"></a>
 
## TypeScript <a id="ts"></a>

 ### What is a difference between Type and Interface? (moderate)

| Feature                     | `type`                          | `interface`                     |
|-----------------------------|----------------------------------|----------------------------------|
| **Definition**              | Used to create type aliases. Can represent primitive types, unions, intersections, and more. | Used specifically to define the structure of objects. |
| **Extensibility**           | Cannot be extended; you can create a new type that references an existing one but not by extension. | Can be extended using `extends` keyword. Interfaces can also inherit from multiple interfaces. |
| **Merging Declarations**    | Does not support declaration merging; multiple declarations with the same name will result in an error. | Supports declaration merging; if you declare the same interface multiple times, TypeScript will merge them into a single interface. |
| **Use with Primitives**     | Can represent primitive types, unions, and tuples. | Primarily focused on object shapes. Cannot represent primitives or unions directly. |
| **Preferred Usage**         | Generally used for more complex types like unions or intersections, and for type aliases. | Preferred for defining object shapes, especially in public APIs. |

```ts
1. Using `type`

// Type alias for a primitive type
type StringOrNumber = string | number;

// Type alias for an object shape
type User = {
    name: string;
    age: number;
};

// Union type
type Response = User | null;

2. Using Interface

// Defining an interface
interface IUser {
    name: string;
    age: number;
}

// Extending interfaces
interface IEmployee extends IUser {
    employeeId: number;
}

// Declaration merging
interface IUser {
    email: string; // This will merge with the existing IUser interface
}

```

- Use `type`:
  - When you need to create a union or intersection of types.
  - For simpler type definitions or when defining types that are not strictly object shapes.

- Use `interface`:
 - When defining object shapes, especially for public APIs or libraries.
 - When you need to take advantage of declaration merging or extend existing types.
 

### What is a union type? moderate
 

### What is a template literal? moderate
`blah ${variable}`


### What are Generics and how they are useful in TS? moderate

 
### What is a difference between `any` and `unknown`? moderate

 
### What is a null coalescence operator? moderate
```
??
```

### What is a discriminated union? advanced

 
### Can you explaining me concept called overcasting? advanced

### What is a Type Guard function? advanced

 

## React <a id="react"></a>

### Can you explain concept of Container and Presentational components? What are they good for? moderate
- Container components are responsible for managing the state and data logic of the application.
- Presentational components are purely focused on the UI rendering logic. They receive data and callbacks as props from the container components and use them to render the actual UI.

 
### How component share data ? moderate
- props passed down to children components
- callback function passed from parent can send data from child to parent
- context api
- global state (redux with useReducer and recoil states)

### Difference between state and props

### What is prop drilling in React and how can it be avoided? moderate
- Prop drilling is passing data through layers of components, even through components directly not consuming such data. 
- Can be avoided by better component composition, context api or global state managment.

### What is a pure function and how it relates to React? moderate
- pure function - always returns same output for the same input. Does not modify objects or variables which existed before.
- React assumes that every component is a pure function, returns same JSX for same input. React rendering must be pure without side effects, components only return JSX.


### What ARIA attributes do you know? What do they do? moderate
 

### Can you wrap a hook in if statement? Why not? (moderate)
- Hooks rely on a consistent order of execution.
- If Hooks are called conditionally or within loops, it can lead to unexpected behavior because React might call them in a different order on subsequent renders.
- This can break the rules of the React state machine and lead to stale or incorrect state being read
- The Hook Call Chain
  - Sequential Execution : When React renders a functional component, it executes hooks in the exact order they appear in the component. Hooks are invoked one by one, creating a **call chain** that React relies on to associate internal logic (like state management or side effects) with specific hooks in a component.
  - Maintain State Across Renders : React internally tracks the hook calls by **index** in the order they appear. On every render, React runs the same hooks in the same order to preserve the component’s state and behaviors between renders. This is how React ensures that state, context, and effects are correctly re-applied during re-renders.
  - Fixed Order of Hooks : Hooks **must always be called in the same order** on every render for React to correctly map internal state to each hook. Any change in the order—like calling a hook conditionally—will break this call chain, leading to unpredictable behavior (such as incorrect state being returned or effects being skipped).
- [link](https://www.parda.me/blog/react-hooks-if-statement/)
- Analogy with LifeCycle methods of class components :
  - We cannot call lifecycle methods like `componentDidMount`, `componentDidUpdaate`, `componentWillUnmount` conditionally as well
  - These methods control the behaviour of how component behaves and calling them conditionally can alter the way component behaves causing inconsistency
 
 
### What is a ref attribute on HTML elements good for? advanced

### What are controlled components ?

### ref - what is it and why od we use it ?

- Refs provide a way to access DOM nodes or React elements created in the render method There are a few good use cases for refs:
  - Managing focus, text selection, or media playback.
  - Triggering imperative animations.
  - Integrating with third-party DOM libraries.
  - E.g. : Used it for scroll animation to show user an error that occurs on save

### What is a forwardRef function good for? advanced

### Are you familiar with useLayoutEffect? and how it is different to useEffect? advanced

### Have you heard of Portals? What are they used for? When would you use them? advanced

Using Portals, component can be rendered outside of the DOM hierarchy of its parent component. As an example, you could render components in a modal dialogue box, hover card, loader, or popup message, which would be in a “different place” than their parent component.

### What is Virtual DOM ? and Why is it used ?

### What are the differences between functional and class components ?

### Data binding - how is it implemented in React ? Are you familiar with any of these formik, useForm, useState

### What are different ways to style a React component ?

### Why is there need for using keys in Lists ? Why is it not good to use index as keys ?

### When do we need a Higher Order Component ?

### 

--- 
## Recoil <a id="recoil"></a>



## Web Related - Browser and Performance Optimization <a id="web"></a>

### What is a web-worker ? Use case of a web worker
- Web worker is js feature that allows to run scripts in the background, separate from teh main thread (UI thread)
- Web Workers are useful when you need to perform tasks that require significant CPU power or time, allowing the UI to remain responsive for users. They are a great solution for improving performance in web applications that need to handle heavy or long-running operations.
- This enables to perform heavy computations or background tasks without blocking or slowing down the user interface
- Web workers run in a `separate thread`
- They **do not have access to the DOM** or certain APIs like `localStorage`, but can communicate with main thread via messages
- Useful for keeping UI responsive during intensive tasks
- Use Cases :
  - Heavy Computations - complex algorithms like encryption, image processing, data parsing, real time data analysis on large dataset
  - Fetching large amounts of data from an API, processing (sorting or filtering) and sending processed data back to main thread for rendering
  -  Fetching and sorting millions of records in the background for data-intensive dashboard
  -  For application requiring constant updates/notifications (chat app, stock market), web workers can handle real-time data fetching without interrupting the UI
  -  Applications that need to process large images, manipulate frames for videos. Edition software or video encoding in browser
  -  Reading large CSV or JSON files and processing them before displaying to user

### How would you improve the performance of a screen / dashboard which holds many widget, while each widget fetches its data independently ?
- Optimize Rendering - using `useMemo` and `useCallback`
- Batch API requests
  - reduces number of network calls, decreasing overhead and latency
- Lazy loading widgets (using lazy loading and code splitting)
  - reduces initial load time and improves perceive performance
  - fetch data only when visible in viewport - using intersection-observer
- Caching Data
  - Client side cache : using libraries `react query` and `redux toolkit query`
- Debounce or Throttle Data Fetching
- Pagination / Infinite Scrolling
- Asynchronous Rendering
- Web Workers
- Service Workers : fetch/sync data in background, without interrupting user experience

### Service Worker vs Web Worker

Service Worker :
- sits as intermediate between
- Purpose: Handles network-related tasks, such as caching assets, enabling offline functionality, push notifications, and background sync.
- Scope: Operates in the background, independently of the web page.
- Lifecycle: Can persist between page loads, as it's designed to handle tasks even when the page is closed.
- Use Case: Offline support, caching assets, background syncing, push notifications.

Web Worker : 
- works at separate thread
- Purpose: Runs JavaScript in a separate thread, allowing you to perform computationally heavy tasks (e.g., data processing) without blocking the main UI thread.
- Scope: Lives only as long as the page is open.
- Lifecycle: Terminates when the page is closed or refreshed.
- Use Case: Offloading CPU-intensive tasks (e.g., calculations, parsing large data) to keep the UI responsive.

### Explain Debouncing and Throttling

Debouncing :
- Waits until the event is over, then triggers the function once
- Ideal for scenarios where final event is what matters
- Use case : Prevent multiple API calls while user is typing in a search bar or resizing window
- e.g., form submission after user finishes typing
- Implemented for AutoComplete feature in - AD Onboarding flow

Throttling :
- Ensures the function is called at regular intervals, no matter how frequently the event fires.
- Ideal for situations where you need to respond regularly to ongoing events (e.g., updating the UI as a user scrolls).
- Use case : Limiting the rate of window resizing or scroll events to avoid performance degradation.
- e.g., updating the UI as a user scrolls

### What are some ways to improve webapp's performance ?
### What performance metrics do you take into consideration?
- FCP - First Contentful Paint
- LCP - Largest Contentful Paint
- TBT - Total Blocking Time

### What is FCP ?
- Firs Contentful Paint
- Analyze on LightHouse, Performance tab in Dev Tools, React Developer Tools
- use CDN for static content
- client side caching for static content
- Reduce bundle size by removing unwanted libraries
- use `useMemo` and `useCallback`
- Ask PM, and implement Lazy Loading using Code Splitting - use defer in js, use React.Lazy
- Consider Server Side Rendering - based on application, as it can complicate the code and make it hard to maintain


## Advanced Web <a id="advanced"></a>

### What is the difference between localStorage , sessionStorage and Cookies ?
- Cookie Storage
  - 4 KB
  - some tokens
  - server and client side
- Local Storage
- Session Storage 


### What is CORS ? Why do we need it ? Where it is being configured ?

### What is CSP - Content Security Policy ?


--- 


## TOoling <a id="tooling"></a>

### What is webpack ? How do we use it ?
- Webpack is module bundler
- Combine multiple js files into one file
- Webpack will parse and bundle these files, based on imports and exports

### What is Tree Shaking ?
- It is a performance optimization technique used in JS and bundling tools like webpack, rollup or parcel
- It is used to remove unused or "dead" code from final bundle
- Its primary goal is to minimize the size of the JS bundle that gets send to browser

- Tree shaking is made possible through **static analysis** of the import / export relationships in ES6 modules (aka ECMAScript modules)
- It **only works with ES6 static imports and exports**
- Webpack cannot use the CommonJS module system `require` statements whcih are dynamic to build **Dependency Tree**
- By examining which parts of the code are imported and actually used in the application the bundler can "shake off" or exclude any parts of the module that are not used
- Key Concepts :
  - ES6 Module System
    - Tree shaking depends on ES6s static `import` and `export` statements
    - It does not work well with older module systems like CommonJS `require` and `module.exports`, which are dynamic and harder to analyze for dead code
  - Dead Code Elimination :
    - It identifies and removes unused code
- Benefits :
  - Reduced Bundle Size
  - Improved Load Time
  - Faster Execution
  - Cleaner Codebase

 ### What is a Dependency Graph ?
 - It's a structure that Webpack creates to map how different modules (JavaScript files, CSS, images, etc.) in your application are connected and depend on each other.
 - How it Works :
   - Entry Point : Webpack starts building the graph from a defined entry point (e.g., index.js).
   - Dependency Mapping : It scans the entry point for imports and recursively follows each imported file, mapping their dependencies.
   - Graph Creation : Each module becomes a node in the graph, and the edges are the connections (dependencies) between them.
   - Resolving Dependencies : Webpack figures out where the modules are located (resolving file paths, node_modules, etc.).
- Benefits of Dependency Graph
  - Efficient Bundling: Ensures each module is bundled only once, reducing redundancy.
  - Tree Shaking: Analyzes the graph to remove unused (dead) code, making the bundle smaller.
  - Code Splitting: Webpack can split the graph into smaller chunks, allowing lazy loading to improve initial load times.
  - Optimized for Plugins: Plugins like HTMLWebpackPlugin and loaders process files (like converting CSS or images) as Webpack builds the graph.
- Key Tools
  - Stats Analyzer : `webpack --json > stats.json`
  - Webpack Bundle Analyzer :   `npm install --save-dev webpack-bundle-analyzer`   
 
### What is the purpose of a `package-lock file` ?
- `packcge-lock.json` file locks the versions of the dependencies installed in the project
- It helps in ensuring that same versiions are installed across different environments
- Provides consistency and stability for the application
- It captures the entire dependency tree, including transitive dependencies

### What is the difference between `npm i` and `npm ci` ?
- `npm i` (`npm install`):
  - Installs dependencies listed in the `package.json`. It may update `package-lock.json` and can install newer versions of dependencies if the version range allows it.
  - MAJOR.MINOR.PATCH : `~` allows PATCH version upgrade, `^` allows MINOR version upgrade
- `npm ci` (`npm clean install`):
  - It installs dependencies strictly based on the `package-lock.json` file.
  - It is faster and ensures clean state by deleting the `node_modules` directory before installation.
  - It is ideal for CI/CD environments
      
### Explain what is NPM and how to use it ?
- NPM - Node Package Manager
- It is a package manager for JS, primarily used to manage packages (libraries and tools in Node.js) applications
- We can use NPM via command line to install packages, manage dependencies, and run scripts defined in `package.json`

### Common NPM Commands
- `npm init`: Initialize a new Node.js project and create a `package.json`.
- `npm install <package>`: Install a package and add it to dependencies.
- `npm install --save-dev <package>`: Install a package and add it to `devDependencies`.
- `npm run <script>`: Execute scripts defined in `package.json`.

### Common NPM commands in CI/CD

### What is `npx` ?


### When you're installing a new dependency, what will you look for at the chosen lib ?
- When choosing a library, consider the following:
  - **Source Code**: If the functionality I am looking for is just a part of it, and its just few lines of code, then I would copy the code and use it
  - Popularity: Check the number of downloads and stars on GitHub.
  - Maintenance: Look for recent updates and active issue resolution.
  - Documentation: Ensure it has clear, comprehensive documentation.
  - License: Verify the library's license is compatible with your project.
  - Community Support: Assess community support and available resources.

### What is webpack / parcel / rollup ?
- Webpack: A powerful module bundler for JavaScript applications, allowing developers to bundle assets (JavaScript, CSS, images, etc.) and manage dependencies.
- Parcel: A zero-configuration bundler that automatically handles dependencies, offers fast builds, and supports features like hot module replacement.
- Rollup: A module bundler primarily for libraries. It creates smaller, optimized bundles by using ES modules and tree-shaking to eliminate unused code.

### What is the difference between a bundler to new tools such as nx / vite / vercel ?
- Bundler: Tools like Webpack, Parcel, and Rollup focus on packaging and optimizing code into bundles for deployment.
- nx, vite, vercel are development servers
- NX: A build system and monorepo tool that helps manage multiple projects and shared libraries within a single repository, improving collaboration and code sharing.
- Vite: A fast development server and build tool that leverages native ES modules for fast hot module replacement and builds.
- Vercel: A cloud platform for static site deployment and serverless functions, simplifying the deployment process and providing server-side rendering capabilities for frontend applications.


### What is HMR (Hot Module Replacement ) ?
- Hot Module Replacement (HMR) is a feature in modern web development that allows modules to be updated in the browser without requiring a full page refresh.
- This enhances the development experience by enabling developers to see changes in real-time as they modify their code.
- Improves Development Speed
- Preserves application state
- Integration with Build Tools
- Fallback mechanisms : if module cannot be replaced due to incompatibility, HMR system can fall back to full reload of the page


### What is difference between development servers and bundlers ?

### Why is vite faster ?

---

## Design Patterns <a id="design"><a/>

### How would you implement an AutoComplete Mechanism ?

### Describe the Observer Pattern . If you were to implement it, what methods would you include ?

### What is a Facade ? If you had an API which only included "PUT" call for saving raw objects, Describe how would you implement CRUD ?

### How would you implement a publish-subscribe system for event handling?

### Describe the Model-View-Controller (MVC) architectural pattern. How does it separate concerns in an application?

### Explain the concept of the Decorator pattern. How does it allow for adding functionality to objects dynamically?

### Describe the Strategy pattern. How might you use it to implement different sorting algorithms?

### What is the Adapter pattern? How might you use it to integrate a third-party library into your existing codebase?

### How would you implement a rate limiting mechanism for an API?


### What is Dependency Injection? How does it improve code modularity and testability?

### Explain the concept of the Factory Method pattern. Provide an example of when you might use it in a real-world application.

---

## Coding Questions <a id="coding"></a>

### Question 1: Version Bumping

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

<details>
<summary>Solution</summary>
<p>
  
```ts
  function bumpUpVersion(version: string): string {
    // Split the version string into an array of numbers
    const versionParts = version.split('.').map(Number);

    // Start bumping from the last part of the version
    for (let i = versionParts.length - 1; i >= 0; i--) {
      if (versionParts[i] < 9) {
        versionParts[i]++; // Increment the current part
        break; // Exit the loop since we're done
      } else {
        versionParts[i] = 0; // Reset to 0 and continue to the next part
      }
  }

    // Join the parts back into a string
    return versionParts.join('.');
  }
```
    
</p>
</details>


### Question 2 : SetTimeout

```js
// In what order will the numbers 1-4 be logged
// to the console when the code below is executed? Why?

(function() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
})();
```

<details>
<summary>Solution</summary>
<p>

```
1
4
3
2
```

- Event Loop
- Call Stack, MicroTask Queue 

</p>
</details>


### Question 3 : Fix Count - React Question

```jsx

import * as React from 'react';
import './style.css';

export default function App() {
  console.log('render app');
  let count = 0;

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>Count is {count}</p>
      <Button onClick={() => {
        count += 1;
      }} />
    </div>
  );
}

const Button = ({ onClick }) => {
  console.log('render button');

  return <button onClick={onClick}>Button</button>;
};
```

<details>
<summary>Solution</summary>
<p>

```
import * as React from 'react';
import './style.css';

export default function App() {
  console.log('render app');
  // Use the useState hook to manage the count state
  const [count, setCount] = React.useState(0); // Initialize count state

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>Count is {count}</p>
      <Button onClick={() => {
        setCount(prevCount => prevCount + 1); // Update count state or setCount(count+1)
      }} />
    </div>
  );
}

const Button = ({ onClick }) => {
  console.log('render button');

  return <button onClick={onClick}>Button</button>;
};
```

- Avoids Stale State : If multiple updates to the state occur in quick succession, using the previous state ensures that each update is based on the most recent value, preventing issues that arise from stale closures.
- Asynchronous Updates : React may batch state updates for performance reasons, especially in event handlers. Using the previous state ensures you are working with the latest state value.
- Using previous state leads to It leads to more predictable and reliable behavior in your React components.

</p>
</details>

### Question 4 : setTimeout - Interval

```
import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return <div>{count}</div>;
}
```

<details>
<summary>Solution</summary>
<p>
  
```jsx
import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const int = setInterval(() => {
      setCount((count) => count + 1); // using prevState always gives latest data
    }, 1000);

    return () => {
      clearInterval(int); // setInterval expects this value
    };
  }, []);

  return <div>{count}</div>;
}

```

</p>
</details>

### Question 5 : Create a counter in JS, it should go up as time goes by, in intervals of 1 second

<details>
<summary>Solution</summary>
<p>

```js
let counter = 0;
setInterval(() => console.log(`${counter++}`), 1000);
```

</p>
</details>

### Question 6 : Code a counter, without using setInterval it should go up as time goes by, in intervalus of 1 second

<details>
<sumamry>Solution</sumamry>
<p>

```js
let count = 0;

(function counter() {
  console.log(`${count++}`);
  setTimeout(main, 1000); // recursively call every 1 second
})
```
  
</p>
</details>

### Question 7 : Code a Digital Clock in React that shows current time of the machine

<details>
<summary>Solution</summary>
<p>

```css

// DigitalClock.module.css

.clock {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 100vh;
}

.hours {
  color: red;
}

.minutes {
  color: green;
}

.seconds {
  color: blue;
}

```

```jsx

import React from "react";
import styles from './DigitalClock.module.css';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(currentTime);

  return (
    <div className={styles.clock}>
      <span className={styles.hours}>{hours} : </span>
      <span className={styles.minutes}>{minutes} : </span>
      <span className={styles.seconds}>{seconds}</span>
    </div>
  );
};

```

</p>
</details>

### Question 8 : Typescript - type discrimination

- Write correct typing for the following JSON response
- log user permissions for admin users, otherwise log user friends. Should be strictly type safe, without e.g. as

```
type User = {
  // implement
}


const users: User[] = [
  {
    id: 0,
    role: 'admin',
    permissions: [1, 2, 3],
  },
  {
    id: 1,
    role: 'member',
    friends: ['bob', 'alice', 'michael'],
  },
];

for (const user of users) {
  // log user permissions if it's an admin, otherwise log user friends
}
```

<details>
<summary>Solution</summary>
<p>

```tsx

type User = {
  // implement
  id: number;
  role: 'admin';
  permissions: number[];
} | {
    id: number;
    role: "member";
    friends: string[];
}


const users: User[] = [
  {
    id: 0,
    role: 'admin',
    permissions: [1, 2, 3],
  },
  {
    id: 1,
    role: 'member',
    friends: ['bob', 'alice', 'michael'],
  },
];

for (const user of users) {
  switch(user.role) {
    case "admin": 
        console.log(user.permissions);
        break;
    case "member":
        console.log(user.friends);
        break;
    default:
        throw new Error("User role is not defined");
  }
}
```

</p>
</details>

----
## Backend Questions <a id="be"></a>

### Explain which HTTP requests type you know, what are the differences between them ?

### What do 200, 300, 400, 500 numbers stand for ?


---


## SOLID Principles <a id="solid"></a>
## GraphQL Questions <a id="graphql"></a>
## Jenkins <a id="jenkins"></a>
## Github Actions <a id="gha"></a>

## Experience <a id="exp"></a>

### Can you describe a project or feature you were significantly involved in? Please provide details about the following aspects:
### Project Overview: What was the project or feature about? What were its main objectives and goals?
### Your Role: What was your specific role and responsibilities in this project?
### Challenges: What were some of the key challenges you encountered during the project? How did you address and overcome these challenges?
### Architecture: Can you explain the architectural decisions you made for this project? Why did you choose this particular architecture, and how did it contribute to the success of the project?"
