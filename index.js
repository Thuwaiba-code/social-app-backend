const express = require('express');
const app = express();
const PORT = 3000;

//Middleware to handle JSON
app.use(express.json());

// A simple test route
app.get('/', (req,res) => {
  res.send('Backend serveris running!');
});

app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
});
  


