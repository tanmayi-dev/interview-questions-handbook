## Simple Coding Task 

- Focus primarily on method / api contract design:
  - Response type (list / array / pair vs dedicated data class)
  - Error handling (custom exception vs generic ones, why)
- Ask for time & memory complexity there
  - Sorting nlogn, do we need to optimize here?
  - What if this will be web API, where could be the bottlenect?
- Kotlin or Java, it is up to each candidate

### Kotlin <a id="kotlin"></a>

[Kotlin Playground](https://pl.kotl.in/3WA3cXLgY)

```java
fun main() {
    // call #findTwoLargest with custom input and print result
}

fun findTwoLargest(input: ???): ??? {

}
```

### 1. Simple solution without generics (use `Int`/`Long`) <a id="k1"></a>

```java
fun main() {
    println(findTwoLargest(listOf(5, 2, 3, 1, 7)))
}

fun findTwoLargest(input: Collection<Int>): TwoLargest {
    if (input.isEmpty() || input.size < 2) {
        throw CollectionSizeIsLessThanTwoException(input.size)
    }
    return input.sortedDescending().let { TwoLargest(it[0], it[1]) }
}

data class TwoLargest(val first: Int, val second: Int)

```

### 2. Use generic type `T` <a id="k2"></a>

```java
fun main() {
    println(findTwoLargest(listOf("X", "Y", "A", "Z")))
}

fun <T : Comparable<T>> findTwoLargest(input: Collection<T>): TwoLargest<T> {
    if (input.isEmpty() || input.size < 2) {
        throw CollectionSizeIsLessThanTwoException(input.size)
    }
    return input.sortedDescending().let { TwoLargest(it[0], it[1]) }
}

data class TwoLargest<T>(val first: T, val second: T)
```

### 3. Define as `Collection` extension function <a id="k3"></a>

```java
fun main() {
    println(listOf("X", "Y", "A", "Z").findTwoLargest())
}

fun <T : Comparable<T>> findTwoLargest(input: Collection<T>): TwoLargest<T> {
    if (input.isEmpty() || input.size < 2) {
        throw CollectionSizeIsLessThanTwoException(input.size)
    }
    return input.sortedDescending().let { TwoLargest(it[0], it[1]) }
}

data class TwoLargest<T>(val first: T, val second: T)

```

### 4. `n` time complexity solution <a id="k4"></a>

Optional, it could be event developed as 1st solution. Then ask about the sorting complexity.

```java
fun main() {
    println(listOf("X", "Y", "A", "Z").findTwoLargest())
}

fun <T : Comparable<T>> Collection<T>.findTwoLargest(): TwoLargest<T> {
    if (isEmpty() || size < 2) {
        throw CollectionSizeIsLessThanTwoException(size)
    }
    var first: T? = null
    var second: T? = null
    forEach {
        if (first == null || it > first!!) {
            second = first
            first = it
        } else if (second == null || it > second!!) {
            second = it
        }
    }
    return TwoLargest(first!!, second!!)
}

data class TwoLargest<T>(val first: T, val second: T)
```

## Java <a id="java"></a>

[Java Playground](https://dev.java/playground/) (code must be inserter)

```java
import java.util.Collection;
import java.util.Comparator;
import java.util.List;

public class Interview {

    public static void main(String[] args) {
        // call #findTwoLargest with custom input and print result
    }

    static ??? findTwoLargest(???) {

    }
}
```

### Simple solutino without generics (use `Int` / `Long`) <a id="j1"></a>

```java
import java.util.Collection;
import java.util.Comparator;
import java.util.List;

class Interview {

    public static void main(String[] args) {
        System.out.println(findTwoLargest(List.of(1, 5, 2, 4, 7)));
    }

    static TwoLargest findTwoLargest(Collection<Integer> input) {
        if (input.isEmpty() || input.size() < 2) {
            throw new CollectionSizeIsLessThanTwoException();
        }
        var sorted = input.stream().sorted(Comparator.reverseOrder()).limit(2).toList();
        return new TwoLargest(sorted.get(0), sorted.get(1));
    }

    record TwoLargest(int first, int second) {}

    static class CollectionSizeIsLessThanTwoException extends IllegalStateException {}
}
```

### Use generic type `T` <a id="j2"></a>

```java

import java.util.Collection;
import java.util.Comparator;
import java.util.List;

class Interview {

    public static void main(String[] args) {
        System.out.println(findTwoLargest(List.of("A", "Z", "D", "Y", "C")));
    }

    static <T extends Comparable<T>> TwoLargest<T> findTwoLargest(Collection<T> input) {
        if (input.isEmpty() || input.size() < 2) {
            throw new CollectionSizeIsLessThanTwoException();
        }
        var sorted = input.stream().sorted(Comparator.reverseOrder()).limit(2).toList();
        return new TwoLargest<>(sorted.get(0), sorted.get(1));
    }

    record TwoLargest<T>(T first, T second) {}

    static class CollectionSizeIsLessThanTwoException extends IllegalStateException {}
}
```

### `n` time complexity solutions <a id="j3"></a>

```java
import java.util.Collection;
import java.util.List;

class Interview {

    public static void main(String[] args) {
        System.out.println(findTwoLargest(List.of("A", "Z", "D", "Y", "C")));
    }

    static <T extends Comparable<T>> TwoLargest<T> findTwoLargest(Collection<T> input) {
        if (input.isEmpty() || input.size() < 2) {
            throw new CollectionSizeIsLessThanTwoException();
        }
        T first = null;
        T second = null;
        for (var i : input) {
            if (first == null || i.compareTo(first) > 0) {
                second = first;
                first = i;
            } else if (second == null || i.compareTo(second) > 0) {
                second = i;
            }
        }
        return new TwoLargest<>(first, second);
    }

    record TwoLargest<T>(T first, T second) {}

    static class CollectionSizeIsLessThanTwoException extends IllegalStateException {}
}
```
