# Coding Questions

### Flatten a Nested Array into Single Level Array

```js
// Given array
const nestedArr = [1, [2, [3, 4, [5], 7, [7, 8, [9]]], 10]];

console.log(flattenArray5(nestedArr)); // Rsult -> [ 1, 2, 3, 4, 5, 7, 7, 8, 9, 10]

```

<details>
<summary>Answer</summary>
<p>

```js
// using prototype method flat
function flattenArray1(arr) {
  return arr.flat(4); // Infinity for too much nested
}

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

// using isArray and passing as argument for saving extra space
function flattenArray4(arr, flattenedArr = []) {
    for(let i = 0; i < arr.length; i++ ) {
        if(Array.isArray(arr[i])) {
            flattenArray4(arr[i], flattenedArr);
        }
        else {
            flattenedArr.push(arr[i]);
        }
    }
    return flattenedArr;
}

// using reduce and concat

function flattenArray5(arr) {
  return arr.reduce((flat, toFlatten) => 
    flat.concat(Array.isArray(toFlatten) ? [...flattenArray5(toFlatten)] : toFlatten), []);
}
```

</p>
</details>

---

### Write a function that returns all of its arguments as a one-dimensional array. The return array may contain any type of value except an array.

```js
const arr = ["yellow", ["a", "b", "c"], "blue", [[1, 2, 3], "purple"]];
const result = flatten("red", arr, 8, true);
// ["red","yellow","a","b","c","blue",1,2,3,"purple",8,true]

function flatten() {}
```

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---
### Write a function that converts URI paths into objects

```js
const arr = ['account/user', 'account/user/logId', 'account/user/logName', 'config/dashboard/sean', 'config/dashboard/tracy', 'config/logfiles'];
const result = objectify(arr);
// {"account":{"user":{"logId":{},"logName":{}}},"config":{"dashboard":{"sean":{},"tracy":{}},"logfiles":{}}}
function objectify(paths) {
}

```

<details>
  <summary>Answer</summary>
  <p>

```js

// SOLUTION 1
function objectify(paths) {
    
    const uriObj = {};

    for(const path of paths) {
        const parts = path.split('/'); // [acc, user, logid]
        
        let currObj = uriObj; // pointer to uriObj
        
        for(const part of parts) {
            if(!currObj[part]) {
                currObj[part] = {}; // {acc: { user : { logId : {}}}}
            }
            currObj = currObj[part]; // {}
            
        }
    }
    
    return uriObj;
    
}

// Time Complexity: O(n), where n is the total number of characters in all paths
// Space Complexity: O(n) in the worst case, but potentially less if there are shared prefixes.


// SOLUTION 2

function objectify(paths) {
  return paths.reduce((acc, path) => {
    const parts = path.split('/');
    insertPath(acc, parts);
    return acc;
  }, {});
}

function insertPath(obj, parts) {
  if (parts.length === 0) return;
  
  const [head, ...tail] = parts;
  obj[head] = obj[head] || {};
  insertPath(obj[head], tail);
}
/**
This solution works as follows:

1. We use reduce to iterate over all paths, accumulating the result in a single object.
2. For each path, we split it into parts.
3. We call a recursive helper function insertPath to insert the parts into the accumulator object.
4. insertPath works recursively:
    a. If there are no parts left, we're done.
    b. Otherwise, we take the first part (head) and ensure it exists in the current object.
    c. We then recursively call insertPath on the rest of the parts (tail), using the nested object as the new base.


Time Complexity: O(n), where n is the total number of characters in all paths.
Space Complexity: O(n) in the worst case, but potentially less if there are shared prefixes.

**/

```
    
  </p>
</details>


---

### Write a function that determines whether a string has balanced pairs of Brackets.

```js
console.log(isBalanced('(){(({(){()}}))}')); // true
console.log(isBalanced('([{}])')); // true
console.log(isBalanced('{[]}')); // true
console.log(isBalanced('function () { console.log(["cat", "dog"]) }')); // true
console.log(isBalanced('(aa)')); // true
console.log(isBalanced('(]')); // false
console.log(isBalanced('([)]')); // false
console.log(isBalanced('function ( { console.log(["cat", "dog"]) }')); // false

function isBalanced(str) {
  // need to implement!
}
```

<details>
  <summary>Answer</summary>
  <p>

```js
function isBalanced(str) {
  const mapper = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  let stack = [];
  
  for (const char of str) {
    if (char in mapper) {
      // It's an opening bracket
      stack.push(char);
    } else {
      // It's a closing bracket or another character
      if (stack.length === 0) return false; // closing bracket without opening
      
      const lastOpen = stack.pop();
      if (mapper[lastOpen] !== char) {
        return false; // mismatched brackets
      }
    }
  }
  
  return stack.length === 0; // true if all brackets are matched and closed
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```
    
  </p>
</details>

---

### Find an equivalent node in two trees

Given identical trees A and B, there is a node X in tree A. How would you find the equivalent node Y in tree B? Notes: These are generic trees, not DOMs. Data is not unique to each node. Nodes do not have pointers to their parent nodes. All you have to start with are pointers to A, B, and X.


<details>
<summary>Answer</summary>
<p>

Sample Answers:
- Traverse each tree in parallel. When pointer in A reaches X, pointer in B has found Y.
- Traverse A to find X. Record the path and play it back in B.
- Flatten each tree and find the index of X in A. Y will be at the same index in B.


</p>
</details>
