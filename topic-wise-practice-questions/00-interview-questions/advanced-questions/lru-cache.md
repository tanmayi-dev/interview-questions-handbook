
# Problem 1 : LRU Cache in CPP <a id="p1"></a>

Implement an LRU (Least Recently Used) cache with the following operations:

- get(key): Get the value of the key if the key exists in the cache, otherwise throw exception.

- set(key, value): Set or insert the value if the key is not already present. When the cache reaches capacity, it should invalidate the least recently used item before inserting a new item.

For example: LRU of ‘int’ key and ‘string’ value. Max size is 4.

```
set(5, “val1”)

set(0, “val2”)

set(100, “val3”)

get(5) -> “val1”

set(0, “val4”)

set(20, “val5”)

get(0) -> “val4”

set(7, “val6”)

get(100) -> exception
```

## LRU Cache Solution <a id="s1"></a>

This implementation uses an `unordered_map` to store the keys and values of the cache, along with an iterator to the corresponding key in the `list`. The `list` stores the keys in the order they were accessed, with the most recently accessed key at the front.

When a key is added to the cache, it is added to the front of the `list`. When a key is accessed, it is moved to the front of the list. When the cache reaches capacity, the least recently used key (the one at the back of the `list`) is removed from the `unordered_map` and the list.

### LRU Cache Code <a id="c1"></a>

```cpp

#include <unordered_map>
#include <list>
 
template <typename Key, typename Value>
class LRUCache {
public:
  LRUCache(size_t max_size) : max_size_(max_size) {}
 
  void set(const Key& key, const Value& value) {
    if (cache_.find(key) != cache_.end()) {
      // Key already exists, so update its value and move it to the front of the queue.
      queue_.erase(cache_[key].iterator);
      queue_.push_front(key);
      cache_[key] = {value, queue_.begin()};
    } else {
      // Key does not exist, so add it to the cache and the front of the queue.
      if (cache_.size() == max_size_) {
        // Cache is at capacity, so remove the least recently used element.
        cache_.erase(queue_.back());
        queue_.pop_back();
      }
      queue_.push_front(key);
      cache_[key] = {value, queue_.begin()};
    }
  }
 
  Value* get(const Key& key) {
    if (cache_.find(key) == cache_.end()) {
      // Key does not exist in cache.
      return nullptr;
    }
    // Key exists in cache, so move it to the front of the queue and return its value.
    queue_.erase(cache_[key].iterator);
    queue_.push_front(key);
    cache_[key] = {cache_[key].value, queue_.begin()};
    return &cache_[key].value;
  }
 
private:
  // The maximum size of the cache.
  size_t max_size_;
 
  // The unordered_map stores the keys and values of the cache, and the iterator of each
  // key in the list. The list stores the keys in the order that they were accessed, with
  // the most recently accessed key at the front.
  std::unordered_map<Key, std::pair<Value, typename std::list<Key>::iterator>> cache_;
  std::list<Key> queue_;
};

```

---
