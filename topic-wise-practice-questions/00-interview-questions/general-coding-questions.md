# Coding Questions based on Data Structures

- [Arrays](#arrays)
  - [1. Sort an Array](#a1)
  - [2. Sort an Array of 0s and 1s](#a2)
  - [3. Sort an array of 0s, 1s, and 2s (Dutch National Flag Problem)](#a3)
- [Binary Search](#binary)
  - [1. Implement Binary Search](#b1)
  - [2. Find the first occurrence of a Target value in a Sorted Array](#b2)
  - [3. Find the Last Occurrence of a Target Value in a Sorted Array](#b3)
  - [4. Find the Peak Element in an Array](#b4)
- [Linked Lists](#linkedlists)
  - [1. Implement Singly Linked List](#l1) 
  - [2. Reverse a Linked List](#l2)
  - [3. Detect a cycle in Linked list](#l3)
  - [4. Merge two sorted linked lists](#l4)
- [Trees](#trees)
  - [1. Implement Binary Search Tree](#t1) 
  - [2. Binary Search Tree (BST) validation](#t2)
  - [3. Inorder Traversal of a Binary Tree](#t3)
  - [4. Lowest Common Ancestor in a Binary Tree](#t4)
- [String Manipulation](#stringm)
  - [1. Reverse a String](#sm1)
  - [2. Reverse Each Word in a String](#sm2)
  - [3. Reverse Words in a String without Reversing Each Word](#sm3)
- [Array Manipulation](#arraysm)
  - [1. Find Duplicates in an Array](#am1)
  - [2. Anagram Question](#am2)
- [Palindrome Checking](#palindrome)
  - [1. Check if a String is a Palindrome](#p1)
  - [2. Check if a String is a Palidrome with Ignored Characters](#p2)
- [Fibonacci Sequence](#fibonacci)
  - [1. Fibonacci Series using Iteration](#f1)
  - [2. Fibonacci Series using Recursion](#f2)
  - [3. Fibonacci Series using Memoization](#f3)
  - [4. Fibonacci Series using Dynamic Programming (Bottom-up approach)](#f4)
- [Stacks](#stacks)
  - [1. Implement a Stack using Arrays](#s1)
  - [2. Implement a Stack using Linked Lists](#s2)
  - [3. Check Balanced Parenthesis](#s3)
  - [4. Implement a Stack using Two Queues](#s4)
- [Queues](#queues)
  - [1. Implement Queue using Arrays](#q1)
  - [2. Implement Queue using Linked Lists](#q2)
  - [3. Implement Circular Queue](#q3)
- [Graphs](#graphs)
  - [1. Depth First Search](#g1)
  - [2. Breadth First Search](#g2)
- [Heaps](#heaps)
  - [1. Implement Min Heap Data Structure](#h1)
  - [2. Implement Max Heap Data Structure](#h2)
  - [3. Find the Kth Largest Element in an Array](#h3)
  - [4. Merge K Sorted Lists](#h4)
  - [5. Find the Kth Smallest Element in a Sorted Matrix](#h5)
  - [6. Find Median from Data Stream](#h6)

## Arrays <a id="arrays"></a>

### 1. Sort an array: <a id="a1"></a>

- Question: Implement a function to sort an array of integers.
- Time Complexity: O(n log n) (for efficient sorting algorithms like quicksort or mergesort).
- Space Complexity: O(n) (for the auxiliary space used by sorting algorithms).

```
Input: [3, 1, 4, 1, 5, 9, 2, 6, 5]
Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]
```

<details>
<summary>Bubble Sort</summary>
<p>

<li> Time Complexity: O(n^2) (quadratic time complexity). </li>
<li> Space Complexity: O(1) (constant space complexity). </li>
  
```java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j + 1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        for (int i : arr) {
            System.out.print(i + " "); // Output: 11 12 22 25 34 64 90
        }
    }
}


  
```
</p>
</details>

<details>
<summary>Selection Sort</summary>
<p>
- Time Complexity: O(n^2) (quadratic time complexity).
- Space Complexity: O(1) (constant space complexity).

  
```java
public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            // Swap arr[minIdx] and arr[i]
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        selectionSort(arr);
        for (int i : arr) {
            System.out.print(i + " "); // Output: 11 12 22 25 34 64 90
        }
    }
}

```
</p>
</details>

<details>
<summary>Insertion Sort</summary>
<p>
- Time Complexity: O(n^2) (quadratic time complexity).
- Space Complexity: O(1) (constant space complexity).

```java
public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        insertionSort(arr);
        for (int i : arr) {
            System.out.print(i + " "); // Output: 11 12 22 25 34 64 90
        }
    }
}

```

</p>
</details>

<details>
<summary>Merge Sort</summary>
<p>
- Time Complexity: O(n log n) (logarithmic time complexity).
- Space Complexity: O(n) (linear space complexity).

```java
public class MergeSort {
    public static void mergeSort(int[] arr) {
        if (arr.length < 2) return;
        int mid = arr.length / 2;
        int[] left = new int[mid];
        int[] right = new int[arr.length - mid];

        for (int i = 0; i < mid; i++) {
            left[i] = arr[i];
        }
        for (int i = mid; i < arr.length; i++) {
            right[i - mid] = arr[i];
        }

        mergeSort(left);
        mergeSort(right);
        merge(arr, left, right);
    }

    public static void merge(int[] arr, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }
        while (i < left.length) {
            arr[k++] = left[i++];
        }
        while (j < right.length) {
            arr[k++] = right[j++];
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        mergeSort(arr);
        for (int i : arr) {
            System.out.print(i + " "); // Output: 11 12 22 25 34 64 90
        }
    }
}


```

</p>
</details>

<details>
<summary>Quick Sort</summary>
<p>

- Time Complexity: O(n log n) on average, O(n^2) in the worst case.
- Space Complexity: O(log n) on average due to recursion stack
  
```java
public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        quickSort(arr, 0, arr.length - 1);
        for (int i : arr) {
            System.out.print(i + " "); // Output: 11 12 22 25 34 64 90
        }
    }
}

```
</p>
</details>

---

### 2. Sort an array of 0s and 1s: <a id="a2"></a>

- Question: Given an array containing only 0s and 1s, rearrange the array so that all 0s come before 1s.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(1) (constant space complexity).

```
Input: [0, 1, 0, 1, 1, 0, 1, 0, 1]
Output: [0, 0, 0, 0, 1, 1, 1, 1, 1]
```

<details>
<summary>New Array</summary>
<p>

```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 0, 1, 0, 1, 0, 0, 1};
        int[] rearrangedArr = rearrangeWithNewArray(arr);
        for (int num : rearrangedArr) {
            System.out.print(num + " ");
        }
    }

    public static int[] rearrangeWithNewArray(int[] arr) {
        int[] result = new int[arr.length];
        int index = 0;
        // First, add all 0s to the new array
        for (int num : arr) {
            if (num == 0) {
                result[index++] = 0;
            }
        }
        // Then, add all 1s to the new array
        for (int num : arr) {
            if (num == 1) {
                result[index++] = 1;
            }
        }
        return result;
    }
}

```
</p>
</details>

<details>
<summary>Two Pointer</summary>
<p>
  
```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 0, 1, 0, 1, 0, 0, 1};
        rearrangeWithTwoPointers(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    public static void rearrangeWithTwoPointers(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        while (left < right) {
            // Move left pointer until it encounters 1
            while (arr[left] == 0 && left < right) {
                left++;
            }
            // Move right pointer until it encounters 0
            while (arr[right] == 1 && left < right) {
                right--;
            }
            // Swap 0 at left pointer with 1 at right pointer
            if (left < right) {
                arr[left++] = 0;
                arr[right--] = 1;
            }
        }
    }
}


```
</p>
</details>

<details>
<summary>Two Pointer - Sana sol</summary>
<p>

```java
class Solution {
    void segregate0and1(int[] arr, int n) {
        // code here
        int left = 0, right = arr.length - 1;
        
        while (left < right) {
            if (arr[left] == 1 && arr[right] == 0) {
                int tmp = arr[left];
                arr[left] = arr[right];
                arr[right] = tmp;
            }
            if (arr[left] == 0) {
                left++;
            }
            if (arr[right] == 1) {
                right--;
            }
        }
    }

}
```

</p>
</details>

--- 
### 3. Sort an array of 0s, 1s, and 2s (Dutch National Flag Problem): <a id="a3"></a>

- Question: Given an array containing only 0s, 1s, and 2s, sort the array in linear time without using any sorting algorithm.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(1) (constant space complexity).

```
Input: [2, 0, 1, 1, 0, 2]
Output: [0, 0, 1, 1, 2, 2]

```

<details>
<summary>3 pointer method</summary>
<p>

```java
public class SortColors {
    public static void sortColors(int[] nums) {
        int low = 0;
        int mid = 0, temp = 0;
        int high = nums.length - 1;

        // Iterate till all the elements are sorted
        while (mid <= high) {
            switch (a[mid]) {
                // If the element is 0
                case 0: {
                    temp = a[low];
                    a[low] = a[mid];
                    a[mid] = temp;
                    low++;
                    mid++;
                    break;
                }
                // If the element is 1
                case 1:
                    mid++;
                    break;
                // If the element is 2
                case 2: {
                    temp = a[mid];
                    a[mid] = a[high];
                    a[high] = temp;
                    high--;
                    break;
                }
            }
        }
       
    }
    
    public static void main(String[] args) {
        int[] nums = {2, 0, 1, 1, 0, 2};
        System.out.println("Original array: " + Arrays.toString(nums));
        sortColors(nums);
        System.out.println("Sorted array: " + Arrays.toString(nums));
    }
}

```

</p>
</details>


<details>
<summary>2 pointer method</summary>
<p>

```java
public class SortColors {
    public static void sortColors(int[] nums) {
       int low = 0;
        int high = nums.length - 1;
 
        for (int i = 0; i < n && i <= high;) {
            // Current element is 0
            if (arr[i] == 0) {
                swap(arr, low, i);
                low++;
                i++;
            }
            // Current element is 2
            else if (arr[i] == 2) {
                swap(arr, i, high);
                high--;
            }
            // Current element is 1
            else {
                i++;
            }
        }
    }
    
    private static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static void main(String[] args) {
        int[] nums = {2, 0, 1, 1, 0, 2};
        System.out.println("Original array: " + Arrays.toString(nums));
        sortColors(nums);
        System.out.println("Sorted array: " + Arrays.toString(nums));
    }
}

```

</p>
</details>


---

## Binary Search <a id="binary"></a>

### 1. Implement Binary Search <a id="b1"></a>

- Question: Implement the binary search algorithm to find a target value in a sorted array.
- Time Complexity: O(log n) (logarithmic time complexity).
- Space Complexity: O(1) (constant space complexity).

<details>
<summary>code</summary>
<p>

```java
public class BinarySearch {
    public static int binarySearch(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1; // Target not found
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target = 5;
        System.out.println(binarySearch(nums, target)); // Output: 4
    }
}

```

</p>
</details>


### 2. Find the first occurrence of a Target value in a Sorted Array <a id="b2"></a> 

- [gfg](https://www.geeksforgeeks.org/problems/find-first-and-last-occurrence-of-x0849/1)
- [gfg solution](https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/)
- Question: Given a sorted array, find the first occurrence of a target value.
- Time Complexity: O(log n) (logarithmic time complexity).
- Space Complexity: O(1) (constant space complexity).

```
Input : arr[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}, x = 5
Output : First Occurrence = 2

Input : arr[] = {1, 3, 5, 5, 5, 5, 7, 123, 125 }, x = 7
Output : First Occurrence = 6
```

<details>
<summary>code</summary>
<p>

```java
public class FirstOccurrenceBinarySearch {
    public static int findFirstOccurrence(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int result = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                result = mid;
                right = mid - 1; // Continue searching in the left half
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 2, 3, 4, 5};
        int target = 2;
        System.out.println(findFirstOccurrence(nums, target)); // Output: 1
    }
}

```

</p>
</details>

### 3. Find the Last Occurrence of a Target Value in a Sorted Array <a id="b3"></a> 

- [gfg](https://www.geeksforgeeks.org/problems/find-first-and-last-occurrence-of-x0849/1)

```
Input : arr[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}, x = 5
Output : Last Occurrence = 5

Input : arr[] = {1, 3, 5, 5, 5, 5, 7, 123, 125 }, x = 7
Output : Last Occurrence = 6
```

- Question: Given a sorted array, find the last occurrence of a target value.
- Time Complexity: O(log n) (logarithmic time complexity).
- Space Complexity: O(1) (constant space complexity).

<details>
<summary>code</summary>
<p>

```java
public class LastOccurrenceBinarySearch {
    public static int findLastOccurrence(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int result = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                result = mid;
                left = mid + 1; // Continue searching in the right half
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 2, 3, 4, 5};
        int target = 2;
        System.out.println(findLastOccurrence(nums, target)); // Output: 3
    }
}

```

</p>
</details>

### 4. Find the Peak Element in an Array <a id="b4"></a> 

- [leetcode](https://leetcode.com/problems/find-peak-element/description/), [gfg](https://www.geeksforgeeks.org/problems/peak-element/1)

- Question: Find a peak element in an array where an element is a peak if it is greater than its neighbors.
- Time Complexity: O(log n) (logarithmic time complexity).
- Space Complexity: O(1) (constant space complexity).

```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```

<details>
<summary>code</summary>
<p>

```java
public class PeakElementBinarySearch {
    public static int findPeakElement(int[] nums) {
        int left = 0, right = nums.length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] < nums[mid + 1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 1};
        System.out.println(findPeakElement(nums)); // Output: 2 (index of peak element 3)
    }
}

```

</p>
</details>

---
## Linked Lists <a id="linkedlists"></a>

### 1. Singly Linked List DataStructure <a id="l1"></a>

- Question: Implement Linked List in Java
- Add Node at Head Operation (addAtHead method):
  - Time Complexity: O(1), Space Complexity: O(1)
- Add Node at Tail Operation (addAtTail method):
  - Time Complexity: O(n), Space Complexity: O(1)
- Delete Node Operation (deleteNode method):
  - Time Complexity: O(n), Space Complexity: O(1)
- Print Linked List Operation (printList method):
  - Time Complexity: O(n), Space Complexity: O(1)

<details>
<summary>code</summary>
<p>

```java
class ListNode {
    int val;
    ListNode next;

    public ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

public class LinkedList {
    private ListNode head;

    public LinkedList() {
        this.head = null;
    }

    public void addAtHead(int val) {
        ListNode newNode = new ListNode(val);
        newNode.next = head;
        head = newNode;
    }

    public void addAtTail(int val) {
        ListNode newNode = new ListNode(val);
        if (head == null) {
            head = newNode;
            return;
        }
        ListNode current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    public void deleteNode(int val) {
        if (head == null) {
            return;
        }
        if (head.val == val) {
            head = head.next;
            return;
        }
        ListNode prev = null;
        ListNode current = head;
        while (current != null && current.val != val) {
            prev = current;
            current = current.next;
        }
        if (current != null) {
            prev.next = current.next;
        }
    }

    public void printList() {
        ListNode current = head;
        while (current != null) {
            System.out.print(current.val + " ");
            current = current.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        LinkedList linkedList = new LinkedList();
        linkedList.addAtHead(1);
        linkedList.addAtTail(2);
        linkedList.addAtTail(3);
        linkedList.addAtTail(4);
        linkedList.printList(); // Output: 1 2 3 4
        linkedList.deleteNode(3);
        linkedList.printList(); // Output: 1 2 4
    }
}

```
</p>
</details>

### 2. Reverse a linked list: <a id="l2"></a> 

- [gfg](https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1), [lc](https://leetcode.com/problems/reverse-linked-list/)

- Question: Implement a function to reverse a singly linked list.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(1) (constant space complexity).

```
Original linked list:
1 2 3 4 5 
Reversed linked list:
5 4 3 2 1 
```

<details>
<summary>code</summary>
<p>

```java
class ListNode {
    int val;
    ListNode next;
    
    ListNode(int val) {
        this.val = val;
    }
}

public class ReverseLinkedList {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;
        
        while (current != null) {
            ListNode nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        
        return prev;
    }

    public static void main(String[] args) {
        // Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        
        System.out.println("Original linked list:");
        printList(head);
        
        ListNode reversedHead = reverseList(head);
        
        System.out.println("Reversed linked list:");
        printList(reversedHead);
    }
    
    public static void printList(ListNode head) {
        ListNode current = head;
        while (current != null) {
            System.out.print(current.val + " ");
            current = current.next;
        }
        System.out.println();
    }
}

```

</p>
</details>

---
### 3. Detect a cycle in a linked list: <a id="l3"></a>

- [gfg](https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/)
- [leetcode](https://leetcode.com/problems/linked-list-cycle/description/)
- Question: Write a function to detect if a linked list contains a cycle.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(1) (constant space complexity).

```
Input:
N = 3
value[] = {1,3,4}
x(position at which tail is connected) = 2
Output: True
Explanation: In above test case N = 3. The linked list with nodes N = 3 is given. Then value of x=2 is given which means last node is connected with xth
node of linked list. Therefore, there exists a loop.
```

<details>
<summary>Floyd's Tortoise and Hare</summary>
<p>

```java
class LinkedList {
    Node head; // head of list

    /* Linked list Node */
    class Node {
        int data;
        Node next;
        Node(int x) {
            data = x;
            next = null;
        }
    }

    /* Inserts a new Node at the end of the list. */
    public void append(int new_data) {
        Node new_node = new Node(new_data);
        if (head == null) {
            head = new_node;
            return;
        }
        Node last = head;
        while (last.next != null) {
            last = last.next;
        }
        last.next = new_node;
    }

    /* Creates a loop in the linked list at the specified position */
    public void createLoop(int x) {
        if (x <= 0) return;
        Node loopNode = null;
        Node current = head;
        int count = 1;
        while (current != null && current.next != null) {
            if (count == x) {
                loopNode = current;
            }
            current = current.next;
            count++;
        }
        if (loopNode != null) {
            current.next = loopNode;
        }
    }

    /* Detects loop in the linked list using Floyd's Cycle-Finding Algorithm */
    void detectLoop() {
        Node slow_p = head, fast_p = head;
        while (slow_p != null && fast_p != null && fast_p.next != null) {
            slow_p = slow_p.next;
            fast_p = fast_p.next.next;
            if (slow_p == fast_p) {
                System.out.println("Loop Found");
                return;
            }
        }
        System.out.println("No Loop");
    }

    /* Driver program to test above functions */
    public static void main(String args[]) {
        LinkedList llist = new LinkedList();

        llist.append(1);
        llist.append(3);
        llist.append(4);

        int x = 2; // Position at which tail is connected to create a loop
        llist.createLoop(x);

        llist.detectLoop(); // Output: Loop Found
    }
}

```

</p>
</details>

--- 
### 4. Merge two sorted linked lists: <a id="l4"></a> 

- [gfg](https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/)
- [leetcode](https://leetcode.com/problems/merge-two-sorted-lists/description/)

- Question: Given two sorted linked lists, merge them into a single sorted linked list.
- Time Complexity: O(n + m) where n and m are the lengths of the two linked lists.
- Space Complexity: O(1) (constant space complexity).

<details>
<summary>code</summary>
<p>

```java
class ListNode {
    int val;
    ListNode next;
    
    ListNode(int val) {
        this.val = val;
    }
}

public class MergeSortedLinkedLists {
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // Dummy node to serve as the head of the merged list
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;
        
        // Traverse both lists and compare their values
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                current.next = l1; // Link current to l1
                l1 = l1.next; // Move l1 to the next node
            } else {
                current.next = l2; // Link current to l2
                l2 = l2.next; // Move l2 to the next node
            }
            current = current.next; // Move current to the next node
        }
        
        // Append the remaining nodes of l1 or l2 (if any) to the merged list
        current.next = (l1 != null) ? l1 : l2;
        
        return dummy.next; // Return the head of the merged list (excluding the dummy node)
    }

    public static void main(String[] args) {
        // Create two sorted linked lists: 1 -> 2 -> 4 and 1 -> 3 -> 4
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(4);
        
        ListNode l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);
        
        System.out.println("Merged sorted linked list:");
        printList(mergeTwoLists(l1, l2));
    }
    
    public static void printList(ListNode head) {
        ListNode current = head;
        while (current != null) {
            System.out.print(current.val + " ");
            current = current.next;
        }
        System.out.println();
    }
}

```

</p>
</details>

---
## Trees <a id="trees"></a>

### 1. Implement a Binary Search Tree <a id="t1"></a>

- Question: Implement a Binary Search Tree
- Insert Operation:
  - Time Complexity: O(h), where h is the height of the tree. In the worst case, it can be O(n) for a skewed tree.
  - Space Complexity: O(1)
- Search Operation:
  - Time Complexity: O(h), where h is the height of the tree.
  - Space Complexity: O(1)
- Inorder Traversal (or any other traversal):
  - Time Complexity: O(n), where n is the number of nodes in the tree.
  - Space Complexity: O(h), where h is the height of the tree (space complexity due to recursive function calls).
- Delete Operation:
  - Time Complexity: O(h), where h is the height of the tree.
  - Space Complexity: O(1)

<details>
<summary>code</summary>
<p>

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    public TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

public class BinarySearchTree {
    private TreeNode root;

    public BinarySearchTree() {
        this.root = null;
    }

    public void insert(int val) {
        root = insertRecursive(root, val);
    }

    private TreeNode insertRecursive(TreeNode root, int val) {
        if (root == null) {
            root = new TreeNode(val);
            return root;
        }
        if (val < root.val) {
            root.left = insertRecursive(root.left, val);
        } else if (val > root.val) {
            root.right = insertRecursive(root.right, val);
        }
        return root;
    }

    public boolean search(int val) {
        return searchRecursive(root, val);
    }

    private boolean searchRecursive(TreeNode root, int val) {
        if (root == null) {
            return false;
        }
        if (val == root.val) {
            return true;
        }
        if (val < root.val) {
            return searchRecursive(root.left, val);
        }
        return searchRecursive(root.right, val);
    }

    public void inorder() {
        inorderRecursive(root);
    }

    private void inorderRecursive(TreeNode root) {
        if (root != null) {
            inorderRecursive(root.left);
            System.out.print(root.val + " ");
            inorderRecursive(root.right);
        }
    }

    public void delete(int val) {
        root = deleteRecursive(root, val);
    }

    private TreeNode deleteRecursive(TreeNode root, int val) {
        if (root == null) {
            return root;
        }
        if (val < root.val) {
            root.left = deleteRecursive(root.left, val);
        } else if (val > root.val) {
            root.right = deleteRecursive(root.right, val);
        } else {
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }
            root.val = findMin(root.right);
            root.right = deleteRecursive(root.right, root.val);
        }
        return root;
    }

    private int findMin(TreeNode root) {
        int minVal = root.val;
        while (root.left != null) {
            minVal = root.left.val;
            root = root.left;
        }
        return minVal;
    }

    public static void main(String[] args) {
        BinarySearchTree bst = new BinarySearchTree();
        bst.insert(8);
        bst.insert(3);
        bst.insert(10);
        bst.insert(1);
        bst.insert(6);
        bst.insert(4);
        bst.insert(7);
        bst.insert(14);
        bst.insert(13);

        System.out.println("Inorder traversal:");
        bst.inorder(); // Output: 1 3 4 6 7 8 10 13 14

        System.out.println("\nSearch 6: " + bst.search(6)); // Output: true
        System.out.println("Search 11: " + bst.search(11)); // Output: false

        bst.delete(3);
        System.out.println("\nInorder traversal after deleting 3:");
        bst.inorder(); // Output: 1 4 6 7 8 10 13 14
    }
}

```

</p>
</details>

### 2. Binary Search Tree (BST) validation: <a id="t2"></a>

- [gfg](https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/)
- [leetcode](https://leetcode.com/problems/validate-binary-search-tree/)
- Question: Write a function to determine if a binary tree is a valid binary search tree.
- Time Complexity: O(n) (linear time complexity where n is the number of nodes in the tree).
- Space Complexity: O(h) where h is the height of the tree (space complexity due to recursion).

<details>
<summary>code</summary>
<p>

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
    }
}

public class ValidateBinarySearchTree {
    public static boolean isValidBST(TreeNode root) {
        return isValidBST(root, null, null);
    }
    
    private static boolean isValidBST(TreeNode node, Integer min, Integer max) {
        // Base case: an empty tree is a valid BST
        if (node == null) {
            return true;
        }
        
        // Check if the current node's value is within the valid range
        if ((min != null && node.val <= min) || (max != null && node.val >= max)) {
            return false;
        }
        
        // Recursively check the left and right subtrees with updated range constraints
        return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);
    }

    public static void main(String[] args) {
        // Example 1: [2,1,3]
        TreeNode root1 = new TreeNode(2);
        root1.left = new TreeNode(1);
        root1.right = new TreeNode(3);
        System.out.println("Is the binary tree valid BST? " + isValidBST(root1)); // Output: true
        
        // Example 2: [5,1,4,null,null,3,6]
        TreeNode root2 = new TreeNode(5);
        root2.left = new TreeNode(1);
        root2.right = new TreeNode(4);
        root2.right.left = new TreeNode(3);
        root2.right.right = new TreeNode(6);
        System.out.println("Is the binary tree valid BST? " + isValidBST(root2)); // Output: false
    }
}

```

</p>
</details>

---
### 3. Inorder Traversal of a Binary Tree: <a id="t3"></a>

- [tree traversals](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [gfg](https://www.geeksforgeeks.org/inorder-traversal-of-binary-tree/)
- [leetcode](https://leetcode.com/problems/binary-tree-inorder-traversal/description/)

- Question: Implement an inorder traversal of a binary tree (recursive or iterative).
- Time Complexity: O(n) (linear time complexity where n is the number of nodes in the tree).
- Space Complexity: O(h) where h is the height of the tree (space complexity due to recursion or stack space in the iterative approach).

<details>
<summary>Recursive</summary>
<p>

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
    }
}

public class InorderTraversal {
    public static void inorderTraversalRecursive(TreeNode root) {
        if (root == null) {
            return;
        }
        inorderTraversalRecursive(root.left); // Traverse left subtree
        System.out.print(root.val + " "); // Visit current node
        inorderTraversalRecursive(root.right); // Traverse right subtree
    }

    public static void main(String[] args) {
        // Example: [1,null,2,3]
        TreeNode root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.left = new TreeNode(3);
        
        System.out.println("Inorder traversal (recursive):");
        inorderTraversalRecursive(root); // Output: 1 3 2
    }
}

```

</p>
</details>

<details>
<summary>Iterative</summary>
<p>

```java
import java.util.Stack;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
    }
}

public class InorderTraversal {
    public static void inorderTraversalIterative(TreeNode root) {
        if (root == null) {
            return;
        }
        Stack<TreeNode> stack = new Stack<>();
        TreeNode current = root;
        while (current != null || !stack.isEmpty()) {
            // Traverse left subtree and push nodes onto the stack
            while (current != null) {
                stack.push(current);
                current = current.left;
            }
            // Visit the top node and move to its right subtree
            current = stack.pop();
            System.out.print(current.val + " ");
            current = current.right;
        }
    }

    public static void main(String[] args) {
        // Example: [1,null,2,3]
        TreeNode root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.left = new TreeNode(3);
        
        System.out.println("Inorder traversal (iterative):");
        inorderTraversalIterative(root); // Output: 1 3 2
    }
}

```

</p>
</details>

---
### 4. Lowest Common Ancestor in a Binary Tree: <a id="t4"></a>

- [gfg](https://geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/)
- [leetcode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- Question: Given a binary tree, find the lowest common ancestor of two given nodes in the tree.
- Time Complexity: O(n) (linear time complexity where n is the number of nodes in the tree).
- Space Complexity: O(h) where h is the height of the tree (space complexity due to recursion).

```
Input : binary tree: [3,5,1,6,2,0,8,null,null,7,4]
Output : Lowest common ancestor of nodes 5 and 1 is: 3

```

<details>
<summary>code</summary>
<p>

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
    }
}

public class LowestCommonAncestor {
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) {
            return root;
        }

        // Recursively search for the LCA in the left and right subtrees
        TreeNode leftLCA = lowestCommonAncestor(root.left, p, q);
        TreeNode rightLCA = lowestCommonAncestor(root.right, p, q);

        // If both nodes are found in different subtrees, the current root is the LCA
        if (leftLCA != null && rightLCA != null) {
            return root;
        }

        // If one node is found, return it (to propagate the LCA upwards)
        return (leftLCA != null) ? leftLCA : rightLCA;
    }

    public static void main(String[] args) {
        // Example binary tree: [3,5,1,6,2,0,8,null,null,7,4]
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(5);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(6);
        root.left.right = new TreeNode(2);
        root.right.left = new TreeNode(0);
        root.right.right = new TreeNode(8);
        root.left.right.left = new TreeNode(7);
        root.left.right.right = new TreeNode(4);

        TreeNode p = root.left;
        TreeNode q = root.right;

        TreeNode lca = lowestCommonAncestor(root, p, q);
        System.out.println("Lowest common ancestor of nodes " + p.val + " and " + q.val + " is: " + lca.val);
    }
}

```

</p>
</details>

---
## String Manipulation <a id="stringm"></a>

### 1. Reverse a String: <a id="sm1"></a>

- Question: Implement a function to reverse a given string.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(1) (constant space complexity).

- [Gfg article](https://www.geeksforgeeks.org/reverse-a-string-in-java/), [String vs StringBuffer vs String Builder](https://www.geeksforgeeks.org/string-vs-stringbuilder-vs-stringbuffer-in-java/)
- [leetcode](https://leetcode.com/problems/reverse-string/description/)

- Objects of String are immutable.
- String class in Java does not have reverse() method, however, the StringBuilder class has built-in reverse() method.
- StringBuilder class do not have toCharArray() method, while String class does have toCharArray() method.

```
Input : Hello, World!
Output : !dlroW ,olleH
```

<details>
<summary>Brute Force with <code>String</code></summary>
<p>

```java
public class ReverseString {

    public static String reverseStringBruteForce(String s) {
        String reversed = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            reversed += s.charAt(i);
        }
        return reversed;
    }

    public static void main(String[] args) {
        String inputString = "Hello, World!";
        System.out.println("Original String: " + inputString);
        System.out.println("Reversed String (Brute Force): " + reverseStringBruteForce(inputString));
    }
}
```
</p>
</details>

<details>
<summary>Two pointer - swap characters</summary>
<p>

```java
public class ReverseString {

    public static String reverseStringEfficient(String s) {
        char[] charArray = s.toCharArray();
        int left = 0;
        int right = charArray.length - 1;
        while (left < right) {
            char temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;
            left++;
            right--;
        }
        return new String(charArray);
    }

    public static void main(String[] args) {
        String inputString = "Hello, World!";
        System.out.println("Original String: " + inputString);
        System.out.println("Reversed String (Efficient): " + reverseStringEfficient(inputString));
    }
}

```
</p>
</details>

<details>
<summary>using String Builder</summary>
<p>

```java
public class ReverseString {

    public static String reverseStringBruteForce(String s) {
        StringBuilder reversed = new StringBuilder();
        for (int i = s.length() - 1; i >= 0; i--) {
            reversed.append(s.charAt(i));
        }
        return reversed.toString();
    }

    public static void main(String[] args) {
        String inputString = "Hello, World!";
        System.out.println("Original String: " + inputString);
        System.out.println("Reversed String (Brute Force): " + reverseStringBruteForce(inputString));
    }
}

```

</p>
</details>

---

### 2. Reverse Each Word in a String: <a id="sm2"></a>

- [gfg](https://www.geeksforgeeks.org/reverse-individual-words/)
- [leetcode](https://leetcode.com/problems/reverse-words-in-a-string-iii/description/)
- Question: Given a string, reverse each word in the string while maintaining the order of words.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(n) (where n is the length of the string).
```
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

<details>
<summary>using reverseString (2 pointer) and string nuilder</summary>
<p>

```java
public class ReverseWords {
    public static String reverseString(String s) {
        char[] charArray = s.toCharArray();
        int left = 0;
        int right = charArray.length - 1;
        while (left < right) {
            char temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;
            left++;
            right--;
        }
        return new String(charArray);
    }

    public static String reverseWords(String s) {
        String[] words = s.split(" "); // Split the string into words
        StringBuilder reversedString = new StringBuilder();
        for (String word : words) {
            // Reverse each word and append to the result string
            reversedString.append(reverseString(word)).append(" ");
        }
        return reversedString.toString().trim(); // Trim trailing space and return
    }

    public static void main(String[] args) {
        String s = "Let's take LeetCode contest";
        System.out.println("Original string: " + s);
        System.out.println("Reversed string: " + reverseWords(s)); // Output: "s'teL ekat edoCteeL tsetnoc"
    }
}

```

</p>
</details>

---
### 3. Reverse Words in a String Without Reversing Each Word: <a id="sm3"></a>

- Question: Reverse the order of words in a string without reversing each word individually.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(n) (where n is the length of the string).

```
Input: s = "the sky is blue"
Output: "blue is sky the"
```

<details>
<summary>code</summary>
<p>

```java
public class ReverseWordsInString {
    public static String reverseWords(String s) {
        StringBuilder reversedString = new StringBuilder();
        int end = s.length();

        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) == ' ') {
                // Found a space, append the word
                reversedString.append(s.substring(i + 1, end)).append(" ");
                // Move the end pointer to the beginning of the current word
                end = i;
            }
        }

        // Append the first word
        reversedString.append(s.substring(0, end));

        return reversedString.toString();
    }

    public static void main(String[] args) {
        String s = "the sky is blue";
        System.out.println("Input: " + s);
        System.out.println("Output: " + reverseWords(s));
    }
}

```
</p>
</details>

---
## Array Manipulation <a id="arraysm"></a>

### 1. Find Duplicates in an Array: <a id="am1"></a>

- Question: Given an array of integers where each integer appears twice except for one, find the element that appears only once.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(1) (constant space complexity) for XOR and O(n) using HashSet.

```
nums = {4, 1, 2, 1, 2}
result = 4
```

<details>
<summary>using XOR</summary>
<p>

```java
public class SingleNumber {
    public static int findSingleNumber(int[] nums) {
        int result = 0;
        for (int num : nums) {
            result ^= num; // XOR operation cancels out duplicate occurrences, leaving only the single number
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {4, 1, 2, 1, 2};
        System.out.println("The single number is: " + findSingleNumber(nums)); // Output: 4
    }
}

```
</p>
</details>

<details>
<summary>using HashSet</summary>
<p>
  
```java
import java.util.HashSet;

public class SingleNumber {
    public static int findSingleNumber(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (!set.add(num)) {
                // If the number is already present, remove it
                set.remove(num);
            }
        }
        // After iterating through the array, the set should contain only the single number
        return set.iterator().next();
    }

    public static void main(String[] args) {
        int[] nums = {4, 1, 2, 1, 2};
        System.out.println("The single number is: " + findSingleNumber(nums)); // Output: 4
    }
}

```
</p>
</details>

---
### 2. Anagram Question: <a id="am2"></a>

- Question: Given two strings, determine if they are anagrams of each other (contain the same characters with the same frequencies).
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(1) (constant space complexity) assuming constant character set (e.g., ASCII).

```
s1 = "listen"
s2 = "silent";
result : true
```

<details>
<summary>using array</summary>
<p>

```java
public class Anagram {
    public static boolean areAnagrams(String s1, String s2) {
        if (s1 == null || s2 == null || s1.length() != s2.length()) {
            return false; // If either string is null or their lengths are different, they cannot be anagrams
        }
        int[] charCount = new int[256]; // Assuming ASCII character set
        for (char c : s1.toCharArray()) {
            charCount[c]++;
        }
        for (char c : s2.toCharArray()) {
            if (charCount[c] == 0) {
                return false; // If character frequency in s2 is higher than in s1, they cannot be anagrams
            }
            charCount[c]--;
        }
        return true; // If all character frequencies match, they are anagrams
    }

    public static void main(String[] args) {
        String s1 = "listen";
        String s2 = "silent";
        
        System.out.println("Are \"" + s1 + "\" and \"" + s2 + "\" anagrams? " + areAnagrams(s1, s2)); // true
    }
}

```

</p>
</details>

<details>
<summary>using hashmap</summary>
<p>

```java
import java.util.HashMap;

public class Anagram {
    public static boolean areAnagrams(String s1, String s2) {
        if (s1 == null || s2 == null || s1.length() != s2.length()) {
            return false; // If either string is null or their lengths are different, they cannot be anagrams
        }
        HashMap<Character, Integer> charCount = new HashMap<>();
        
        // Count characters in s1
        for (char c : s1.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        
        // Compare characters in s2 with the counts in the map
        for (char c : s2.toCharArray()) {
            if (!charCount.containsKey(c)) {
                return false; // If a character in s2 is not present in the map, they cannot be anagrams
            }
            int count = charCount.get(c);
            if (count == 0) {
                return false; // If the count for a character in s2 is already 0, they cannot be anagrams
            }
            charCount.put(c, count - 1);
        }
        
        return true; // If all characters in s2 match with counts in the map, they are anagrams
    }

    public static void main(String[] args) {
        String s1 = "listen";
        String s2 = "silent";
        
        System.out.println("Are \"" + s1 + "\" and \"" + s2 + "\" anagrams? " + areAnagrams(s1, s2)); // true
    }
}

```
</p>
</details>

--- 

## Palindrome Checking <a id="palindrome"></a>

### 1. Check if a String is a Palindrome: <a id="p1"></a>

- Question: Determine if a given string is a palindrome (reads the same forwards and backwards).
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(1) (constant space complexity).

```
str = "racecar";
result = true

str = "hello";
result = false
```

<details>
<summary>code</summary>
<p>

```java
public class Palindrome {
    public static boolean isPalindrome(String str) {
        if (str == null || str.isEmpty()) {
            return true; // An empty string or null string is considered a palindrome
        }
        int left = 0;
        int right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true; // If the loop completes without returning false, the string is a palindrome
    }

    public static void main(String[] args) {
        String str1 = "racecar";
        String str2 = "hello";
        
        System.out.println("Is \"" + str1 + "\" a palindrome? " + isPalindrome(str1)); // true
        System.out.println("Is \"" + str2 + "\" a palindrome? " + isPalindrome(str2)); // false
    }
}

```

</p>
</details>

---
### 2. Check if a String is a Palindrome with Ignored Characters: <a id="p2"></a>

- Question: Determine if a given string is a palindrome after ignoring non-alphanumeric characters and considering case insensitivity.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(1) (constant space complexity).

```
String str1 = "A man, a plan, a canal, Panama";
        String str2 = "race a car";
```

<details>
<summary>code</summary>
<p>

```java
public class Palindrome {
    public static boolean isPalindrome(String str) {
        if (str == null || str.isEmpty()) {
            return true; // An empty string or null string is considered a palindrome
        }
        int left = 0;
        int right = str.length() - 1;
        while (left < right) {
            char leftChar = Character.toLowerCase(str.charAt(left));
            char rightChar = Character.toLowerCase(str.charAt(right));
            if (!Character.isLetterOrDigit(leftChar)) {
                left++;
            } else if (!Character.isLetterOrDigit(rightChar)) {
                right--;
            } else if (leftChar != rightChar) {
                return false;
            } else {
                left++;
                right--;
            }
        }
        return true; // If the loop completes without returning false, the string is a palindrome
    }

    public static void main(String[] args) {
        String str1 = "A man, a plan, a canal, Panama";
        String str2 = "race a car";
        
        System.out.println("Is \"" + str1 + "\" a palindrome? " + isPalindrome(str1)); // true
        System.out.println("Is \"" + str2 + "\" a palindrome? " + isPalindrome(str2)); // false
    }
}

```

</p>
</details>

---
 
## Fibonacci Sequence <a id="fibonacci"></a>

### 1. Fibonacci Series using Iteration: <a id="f1"></a>

- Question: Write an iterative function to generate the nth Fibonacci number.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(1) (constant space complexity).

<details>
<summary>using iterative method</summary>
<p>

```java
public class FibonacciIterative {
    public static int generateFibonacci(int n) {
        if (n <= 1) {
            return n; // Base case: Fibonacci(0) = 0, Fibonacci(1) = 1
        }
        int fib1 = 0;
        int fib2 = 1;
        int fib = 0;
        for (int i = 2; i <= n; i++) {
            fib = fib1 + fib2;
            fib1 = fib2;
            fib2 = fib;
        }
        return fib;
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci(" + n + ") = " + generateFibonacci(n)); // Fibonacci(10) = 55
    }
}

```

</p>
</details>

---
### 2. Fibonacci Series using Recursion: <a id="f2"></a>

- Question: Write a recursive function to generate the nth Fibonacci number.
- Time Complexity: O(2^n) (exponential time complexity).
- Space Complexity: O(n) (space complexity due to recursion stack).

<details>
<summary>using recursion</summary>
<p>

```java
public class FibonacciRecursive {
    public static int generateFibonacci(int n) {
        if (n <= 1) {
            return n; // Base case: Fibonacci(0) = 0, Fibonacci(1) = 1
        }
        return generateFibonacci(n - 1) + generateFibonacci(n - 2); // Recursive call
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci(" + n + ") = " + generateFibonacci(n)); // Fibonacci(10) = 55
    }
}

```

</p>
</details>

---
### 3. Fibonacci Series using Memoization: <a id="f3"></a>

- Question: Write a recursive function with memoization to generate the nth Fibonacci number.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(n) (space complexity due to memoization table).

<details>
<summary>using hashmap</summary>
<p>

```java
import java.util.HashMap;

public class FibonacciWithMemoization {
    private static HashMap<Integer, Integer> memo = new HashMap<>();

    public static int generateFibonacci(int n) {
        if (n <= 1) {
            return n; // Base case: Fibonacci(0) = 0, Fibonacci(1) = 1
        }
        if (memo.containsKey(n)) {
            return memo.get(n); // Return memoized value if already computed
        }
        int fib = generateFibonacci(n - 1) + generateFibonacci(n - 2);
        memo.put(n, fib); // Memoize the computed Fibonacci number
        return fib;
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci(" + n + ") = " + generateFibonacci(n)); // Fibonacci(10) = 55
    }
}

```

</p>

</details>

---
### 4. Fibonacci Series using Dynamic Programming (Bottom-up approach): <a id="f4"></a>

- Question: Write a function to generate the nth Fibonacci number using dynamic programming (bottom-up approach).
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(n) (space complexity due to storing previous results).

<details>
<summary>code</summary>
<p>

```java
public class Fibonacci {
    public static int generateFibonacci(int n) {
        if (n <= 1) {
            return n; // Base case: Fibonacci(0) = 0, Fibonacci(1) = 1
        }
        int[] fib = new int[n + 1];
        fib[0] = 0;
        fib[1] = 1;
        for (int i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2]; // Dynamic programming: Fibonacci(i) = Fibonacci(i-1) + Fibonacci(i-2)
        }
        return fib[n];
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci(" + n + ") = " + generateFibonacci(n)); // Fibonacci(10) = 55
    }
}

```

</p>
</details>

---
## Stacks <a id="stacks"></a>

### 1. Implement a Stack using Arrays: <a id="s1"></a>

- Question: Implement a stack data structure using arrays and support operations like push, pop, and peek.
- Time Complexity: O(1) for push, pop, and peek operations.
- Space Complexity: O(n) where n is the maximum capacity of the stack.

<details>
<summary>code</summary>
<p>

```java
public class Stack {
    private int[] array;
    private int top; // Index of the top element
    private int capacity; // Maximum capacity of the stack

    public Stack(int capacity) {
        this.capacity = capacity;
        this.array = new int[capacity];
        this.top = -1; // Stack is initially empty
    }

    // Push operation
    public void push(int data) {
        if (isFull()) {
            System.out.println("Stack is full. Cannot push.");
            return;
        }
        array[++top] = data;
    }

    // Pop operation
    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack is empty. Cannot pop.");
            return -1;
        }
        return array[top--];
    }

    // Peek operation
    public int peek() {
        if (isEmpty()) {
            System.out.println("Stack is empty. Cannot peek.");
            return -1;
        }
        return array[top];
    }

    // Check if the stack is empty
    public boolean isEmpty() {
        return top == -1;
    }

    // Check if the stack is full
    public boolean isFull() {
        return top == capacity - 1;
    }

    public static void main(String[] args) {
        Stack stack = new Stack(5);

        stack.push(1);
        stack.push(2);
        stack.push(3);

        System.out.println("Top element: " + stack.peek()); // 3
        System.out.println("Popped element: " + stack.pop()); // 3
        System.out.println("Top element after pop: " + stack.peek()); // 2
    }
}


```
</p>
</details>

---
### 2. Implement a Stack using Linked Lists: <a id="s2"></a>

- Question: Implement a stack data structure using a linked list and support operations like push, pop, and peek.
- Time Complexity: O(1) for push, pop, and peek operations.
- Space Complexity: O(n) where n is the number of elements in the stack.

<details>
<summary>code</summary>
<p>

```java
class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Stack {
    private Node top; // Top of the stack

    // Push operation
    public void push(int data) {
        Node newNode = new Node(data);
        newNode.next = top;
        top = newNode;
    }

    // Pop operation
    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack is empty. Cannot pop.");
            return -1;
        }
        int data = top.data;
        top = top.next;
        return data;
    }

    // Peek operation
    public int peek() {
        if (isEmpty()) {
            System.out.println("Stack is empty. Cannot peek.");
            return -1;
        }
        return top.data;
    }

    // Check if the stack is empty
    public boolean isEmpty() {
        return top == null;
    }

    public static void main(String[] args) {
        Stack stack = new Stack();

        stack.push(1);
        stack.push(2);
        stack.push(3);

        System.out.println("Top element: " + stack.peek()); // 3
        System.out.println("Popped element: " + stack.pop()); // 3
        System.out.println("Top element after pop: " + stack.peek()); // 2
    }
}

```
</p>
</details>

---
### 3. Check Balanced Parentheses: <a id="s3"></a>

- Question: Given a string containing only parentheses, brackets, and braces, determine if the brackets are balanced.
- Time Complexity: O(n) (linear time complexity).
- Space Complexity: O(n) (space complexity due to the stack).

<details>
<summary>code</summary>
<p>

```java
import java.util.Stack;

public class BalancedBrackets {
    public static boolean isBalanced(String str) {
        Stack<Character> stack = new Stack<>();
        for (char c : str.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else if (c == ')' || c == ']' || c == '}') {
                if (stack.isEmpty()) {
                    return false; // Closing bracket with no corresponding opening bracket
                }
                char top = stack.pop();
                if ((c == ')' && top != '(') || (c == ']' && top != '[') || (c == '}' && top != '{')) {
                    return false; // Mismatched brackets
                }
            }
        }
        return stack.isEmpty(); // Stack should be empty for balanced brackets
    }

    public static void main(String[] args) {
        String str1 = "{[()]}";
        String str2 = "{[()]";
        String str3 = "{[(])}";
        String str4 = "{[}";
        
        System.out.println("String 1 is balanced: " + isBalanced(str1));
        System.out.println("String 2 is balanced: " + isBalanced(str2));
        System.out.println("String 3 is balanced: " + isBalanced(str3));
        System.out.println("String 4 is balanced: " + isBalanced(str4));
    }
}

```
</p>
</details>

---
### 4. Implement a Stack using Two Queues: <a id="s4"></a>

- Question: Implement a stack data structure using two queues and support operations like push, pop, and peek.
- Time Complexity: O(1) for push operation, O(n) for pop operation (where n is the number of elements in the stack).
- Space Complexity: O(n) where n is the number of elements in the stack.

<details>
<summary>code</summary>
<p>

```java
import java.util.LinkedList;
import java.util.Queue;

public class StackWithQueues {
    private Queue<Integer> queue1;
    private Queue<Integer> queue2;

    public StackWithQueues() {
        queue1 = new LinkedList<>();
        queue2 = new LinkedList<>();
    }

    // Push operation
    public void push(int item) {
        queue1.offer(item);
    }

    // Pop operation
    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack is empty. Cannot pop.");
            return -1;
        }
        // Move all elements except the last one to queue2
        while (queue1.size() > 1) {
            queue2.offer(queue1.poll());
        }
        int poppedItem = queue1.poll(); // Last element remaining in queue1 is the one to be popped
        // Swap queue1 and queue2 references
        Queue<Integer> temp = queue1;
        queue1 = queue2;
        queue2 = temp;
        return poppedItem;
    }

    // Peek operation
    public int peek() {
        if (isEmpty()) {
            System.out.println("Stack is empty. Cannot peek.");
            return -1;
        }
        int peekedItem = -1;
        while (!queue1.isEmpty()) {
            peekedItem = queue1.poll();
            queue2.offer(peekedItem);
        }
        // Swap queue1 and queue2 references
        Queue<Integer> temp = queue1;
        queue1 = queue2;
        queue2 = temp;
        return peekedItem;
    }

    // Check if the stack is empty
    public boolean isEmpty() {
        return queue1.isEmpty();
    }
}

```
</p>
</details>

--- 

## Queues <a id="queues"></a>

### 1. Implement a Queue using Arrays <a id="q1"></a>

- Question :  Implement a queue data structure using arrays and support operations like enqueue and dequeue.
- Time Complexity :
  - Bounded Queue (fixed size array) : O(1) for enqueue and O(n) for dequeue (as elements need to be shifted)
  - Unbounded Queue (dynamix resizing array) :  O(1) amortized for enqueue and O(1) dequeue operations.
- Space Complexity: O(n) where n is the maximum capacity of the queue.

<details>
<summary>Bounded Queue</summary>
<p>

```java
public class BoundedQueue {
    private int[] queue;
    private int front; // index of the front element
    private int rear; // index of the rear element
    private int capacity; // maximum capacity of the queue
    private int size; // current size of the queue

    public BoundedQueue(int capacity) {
        this.capacity = capacity;
        this.queue = new int[capacity];
        this.front = 0;
        this.rear = -1; // no elements initially
        this.size = 0;
    }

    // Enqueue operation
    public void enqueue(int item) {
        if (isFull()) {
            System.out.println("Queue is full. Cannot enqueue.");
            return;
        }
        rear = (rear + 1) % capacity; // Circular increment
        queue[rear] = item;
        size++;
    }

    // Dequeue operation
    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot dequeue.");
            return -1;
        }
        int item = queue[front];
        front = (front + 1) % capacity; // Circular increment
        size--;
        return item;
    }

    // Check if the queue is full
    public boolean isFull() {
        return size == capacity;
    }

    // Check if the queue is empty
    public boolean isEmpty() {
        return size == 0;
    }

    // Get the front item without removing it
    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot peek.");
            return -1;
        }
        return queue[front];
    }
}

```
</p>
</details>

<details>
<summary>Unbounded Queue</summary>
<p>

```java
public class UnboundedQueue {
    private int[] queue;
    private int front; // index of the front element
    private int rear; // index of the rear element
    private int capacity; // current capacity of the queue
    private int size; // current size of the queue

    public UnboundedQueue(int initialCapacity) {
        this.capacity = initialCapacity;
        this.queue = new int[initialCapacity];
        this.front = 0;
        this.rear = -1; // no elements initially
        this.size = 0;
    }

    // Enqueue operation
    public void enqueue(int item) {
        if (isFull()) {
            resize();
        }
        rear++;
        if (rear == capacity) {
            rear = 0; // Circular increment
        }
        queue[rear] = item;
        size++;
    }

    // Dequeue operation
    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot dequeue.");
            return -1;
        }
        int item = queue[front];
        front++;
        if (front == capacity) {
            front = 0; // Circular increment
        }
        size--;
        return item;
    }

    // Check if the queue is full
    private boolean isFull() {
        return size == capacity;
    }

    // Check if the queue is empty
    public boolean isEmpty() {
        return size == 0;
    }

    // Get the front item without removing it
    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot peek.");
            return -1;
        }
        return queue[front];
    }

    // Resize the array when full
    private void resize() {
        int newCapacity = capacity * 2; // Double the capacity
        int[] newQueue = new int[newCapacity];
        int i = 0;
        while (!isEmpty()) {
            newQueue[i++] = dequeue(); // Re-queue all elements to the new array
        }
        queue = newQueue;
        front = 0;
        rear = size - 1;
        capacity = newCapacity;
    }
}

```
</p>
</details>

---

### 2. Implement a Queue using Linked Lists <a id="q2"></a>

- Question: Implement a queue data structure using a linked list and support operations like enqueue and dequeue.
- Time Complexity: O(1) for enqueue and dequeue operations.
- Space Complexity: O(n) where n is the number of elements in the queue.

<details>
<summary>code</summary>
<p>

```java
class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Queue {
    private Node front;
    private Node rear;

    public Queue() {
        this.front = null;
        this.rear = null;
    }

    // Enqueue operation
    public void enqueue(int data) {
        Node newNode = new Node(data);
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
    }

    // Dequeue operation
    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot dequeue.");
            return -1;
        }
        int data = front.data;
        if (front == rear) {
            front = rear = null;
        } else {
            front = front.next;
        }
        return data;
    }

    // Check if the queue is empty
    public boolean isEmpty() {
        return front == null;
    }

    // Get the front item without removing it
    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot peek.");
            return -1;
        }
        return front.data;
    }
}

```
</p>
</details>

---

### 3. Implement a Circular Queue <a id="q3"></a>

- Question: Implement a circular queue data structure using arrays and support operations like enqueue and dequeue.
- Time Complexity: O(1) for enqueue and dequeue operations.
- Space Complexity: O(n) where n is the maximum capacity of the circular queue.

<details>
<summary>code</summary>
<p>

```java
public class CircularQueue {
    private int[] queue;
    private int front; // index of the front element
    private int rear; // index of the rear element
    private int size; // current size of the queue
    private int capacity; // maximum capacity of the queue

    public CircularQueue(int capacity) {
        this.capacity = capacity;
        this.queue = new int[capacity];
        this.front = 0;
        this.rear = -1; // no elements initially
        this.size = 0;
    }

    // Enqueue operation
    public void enqueue(int item) {
        if (isFull()) {
            System.out.println("Queue is full. Cannot enqueue.");
            return;
        }
        rear = (rear + 1) % capacity; // Circular increment
        queue[rear] = item;
        size++;
    }

    // Dequeue operation
    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot dequeue.");
            return -1;
        }
        int item = queue[front];
        front = (front + 1) % capacity; // Circular increment
        size--;
        return item;
    }

    // Check if the queue is full
    public boolean isFull() {
        return size == capacity;
    }

    // Check if the queue is empty
    public boolean isEmpty() {
        return size == 0;
    }

    // Get the front item without removing it
    public int peek() {
        if (isEmpty()) {
            System.out.println("Queue is empty. Cannot peek.");
            return -1;
        }
        return queue[front];
    }
}

```

</p>
</details>

---

## Graphs <a id="graphs"></a>

### 1. Implement Depth First Search (DFS) <a id="g1"></a>

- Question: Implement the depth-first search (DFS) algorithm for a graph.
- Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges.
- Space Complexity: O(V) for the recursion stack.

<details>
<summary>Dfs code</summary>
<p>

```java
import java.util.*;

public class DFS {
    private static class Graph {
        private int vertices;
        private LinkedList<Integer>[] adjList;

        Graph(int vertices) {
            this.vertices = vertices;
            adjList = new LinkedList[vertices];
            for (int i = 0; i < vertices; i++) {
                adjList[i] = new LinkedList<>();
            }
        }

        void addEdge(int src, int dest) {
            adjList[src].add(dest);
        }

        void DFS(int vertex) {
            boolean[] visited = new boolean[vertices];
            DFSUtil(vertex, visited);
        }

        void DFSUtil(int vertex, boolean[] visited) {
            visited[vertex] = true;
            System.out.print(vertex + " ");
            for (int adj : adjList[vertex]) {
                if (!visited[adj]) {
                    DFSUtil(adj, visited);
                }
            }
        }
    }

    public static void main(String[] args) {
        Graph graph = new Graph(4);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(2, 0);
        graph.addEdge(2, 3);
        graph.addEdge(3, 3);

        graph.DFS(2); // Output: 2 0 1 3
    }
}

```
</p>
</details>


---

### 2. Implement Breadth First Search (BFS) <a id="g2"></a>

- Question: Implement the breadth-first search (BFS) algorithm for a graph.
- Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges.
- Space Complexity: O(V) for the queue.

<details>
<summary>Bfs code</summary>
<p>

```java
import java.util.*;

public class BFS {
    private static class Graph {
        private int vertices;
        private LinkedList<Integer>[] adjList;

        Graph(int vertices) {
            this.vertices = vertices;
            adjList = new LinkedList[vertices];
            for (int i = 0; i < vertices; i++) {
                adjList[i] = new LinkedList<>();
            }
        }

        void addEdge(int src, int dest) {
            adjList[src].add(dest);
        }

        void BFS(int startVertex) {
            boolean[] visited = new boolean[vertices];
            LinkedList<Integer> queue = new LinkedList<>();

            visited[startVertex] = true;
            queue.add(startVertex);

            while (queue.size() != 0) {
                startVertex = queue.poll();
                System.out.print(startVertex + " ");

                for (int adj : adjList[startVertex]) {
                    if (!visited[adj]) {
                        visited[adj] = true;
                        queue.add(adj);
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
        Graph graph = new Graph(4);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(2, 0);
        graph.addEdge(2, 3);
        graph.addEdge(3, 3);

        graph.BFS(2); // Output: 2 0 3 1
    }
}

```
</p>
</details>

---

## Heaps <a id="heaps"></a>

### 1. Min Heap DataStructure <a id="h1"></a>

- Question : Implement MinHeap Datastructure in java
- Insert Operation:
  - Time Complexity: O(log n), Space Complexity: O(1)
- Extract Minimum Operation:
  - Time Complexity: O(log n), Space Complexity: O(1)
- Heapify Operation:
  - Time Complexity: O(log n), Space Complexity: O(1)
- Swap Operation:
  - Time Complexity: O(1), Space Complexity: O(1)
- Parent, Left Child, Right Child Calculation Operations:
  - Time Complexity: O(1), Space Complexity: O(1)
- Print Heap Operation:
  - Time Complexity: O(n), Space Complexity: O(1)
 
<details>
<summary>binary min heap</summary>
<p>

```java
public class MinHeap {
    private int[] heap;
    private int size;
    private int capacity;

    public MinHeap(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.heap = new int[capacity + 1];
    }

    public void insert(int value) {
        if (size == capacity) {
            System.out.println("Heap is full. Cannot insert more elements.");
            return;
        }
        size++;
        heap[size] = value;
        int current = size;
        while (current > 1 && heap[current] < heap[parent(current)]) {
            swap(current, parent(current));
            current = parent(current);
        }
    }

    public int extractMin() {
        if (size == 0) {
            System.out.println("Heap is empty.");
            return -1;
        }
        int min = heap[1];
        heap[1] = heap[size];
        size--;
        heapify(1);
        return min;
    }

    private void heapify(int pos) {
        int left = leftChild(pos);
        int right = rightChild(pos);
        int smallest = pos;
        if (left <= size && heap[left] < heap[pos]) {
            smallest = left;
        }
        if (right <= size && heap[right] < heap[smallest]) {
            smallest = right;
        }
        if (smallest != pos) {
            swap(pos, smallest);
            heapify(smallest);
        }
    }

    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    private int parent(int pos) {
        return pos / 2;
    }

    private int leftChild(int pos) {
        return 2 * pos;
    }

    private int rightChild(int pos) {
        return 2 * pos + 1;
    }

    public void printHeap() {
        for (int i = 1; i <= size / 2; i++) {
            System.out.print(" PARENT : " + heap[i] + " LEFT CHILD : " + heap[2 * i]
                    + " RIGHT CHILD :" + heap[2 * i + 1]);
            System.out.println();
        }
    }

    public static void main(String[] args) {
        MinHeap minHeap = new MinHeap(10);
        minHeap.insert(10);
        minHeap.insert(20);
        minHeap.insert(15);
        minHeap.insert(40);
        minHeap.insert(50);
        minHeap.insert(100);
        minHeap.insert(25);
        minHeap.insert(45);
        System.out.println("Min-Heap:");
        minHeap.printHeap(); // Output: Min-Heap: PARENT : 10 LEFT CHILD : 20 RIGHT CHILD :15
                            // PARENT : 20 LEFT CHILD : 25 RIGHT CHILD :40 PARENT : 15 LEFT CHILD : 100
                            // RIGHT CHILD :45 PARENT : 40 LEFT CHILD : 50 RIGHT CHILD :45
        System.out.println("Extracted Min: " + minHeap.extractMin()); // Output: Extracted Min: 10
    }
}

```

</p>
</details>

### 2. Max Heap Data Structure <a id="h2"></a>

- Question : Implement Max Heap DataStructure
- Insert Operation:
  - Time Complexity: O(log n), Space Complexity: O(1)
- Extract Maximum Operation:
  - Time Complexity: O(log n), Space Complexity: O(1)
- Heapify Operation:
  - Time Complexity: O(log n), Space Complexity: O(1)
- Swap Operation:
  - Time Complexity: O(1), Space Complexity: O(1)
- Parent, Left Child, Right Child Calculation Operations:
  - Time Complexity: O(1), Space Complexity: O(1)
- Print Heap Operation:
  - Time Complexity: O(n), Space Complexity: O(1)
 
<details>
<summary>binary max heap</summary>
<p>

```java
public class MaxHeap {
    private int[] heap;
    private int size;
    private int capacity;

    public MaxHeap(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.heap = new int[capacity + 1];
    }

    public void insert(int value) {
        if (size == capacity) {
            System.out.println("Heap is full. Cannot insert more elements.");
            return;
        }
        size++;
        heap[size] = value;
        int current = size;
        while (current > 1 && heap[current] > heap[parent(current)]) {
            swap(current, parent(current));
            current = parent(current);
        }
    }

    public int extractMax() {
        if (size == 0) {
            System.out.println("Heap is empty.");
            return -1;
        }
        int max = heap[1];
        heap[1] = heap[size];
        size--;
        heapify(1);
        return max;
    }

    private void heapify(int pos) {
        int left = leftChild(pos);
        int right = rightChild(pos);
        int largest = pos;
        if (left <= size && heap[left] > heap[pos]) {
            largest = left;
        }
        if (right <= size && heap[right] > heap[largest]) {
            largest = right;
        }
        if (largest != pos) {
            swap(pos, largest);
            heapify(largest);
        }
    }

    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    private int parent(int pos) {
        return pos / 2;
    }

    private int leftChild(int pos) {
        return 2 * pos;
    }

    private int rightChild(int pos) {
        return 2 * pos + 1;
    }

    public void printHeap() {
        for (int i = 1; i <= size / 2; i++) {
            System.out.print(" PARENT : " + heap[i] + " LEFT CHILD : " + heap[2 * i]
                    + " RIGHT CHILD :" + heap[2 * i + 1]);
            System.out.println();
        }
    }

    public static void main(String[] args) {
        MaxHeap maxHeap = new MaxHeap(10);
        maxHeap.insert(10);
        maxHeap.insert(20);
        maxHeap.insert(15);
        maxHeap.insert(40);
        maxHeap.insert(50);
        maxHeap.insert(100);
        maxHeap.insert(25);
        maxHeap.insert(45);
        System.out.println("Max-Heap:");
        maxHeap.printHeap(); // Output: Max-Heap: PARENT : 100 LEFT CHILD : 50 RIGHT CHILD :45
                             // PARENT : 50 LEFT CHILD : 40 RIGHT CHILD :25 PARENT : 45 LEFT CHILD : 20
                             // RIGHT CHILD :10
        System.out.println("Extracted Max: " + maxHeap.extractMax()); // Output: Extracted Max: 100
    }
}

```

</p>
</details>

---

### 3. Find the Kth Largest Element in an Array <a id="h3"></a>

- Question : Find the Kth largest element in an array using a min-heap.
- Time Complexity: O(n log k) where n is the size of the array and k is the value of K.
- Space Complexity: O(k) for maintaining the min-heap of size k.

<details>
<summary>code</summary>
<p>

```java
import java.util.PriorityQueue;

public class KthLargestElement {
    public static int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.add(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        return minHeap.peek();
    }

    public static void main(String[] args) {
        int[] nums = {3, 2, 1, 5, 6, 4};
        int k = 2;
        System.out.println("Kth largest element: " + findKthLargest(nums, k)); // Output: 5
    }
}

/*
When you call minHeap.poll(), it retrieves and removes the head (minimum) element of the min-heap. After the removal, the heap property is maintained, ensuring that the next smallest element becomes the new head of the heap.

Here's a breakdown of what minHeap.poll() does:

Retrieves the minimum element from the min-heap (the element at the root).
Removes this minimum element from the min-heap.
Rebalances the heap by adjusting the elements to ensure that the heap property (parent node is smaller than its children) is maintained.
*/

```

</p>
</details>

---
### 4. Merge K Sorted Lists <a id="h4"></a>

- Question: Merge k sorted linked lists and return it as one sorted list.
- Time Complexity: O(n log k) where n is the total number of nodes in all lists and k is the number of lists.
- Space Complexity: O(k) for maintaining the min-heap of size k

<details>
<summary>code</summary>
<p>

```java
import java.util.PriorityQueue;

public class MergeKSortedLists {
    private static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) {
            this.val = val;
        }
    }

    public static ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> minHeap = new PriorityQueue<>((a, b) -> a.val - b.val);
        for (ListNode node : lists) {
            if (node != null) {
                minHeap.add(node);
            }
        }

        ListNode dummy = new ListNode(-1);
        ListNode tail = dummy;
        while (!minHeap.isEmpty()) {
            ListNode minNode = minHeap.poll();
            tail.next = minNode;
            tail = tail.next;
            if (minNode.next != null) {
                minHeap.add(minNode.next);
            }
        }

        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode[] lists = new ListNode[3];
        lists[0] = new ListNode(1);
        lists[0].next = new ListNode(4);
        lists[0].next.next = new ListNode(5);

        lists[1] = new ListNode(1);
        lists[1].next = new ListNode(3);
        lists[1].next.next = new ListNode(4);

        lists[2] = new ListNode(2);
        lists[2].next = new ListNode(6);

        ListNode mergedList = mergeKLists(lists);
        while (mergedList != null) {
            System.out.print(mergedList.val + " "); // Output: 1 1 2 3 4 4 5 6
            mergedList = mergedList.next;
        }
    }
}

```

</p>
</details>


---
### 5. Find the Kth Smallest Element in a Sorted Matrix <a id="h5"></a>

- Question: Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.
- Time Complexity: O(k log n) where n is the size of the matrix (n x n).
- Space Complexity: O(n) for maintaining the min-heap.

<details>
<summary>code</summary>
<p>

```java
import java.util.PriorityQueue;

public class KthSmallestInMatrix {
    public static int kthSmallest(int[][] matrix, int k) {
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        int n = matrix.length;
        for (int i = 0; i < n; i++) {
            minHeap.add(new int[]{matrix[i][0], i, 0});
        }
        int result = 0;
        for (int i = 0; i < k; i++) {
            int[] min = minHeap.poll();
            result = min[0];
            int row = min[1];
            int col = min[2];
            if (col < n - 1) {
                minHeap.add(new int[]{matrix[row][col + 1], row, col + 1});
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[][] matrix = {
            {1,  5,  9},
            {10, 11, 13},
            {12, 13, 15}
        };
        int k = 8;
        System.out.println("Kth smallest element: " + kthSmallest(matrix, k)); // Output: 13
    }
}

```

</p>
</details>


---
### 6. Find Median from Data Stream <a id="h6"></a>

- Question: Design a data structure that supports the following two operations:
  - `void addNum(int num)` - Add a integer number from the data stream to the data structure.
  - `double findMedian()` - Return the median of all elements so far.
- Time Complexity: O(log n) for adding a number and O(1) for finding the median.
- Space Complexity: O(n) for maintaining the max-heap and min-heap

<details>
<summary>code</summary>
<p>

```java
import java.util.PriorityQueue;

public class MedianFinder {
    PriorityQueue<Integer> minHeap;
    PriorityQueue<Integer> maxHeap;

    public MedianFinder() {
        minHeap = new PriorityQueue<>();
        maxHeap = new PriorityQueue<>((a, b) -> b - a);
    }

    public void addNum(int num) {
        maxHeap.add(num);
        minHeap.add(maxHeap.poll());
        if (maxHeap.size() < minHeap.size()) {
            maxHeap.add(minHeap.poll());
        }
    }

    public double findMedian() {
        if (maxHeap.size() == minHeap.size()) {
            return (maxHeap.peek() + minHeap.peek()) / 2.0;
        } else {
            return maxHeap.peek();
        }
    }

    public static void main(String[] args) {
        MedianFinder finder = new MedianFinder();
        finder.addNum(1);
        finder.addNum(2);
        System.out.println("Median: " + finder.findMedian()); // Output: 1.5
        finder.addNum(3);
        System.out.println("Median: " + finder.findMedian()); // Output: 2.0
    }
}

```

</p>
</details>

--- 

