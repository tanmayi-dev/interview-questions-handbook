# Display Users

Write a component that accepts and displays a list of users 
- talk about `key` prop
- Ask to add a toggle to sort in ascending / descending order
  - see if candidate will clone array or mutate a prop
- talk about `useMemo` applications 


```tsx
import React, { useState, useMemo } from 'react';

// User interface
interface User {
  id: number;
  name: string;
  age: number;
}



// Sample users data
const exampleUsers: User[] = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 22 },
  { id: 4, name: 'David', age: 35 },
  { id: 5, name: 'Eve', age: 28 },
];

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [sortAscending, setSortAscending] = useState<boolean>(true);

  // Toggle sorting order
  const toggleSortOrder = () => {
    setSortAscending((prev) => !prev);
  };

  // Memoize sorted users
  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => {
      return sortAscending ? a.age - b.age : b.age - a.age;
    });
  }, [users, sortAscending]);

// Memoize sorted users by name
  const sortedUsersOnNames = useMemo(() => {
    return [...users].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return sortAscending ? -1 : 1;
      if (nameA > nameB) return sortAscending ? 1 : -1;
      return 0;
    });
  }, [users, sortAscending]);


  return (
    <div>
      <h1>User List</h1>
      <button onClick={toggleSortOrder}>
        Sort {sortAscending ? 'Descending' : 'Ascending'}
      </button>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

// Usage Example
const App: React.FC = () => {
  return (
    <div>
      <UserList users={exampleUsers} />
    </div>
  );
};

export default App;

```


1. Key Prop:
In the sortedUsers.map function, each user is rendered inside a list item <li>. The key prop is set to user.id, which uniquely identifies each list item. This is crucial for React’s reconciliation process and helps optimize rendering by minimizing re-renders.


2. Sorting Toggle:
The component includes a button that toggles the sorting order. The state sortAscending determines whether the users should be sorted in ascending or descending order by age.


3. Cloning vs. Mutating:
In the sortedUsers variable, we use the spread operator [...] to clone the users array. This is important to avoid mutating the original prop, which could lead to unexpected behavior and bugs.
Candidates should be encouraged to clone arrays for transformations instead of mutating props directly to ensure immutability.

4. useMemo Applications:
The useMemo hook is used to memoize the sorted list of users. This optimization prevents unnecessary re-sorting on every render, as it only recalculates the sorted list when either the users array or sortAscending state changes. This can significantly improve performance, especially with larger datasets.
