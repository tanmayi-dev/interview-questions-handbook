# TypeScript Discrimination

```ts
type User = {
  // implement
}


const users: User[] = [
  {
    id: 0,
    role: 'admin',
    permissions: [1, 2, 3],
  },
  {
    id: 1,
    role: 'member',
    friends: ['bob', 'alice', 'michael'],
  },
];

for (const user of users) {
  // log user permissions if it's an admin, otherwise log user friends
}

```

## Solution

```ts
type User = {
  // implement
  id: number;
  role: 'admin';
  permissions: number[];
} | {
    id: number;
    role: "member";
    friends: string[];
}


const users: User[] = [
  {
    id: 0,
    role: 'admin',
    permissions: [1, 2, 3],
  },
  {
    id: 1,
    role: 'member',
    friends: ['bob', 'alice', 'michael'],
  },
];

for (const user of users) {
  switch(user.role) {
    case "admin": 
        console.log(user.permissions);
        break;
    case "member":
        console.log(user.friends);
        break;
    default:
        throw new Error("User role is not defined");
  }
}

```
