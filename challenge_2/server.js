const express = require('express');
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

router.get('/30_days', (req, res) => {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
  .then(data => res.send(data.data))
  .catch(err => res.send(err))
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

