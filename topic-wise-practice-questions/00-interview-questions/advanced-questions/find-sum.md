## Find Sum <a id="findsum"></a>

```
Write a program that, given an array A[] of n numbers and another number k, determines whether or not there exist two elements in A[] whose sum is exactly k.

Examples:
Input: arr[] = {0, -1, 2, -3, 1}
    k= -2
Output: true
Explanation: If we calculate the sum of the output,1 + (-3) = -2
Input: arr[] = {1, -2, 1, 0, 5}
    k = 0
Output: false

```

### Solution <a id="s3"></a>

**Brute force**
Candidate will most probably start with having two loop cycles and counting all possible scenarios. O(n^2)

**Optimised**
One loop that checks whether k - arr[i] is in the set otherwise inserts arr[i] to the set. O(n)

```python
def hasK(arr: list, k: int):
    buffer = []
    for e in arr:
        x = k - e
        if x in buffer:
            return True
        else:
            buffer.append(e)
```

## Find Sum <a id="integer"></a>

```
Given a positive integer n, write a function that returns true if the given number
is a palindrome, else false. For example, n=12321 is a palindrome, but n=1451 is
not a palindrome


```

### Solution <a id="s4"></a>

The easiest solution is to just convert an integer to string and deal with it as a
classical string palindrome - iterate starting from start and end of string and
compare values. More optimal solution is to convert an integer to an array of digits
by continuously dividing it by 10, appending the remainder to the array, dividing the
result by 10, etc. Then iterate over the produced array as if it was a string:

```python
# construct array
digits = []
while n > 0:
	digits.append(n % 10)
	n = n//10

# see if array is a palindrome
i = 0
j = len(digits) - 1
while i < j:
	if digits[i] != digits[j]:
		return False
	i+=1
	j-=1
return True

```

You can also get rid of 2 cycles and do it in one by splitting the integer into
digits and reversing it at the same time:

```python
result = n
reversed_n = 0

while result > 0:
    reversed_n = reversed_n * 10 + result %10;
    result = result // 10

return n == reversed_n


```

This is the most optimal O(n) solution.
