# SetTimeout - What will be the output ? and Why ?

```js
// In what order will the numbers 1-4 be logged
// to the console when the code below is executed? Why?

(function() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
})();
```

### Solution

```js
1
4
3
2 // after 1 second
```

![image](https://github.com/user-attachments/assets/23322dff-5b19-4234-bb44-2c9ce71f5ddd)

### Execution Order
- The synchronous logs (1 and 4) occur first:
  - Output: 1
  - Output: 4
- After the synchronous code has completed, the JavaScript engine checks the task queue (or callback queue) for any queued functions to execute:
- The function for setTimeout with 0 ms is executed, logging 3.
  - Output: 3
- Finally, after the 1000 ms timeout, the function for logging 2 is executed:
  - Output: 2
 
### Explanation 

- Immediate Execution:
  - The function is invoked immediately due to the parentheses ().
  - The first line inside the function `console.log(1);` executes immediately, so 1 is logged first.

- `setTimeout with 0 ms:`
  - The second line is `setTimeout(function(){console.log(3)}, 0);`.
  - Although the timeout is set to 0 ms, it does not execute immediately. The function provided to setTimeout is queued in the event loop to run after the current execution stack is clear.
  - Therefore, it will not run until all synchronous code has completed.

- `setTimeout with 1000 ms:`
  - The third line is setTimeout(function(){console.log(2)}, 1000);.
  - This sets a timeout of 1000 ms (1 second) to log 2. It will be queued to run after 1 second, but it also will not execute immediately.

- `Final Console Log:`
  - The last line `console.log(4);` executes immediately after the first console log, so 4 is logged next.
