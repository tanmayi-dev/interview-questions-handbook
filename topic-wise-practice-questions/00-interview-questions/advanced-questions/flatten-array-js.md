# Coding Exercise : Flatten Array

One of the questions we may ask in one of the technical interviews is to have a candidate flatten a nested array into a single level array. Write out an example of nested array like :

```js
const nestedArr = [1, [2, [3, 4, [5], 7, [7, 8, [9]], 10]]];
```

Then ask the candidate to flatten the array into this result :

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

Provide them with the following to give them some context:

```js
function flattenArray(arr) {}

console.log(flattenArray(nestedArr));
```

This should prompt the candidate to create a recursive function, examples below:

```js
function flattenArray(arr, flattenedArr = []) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      flattenedArr.concat(flattenArray(arr[i], flattenedArr));
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
}
```

Less desirable because it stores an extra variable on the global scope :

```js
const flattenedArr = [];

function flattenArray(arr) {
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArr.concat(flattenArray(arr[i]));
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
}
```

## Things to watch out for:

### Assignment of the result of recursive calls

Make sure the result of the recursive call to flattenArray is assigned to something, we see lots of:

```js
if (Array.isArray(arr[i])) {
  flattenArray(arr[i]);
}
```

where the result of an inner call to flattenArray isn't assigned to anything so it won't be included in the final response.

### Make sure whatever the candidate is doing doesn't produce a nested array

Sometimes candidates will do something like this:

```js
if (Array.isArray(arr[i])) {
  flattenedArr.push(flattenArray(arr[i]));
}
```

Which is pushing an array into an array meaning that it will still be nested. Same with returning map or slice or similar methods that create new arrays.
