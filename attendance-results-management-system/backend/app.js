const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routers = require('./routes/router');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define your routes after setting up middleware
app.use('/', routers);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
