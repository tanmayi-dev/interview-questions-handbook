# Route Validator <a id="a1"></a>

### Your Task

You will be given two arguments:

1. A valid list of single letters in the format ["A", "B", "C"]

2. A valid 2D matrix of letters in the format [ ["A, "B"], ["M", "N"]]

Write a function that takes these to arguments and returns a boolean

- true - A route exists from the top left to the bottom right of the matrix using the given list of letters in order.
- false - There is no such route.

### Rules

1. You can only move right or down, no diagonals
2. List of letters is always size 3 to 197 and can be considered validated outside your function
3. Matrix is always size 2x2 to 99x99 and can be considered validated outside your function
4. The first letter of the list must start at the top left corner
5. The last letter of the list must end at the bottom right corner

```
-------------------------------- Example 1 -----------------------------------
 inputList = ["A", "P", "P", "L", "E"]
 matrix    = [["A", "N", "O"],["P", "P", "X"],["L", "L", "E"]]
 Starts top left ------> A N O
                                    P P X
                                    L L E <------ Ends at the bottom right
 Route Exists with given characters: true
 -------------------------------- Example 2 -----------------------------------
 ["B", "A", "N", "A", "N", "A"]
 Starts top left ------> B A N A
                                    A Z A Z
                                    N A N A <------ Ends at the bottom right
 Route Exists with given characters: true
 -------------------------------- Example 3 -----------------------------------
 ["N", "E", "V", "E", "R"]
 Starts top left ------> N E P
                                    E V F
                                    R K L <------ No route to the bottom right
 Route Exists with given characters: false


```

### Solution

```python
# Python

def cut_column(matrix):
  res = []
  for elem in matrix:
    res.append(elem[1:])
  return res
 
def validate_route(route, matrix):
  if len(route) == 0 or len(matrix) == 0:
    return False
 
  if len(route) == 1 and len(matrix) == 1 and len(matrix[0]) == 1 and route[0] == matrix[0][0]:
    return True
 
  return validate_route(route[1:], matrix[1:]) or validate_route(route[1:], cut_column(matrix))
 
print(str(validate_route(["A", "P", "P", "L", "E"], [["A", "N", "O"],["P", "P", "X"],["L", "L", "E"]])))
print(str(validate_route(["B", "A", "N", "A", "N", "A"], [["B", "A", "N", "A"], ["A", "Z", "A", "Z"], ["N", "A", "N", "A"]])))
print(str(validate_route(["N", "E", "V", "E", "R"], [["N", "E", "P"], ["E", "V", "F"], ["R", "K", "L"]])))
```

```cpp
// CPP

#include <iostream>
#include <vector>
 
bool validate_route_inner(
  const std::vector<std::string> & route,
  const std::vector<std::vector<std::string>> & matrix,
  std::size_t route_index,
  std::size_t row_index,
  std::size_t column_index)
{
  if ((route_index >= route.size()) || (row_index >= matrix.size())) {
    return false;
  }
 
  if ((route_index == route.size() - 1) &&
      (row_index == column_index == matrix.size() - 1) &&
      (route.at(route_index) == matrix.at(row_index).at(column_index))) {
    return true;
  }
 
  if (route.at(route_index) != matrix.at(row_index).at(column_index)) {
    return false;
  }
 
  return validate_route_inner(route, matrix, route_index + 1, row_index + 1, column_index) || validate_route_inner(route, matrix, route_index + 1, row_index, column_index + 1);
}
 
bool validate_route(const std::vector<std::string> & route, const std::vector<std::vector<std::string>> & matrix)
{
  return validate_route_inner(route, matrix, 0, 0, 0);
}
 
int main()
{
  std::vector<std::string> route = {"A", "P", "P", "L", "E"};
  std::vector<std::vector<std::string>> matrix = {{"A", "N", "O"},{"P", "P", "X"},{"L", "L", "E"}};
  std::cout << validate_route(route, matrix) << std::endl;
 
  route = {"B", "A", "N", "A", "N", "A"};
  matrix = {{"B", "A", "N", "A"}, {"A", "Z", "A", "Z"}, {"N", "A", "N", "A"}};
  std::cout << validate_route(route, matrix) << std::endl;
 
  route = {"N", "E", "V", "E", "R"};
  matrix = {{"N", "E", "P"}, {"E", "V", "F"}, {"R", "K", "L"}};
  std::cout << validate_route(route, matrix) << std::endl;
}
```
