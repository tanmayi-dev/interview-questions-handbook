
## OS_CB

Os_cb(CB, ABS_TIME) : Schedules CB (callback, i.e. a function) to be run at the specified time (absolute time), os_cb can only schedule one CB at any given time, i.e. if any CB is already registered, this call returns an error.

Cancel() : Cancels the current scheduled CB, does nothing if there is no CB scheduled.

timeNow() : Returns time now.

Single process single thread (can’t run any helper in parallel).

You need to implement a generic my_cb(CB, DELAY) function ,The function should support calling my_cb multiple times to allow scheduling of multiple CB’s.

### Reference Solutions - Pseudocode

```
DS that supports add to push, peak, remove head in an efficient manner, could be discussed after the pseudo code is ready.
Remove should return Minimal node(with lowest ABS_time)

Push should push into the DS in a sorted manner(based on ABS_TIME)

Peak should return Minimal node(with lowest ABS_time) without removing it from the DS

Optimal DS is Minimal Head(Push O(Log(n))), most candidates would start with sorted list which is O(n) (however, see the important points below)


DS: CB_A,ABS_time_a -> CB_b,ABS_time_b ….

My_cb(CB,Delay)
	Cancel()
	Time_to_run = timeNow()  + delay
	DS.PUSH(CB, Time_to_run)
	OS_CB(runner, peak_head(DS))

Runner()
	CB = Remove_head_from_DS()
	CB()
	OS_CB(runner,peak_head(DS))


```
---

## Important Times

- The user's callback can't be used directly, because we need to do scheduling of the next.
- The implementation should avoid manipulating the data structure in the My*cb and the Runner at the same time. This is to avoid the [reentrancy issue](https://en.wikipedia.org/wiki/Reentrancy*(computing)).
  - In our callback we first call the user’s callback and only after we schedule the next one.
  - Before scheduling the callback from the head we first cancel the currently scheduled callback.
- Possible issue: callbacks with the same scheduled time.
- Be careful claiming that an O(logN) structure like a tree is going to be faster than a simple compact array (one that contains data, not pointers to data). It might be true for languages like Python or Javascript where everything is a reference to an object at some random place in memory, but it is usually not the case when using “real” languages like C/C++, thanks to the data locality ([link](https://dzone.com/articles/performance-of-array-vs-linked-list-on-modern-comp)). Also, in the latter case, for a small number of elements, the linear search over the array will be probably faster than the binary search due to the branching costs ([link](https://www.reddit.com/r/cpp/comments/w939hb/why_is_linear_search_faster_than_binary_search/), [link](https://stackoverflow.com/questions/11227809/why-is-processing-a-sorted-array-faster-than-processing-an-unsorted-array)).
