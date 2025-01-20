```ts
/**
 * Version Bumping
 * Write a function that gets a version as input in this template [0-9].[0-9].[0-9].[0-9] (example: 1.8.3.4) and bumping it by 1. Means: 1.8.3.4 => 1.8.3.5, 1.2.3.9 => 1.2.4.0 etc…
 * You can assume the input will be valid and you can ignore 9.9.9.9 case.
 */

function bumpUpVersion(version: string) {
  // ...
}

console.log(bumpUpVersion('1.8.3.4'), '<-- 1.8.3.5');
console.log(bumpUpVersion('0.0.3.4'), '<-- 0.0.3.5');
console.log(bumpUpVersion('1.8.3.9'), '<-- 1.8.4.0');
console.log(bumpUpVersion('1.9.9.9'), '<-- 2.0.0.0');
```
