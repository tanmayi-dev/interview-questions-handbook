# Write a function that returns all of its arguments as a one-dimensional array. The return array may contain any type of value except an array.

```js
const arr = ["yellow", ["a", "b", "c"], "blue", [[1, 2, 3], "purple"]];
const result = flatten("red", arr, 8, true);
// ["red","yellow","a","b","c","blue",1,2,3,"purple",8,true]

function flatten() {}
```


## Solution  1 

```js
function flatten(...args) {
  const flattened = [];

  args.forEach(arg => {
    if (Array.isArray(arg)) {
      // If the argument is an array, recursively flatten it
      flattened.push(...flatten(...arg));
    } else {
      // Otherwise, add the argument directly
      flattened.push(arg);
    }
  });

  return flattened;
}

const arr = ["yellow", ["a", "b", "c"], "blue", [[1, 2, 3], "purple"]];
const result = flatten("red", arr, 8, true);
console.log(result);
// Output: ["red", "yellow", "a", "b", "c", "blue", 1, 2, 3, "purple", 8, true]

```


## Soution 2 - using flatMap

```js
function flatten(...args) {
  return args.flatMap(arg => 
    Array.isArray(arg) ? flatten(...arg) : arg
  );
}

const arr = ["yellow", ["a", "b", "c"], "blue", [[1, 2, 3], "purple"]];
const result = flatten("red", arr, 8, true);
console.log(result);
```
