const express = require('express');
const app = express();
const port = 5080;

// app.set('view engine', 'ejs');


// app.use(express.static(path.join(__dirname, '../client/dist')));
// app.get('/', (req, res) => {
//   res.render('index');
// });

app.get('/', (req, res) => {
    res.send('<h1>Hello, server!</h1>');
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});