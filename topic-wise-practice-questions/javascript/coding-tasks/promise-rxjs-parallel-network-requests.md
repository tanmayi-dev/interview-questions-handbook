# Coding task - Promise/RxJs - parallel network requests

1. Fetch all users in parallel, console.log them all at once
   - A candidate should know to use Promise.all
2. Handle 404, still return non-errored users
   - A candidate can come up with Promise.allSettled, ask to implement without (by `.catch()`)
3. Rewrite with RxJs
   - Candidate should come up with using `forkJoin`

```js
const getUser = (userId: string) => {
  return new Promise((resolve, reject) => {
    if (userId === "0") {
      reject("404");
    } else {
      resolve({ userId });
    }
  });
};
const USER_IDS = ["1", "2", "3"];
const main = async () => {
  // fetch all users and console log them
};
main();
```
