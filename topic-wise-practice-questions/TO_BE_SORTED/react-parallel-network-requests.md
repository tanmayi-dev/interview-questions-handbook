# Coding task - Promise/RxJs - parallel network requests

1. Fetch all users in parallel, console.log them all at once
   - A candidate should know to use Promise.all
2. Handle 404, still return non-errored users
   - A candidate can come up with Promise.allSettled, ask to implement without (by `.catch()`)
3. Rewrite with RxJs
   - Candidate should come up with using `forkJoin`

```jsx
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

## Solution

```jsx
const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    if (userId === "0") {
      reject("404");
    } else {
      resolve({ userId });
    }
  });
};

const USER_IDS = ["1", "2", "3", "0"];

const main = async () => {
  const userPromises = USER_IDS.map((userId) =>
    getUser(userId).catch((error) => {
      console.error(`Failed to fetch user ${userId}:`, error);
      return null; // Return null or some default value in case of error
    })
  );

  const users = await Promise.all(userPromises);
  console.log(users.filter(Boolean)); // Filter out the null (failed) users
};

main();
```

# I HAVE NOT USED RxJS Library - React Extension for JavaScript - SO WILL NOT USE THIS SOLUTION

## RxJS Solution

```jsx
import { forkJoin, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    if (userId === "0") {
      reject("404");
    } else {
      resolve({ userId });
    }
  });
};

const USER_IDS = ["1", "2", "3", "0"];

const getUserObservable = (userId) => {
  return of(getUser(userId)).pipe(
    map((user) => user),
    catchError((error) => {
      console.error(`Failed to fetch user ${userId}:`, error);
      return of(null); // Return observable of null on error
    })
  );
};

const main = () => {
  const userObservables = USER_IDS.map(getUserObservable);

  forkJoin(userObservables).subscribe((users) => {
    console.log(users.filter(Boolean)); // Filter out the null (failed) users
  });
};

main();
```
