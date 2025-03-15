const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});