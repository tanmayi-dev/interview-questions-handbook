# DBMS

## SQL

#### What are stored procedures?

<details>
<summary>Answer</summary>
<p>
SQL Store Procedures

A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.

So if you have an SQL query that you write over and over again, save it as a stored procedure, and then just call it to execute it.

You can also pass parameters to a stored procedure, so that the stored procedure can act based on the parameter value(s) that is passed.

</p>
</details>

---

#### Can we have stored procedures in NoSQL?

<details>
<summary>Answer</summary>
<p>
NoSQL databases, as a general rule, do not typically support traditional stored procedures in the same way that many relational databases do. Stored procedures are precompiled and stored in a database for execution. They allow you to encapsulate business logic and database operations in a single unit, which can then be executed on demand.

However, some NoSQL databases do offer similar functionality through various mechanisms:

**Serverless Functions or Compute Services:**
Many NoSQL databases offer serverless compute services that allow you to execute custom code in response to database events or on a schedule. For example, AWS Lambda, Azure Functions, or Google Cloud Functions can be used with NoSQL databases to achieve similar goals.

**Triggers and User-Defined Functions:**
Some NoSQL databases provide the ability to define triggers or user-defined functions that are automatically executed when certain events occur in the database.

**MapReduce:**
Some NoSQL databases, especially those in the document and wide-column categories, support MapReduce operations. These allow you to perform distributed data processing and transformation operations, which can be seen as similar to stored procedures in certain scenarios.

**Custom Application Logic:**
In many NoSQL use cases, custom application code handles the business logic that might otherwise be encapsulated in stored procedures.

</p>
</details>

---

#### Explain different types of keys in RDBMS

<details>
<summary>Answer</summary>
<p>

Types of Keys are

- Primary Key
- Foreign Key
- Candidate Key
- Composite Key
- Super Key

**1. Primary Key:**

- It is a unique identified for a record within a table.
- Enforces **entity integrity**
- Every value in Primary Key column must be **unique**
- Primary key **cannot** contain NULL values
- Primary key values should ideally remain constant
- A Primary Key should be minimal, meaning that no subset of its column should also uniquely identify a record (row)

```sql

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);

```

**2. Foreign Key:**

- A foreign key is a column in a table that refers to the primary key in another table
- It establishes a relationship between the tables
- Enforces **referential integrity**
- Referential Integrity: Values in the foreign key columm must match an existing primary key value in the referenced table
- It can contain **NULL** values. It can be defined as non-null if required
- It should be **consistent**. The referenced value should exist in the referenced table. If a referenced value is deleted or updated, corresponding action on the foreign key can be set using options like **CASCADE** or **SET NULL**

Example

```sql
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(100)
);

CREATE TABLE Enrollments (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,
    CourseID INT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

```

**3. Candidate Key**

- A candidate key is a set of one or more columns that can uniquely identify a record within a table.
- Any candidate key can be chosen as the primary key.
- It must satisfy the uniqueness property, i.e., no two records in the table can have the same combination of candidate key values.
- It should be minimal, meaning that removing any column from the candidate key would cause it to lose its uniqueness

```sql

CREATE TABLE Customers (
    CustomerID INT,
    Email VARCHAR(100),
    PhoneNumber VARCHAR(20),
    PRIMARY KEY (CustomerID), /* Primary Key (which was chosen from candidate key)*/
    UNIQUE (Email), /* Candidate Key */
    UNIQUE (PhoneNumber) /* Candidate Key */
);
```

**4. Composite Key**

- A composite key is a primary key that consists of two or more columns.
- It is used when a single column cannot uniquely identify a record, but the combination of multiple columns can.
- (OrderID, ProductID) together form Composite Primary Key
- Combination of values in the composite key columns must be unique
- It can be nullable or non-nullable

Example

```sql
CREATE TABLE Orders (
    OrderID INT, /* composite key */
    ProductID INT, /* composite key */
    OrderDate DATE,
    PRIMARY KEY (OrderID, ProductID)
);

```

**5. Super Key**

- A super key is a set of columns that can uniquely identify a record.
- It may include more columns than necessary to form a minimal candidate key.
- In below example, `BookID` and `(Title, Author)` are super keys

```sql
CREATE TABLE Books (
    BookID INT,
    Title VARCHAR(200),
    Author VARCHAR(100),
    ISBN VARCHAR(20),
    PRIMARY KEY (BookID),
    UNIQUE (Title, Author)
);

```

Note:

- row : tuple, record
- column : attribute, field
- table : relation, entity

</p>
</details>

---

#### Given an employee table and Bonus table, write a query to find max, second max, and nth max salary and also write a query to find the name of the employee whose getting maximum bonus

<details>
<summary>Answer</summary>
<p>

```sql
SELECT * FROM employee
WHERE salary= (SELECT DISTINCT(salary)
FROM employee ORDER BY salary DESC LIMIT n-1,1);
```

</p>
</details>

---

#### 2nd Maximum salary(SQL code)

<details>
<summary>Answer</summary>
<p>

● First method:

```sql
select * from employee
group by salary
order by salary desc limit 1,1;
```

● Second method:

```sql
SELECT name, MAX(salary) AS salary
FROM employee
WHERE salary IN
(SELECT salary FROM employee MINUS SELECT MAX(salary)
FROM employee);
```

● Third method:

```sql
SELECT name, MAX(salary) AS salary
FROM employee
WHERE salary <> (SELECT MAX(salary)
FROM employee);
```

● Fourth Method:

```sql
WITH T AS
(
  SELECT *
  DENSE_RANK() OVER (ORDER BY Salary Desc) AS Rnk
  FROM Employees
)
SELECT Name
FROM T
WHERE Rnk=2;
```

</p>
</details>

---

#### ACID Principles for a Transaction

<details>
<summary>Answer</summary>
<p>
A - Atomicity
C - Consistency
I - Isolation
D - Durability
</p>
</details>

---

#### What is a Common table expression

<details>
<summary>Answer</summary>
<p>
A common table expression, or CTE, is a temporary named result set created from a simple SELECT statement that can be used in a subsequent SELECT statement. Each SQL CTE is like a named query, whose result is stored in a virtual table (a CTE) to be referenced later in the main query
</p>
</details>

---

#### How to bulk insert in database

<details>
<summary>Answer</summary>
<p>

**PostgreSQL**

- Insert Bulk Data in Postgres using INSERT Statement

```sql
INSERT INTO table_name (column_list)
VALUES
(value_list_1),
(value_list_2),
(value_list_3),
...
(value_list_n);
```

- Insert Bulk Data in Postgres using COPY command

```sql
COPY table_name [(column_list)]
FROM 'file_name| file_path'
CSV HEADER;
```

**SQL Server**
The BULK INSERT statement allows you to import a data file into a table or view in SQL Server. The following shows the basic syntax of the BULK INSERT statement:

```sql

BULK INSERT table_name
FROM path_to_file
WITH options;
```

</p>
</details>

---

## NoSQL

#### CAP Theorem

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

#### BASE Properties

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

#### Temp Table vs Table Variable

<details>
<summary>Answer</summary>
<p>

|Temp Table| Table Variable|
|||

</p>
</details>

---

#### What is a temp table

<details>
<summary>Answer</summary>
<p>

</p>
</details>

---

7. SQL queries

- write a query to select customer name starting with 'a' and ending with 'a'
- write a query to select the name of customers whose salary is between 5000 and 10000
- write a query to select maximum salary from the table

8. How many records does the 3rd query in the above question return
