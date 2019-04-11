const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {res.json([])});

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  next();
});

app.get('/api/users', (req, res) => {
  res.json([1, 2, 3, 4, 5, 6]);
});

app
.use(express.static('build'))
.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${ PORT }`));
