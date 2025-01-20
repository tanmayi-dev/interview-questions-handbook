# Set Timeout

```tsx

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
<summary>Answer</summary>
<p>

```tsx
import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const int = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(int);
    };
  }, []);

  return <div>{count}</div>;
}

```
  
</p>
</details>
