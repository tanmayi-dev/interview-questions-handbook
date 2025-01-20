# Coding Questions

#### Write program to Reverse a String

```js
// JS - Basic Reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log(`Original string: ${originalString}`);
console.log(`Reversed string: ${reversedString}`);
```

```js
// JS - String Reversal using swapping variables
function reverseString(str) {
  const charArray = str.split(""); // Convert string to an array of characters
  let left = 0;
  let right = charArray.length - 1;

  while (left < right) {
    // Swap characters at left and right positions
    const temp = charArray[left];
    charArray[left] = charArray[right];
    charArray[right] = temp;

    left++;
    right--;
  }

  return charArray.join(""); // Convert the array back to a string
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log(`Original string: ${originalString}`);
console.log(`Reversed string: ${reversedString}`);
```

#### Write program to search for an element in an array

#### Write a program to print the occurrences of capital and small letters and count of strings

### Find the greatest element to its right in an array

### Write a program for Bubble Sort

```js
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Test the bubbleSort function
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arrayToSort);
bubbleSort(arrayToSort);
console.log("Sorted array:", arrayToSort);
```

```js
// Swap function separated
function bubbleSort(arr) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// Example usage
var arrayToSort = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arrayToSort);
bubbleSort(arrayToSort);
console.log("Sorted array:", arrayToSort);
```

### Write a program for Merge Sort

### Write a program for Binary Search

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Element found at mid index
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return -1; // Element not found
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 7;

const index = binarySearch(sortedArray, targetValue);

if (index !== -1) {
  console.log(`Element ${targetValue} found at index ${index}`);
} else {
  console.log(`Element ${targetValue} not found`);
}
```

### Write a **recursive** function for Binary Search

```js
// JavaScript
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Element not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Element found at mid index
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); // Search right half
  } else {
    return binarySearch(arr, target, left, mid - 1); // Search left half
  }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 7;

const index = binarySearch(sortedArray, targetValue);

if (index !== -1) {
  console.log(`Element ${targetValue} found at index ${index}`);
} else {
  console.log(`Element ${targetValue} not found`);
}
```

### Write a program for Linear Search

9. Write code to sort an array of numbers using loops

10. Write code to reverse a string

11. Write code to remove the duplicates from the array of integers
