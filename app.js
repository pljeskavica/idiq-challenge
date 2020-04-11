const express = require('express');
const sites = require('./scripts/constants/scraperSites');
const cors = require('cors');
const getHTML = require('./controllers/getHTML');

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => res.send('hello'));
app.get('/sites', (req, res) => res.send(sites));
app.get('/sites/:id', getHTML);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`),
);
