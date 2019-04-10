const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// app.get('/users', (req, res) => {res.json([])});

app
.use(express.static('build'))
.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${ PORT }`));
