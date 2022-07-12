require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/charactersRoute');
const routeSwagger = require('./src/routes/swaggerRoute');
const connectedToDatabase = require('./src/database/database');

app.use(express.json());

connectedToDatabase();

app.use(cors());
app.use('/', routes);
app.use('/', routeSwagger);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
