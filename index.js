const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shortid = require('shortid');
const validateUrl= require('./middleware/validate-url'); 

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory database
const urlDatabase = {};

// Route for URL shortening
app.post('/shorten',validateUrl,(req, res) => {
  const longUrl = req.body.longUrl;
  const shortCode = shortid.generate();
  const shortUrl = `http://your-domain.com/${shortCode}`;
  

  // Store the mapping in the database
  urlDatabase[shortCode] = longUrl;

  res.send(`Short URL: ${shortUrl}`);
});

// Route for URL redirection
app.get('/:shortCode', (req, res) => {
  const shortCode = req.params.shortCode;
  const longUrl = urlDatabase[shortCode];

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send('Short URL not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});