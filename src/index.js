const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// npm start para iniciar o servidor com o nodemon

app.use(express.json());


app.use(cors({
    origin: 'https://lucaspb-bethehero.netlify.app/',
  }));
app.use(routes);

app.listen(process.env.PORT || 3333);
