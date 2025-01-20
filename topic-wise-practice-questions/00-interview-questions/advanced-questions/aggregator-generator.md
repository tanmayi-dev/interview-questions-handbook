## Aggregator-generator

Implement a program (pseudo, python, golang code), that has

- a generator (not the Python one) that generates a random number every 1 second;
- an aggregator that reads the data from a stream (upon writing to the stream, the aggregator would read it ASAP), and every 30 seconds prints the sum of all the aggregated numbers.

The program should exit gracefully after 10 minutes.

### Main Points

1. It’s a producer-consumer pattern.
2. A graceful shutdown is required for all parts.
3. Both the producer and the consumer should be independent from one another (separation of concerns).
4. They should communicate using a synchronized queue (channel, etc).
5. They should be independently scalable.
6. The main thread should be able to wait for all generators/aggregators to finish (wait group, join).

### Complications

1. Asynchronous graceful shutdown. This means all parts must gracefully exit on an external request.
2. Many generators and aggregators (in a single process). Discuss system threads, user-space threads, and async io.
3. Run aggregator and generator in separate processes on a single machine (how they can communicate)
4. Run aggregator and generator in separate services on different machines (how they can communicate)

### Reference Solutions

#### Golang Solution

```go
func generator(done ,aggregator chan, wg WG){
      Defer wg.done()
	ticker := time.NewTicker(1000 * time Millisecond)
	for {
            select {
            case <-done:
                return
            case t := <-ticker.C:
                aggregator <- rand(integer)
            }
        }
}

func aggregator(done,  aggregator chan, wg WG){
       Defer wg.done()
       ticker := time.NewTicker(30000 * time Millisecond)
       Sum = 0
       for {
            select {
            case <-done:
                return
            case t := <-ticker.C:
                fmt.Println("sum", sum)
                Sum = 0
            Case num <-aggregator:
                Sum += num
            }
        }
}

func main(){
     wg waitGroup
     doneAggregator doneGenerator communicationChan chan
     wg.add(2)
     Go generator(doneGenerator , communicationChan, &wg)
     Go aggregator(doneAggregator , communicationChan, &wg)

     Time.sleep(10*minutes)
     doneGenerator <- true
     doneAggregator <- true
     wg.wait()
     fmt.Println("finished")
}
```

#### Python

```python
from queue import Queue
from threading import Thread


# A thread that produces data
def generator(out_q, stop):
    while True:
        If stop():
             Break
        # Produce some data
        Data = rand()
        out_q.put(data)


# A thread that consumes data
def aggregator(in_q, stop):
    Sum = 0
    Started = None
    while True:
        # Check for termination
       If stop()
            break

       If Started is not None:
           Started = now()

       # Get some data
       Data = in_q.get()


       Sum += data
       Elapsed = started - now()
       If elapsed > 30:
            print(sum)
            Sum = 0
            Started = None


def main():
	# Create the shared queue and launch both threads
	q = Queue()
       stop_threads = False
 	generator_t = Thread(target = generator, args =(q, lambda: stop_threads))
	aggregator_t = Thread(target = aggregator, args =(q, lambda: stop_threads))
       Threads = [arrgegator_t, generator_t]
	t1.start()
	t2.start()
    sleep(10 minutes)
    stop_threads = True
    for worker in workers:
       worker.join()

```

---
