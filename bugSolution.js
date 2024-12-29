const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(next); // Pass the error to the error handler
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
app.listen(3000, () => console.log('Server listening on port 3000'));

// Placeholder for the asynchronous operation
function someAsyncOperation() {
  // Simulate an asynchronous operation that sometimes fails
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve({ message: 'Success!' });
    } else {
      reject(new Error('Simulated error'));
    }
  });
}