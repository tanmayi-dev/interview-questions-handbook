# Balanced Parentheses

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

## Solution

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
