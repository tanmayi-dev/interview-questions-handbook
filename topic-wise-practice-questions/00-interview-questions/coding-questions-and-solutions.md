[Must Do Coding Questions - GFG](https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/)


# Most asked Coding Questions

- [Arrays and Strings](#arrays)
- [Searching and Sorting](#sort)
- [Stacks](#stacks)
- [Queues](#queues)
- [Linked Lists](#linkedlist)
- [Heaps](#heaps)
- [Trees and BST](#trees)
- [Dynamic Programming](#dp)
- [Graphs](#graphs)
- [Miscellaneous](#misc)

## Arrays and Strings <a id="arrays"></a>

### 1. Find the missing number in an array of integers - [gfg](https://www.geeksforgeeks.org/find-the-missing-number/), [tuf](https://takeuforward.org/arrays/find-the-missing-number-in-an-array/)

```
Input: arr[] = {1, 2, 4, 6, 3, 7, 8} , N = 8
Output: 5
```
<details>
<summary>A1: Using XOR</summary>
<p>

1. Linear Search - O(N^2)
2. Hashing - O(2*N)
3. Summation Approach - O(N)
4. XOR Approach - O(N)

```java

// XOR Implementation

import java.util.*;

public class tUf {
    public static int missingNumber(int []a, int N) {

        int xor1 = 0, xor2 = 0;

        for (int i = 0; i < N - 1; i++) {
            xor2 = xor2 ^ a[i]; // XOR of array elements
            xor1 = xor1 ^ (i + 1); //XOR up to [1...N-1]
        }
        xor1 = xor1 ^ N; //XOR up to [1...N]

        return (xor1 ^ xor2); // the missing number
    }

    public static void main(String args[]) {
        int N = 5;
        int a[] = {1, 2, 4, 5};

        int ans = missingNumber(a, N);
        System.out.println("The missing number is: " + ans);
    }
}



```

</p>
</details>

---

### 2. Implement an algorithm to rotate an array - [gfg](https://www.geeksforgeeks.org/array-rotation/)

    ```
    Input: 
    N = 7, d = 2 ,arr[] = {1, 2, 3, 4, 5, 6, 7}
    Output: 3 4 5 6 7 1 2
    
    Input: N = 7, d=2 , arr[] = {3, 4, 5, 6, 7, 1, 2},
    Output: 5 6 7 1 2 3 4
    ```
<details>
<summary>Answer</summary>
<p>

1. Using Temp Array
2. Rotate one by one
3. Juggling Algorithm - use GCD
4. Reversal Algorithm

```java

```

</p>
</details>

---

### 3. Check if a string is a palindrome [leetcode](https://leetcode.com/problems/valid-palindrome/description/)

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```
    
<details>
<summary>A1: Palindrome</summary>
<p>

```java
class Solution {
  public boolean isPalindrome(String s) {
    int l = 0;
    int r = s.length() - 1;

    while (l < r) {
      while (l < r && !Character.isLetterOrDigit(s.charAt(l)))
        ++l;
      while (l < r && !Character.isLetterOrDigit(s.charAt(r)))
        --r;
      if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r)))
        return false;
      ++l;
      --r;
    }

    return true;
  }
}
```

</p>
</details>

---

### 4. Find the first non-repeating character in a string
```
Input: “geeksforgeeks”
Output: f
Explanation: As ‘f’ is first character in the string which does not repeat.
```
<details>
<summary>A1: Using HashMap</summary>
<p>

1. Traverse over string for every character - O(N^2)
2. Using HashMap and single String Traversal- O(N)
3. Using Count array - Initialize with -1. If it is -1 then change it to i and. If it is not -1, then this means that this character already appeared before, so change it to -2. - O(N)

```java
// Java program to find first non-repeating character
// Note : hashmap is used

import java.util.*;

class CountIndex {
	int count, index;

	// constructor for first occurrence
	public CountIndex(int index)
	{
		this.count = 1;
		this.index = index;
	}

	// method for updating count
	public void incCount() { this.count++; }
}
class GFG {
	static final int NO_OF_CHARS = 256;

	static HashMap<Character, CountIndex> hm
		= new HashMap<Character, CountIndex>(NO_OF_CHARS);

	/* calculate count of characters
	in the passed string */
	static void getCharCountArray(String str)
	{
		for (int i = 0; i < str.length(); i++) {
			// If character already occurred,
			if (hm.containsKey(str.charAt(i))) {
				// updating count
				hm.get(str.charAt(i)).incCount();
			}

			// If it's first occurrence, then store
			// the index and count = 1
			else {
				hm.put(str.charAt(i), new CountIndex(i));
			}
		}
	}

	/* The method returns index of first non-repeating
	character in a string. If all characters are
	repeating then returns -1 */
	static int firstNonRepeating(String str)
	{
		getCharCountArray(str);
		int result = Integer.MAX_VALUE, i;
		for (Map.Entry<Character, CountIndex> entry :
			hm.entrySet()) {
			int c = entry.getValue().count;
			int ind = entry.getValue().index;
			if (c == 1 && ind < result) {
				result = ind;
			}
		}

		return result;
	}

	// Driver method
	public static void main(String[] args)
	{
		String str = "geeksforgeeks";
		int index = firstNonRepeating(str);

		System.out.println(
			index == Integer.MAX_VALUE
				? "Either all characters are repeating "
					+ " or string is empty"
				: "First non-repeating character is "
					+ str.charAt(index));
	}
}


```

</p>
</details>

---

### 5. Write a program to remove duplicates from a sorted array
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 6. Reverse a String - [link](https://www.geeksforgeeks.org/problems/reverse-a-string/1)
```
Input : s = "abc"
Output : s = "cba"

Input : s = "geeksforgeeks"
Output : s = "skeegrofskeeg"
```
<details>
<summary>A1 : Using String class</summary>
<p>

```java
// java program to reverse a word

import java.io.*;
import java.util.Scanner;

class GFG {
	public static void main (String[] args) {
	
		String str= "Geeks", nstr="";
		char ch;
	
	System.out.print("Original word: ");
	System.out.println("Geeks"); //Example word
	
	for (int i=0; i<str.length(); i++)
	{
		ch= str.charAt(i); //extracts each character
		nstr= ch+nstr; //adds each character in front of the existing string
	}
	System.out.println("Reversed word: "+ nstr);
	}
}


```
</p>
</details>

<details>
<summary>A2 : Using ArrayList</summary>
<p>

```java


```
</p>
</details>

<details>
<summary>A2 : Using ArrayList</summary>
<p>

```java
// Java program to Reverse a String using ListIterator
import java.lang.*;
import java.io.*;
import java.util.*;

// Class of ReverseString
class ReverseString {
	public static void main(String[] args)
	{
		String input = "Geeks For Geeks";
		char[] hello = input.toCharArray();
		List<Character> trial1 = new ArrayList<>();

		for (char c : hello)
			trial1.add(c);

		Collections.reverse(trial1);
		ListIterator li = trial1.listIterator();
		while (li.hasNext())
			System.out.print(li.next());
	}
}


```
</p>
</details>

<details>
<summary>A3: Using Stack</summary>
<p>

```java
import java.util.*;

class GFG {
	public static void main(String[] args) {
		
		String s="Geeks For Geeks";
		
		//initializing a stack of type char
		Stack<Character> stack=new Stack<>();
		
		for(char c:s.toCharArray())
		{
			//pushing all the characters
			stack.push(c);
		}
		
		String temp="";
		
		while(!stack.isEmpty())
		{
			//popping all the chars and appending to temp
			temp+=stack.pop();
		}
		
		System.out.println("Reversed string is : "+temp);
		
	}
}


```

</p>
</details>

### 7. Reverse each word in a string - [link](https://leetcode.com/problems/reverse-words-in-a-string-iii/description/)
<details>
<summary>Answer</summary>
<p>

- Objects of String are immutable.
- String class in Java does not have reverse() method, however, the StringBuilder class has built-in reverse() method.
- StringBuilder class do not have toCharArray() method, while String class does have toCharArray() method. 


</p>
</details>

---

### 8. Reverse words in a string - [link](https://leetcode.com/problems/reverse-words-in-a-string/description/)
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 9. Check for Palindrome - [link](https://leetcode.com/problems/valid-palindrome/description/)
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 10. Anagram Question - [link](https://leetcode.com/problems/valid-anagram/description/)
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 11. Check for Balanced Parenthesis - [link](https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/)
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 12. Two Sum - [link](https://leetcode.com/problems/two-sum/description/)
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 13. FizzBuzz - [link](https://leetcode.com/problems/fizz-buzz/description/)
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 14. Write a program to print the occurrences of capital and small letters and count of strings
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 15. Find the greatest element to its right in an array
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 16. Maximum Sum Subarray : Kadane's Algorithm
```
Input:
Arr[] = {1,2,3,-2,5}

Output:

9
Explanation:
Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.
```
<details>
<summary>Answer</summary>
<p>


```java
import java.util.*;
import java.lang.*;
import java.io.*;
class Main {
    public static int maximumSubarraySum(int[] arr) {
        int n = arr.length;
        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i <= n - 1; i++) {
            int currSum = 0;
            for (int j = i; j <= n - 1; j++) {
            currSum += arr[j];
            if (currSum > maxSum) {
                maxSum = currSum;
            }
            }
        }

        return maxSum;
    }
    public static void main(String args[]) {
        // Your code goes here
        int a[] = {1, 2, 3, -2, 5};
        System.out.println(maximumSubarraySum(a));
    }
}
```

</p>
</details>

---


## Searching and Sorting <a id="sort"></a>

### 1. Implement Binary Search
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 2. Find the kth smallest / largest element in an array
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 3. Implement Bubble Sort
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 4. Implement Selection Sort
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 5. Implement Merge Sort
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 6. Implement Quick Sort
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 7. Count the number of inversions in an array
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 8. Search in a Rotated Sorted Array
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 9. Implement a sorting algorithm for linked lists
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 10. Sort an array of 0s and 1s
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

## Stacks <a id="stacls"></a>

### 1. 
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

## Queues <a id="queues"></a>

### 1. 
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

## Linked Lists <a id="linkedlist"></a>

### 1. Implement an algorithm to reverse a linked list
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 2. Detect a cycle in a linked list
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 3. Find the intersection point of two linked lists
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 4. Reverse a linked list in a groups of k
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 5. Implement a function to add two numbers represented by linked lists
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 6. Clone a linked list with next and random pointer
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

## Heaps <a id="heaps"></a>

### 1. 
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---


## Trees and Binary Search Trees (BST) <a id="trees"></a>

### 1. Find the height of a binary tree
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 2. Check if a binary tree is balanced
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 3. Find the lowest common ancestor in a binary tree
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 4. Serialize and deserialize a binary tree
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 5. Implement an algorithm for in-order traversal without recursion
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 6. Convert a BST to a sorted doubly linked list
<details>
<summary>Answer</summary>
<p>



</p>
</details>


---

### 7. Invert a Binary Tree
<details>
<summary>Answer</summary>
<p>



</p>
</details>


---

### 8. Write algorithm to find if Binary Tree is a Binary Search Tree
<details>
<summary>Answer</summary>
<p>



</p>
</details>


---

## Dynamic Programming <a id="dp"></a>

### 1. Find the longest common subsequence
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 2. Calculate the nth Fibonacci number using dynamic programming - [link](https://leetcode.com/problems/fibonacci-number/description/)
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 3. Coin Change problem
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 4. Longest Increasing Subsequence
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 5. Knapsack Problem
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### example
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

## Graphs and DFS / BFS <a id="graphs"></a>

### 1. Implement depth-first search (DFS) and breadth-first search (BFS)
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 2. Check if a Graph is cyclic
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 3. Shortest path in a weighted graph (Dijkstra's or Bellman-Ford)
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 4. Topological sort of a Directed Acyclic Graph (DAG)
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 5. Count the number of connected components in an undirected graph
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### example
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---



## Miscellaneous <a id="misc"></a>

### 1. Implement a LRU (Least Recently Used) Cache
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 2. Find the median of two sorted arrays
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 3. Implement a stack that supports push, pop, top and retrieving minimum element in constanct time
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### 4. Design a data structure that supports insert, delete, getRandom() operations in constant time
<details>
<summary>Answer</summary>
<p>



</p>
</details>

---

### 5. Check if a Sudoku is valid
<details>
<summary>Answer</summary>
<p>


</p>
</details>

---

### example
<details>
<summary>Answer</summary>
<p>



</p>
</details>



   
