const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware to enable CORS for all routes
app.use(cors());

// Sample data for search results
const sampleData = [
  "apple",
  "banana",
  "grape",
  "orange",
  "peach",
  "pear",
  "pineapple",
  "strawberry",
  "watermelon",
  "blueberry",
];

// Route to handle search requests
app.get("/search", (req, res) => {
  const query = req.query.query.toLowerCase();
  const limit = parseInt(req.query.limit) || 10;

  // Filter the sample data based on the query
  const results = sampleData
    .filter((item) => item.toLowerCase().includes(query))
    .slice(0, limit);

  // Send the results back as JSON
  res.json({ matches: results });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
