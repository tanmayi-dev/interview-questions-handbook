# Coding task - Typescript - type discrimination

1. Write correct typing for the following JSON response
2. log user permissions for admin users, otherwise log user friends. Should be strictly type safe, without e.g. `as`

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
