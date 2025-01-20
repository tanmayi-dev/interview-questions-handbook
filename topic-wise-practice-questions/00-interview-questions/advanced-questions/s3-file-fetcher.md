# S3 file fetcher

## Goal

For this challenge, you will implement a parallelized file-search utility, using a simulated client to pull files from "Amazon S3" and then search them with a grep-like function we provide. In other words, the "network fetch" and "search these bytes" parts are implemented already, and your job is to use them in a clever fashion to execute the search as quickly as possible.

We provide a naive implementation which downloads and searches each file serially. Your solution should focus on parallelizing these operations, with thought given to your threading model, supporting data structures, and potential bottlenecks. You are encouraged to use modern Java constructs like lambdas, etc.

Although we only benchmark with files totaling 50MB, your solution should support much larger data sets that do not fit in main memory nor on local disk. You can assume that individual files are small (<=1MB) as in our benchmark.

You will be implementing this project during a roughly two hour pair programming exercise with members from the EventDB engineering team. They will provide feedback on your design and implementation, while also providing additional structure to the exercise.

## Pre-interview Preparation

While most of the work for this exercise will be done during your interview, we ask that you do the following ahead of time:
- Read over the problem description.
- Download the provided source to your computer.
- Set up the implementation in any development environment of your choosing.
- Verify that you can run the naive implementation in your development environment.

Additionally, please feel free to look over the naive implementation and begin thinking of ways you would improve it. 
We encourage you to read this [overview of java.util.concurrent](https://www.baeldung.com/java-util-concurrent), as it plays a central role in any parallelization effort. 
There's also an excellent 3-part tutorial on Java 8 concurrency on [winterbe.com](https://winterbe.com/posts/2015/04/07/java8-concurrency-tutorial-thread-executor-examples/) that provides additional detail.
  
## Virtual Onsite Deliverables
During your interview, you will be asked to provide a working solution for the problem. We ask that you treat this as you would any professional piece of programming. At the end of the exercise, you will be asked to package up your work (in a compilable+runnable form, including any 3rd party libraries you introduce) and send it to your interviewer.
Your solution should:

- Allow the user to specify a search term as a commandline argument
- Perform the search as quickly as possible
- Print the total number of matches found and the elapsed search time
  - note the sample implementation doesn't quite meet this requirement

You are also encouraged to add any features or options that you feel are appropriate.

## Milestones
Candidates should move through each of these stages, in order:
- Working parallel implementation
- Benchmarking your solution & exploring its parameter space
- "Pull request ready" code
