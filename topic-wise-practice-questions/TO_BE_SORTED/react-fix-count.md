# React - Fix Count

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

## SOlution 

Using Prev State in `useState`: 
- Avoids Stale State : If multiple updates to the state occur in quick succession, using the previous state ensures that each update is based on the most recent value, preventing issues that arise from stale closures.
- Asynchronous Updates : React may batch state updates for performance reasons, especially in event handlers. Using the previous state ensures you are working with the latest state value.
- Using previous state leads to It leads to more predictable and reliable behavior in your React components.


```jsx
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
