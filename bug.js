const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling is missing here!  Express doesn't know about the error
    console.error(error); // This only logs the error, it doesn't send an error response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));