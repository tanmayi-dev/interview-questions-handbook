```ts
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
