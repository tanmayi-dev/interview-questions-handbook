
# Ring Buffer Question <a id="p2"></a>

Implement a C++ class `ring_buffer` that stores a fixed-size sequence of elements, where the oldest element is overwritten when the buffer becomes full. The `ring_buffer` class should have the following public methods:

- `push(const T& x)`: Add element `x` to the end of the buffer. If the buffer is full, the oldest element should be overwritten.

- `T pop()`: Remove and return the oldest element from the buffer. If the buffer is empty, a default value should be returned.

- `std::size_t size() const`: Return the number of elements in the buffer.

- `bool empty() const`: Return true if the buffer is empty, false otherwise.

- `bool full() const`: Return true if the buffer is full, false otherwise.

### Usage Example <a id="u2"></a>

```cpp

ring_buffer<int, 5> rb;
rb.push(1);
rb.push(2);
rb.push(3);
 
while (!rb.empty()) {
  std::cout << rb.pop() << std::endl;
}

```

### Ring Buffer Solution <a id="s2"></a>

```cpp

#include <array>
 
template <typename T, std::size_t N>
class ring_buffer {
 public:
  // Construct an empty ring buffer.
  ring_buffer() : head_(0), tail_(0) {}
 
  // Add an element to the end of the buffer.
  void push(const T& x) {
    buffer_[head_] = x;
    head_ = (head_ + 1) % N;
    if (head_ == tail_) {
      // Buffer is full, so overwrite oldest element.
      tail_ = (tail_ + 1) % N;
    }
  }
 
  // Remove and return the oldest element from the buffer.
  T pop() {
    if (empty()) {
      // Buffer is empty, so return default value.
      return T();
    }
    T x = buffer_[tail_];
    tail_ = (tail_ + 1) % N;
    return x;
  }
 
  // Return the number of elements in the buffer.
  std::size_t size() const {
    if (head_ >= tail_) {
      return head_ - tail_;
    } else {
      return N - tail_ + head_;
    }
  }
 
  // Return true if the buffer is empty, false otherwise.
  bool empty() const { return head_ == tail_; }
 
  // Return true if the buffer is full, false otherwise.
  bool full() const { return size() == N; }
 
 private:
  std::array<T, N> buffer_;
  std::size_t head_;
  std::size_t tail_;
};

```

---
