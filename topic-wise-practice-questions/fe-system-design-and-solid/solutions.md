# Advanced Frontend Questions

Tag: AT&T

### What kind of model do you use for message queue?

- If there are multiple pub-sub model then scalability is an issue
- How will you handle it?
- Distributed Message queue (Kafka)

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

Tag: AT&T

### If there are multiple pub-sub models, for message queue. How will you handle scalability issue?

<details>
<summary>Answer</summary>
<p>

When dealing with multiple pub-sub models in a message queue, scalability can become a concern. To handle scalability, there are a few approaches you can consider:

<strong>Use a distributed message queue:</strong> A distributed message queue is designed to handle large amounts of data and can distribute messages across multiple nodes. This can help to reduce the load on individual nodes and improve overall system performance. Examples of distributed message queue systems include Apache Kafka, RabbitMQ, and Amazon SQS.

<strong>Use a load balancer:</strong> A load balancer can help distribute incoming requests across multiple nodes. This can help to balance the load on individual nodes and improve overall system performance. A load balancer can be used to distribute incoming pub-sub messages across multiple nodes.

<strong>Use a sharding strategy:</strong> Sharding involves dividing data into smaller chunks and distributing them across multiple nodes. This can help to reduce the load on individual nodes and improve overall system performance. Sharding can be used to distribute pub-sub messages across multiple nodes based on specific criteria such as message topic or message source.

<strong>Use a caching strategy:</strong> Caching involves storing frequently accessed data in memory for faster access. Caching can be used to cache pub-sub messages that are frequently accessed, which can help to reduce the load on the message queue and improve overall system performance.

<strong>Use a hybrid approach:</strong> A combination of the above approaches can be used to achieve optimal scalability. For example, a distributed message queue can be combined with a load balancer to distribute messages across multiple nodes, and a sharding strategy can be used to distribute messages based on specific criteria.

</p>
</details>

---

Tag: AT&T

### How will you integrate payment gateway and manage sessions? Where will you store session id? Will you store session id on client side or on server side

<details>
<summary>Answer</summary>
<p>
</p>
</details>

---

Tag: AT&T

### What is Middleware? Which middleware do you use with Node.js?

<details>
<summary>Answer</summary>
<p>
<strong>Express.js:</strong> Express is a popular web application framework for Node.js that provides a wide range of middleware for handling HTTP requests and responses. It includes middleware for handling routing, parsing request bodies, and serving static files, among others.

<strong>body-parser:</strong> body-parser is a middleware package that provides support for parsing request bodies in different formats, including JSON, URL-encoded, and multipart. It can be used with any Node.js web application framework.

<strong>morgan:</strong> morgan is a middleware package that provides logging for HTTP requests and responses. It can be used to log request details such as the URL, method, status code, and response time.

<strong>helmet:</strong> helmet is a middleware package that provides security-related HTTP headers for Node.js web applications. It can help to protect against common web application attacks such as XSS and CSRF.

<strong>compression:</strong> compression is a middleware package that provides response compression for Node.js web applications. It can help to reduce the size of HTTP responses, which can improve page load times and reduce bandwidth usage.

<strong>cookie-parser:</strong> cookie-parser is a middleware package that provides support for parsing HTTP cookies in Node.js web applications. It can be used to read and write cookies in a simple and convenient way.

</p>
</details>

---
