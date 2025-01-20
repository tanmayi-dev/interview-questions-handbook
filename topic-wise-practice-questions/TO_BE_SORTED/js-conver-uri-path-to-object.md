# Convert URI Paths to Object

```js
const arr = ['account/user', 'account/user/logId', 'account/user/logName', 'config/dashboard/sean', 'config/dashboard/tracy', 'config/logfiles'];
const result = objectify(arr);
// {"account":{"user":{"logId":{},"logName":{}}},"config":{"dashboard":{"sean":{},"tracy":{}},"logfiles":{}}}
function objectify(paths) {
}

```
## Solution

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

```

<!--
## Solution 2 


```js
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

-->
