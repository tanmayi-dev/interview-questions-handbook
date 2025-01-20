# Flatten Nested Array

```js

// Given array
const nestedArr = [1, [2, [3, 4, [5], 7, [7, 8, [9]]], 10]];

console.log(flattenArray5(nestedArr)); // Rsult -> [ 1, 2, 3, 4, 5, 7, 7, 8, 9, 10]
```

## Solutions

### Using Recurions without Extra Space and isArray method
```js

// using isArray and passing as argument for saving extra space
function flattenArray4(arr, flattenedArr = []) {
  // let flattenedArr = []; // A new array is created every time the function is called => EXTRA SPACE
    for(let i = 0; i < arr.length; i++ ) {
        if(Array.isArray(arr[i])) {
            flattenArray4(arr[i], flattenedArr); // flattenedArr = flattenedArr.concat(flattenArray2(arr[i]));
        }
        else {
            flattenedArr.push(arr[i]);
        }
    }
    return flattenedArr;
}
```

### Using Prototype
```js

// using prototype method flat
function flattenArray1(arr) {
  return arr.flat(4); // Infinity for too much nested
}

```

### Using Recursion and Extra Space
```js

// using recursive function - works for iframe
// uses extra space
function flattenArray2(arr) {
  let flattenedArr = []; // A new array is created every time the function is called
  for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
          flattenedArr = flattenedArr.concat(flattenArray2(arr[i]));
      }
      else {
          flattenedArr.push(arr[i]);
      }
  }
  return flattenedArr;
}

/* Array.isArray also works across iframes and different context 
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('Hello'));   // false
console.log(Array.isArray({ key: 'value' })); // false
console.log(Array.isArray(undefined)); // false

console.log([1, 2, 3] instanceof Array); // true
console.log('Hello' instanceof Array);   // false
console.log({ key: 'value' } instanceof Array); // false

var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
var arr = new iframe.contentWindow.Array();
console.log(arr instanceof Array);   // false
console.log(Array.isArray(arr));     // true

*/

```

### Using Recusion without Extra Space
```js

// using recursive with instance of - does not work across iframes and different context
function flattenArray3(arr, flattenedArr = []) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] instanceof Array) {
            flattenArray3(arr[i], flattenedArr);
        } else {
            flattenedArr.push(arr[i]);
        }
    }
    return flattenedArr;
}

```




### Using reduce and concat

```js
// using reduce and concat

function flattenArray5(arr) {
  return arr.reduce((flat, toFlatten) => 
    flat.concat(Array.isArray(toFlatten) ? [...flattenArray5(toFlatten)] : toFlatten), []);
}

```
