
# Coding Exercise : Paginated API and Promises

## Part 1

For this questin, we have a paginated API of users ([users](https://interview-js-api.fly.dev/api/users)), that returns up to 100 users at a time. To control the pagination, the `offset` query param is used to determine what's the user list index to start from. For instance, calling `/api/users?offset=100` will return 100 users starting from the 101st user.

Each user includes a first name, last name and a company ID they belong to.

The User API structure is as follows :

```json
 {
  "items": [
    {
      "id": 0,
      "firstName": "Laisha",
      "lastName": "Kunde",
      "companyId": 5,
      "_links": {
        "company": {
          "href": "/api/company/5"
        }
      }
    },
    {
      "id": 1,
      "firstName": "Doris",
      "lastName": "Beatty",
      "companyId": 18,
      "_links": {
        "company": {
          "href": "/api/company/18"
        }
      }
    },
    ...
  ],
  "_total": 1212,
  "_links": {
    "previous": {
      "href": null
    },
    "next": {
      "href": "/api/users?limit=100&offset=100"
    }
  }
}

```

The ask is to construct a function that returns a list of all of the users in the system, in the following shape:

```json
 [
	{
    "id": 0,
    "firstName": "Laisha",
    "lastName": "Kunde",
    "companyId": 5
	},
	{
    "id": 1,
    "firstName": "Doris",
    "lastName": "Beatty",
    "companyId": 18
	},
	...
]

```

## Part 2

As described in Part 1, each user belongs to a company, and the User API gives us the company ID for each user.

The list of all of the companies is exposed through another paginated API ([companies](https://interview-js-api.fly.dev/api/companies)) which contains the company ID and name. An individual company can be retrieved using the individual company API (`https://interview-js-api.fly.dev/api/companies/{companyId}`), for instance `1`

The Companies API is also a paginated API and the shape is as follow:

```js
 {
  "items": [
    {
      "id": 1,
      "name": "Maggio - Cremin"
    },
    {
      "id": 2,
      "name": "Kohler Inc"
    },
    ...
  ],
  "_total": 107,
  "_links": {
    "previous": {
      "href": null
    },
    "next": {
      "href": "/api/companies?limit=100&offset=100"
    }
  }
}


```

The ask in this part is to update the solution from Part 1 and include the company name for each user, so the list of all of the users in the system will look like this:

```js
 [
	{
    "id": 0,
    "firstName": "Laisha",
    "lastName": "Kunde",
    "company": {
      "id": 5,
      "name": "Bogan and Sons"
    }
	},
	{
    "id": 1,
    "firstName": "Doris",
    "lastName": "Beatty",
    "companyId": 18,
    "company": {
      "id": 18,
      "name": "Volkman - White"
    }
	},
	...
]

```

## Part 3

For this part, given that we now have a function that returns the list of all of the users in the system, including the company name they belong to, we need to display the data in a simple React Web application. A list of items or cards should be enough, and each item / card should show the user first name, last name and company.

Additionally, we need to add a simple input box that will filter this list based on what’s input on this box. It should filter based on either of the attributes (first name, last name, company name).

## Goals of this question

Assess the candidate on their understanding about Promises and async nature of JS.

Assess their knowledge about making API requests both in parallel and sequentially.

Assess their knowledge on simple React concepts.

## Demo

A possible solution/demo for this question can be found here : [App.js](https://codesandbox.io/p/sandbox/xenodochial-meitner-kvqgzy?file=%2Fsrc%2FApp.js)

### App.js

```js
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { obtainUsers } from "./obtainUsers";

import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    obtainUsers().then((users) => {
      setUsers(users);
      setFilteredUsers(users);
    });
  }, []);

  const onChange = (e) => {
    const { value } = e.target;
    if (!value) {
      setFilter("");
      setFilteredUsers(users);
    } else {
      const updatedValue = value.toLowerCase();
      setFilter(updatedValue);
      setFilteredUsers(
        users.filter(
          ({ firstName, lastName, company: { name: companyName } }) =>
            firstName.toLowerCase().includes(updatedValue) ||
            lastName.toLowerCase().includes(updatedValue) ||
            companyName.toLowerCase().includes(updatedValue)
        )
      );
    }
  };

  return (
    <div className="App">
      <h1>List of Users</h1>
      <TextField
        label="Filter"
        variant="outlined"
        value={filter}
        onChange={onChange}
      />
      <ul>
        {filteredUsers.map(({ id, firstName, lastName, company }) => (
          <li key={id}>
            {id} - {firstName} {lastName} ({company.name})
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### obtainUsers.js

```js
import axios from "axios";

const BASE_URL = "https://interview-js-api.herokuapp.com";

const fetchPaginatedApi = async (endpoint) => {
  const url = new URL(endpoint, BASE_URL).href;
  const { data } = await axios(url);
  const { items, _total } = data;

  if (_total > items.length) {
    const responses = await Promise.all(
      [...Array(Math.ceil(_total / 100) - 1)].map((_, i) =>
        axios(`${url}?offset=${(i + 1) * 100}`)
      )
    );

    return items.concat(...responses.map(({ data }) => data.items));
  }

  return items;
};

export const obtainUsers = async () => {
  const [users, companies] = await Promise.all([
    fetchPaginatedApi("/api/users"),
    fetchPaginatedApi("/api/companies"),
  ]);

  return users.map(({ id, firstName, lastName, companyId }) => ({
    id,
    firstName,
    lastName,
    company: {
      id,
      name: companies.find(({ id }) => id === companyId)?.name,
    },
  }));
};
```
