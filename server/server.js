const express = require('express');
const app = express();
const port = 5080;
// const cors = require('cors');
// app.set('view engine', 'ejs');
// app.use(cors());

// app.use(express.static(path.join(__dirname, '../client/dist')));
// app.get('/', (req, res) => {
//   res.render('index');
// });

app.get('/', (req, res) => {
    res.send('<h1>Hello, server!</h1>');
  });

app.get('/api/test-endpoint', (req, res) => {
  const resMessage = { message: 'Hello from the server!' };
  res.json(resMessage);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});