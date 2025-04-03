import app from './app.js';

const port = 5080;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});