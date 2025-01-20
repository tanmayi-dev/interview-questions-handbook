- [General](#general)
- [DSA](#dsa)
- [Backend](#backend)
- [Computer Networks](#cn)
- [DBMS](#dbms)
- [Java](#java)
- [OOPs](#oops)
- [Unix](#unix)
- [Git](#git)
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#js)
- [React](#react)


## General <a id="general"></a>

1. Explain one of your projects? Given time how would you improve this project
2. What was your Role in the project?
3. What were the key takeaways from this project ? or from each of the project you have mentioned in resume.
4. What is the biggest technical challenge you faced while working on the project / internship ? How did you solve it ?
   

## DSA <a id="dsa"></a>



1. What is the difference between **heap memory and stack memory** ? <br><br>
   <details>
      <summary>Answer</summary>
      <p>Heap memory is dynamically allocated memory used for objects and data structures, managed by the programmer, while stack memory is used for function calls and local variables, managed automatically by the compiler.</p>
   </details>
  
---

2. What is a **binary search tree (BST)** and what is its time complexity for search operations?
   <details>
      <summary>Answer</summary>
      <p>A binary search tree is a binary tree where the left child node contains values less than the parent node, and the right child node contains values greater than the parent node. The time complexity for search operations in a balanced BST is O(log n).</p>
   </details>
  
---
  
3. What is **dynamic programming** and when is it used?
     <details>
         <summary>Answer</summary>
         <p>Dynamic programming is a technique used to solve problems by breaking them down into simpler subproblems and solving each subproblem only once. It's used when the same subproblems occur multiple times.</p>
      </details>
  
---
  
4. What are types of **tree traversals** ?
     <details>
         <summary>Answer</summary>
         <p>Inorder, Preorder, Postorder</p>
      </details>
  
---

5. Can you construct a BST with only preorder or only postorder traversal ?
   <details>
      <summary>Answer</summary>
      <p>Yes, but the resulting tree <strong>may not be unique</strong>, and there may be multiple valid BSTs depending on the arrangement of elements.</p>
   </details>
  
---

6. Can you construct a **unique BST** if preorder and postorder traversals are given ? or What should be given to construct a unique BST ?
   <details>
      <summary>Answer</summary>
      <p>
         <ul>
            <li>Preorder + Inorder</li>
            <li>Postorder + Inorder</li>
         </ul>
      </p>
   </details>
---

## Backend <a id="backend"></a>

1. What is an **API** ?
   <details>
      <summary>Answer</summary>
      <p>An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other.</p>
   </details>
  
---

2. What is **HTTP**?
   <details>
      <summary>Answer</summary>
      <p>HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web, used to transmit hypertext documents (such as HTML) between web servers and clients.</p>
   </details>
  
---

3. What is a **RESTful** API?
   <details>
      <summary>Answer</summary>
      <p>A RESTful API is an architectural style that uses HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources, typically using standard HTTP methods (GET, POST, PUT, DELETE).</p>
   </details>

--- 
4. What is the difference between **PUT** and **PATCH** methods in RESTful APIs?
   <details>
      <summary>Answer</summary>
      <p>PUT is used to <strong>update or replace an entire resource</strong>, while PATCH is used to <strong>partially update a resource</strong>, typically sending only the data that has changed.</p>
   </details>
   

---
5. What is the purpose of authentication and authorization in backend development?
   <details>
      <summary>Answer</summary>
      <p>
         <ul>
            <li>Authentication verifies the identity of users</li>
            <li>Authorization determines what actions they are allowed to perform within an application or system.</li>
         </ul>
      </p>
   </details>

---
6. Can you name some commonly used **HTTP Status Codes** ?
   <details>
      <summary>Answer</summary>
      <p>
         <ul>
            <li>200 OK: Indicates that the request has succeeded.</li>
            <li>201 Created: Indicates that the request has been fulfilled and a new resource has been created.</li>
            <li>400 Bad Request: Indicates that the server cannot process the request due to client error.</li>
            <li>401 Unauthorized: Indicates that the request requires user authentication.</li>
            <li>403 Forbidden: Indicates that the server understood the request, but refuses to authorize it.</li>
            <li>404 Not Found: Indicates that the requested resource could not be found on the server.</li>
            <li>500 Internal Server Error: Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.</li>
            <li>503 Service Unavailable: Indicates that the server is currently unable to handle the request due to temporary overload or maintenance.</li>
         </ul>
      </p>
   </details>
   

---

## Computer Networks <a id="cn"></a>

1. What are the layers in the OSI Model ?
2. What are the layers in the TCP/IP Model ?
3. Difference between TCP and UDP
4. What is an IP address?
5. Can a computer have multiple IP addresses?
6. What is a MAC address? Can a computer have multiple MAC addresses ?
7. What is a firewall?
8. What happens when you enter “www.google.com“ [link](https://blog.bytebytego.com/p/what-happens-when-you-type-a-url)
9. Explain DHCP
10. Explain SMTP


## DBMS <a id="dbms"></a>

1. Difference between SQL and NoSQL
2. Write a query to select customer name starting with ‘a' and ending with 'a’
3. Write a query to select the name of customers whose salary is between 5000 and 10000. Does BETWEEN operator do inclusive search ?
4. Write a query to select maximum salary from the table. How many records does this query return ?
5. How would you extract a substring from the string 'Hello, World!' starting from the 3rd character and spanning 5 characters using SQL?
6. What is Primary Key, Candidate Key and Foreign Key ?
7. What is Normalization ? Why is it necessary ?
8. Explain 1NF, 2NF and 3NF
9. what is the maximum possible normalization attainable in real life scenarios ?



## Java <a id="java"></a>

1. What is the difference between `==` and .equals() in Java?
2. What is the `final` keyword used for in Java ?
3. What is the JVM?
4. How does Java ensure platform independence?
5. What is a static variable?
6. What is “this” keyword in Java
7. What are the types of Exception in Java ?
8. Arithmetic exception is what type of exception ?
9. If try or catch block has return statements, Is finally block executed ?
10. Difference between throw, throws and finally
11. Difference between StringBuilder and StringBuffer? 

## OOPs <a id="oops"></a>

1. What are the **pillars of OOPs** and **Advantages** of OOPs
2. What is **Data abstraction**?
3. What is the difference between an **abstract class** and an **interface** in Java?
4. What is **Polymorphism** ?
5. Explain the concept of **method overloading** and **method overriding**
6. What happens if a subclass defines a method with the same name as a method in its superclass?
7. What is **Encapsulation**?
8. **Access Modifiers** in Java
9. What is **Inheritance** ?
10. What is **multiple inheritance**? and why doesn't Java support it?
11. How does Java support multiple inheritance through interfaces?

## Unix <a id="unix"></a>

1. How to change file owner ?
2. How do you get the pid of a running process?
3. What does the tail command do?
4. How can you ssh to a remote server?
5. What is the difference between a soft link and a hard link in Unix/Linux?
6. What does the grep command do in Unix ?
7. What is the role of the `sudo` command in Unix ?
8. Describe the difference between `rm` and `rmdir` commands in Unix
9. What is the purpose of the `cron` utility in Unix

## Git <a id="git"></a>

1. What is Git?
2. What is the difference between Git commit and Git push?
3. How do you update your local repository with changes from a remote repository?
4. What is the difference between `git pull` and `git fetch`?
5. Can I say `git pull` is combination of `git fetch` and `git merge` ?
6. How do you create a new branch in git
7. What is a `.gitignore` file?
8. What is a `.gitkeep` file ?

## HTML <a id="html"></a>

## CSS <a id="css"></a>

## JavaScript <a id="js"></a>

## React <a id="react"></a>

