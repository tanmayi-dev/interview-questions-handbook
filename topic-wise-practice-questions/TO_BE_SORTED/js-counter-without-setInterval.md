# Create a counter without setInterval

```js
let count = 0;

(function counter() {
  console.log(`${count++}`);
  setTimeout(main, 1000); // recursively call every 1 second
})
```
