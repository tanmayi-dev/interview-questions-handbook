# React - Set Timeout - Interval

```jsx

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

## Solution

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
