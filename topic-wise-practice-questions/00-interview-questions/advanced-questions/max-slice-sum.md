## MaxSliceSum <a id="maxslicesum"></a>

**Level:**

- **Brute force: M**
- **Optimized: L**

```
The problem is to find a maximum sum of a compact subsequence (sub-array) of a given integer array.
A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N,
is called a slice of array A. The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].

Write a function:

def solution(A)

that, given an array A consisting of N integers, returns the maximum sum of any slice
of A.

For example, given array A such that:

A = [-1, 3, 2, -6, 4, 0]

(4, 5) is a slice of A that has sum 4 (4 + 0),
(3, 3) is a slice of A that has sum −6,
(0, 2) is a slice of A that has sum 4 (-1 + 3 + 2),
(1, 2) is a slice of A that has sum 5 (3 + 2),
no other slice of A has sum greater than (1, 2), so the result is 5.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..1,000,000];
each element of array A is an integer within the range [−1,000,000..1,000,000];
the result will be an integer within the range [−2,147,483,648..2,147,483,647].


TEST INPUT:

List of tuples, where the tuple consists of an input array and expected response

ARRS = [
    ([0],0),
    ([1,2], 3),
    ([1,-1, 1], 1),
    ([1,-1, 3], 3),
    ([-1,-1, -1], -1),
    ([-5,-2, -6], -2),
    ([-5, 2, -6], 2),
    ([-5, 2, 3, -6], 5),
]


for t in ARRS:
    r = solution(t[0])
    if r != t[1]:
        print(f"FAIL: {t[0]}, got {r} expected {t[1]} ")
    else:
        print(f"OK: {t[0]} {t[1]}")


```

### Solution <a id="s2"></a>

**Brute Force**
Most answers would be kind of brute force. Two for loops with two indexes, continuously
computing all possible values, storing the absolute max.

**Using local and absolute max**
The strategy is to keep track of the sume of the current element + previous element and
compare it to the current element to find the local max. The absolute max will be the
highest local max.

```python

def solution(A):
    absolute_max = A[0]
    local_max = A[0]
    next_sum = 0

    for current_element in A[1:]:
        next_sum = local_max + current_element
        local_max = max(current_element, next_sum)
        absolute_max = max(absolute_max, local_max)

    return absolute_max

```
