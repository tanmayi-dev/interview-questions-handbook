# Create in-memory cache 

Create a basic in-memory cache. Decide on an appropriate data structure (like a hash map) to store key-value pairs. Implement an interface for it. Implement a TTL feature for each key-value pair. Ensure that the cache operations are thread-safe. Write unit tests to verify the functionality.

### Complications

1. Discuss different cache eviction policies (LRU, LFU, FIFO). Implement one. Set a maximum capacity for the cache, triggering the eviction policy when exceeded.

2. Run the cache as an independent process. Discuss possibilities of implementing a method for IPC (like sockets, shared memory, or RPC). Modify the cache to work in a client-server model, where the cache is the server. Discuss serialization and deserialization of data for transmission. Discuss the robust error handling and validation for communication failures.

3. Transition the cache to run on a separate machine. Discuss using TCP/IP or HTTP for communication between the client and the server. Discuss basic authentication and ensure data is transmitted securely. Discuss logging and monitoring.

4. Discuss fault tolerance, and handling of network failures gracefully. Discuss integration tests simulating network scenarios and multi-machine environment.

5. Expand the cache to a distributed system. Discuss cache nodes clustering, allowing scaling. Introduce data partitioning/sharding strategies. Discuss the consistency vs availability in the distributed environment (CAP theorem). Address consistency models (eventual, strong, etc.) across nodes. Discuss implementation of load balancing among cache nodes. Ensure failover capabilities and data replication among nodes. Discuss how to perform stress testing and simulate different distributed system scenarios.
