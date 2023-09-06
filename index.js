const express = require('express');
const app = express();

// app.set('trust proxy', true);
// Define a route that retrieves the client's IP address
app.get('/', (req, res) => {
  const clientIP = req.ip; // This will get the client's IP address

  res.send(`Your IP address is: ${clientIP}`);
});

// Start the server on port 3000
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});