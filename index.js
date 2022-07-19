require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/charactersRoute');
const swaggerRoute = require('./src/routes/swaggerRoute');
const connectedToDatabase = require('./src/database/database');
const userRoute = require('./src/users/usersRoute');
const authRoute = require('./src/auth/authRoute')

connectedToDatabase();
app.use(express.json());
app.use(cors());
app.use('/', routes);
app.use('/', swaggerRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
