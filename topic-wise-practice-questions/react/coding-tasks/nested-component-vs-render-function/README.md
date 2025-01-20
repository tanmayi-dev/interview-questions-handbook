# Coding task - React - nested component vs render function

1. Describe differences between ComponentA and ComponentB
2. Are there any violations of React rules? What are the consequences?

```jsx
const ComponentA = () => {
  // ...
  const renderUser = (userId: string) => {
    return (
      <div>
        <Avatar userId={userId}></Avatar>
        <Profile userId={userId}></Profile>
      </div>
    );
  };

  return (
    <div>
      user 1: {renderUser("1")}
      user 1: {renderUser("2")}
    </div>
  );
};

const ComponentB = () => {
  // ...
  const User = ({ userId }: { userId: string }) => {
    return (
      <div>
        <Avatar userId={userId}></Avatar>
        <Profile userId={userId}></Profile>
      </div>
    );
  };

  return (
    <div>
      user 1: <User userId={"1"}></User>
      user 2: <User userId={"2"}></User>
    </div>
  );
};
```
