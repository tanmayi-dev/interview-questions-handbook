## Valid Parentheses <a id="valid"></a>

**Level: M**
**Description: Candidate should use stack**

Valid parentheses
You're given a mathematical expression as a string.
example: "[2 - { ( 1 + 2 ) * 3 }]".
Valid parenthesis characters are [ ] { } ( )
All other chars should be ignored
Write a program to return True if the symbols are complete. i.e. "{}" is True, "}{" is False.

[ ( ) ( ) { { } { } } ]

### Solution <a id="s1"></a>

The main idea is to use stack, on every open parentheses insert into stack,
on any closed parentheses check the top of the stack if there is an equal parentheses and pop it out.

**Common Pitfalls**

- Forgetting to check if the stack is empty at the end of the function.
- Popping from an empty stack - needs to be handled. Most implementations will throw.
- Ideally, they should have a map with opening -> closing brackets.
  - Python: Using `if x in brackets.values()` has O(n) complexity,
    unlike searching in keys (`if x in brackets`), because the former searches in a list.
    A fast lookup would only be possible if the dict had a second hash map for
    values, which it does not. They should be mindful of the difference.
  - Java: some candidates seem to use double quotes for comparison with char.
    Ensure that they know the difference between char and String.

**Follow-up Questions**

- Java: If they don't handle an empty stack, they typically have code that unboxes the
  Character type from the stack to char. You can ask: what would happen here if pop()
  returned null. They should know that cahr cannot be null and the implicit unboxing
  will cause a NPE.

- Java: Especially if the candidate ends up (possibly accidentally) mixing up String and
  char, do ask them about string comparison. Have them explain why == shouldn't be used
  with Strings (or any objects in general) and in which specific cases it could be used
  for that.
