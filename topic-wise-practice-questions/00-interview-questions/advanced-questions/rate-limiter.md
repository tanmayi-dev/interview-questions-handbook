## Rate Limiter

Implement a simple rate limiter for an API using a fixed window or rolling window rate limiting algorithm. Limit the number of requests an individual user can make in a given time frame (e.g., 100 requests per hour). Identify users based on a unique attribute (e.g., IP address or API key). When the limit is reached, return an appropriate HTTP status code (e.g., 429 Too Many Requests). Write basic unit tests to validate the functionality.

### Complications

1. Implement varying rate limits based on user type (e.g., regular users vs. premium users).
2. Allow changing the rate limits without restarting the service.
3. Utilize an efficient data store (e.g., Redis) for tracking requests.
4. Extend the rate limiter to work in a distributed environment. Ensure rate limiting works consistently across multiple nodes in a distributed system.
5. Implement a mechanism to synchronize rate-limiting data across servers (e.g., using distributed caching or a shared database).
6. Design the system to be resilient to node failures.

---

## Cache

Create a basic in-memory cache. Decide on an appropriate data structure (like a hash map) to store key-value pairs. Implement an interface for it. Implement a TTL feature for each key-value pair. Ensure that the cache operations are thread-safe. Write unit tests to verify the functionality.

### Complications

1. Discuss different cache eviction policies (LRU, LFU, FIFO). Implement one. Set a maximum capacity for the cache, triggering the eviction policy when exceeded.

2. Run the cache as an independent process. Discuss possibilities of implementing a method for IPC (like sockets, shared memory, or RPC). Modify the cache to work in a client-server model, where the cache is the server. Discuss serialization and deserialization of data for transmission. Discuss the robust error handling and validation for communication failures.

3. Transition the cache to run on a separate machine. Discuss using TCP/IP or HTTP for communication between the client and the server. Discuss basic authentication and ensure data is transmitted securely. Discuss logging and monitoring.

4. Discuss fault tolerance, and handling of network failures gracefully. Discuss integration tests simulating network scenarios and multi-machine environment.

5. Expand the cache to a distributed system. Discuss cache nodes clustering, allowing scaling. Introduce data partitioning/sharding strategies. Discuss the consistency vs availability in the distributed environment (CAP theorem). Address consistency models (eventual, strong, etc.) across nodes. Discuss implementation of load balancing among cache nodes. Ensure failover capabilities and data replication among nodes. Discuss how to perform stress testing and simulate different distributed system scenarios.

---
