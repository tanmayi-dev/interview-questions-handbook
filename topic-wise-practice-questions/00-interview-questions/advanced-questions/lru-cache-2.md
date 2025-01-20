# LRU Cache

## Background

The following question is tailored for Data Ingest. Characteristics are:

- Should NOT emphasize algorithms.
- Broadly evaluate proficiency in (a) Object-oriented Python and (b) Multithreaded programming which are especially relevant to Scalyr Agent. Evaluate for good, clean code.
- Question should be flexible enough to establish baseline proficiency on the one hand, yet able to accommodate advanced candidates.

## Q: Ask them to design and implement an LRU Cache from scratch.

This is a stock interview question but even if they've seen it, implementation requires clear thinking and systematic execution. It tests the candidate's ability to manage data (particularly easy to mess up management of head/tail pointers of the doubly linked list).

This question also provides opportunity to evaluate basic clean API design, object design and threading (locks, notify/wait).

## Core design

- Doubly-linked list & Dictionary
- Dictionary key maps to a DLL node
- LRU ordering is maintained by ordering nodes by access time
  - Typically most recently used at head, least recently used at tail
- Any access promotes a node to head
- DLL node must contains both value AND key
  - Why key? (which is already in the dict): For eviction when max capacity reached
  - Get tail.node.key, then evict from cache by key

## Sequence of questions:

Before starting: Ask how much time they have.
If they (and you) can go overtime, you can take time to really test their implementation and
then still have time to evaluate their understanding of multithreading if it runs over.
Otherwise, you'll probably have to cut them off at 30 min mark and move on to
multithreading questions

### Stage 1: "Write me class skeleton"

### Stage 2: "Describe overall strategy for managing data"

Look for:

- Mental clarity (especially if they've seen this question before).
- Promote a DLL node whenever accessed (both put/get)
- At capacity, must expire tail
- When expire, need key from the tail node to expire dict entry

### Stage 3: "Detailed implementation"

"I'm now going to evaluate your proficiency in OO Python (or similar language)"
"I'll be paying attention to standard software best practices"
"If possible, I'd like to see this code work at the end of this exercise"
[ Note: do NOT tell them to write a unit test. See if they voluntarily create one. ]

```
 Watch candidate for:
    OO best practices
    Code duplication
    Variable naming
    Code hygiene
    Clarity in implementation & systematic appproach

Misc:
    An ideal candidate would choose to write a unit test BEFORE implementation
    Do not allow this to exceed 30 min mark.
    Get enough signal for all the above then, if you want to move on to testing & multithreading,
        have your own working solution ready that you can paste into coderpad for sections 4 & 5

```

### Step 4: "Now that we have a working version, write some test cases as if this is production code"

- Strong marks if candidate already wrote out test harness in Step 2 or Step 1

- Plus points if they actually write a unit test class vs adhoc python statements
  (demonstrates a more disciplined, thorough and extensible approach to testing)

### Step 5: Multithreading - what is the simplest way to make this thread safe?

- Look for them to implement a simple mutex for get/put.

- Look for usage of `finally` to ensure lock release
  Note: For this question is ok if candidate obtains lock at the start of each put/get.
  Not necessary to optimize with fine-grained locking / holding lock for shortest possible time.
  Goal of question is to rule out candidates who don't even understand locks.

### Step 6: Multithreading (advanced) - make get() block until a value is present (block only for as long as needed).

- advanced candidates will know to use a condition variable (CV)
- does candidate understand notify() notifyAll()?
- does candidate understand that cv.wait() releases the lock?
  Notes: Encourage candidates who haven't been working with CVs recently to lookup docs
- If candidate doesn't have working code, paste in test_multithreaded() and have them implement a condition variable
- alternatively ask them to "Implement a test with Producer & Consumer"
- Consumer starts first, followed 3 sec later by Producer
- Producer puts (key, key) into cache where key is randomly chosen from 0 to 99
- Consumer gets (key) from cache where key is again randomly chosen
  Producer writes value into answer array
- Main test thread should wait for both Consumer and Producer threads to finish.
- Ask candidate how to achieve this (ans: thread.join())
- When complete, assert that no elements in answer array is None.

# Fully-working implementations below

## Python implementation

```python

 import random
import time
import unittest, threading

class Node(object):
		def __init__(self, key, value):
				self.key = key
				self.value = value
				self.prevnode = self.nextnode = None

class LRUCache(object):
		def __init__(self, capacity):
		    self.capacity = capacity
		    self.cache = {}
		    self.head = self.tail = None

		def put(self, key, value):
		    """
		    If node already exists, promote it to head. (must come before capacity check)
		    If at capacity, evict the tail by looking up the key in the DLL and then removing it from cache.
		    Else insert at head.
		    """
		    if key in self.cache:
		        node = self.cache[key]
		        self._promote(node)
		        self.cache[key] = node
		    else:
		        # not in cache
		        if self.capacity == len(self.cache):
		            tailnode = self.tail
		            self._unlink_node(tailnode)
		            del self.cache[tailnode.key]

		        node = Node(key, value)
		        self._add_head(node)
		        self.cache[key] = node

		def get(self, key):
		    """
		    If non-existent, return None. Else promote key to head and return value.
		    """
		    if key not in self.cache:
		        return None

		    node = self.cache[key]
		    self._promote(node)
		    return node.value

		def _unlink_node(self, node):
		    assert node
		    left = node.prevnode
		    right = node.nextnode

		    # break links
		    # left - node - right
		    if left:
		        left.nextnode = node.nextnode  # may be None
		        node.prevnode = None
		    else:
		        # node was head, must update head
		        self.head = right

		    if right:
		        right.prevnode = left  # may be None
		        node.nextnode = None
		    else:
		        # node was tail. must update tail
		        self.tail = left

		def _add_head(self, node):
		    """Add head to DLL"""
		    node.nextnode = self.head
		    self.head = node
		    if not node.nextnode:
		        self.tail = node
		    else:
		        node.nextnode.prevnode = node

		def _promote(self, node):
		    """Unlink node.  Add to head"""
		    self._unlink_node(node)
		    self._add_head(node)

```

## Basic Locking

```python

 class LRUCacheLocked(LRUCache):
		def __init__(self, capacity):
		    super(LRUCacheLocked, self).__init__(capacity)
		    self.lock = threading.Lock()

		def put(self, key, value):
		    self.lock.acquire()
		    try:
		        super(LRUCacheLocked, self).put(key, value)
		    finally:
		        self.lock.release()

		def get(self, key):
		    self.lock.acquire()
		    try:
		        return super(LRUCacheLocked, self).get(key)
		    finally:
		        self.lock.release()

```

## Notify/wait

```python
 class LRUCacheNotify(LRUCache):
		def __init__(self, capacity):
		    super(LRUCacheNotify, self).__init__(capacity)
		    self.condition_variable = threading.Condition()

		def put(self, key, value):
		    self.condition_variable.acquire()
		    try:
		        super(LRUCacheNotify, self).put(key, value)
		        self.condition_variable.notifyAll()
		    finally:
		        self.condition_variable.release()

		def get(self, key):
		    self.condition_variable.acquire()
		    try:
		        while True:
		            result = super(LRUCacheNotify, self).get(key)
		            if result is not None:
		                return result
		            self.condition_variable.wait(1)
		    finally:
		        self.condition_variable.release()

```

## Test code

```python
 class MyTest(unittest.TestCase):
		def setUp(self):
		    pass

		def test_single_thread(self):
		    cache = LRUCacheLocked(10)
		    for x in range(20):
		        cache.put(x, x)
		    for x in range(20):
		        v = cache.get(x)
		        if x < 10:
		            self.assertIsNone(v)
		        else:
		            self.assertEqual(x, v)

		def test_multithreaded(self):

		    cache = LRUCacheNotify(100)
		    answer_vals = []

		    class Producer(threading.Thread):

		        def __init__(self):
		            super(Producer, self).__init__()

		        def run(self):
		            vals = range(100)
		            random.shuffle(vals)
		            for val in vals:
		                cache.put(val, val)

		    class Consumer(threading.Thread):

		        def __init__(self):
		            super(Consumer, self).__init__()

		        def run(self):
		            vals = range(100)
		            random.shuffle(vals)
		            for val in vals:
		                v = cache.get(val)
		                answer_vals.append(v)

		    c = Consumer()
		    p = Producer()
		    c.start()
		    time.sleep(3)
		    p.start()
		    [t.join() for t in (c,p)]
		    for a in answer_vals:
		        self.assertIsNotNone(a)

if __**name__** == '__**main__**':
		unittest.main(verbosity=2)

```

## Java Implementation

```java
 public class LRUCache<K, V> {
  private Map<K, Node<K, V>> cache = new HashMap<>();
  private Node head;
  private Node tail;
  private final int size;

  public LRUCache(int size) {
    this.size = size;
  }

  private static class Node<K, V> {
    final K key;
    final V value;
    Node prev;
    Node next;
    long lastTime; // optional, used for time-based eviction

    public Node(K key, V value) {
      this.key = key;
      this.value = value;
      this.lastTime = System.currentTimeMillis();
    }
  }

  public void put(K key, V value) {
    if (cache.size() == size && !cache.containsKey(key)) {
      Node evict = tail;
      cache.remove(evict.key);
      remove(evict);
    }

    Node<K, V> node = new Node<>(key, value);
    Node<K, V> prevValue = cache.put(key, node);
    if (prevValue != null) {
      remove(prevValue);
    }
    addFirst(node);
  }

  public V get(K key) {
    Node<K, V> node = cache.get(key);
    remove(node);
    addFirst(node);
    return node.value;
  }

  private void addFirst(Node node) {
    if (head == null && tail == null) {
      head = node;
      tail = node;
      return;
    }

    head.prev = node;
    node.next = head;
    head = node;
  }

  private void remove(Node node) {
    Node prevNode = node.prev;
    Node nextNode = node.next;

    if (prevNode == null) {
      // node is head
      head = node.next;
    } else {
      prevNode.next = node.next;
    }

    if (nextNode.next == null) {
      // node is tail
      tail = node.prev;
    } else {
      nextNode.prev = prevNode.prev;
    }
  }
}

```

## Golang Implementation

```java
 package main

import (
        "errors"
        "fmt"
        "strings"
)

// LRU cache implementation
// Map keys to nodes in a map for fast (O(1)) retrieval.
// Store nodes (ie key, value pairs) in a doubly-linked list to maintain access ordering.
// Ie the head (tail) is most (least) recently-used pair/node.

// FIXME Use generics to better support any key, (fixed) value types, ie LRUCache[K comparable, V any]
// FIXME Add a sync.Mutex to support multithread support
// FIXME Use channels to implement notify() and sync.Cond to implement notifyAll()

type LRUCache struct {
        cache      map[string]*node
        head, tail *node
        size       int
}

type node struct {
        key         string
        val         any
        left, right *node
}

func NewLRUCache(size int) (*LRUCache, error) {
        // Requiring a size of at least two simplies logic elsewhere
        if size < 2 {
                return nil, errors.New("invalid size")
        }

        return &LRUCache{
                cache: make(map[string]*node, size),
                size:  size,
        }, nil
}

func (c *LRUCache) Put(key string, val any) {
        if node, ok := c.cache[key]; ok {
                if node.val != val {
                        node.val = val
                }
                c.promote(node)
                return
        }

        for len(c.cache) >= c.size {
                delete(c.cache, c.tail.key)

                c.tail = c.tail.left
                c.tail.right = nil
        }

        // Golang support pointer escape analysis to determine which variables are allocated in heap vs stack.
        // Ie it is safe to use a (long-lived) pointer created from within a function.
        node := &node{
                key:   key,
                val:   val,
                right: c.head,
        }
        c.cache[key] = node
        c.head = node

if node.right == nil {
                c.tail = c.head
        } else {
                node.right.left = node
        }
}

func (c *LRUCache) promote(n *node) {
        if n.left == nil && n.right == nil {
                // Previously the head & tail, no-op

        } else if n.left == nil && n.right != nil {
                // Previously the head, no-op

        } else if n.left != nil && n.right == nil {
                // Previously the tail

                n.left.right = nil
                c.tail = n.left

                n.left = nil
                n.right = c.head

                c.head.left = n

                c.head = n

        } else if n.left != nil && n.right != nil {
                // Middle of the linked list

                n.left.right = n.right
                n.right.left = n.left

                n.left = nil
                n.right = c.head

                c.head.left = n

                c.head = n
        }
}

func (c *LRUCache) Get(key string) (any, bool) {
        if node, ok := c.cache[key]; !ok {
                return nil, false
        } else {
                c.promote(node)
                return node.val, true
        }
}

func (c *LRUCache) string() string {
        var b strings.Builder

        first := true
        b.WriteString("{")
        for k, v := range c.cache {
                if !first {
                        b.WriteString(",")
                }
                b.WriteString(fmt.Sprintf("%s:%v", k, v.val))
                first = false
        }
        b.WriteString("}")

				if len(c.cache) == 0 {
                b.WriteString(" h=nil t=nil")
        } else if len(c.cache) == 1 {
                b.WriteString(fmt.Sprintf(" h=%s:%v", c.head.key, c.head.val))
                b.WriteString(fmt.Sprintf(" t=%s:%v", c.tail.key, c.tail.val))
        } else {
                b.WriteString(fmt.Sprintf(" h=%s:%v", c.head.key, c.head.val))
                node := c.head.right
                for node != nil {
                        b.WriteString(fmt.Sprintf(",%s:%v", node.key, node.val))
                        node = node.right
                }

                b.WriteString(fmt.Sprintf(" t=%s:%v", c.tail.key, c.tail.val))
                node = c.tail.left
                for node != nil {
                        b.WriteString(fmt.Sprintf(",%s:%v", node.key, node.val))
                        node = node.left
                }
        }

        return b.String()
}

```

## Test code

```java
 // Run tests with: go test -v -cover *.go

// For coverage profile (ie lines not covered by tests)
// go test -coverprofile main.prof *.go && grep '0$' main.prof && rm -f main.prof

package main

import "testing"

func equal (a, b []string) bool {
        if len(a) != len(b) {
                return false
        }
        for i := range a {
                if a[i] != b[i] {
                        return false
                }
        }
        return true
}

func forward (head *node) []string {
        var rv []string
        for n := head; n != nil; n, rv = n.right, append(rv, n.key) { }
        return rv
}

func backward(tail *node) []string {
        var rv []string
        for n := tail; n != nil; n, rv = n.left, append(rv, n.key) { }
        return rv
}

func TestBasic(t *testing.T) {
        c, err := NewLRUCache(3)
        if err != nil {
                t.Fatal(err)
        }

        if len(c.cache) != 0 || c.head != nil || c.tail != nil {
                t.Errorf("bad initial state: %s", c.string())
        }

        c.Put("a", 1)

        if len(c.cache) != 1 || c.cache["a"] != c.head || c.cache["a"] != c.tail {
                t.Errorf("bad state: %s", c.string())
        }
        if node, ok := c.cache["a"]; !ok || node.key != "a" || node.val != 1 {
                t.Errorf("bad cached node: %s", c.string())
        }

        if !equal(forward(c.head), []string{"a"}) || !equal(backward(c.tail), []string{"a"}) {
                t.Errorf("bad linked list: %s", c.string())
        }

        c.Put("b", 2)

        if len(c.cache) != 2 || c.cache["b"] != c.head || c.cache["a"] != c.tail {
                t.Errorf("bad state: %s", c.string())
        }
        if node, ok := c.cache["a"]; !ok || node.key != "a" || node.val != 1 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if node, ok := c.cache["b"]; !ok || node.key != "b" || node.val != 2 {
                t.Errorf("bad cached node: %s", c.string())
        }
				if !equal(forward(c.head), []string{"b", "a"}) || !equal(backward(c.tail), []string{"a", "b"}) {
                t.Errorf("bad linked list: %s", c.string())
        }

        c.Put("c", 3)

        if len(c.cache) != 3 || c.cache["c"] != c.head || c.cache["a"] != c.tail {
                t.Errorf("bad state: %s", c.string())
        }
        if node, ok := c.cache["a"]; !ok || node.key != "a" || node.val != 1 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if node, ok := c.cache["b"]; !ok || node.key != "b" || node.val != 2 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if node, ok := c.cache["c"]; !ok || node.key != "c" || node.val != 3 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if !equal(forward(c.head), []string{"c", "b", "a"}) || !equal(backward(c.tail), []string{"a", "b", "c"}) {
                t.Errorf("bad linked list: %s", c.string())
        }

        if val, ok := c.Get("c"); !ok || val != 3 {
                t.Errorf("bad cached value: %s", c.string())
        } else {
                if len(c.cache) != 3 || c.cache["c"] != c.head || c.cache["a"] != c.tail {
                        t.Errorf("bad state: %s", c.string())
                }
                if !equal(forward(c.head), []string{"c", "b", "a"}) || !equal(backward(c.tail), []string{"a", "b", "c"})>
                        t.Errorf("bad linked list: %s", c.string())
                }
        }

        if val, ok := c.Get("a"); !ok || val != 1 {
                t.Errorf("bad cached value: %s", c.string())
        } else {
                if len(c.cache) != 3 || c.cache["a"] != c.head || c.cache["b"] != c.tail {
                        t.Errorf("bad state: %s", c.string())
                }
                if !equal(forward(c.head), []string{"a", "c", "b"}) || !equal(backward(c.tail), []string{"b", "c", "a"})>
                        t.Errorf("bad linked list: %s", c.string())
                }
        }

        if val, ok := c.Get("c"); !ok || val != 3 {
                t.Errorf("bad cached value: %s", c.string())
        } else {
                if len(c.cache) != 3 || c.cache["c"] != c.head || c.cache["b"] != c.tail {
                        t.Errorf("bad state: %s", c.string())
                }
                if !equal(forward(c.head), []string{"c", "a", "b"}) || !equal(backward(c.tail), []string{"b", "a", "c"})>
                        t.Errorf("bad linked list: %s", c.string())
                }
        }

				if _, ok := c.Get("d"); ok {
                t.Errorf("bad cache: %s", c.string())
        }
}

func TestSize(t *testing.T) {
        _, err := NewLRUCache(0)
        if err == nil {
                t.Errorf("did not error on invalid size")
        }

        c, err := NewLRUCache(3)
        c.Put("a", 1)
        c.Put("b", 2)
        c.Put("c", 3)

        if len(c.cache) != 3 || c.cache["c"] != c.head || c.cache["a"] != c.tail {
                t.Errorf("bad state: %s", c.string())
        }
        if node, ok := c.cache["a"]; !ok || node.key != "a" || node.val != 1 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if node, ok := c.cache["b"]; !ok || node.key != "b" || node.val != 2 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if node, ok := c.cache["c"]; !ok || node.key != "c" || node.val != 3 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if !equal(forward(c.head), []string{"c", "b", "a"}) || !equal(backward(c.tail), []string{"a", "b", "c"}) {
                t.Errorf("bad linked list: %s", c.string())
        }

        c.Put("d", 4)

        if len(c.cache) != 3 || c.cache["d"] != c.head || c.cache["b"] != c.tail {
                t.Errorf("bad state: %s", c.string())
        }
        if node, ok := c.cache["b"]; !ok || node.key != "b" || node.val != 2 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if node, ok := c.cache["c"]; !ok || node.key != "c" || node.val != 3 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if node, ok := c.cache["d"]; !ok || node.key != "d" || node.val != 4 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if !equal(forward(c.head), []string{"d", "c", "b"}) || !equal(backward(c.tail), []string{"b", "c", "d"}) {
                t.Errorf("bad linked list: %s", c.string())
        }
}

func TestReinsert(t *testing.T) {
        c, err := NewLRUCache(3)
        if err != nil {
                t.Fatal(err)
        }

        c.Put("a", 1)

        if len(c.cache) != 1 || c.cache["a"] != c.head || c.cache["a"] != c.tail || c.cache["a"].val != 1 {
                t.Errorf("bad state: %s", c.string())
        }

        c.Put("a", 2)

        if len(c.cache) != 1 || c.cache["a"] != c.head || c.cache["a"] != c.tail || c.cache["a"].val != 2 {
                t.Errorf("bad state: %s", c.string())
        }

        c.Put("b", 3)

        if len(c.cache) != 2 || c.cache["b"] != c.head || c.cache["a"] != c.tail {
                t.Errorf("bad state: %s", c.string())
        }
        if node, ok := c.cache["a"]; !ok || node.key != "a" || node.val != 2 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if node, ok := c.cache["b"]; !ok || node.key != "b" || node.val != 3 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if !equal(forward(c.head), []string{"b", "a"}) || !equal(backward(c.tail), []string{"a", "b"}) {
                t.Errorf("bad linked list: %s", c.string())
        }

        c.Put("a", 4)

        if len(c.cache) != 2 || c.cache["a"] != c.head || c.cache["b"] != c.tail {
                t.Errorf("bad state: %s", c.string())
        }
        if node, ok := c.cache["a"]; !ok || node.key != "a" || node.val != 4 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if node, ok := c.cache["b"]; !ok || node.key != "b" || node.val != 3 {
                t.Errorf("bad cached node: %s", c.string())
        }
        if !equal(forward(c.head), []string{"a", "b"}) || !equal(backward(c.tail), []string{"b", "a"}) {
                t.Errorf("bad linked list: %s", c.string())
        }
}


```
