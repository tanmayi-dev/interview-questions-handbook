[Gist Link](https://gist.github.com/jjhart/91c0608fa051bc019fca18efe442d356)

# MergingIterator.java

````java
import java.util.*;

/**
 * Semantically identical `java.util.Iterator`, but with a slightly different API.
 *
 * Sample usage:
 *
 * ```
 *  while (true) {
 *    Item i = iterator.get();
 *    if (i == null)
 *      break;
 *
 *    ...
 *
 *    iterator.advance();
 *  }
 * ```
 *
 */
public interface SimpleIterator<T> {
  public abstract T get();
  public abstract void advance();
}

/**
 * Iterator that combines one or more base iterators, already sorted by `comparator`, and merges them
 * while preserving the order defined by `comparator`.
 *
 * For example:
 *
 * ```
 * Iterator1: A C D
 * Iterator2: A B C
 *
 * Merged: A A B C C D
 * ```
 *
 * Not thread-safe - you can't have two separate threads iterating this no matter
 * what, b/c interleaving could lead to two "advance" calls before "get" is called.
 */
class MergingIterator<T> implements SimpleIterator<T> {
  final Queue<SimpleIterator<T>> iterators;
  boolean canAdd = true;

  public MergingIterator(Comparator<T> comparator) {
    iterators = new PriorityQueue<>((i1, i2) -> comparator.compare(i1.get(), i2.get()));
  }

  public void addIterator(SimpleIterator<T> it) {
    if (!canAdd)
      throw new RuntimeException("Can't add new iterator to MergingIterator, merged iteration has already started.");

    if (it.get() != null) {
      iterators.add(it);
    }
  }

  @Override public T get() {
    canAdd = false;  // NOTE: this is not fully required - if you get(), then addIterator(), you're OK as long as you `get()` again before advancing.
    return iterators.isEmpty() ? null : iterators.peek().get();
  }

  @Override public void advance() {
    canAdd = false;

    SimpleIterator<T> it = iterators.poll();
    if (it == null)
      return;

    it.advance();

    if (it.get() != null) {
      iterators.add(it);
    }
  }
}
````
