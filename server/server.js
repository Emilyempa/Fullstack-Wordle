import app from './app.js';

const port = process.env.PORT || 5080; 

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`);
});