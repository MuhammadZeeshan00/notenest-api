const express = require('express');
const app = express();

// Use the PORT environment variable provided by Render, default to 3000 for local testing
const port = process.env.PORT || 3000;

// Sample quotes data
const quotes = [
  { id: 1, text: "Stay curious and keep learning!", author: "Unknown" },
  { id: 2, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: 3, text: "Dream big, start small, act now.", author: "Robin Sharma" }
];

// Enable JSON parsing for incoming requests
app.use(express.json());

// GET endpoint to fetch all quotes
app.get('/quotes', (req, res) => {
  res.json(quotes);
});

// Start the server on 0.0.0.0 to handle Render's requirements
app.listen(port, '0.0.0.0', () => {
  console.log(`API running at http://0.0.0.0:${port}`);
});