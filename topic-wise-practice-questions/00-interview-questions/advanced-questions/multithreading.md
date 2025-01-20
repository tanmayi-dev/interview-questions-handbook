# MultiThreading <a id="p3"></a>

The question deals with mutithreading/concurrency aspects

### Introduction

Ask the candidate to describe different types of synchronization objects (mutex, semaphore, condition, atomics etc) and their usage.

Ensure the candidate understand what is a binary semaphore and its usage.

### Background:

A binary semaphore is a synchronization mechanism which has only two integer values, '0' for 'lock' and '1' for 'unlock'. _wait()_ decrements its value, whereas _signal()_ increments its value. _wait()_ on a locked object will block, till _signal()_ will be called.

During the question, try to understand if the candidate understand additional concurrency aspects, like 'starvation', 'dead lock' etc.

## Section A <a id="sa"></a>

Ask the candidate to explain what below code snippet does:

```
sem = Semaphore(0)

Thread A:               Thread B:
statement a1            sem.wait()
sem.signal()            statement b1
```

This code snippet ensures that first thread A will perform 'statement a1' and only then thread B can proceed to its 'statement b1'.

---

## Section B <a id="sb"></a>

Given below code snippet:

```
Thread A:               Thread B:
statement a1            statement b1
statement a2            statement b2
```

Ask the candidate to implement a logic which ensure that

‘statement a1’ happens before ‘statement b2’ and ‘statement b1’ happens before ‘statement a2’.

Note: There is no restriction on ‘statement a1’, ‘statement b1’ order.

## Section B - Solution

### Wrong Solution - Deadlock

```
a1_done = Semaphore(0)
b1_done = Semaphore(0)
 
Thread A:               Thread B;
statement a1            statement b1
b1_done.wait()          a1_done.wait()
a1_done.siganl()        b1_done.signal()
statement a2            statement b2
```

### Correct Solution - Less Efficient, Might required another Context Switch

```
a1_done = Semaphore(0)
b1_done = Semaphore(0)
 
Thread A:               Thread B:
statement a1            statement b1
a1_done.signal()        a1_done.wait()
b1_done.wait()          b1_done.signal()
statement a2            statement b2
```

### Best Solution

```
a1_done = Semaphore(0)
b1_done = Semaphore(0)
 
Thread A:               Thread B:
statement a1            statement b1
a1_done.signal()        b1_done.signal()
b1_done.wait()          a1_done.wait()
statement a2            statement b2
```

---

## Section C <a id="sc"></a>

Given N threads, each perform the following code snippet :

```
‘statement x’
 
critical point
```

The synchronization requirement is that no thread executes the critical point until after all threads have executed ‘statement x’.

You can assume that there are n threads and that this value is stored in a variable, n, that is accessible from all threads.

When the first n − 1 threads arrive they should block until the nth thread arrives, at which point all the threads may proceed.

## Section C - Solution

```
n = num of threats
count = 0
mutex = Semaphore(1)   // unlocked
barrier = Semaphore(0) // locked
 
statement x
mutex.wait()
    count = count +1
    if count == n:
        barrier.signal()
mutex.signal()
 
barrier.wait()
barrier.signal()   <-- important! otherwise only one thread will continue (deadlock)
 
critical point
```
