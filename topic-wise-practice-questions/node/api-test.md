## Question

Given an api endpoint that returns the data in the following format:

```json
{ "data": "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47" }
```

Count all the ages about 50 and return the count value.

```js
const https = require("https");

// Helper function to parse the input JSON and count ages above 50
function countAgesAbove50(inputJson) {
  const parsedData = JSON.parse(inputJson);
  const dataStr = parsedData.data;
  const dataArr = dataStr.split(", ");

  let countAbove50 = 0;
  for (const item of dataArr) {
    if (item.includes("age=")) {
      const ageValue = parseInt(item.split("=")[1]);
      if (ageValue > 50) {
        countAbove50++;
      }
    }
  }

  return countAbove50;
}

// Make an HTTPS request to some endpoint (you may need to replace the URL)
const options = {
  hostname: "api.example.com",
  path: "/some/endpoint",
  method: "GET",
};

const req = https.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    // Assuming the response is JSON format
    const responseData = JSON.parse(data);
    const count = countAgesAbove50(responseData.data);
    console.log("Count of ages above 50:", count);
  });
});

req.on("error", (error) => {
  console.error("Error making the request:", error);
});

req.end();
```
