# Version Bumping

```js

/**

Version Bumping
Write a function that gets a version as input in this template [0-9].[0-9].[0-9].[0-9] (example: 1.8.3.4) and bumping it by 1. Means: 1.8.3.4 => 1.8.3.5, 1.2.3.9 => 1.2.4.0 etc…
You can assume the input will be valid and you can ignore 9.9.9.9 case. */

function bumpUpVersion(version: string) { // ... }

console.log(bumpUpVersion('1.8.3.4'), '<-- 1.8.3.5'); 
console.log(bumpUpVersion('0.0.3.4'), '<-- 0.0.3.5'); 
console.log(bumpUpVersion('1.8.3.9'), '<-- 1.8.4.0'); 
console.log(bumpUpVersion('1.9.9.9'), '<-- 2.0.0.0');



```
### Solution

```js
 function bumpUpVersion(version: string): string {
    // Split the version string into an array of numbers
    const versionParts = version.split('.').map(Number);

    // Start bumping from the last part of the version
    for (let i = versionParts.length - 1; i >= 0; i--) {
      if (versionParts[i] < 9) {
        versionParts[i]++; // Increment the current part
        break; // Exit the loop since we're done
      } else {
        versionParts[i] = 0; // Reset to 0 and continue to the next part
      }
  }

    // Join the parts back into a string
    return versionParts.join('.');
  }
```
