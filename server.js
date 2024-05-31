const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 9000);

const dbOptions = {
  host: 'bh6qoxspyjypzkmv8z3g-mysql.services.clever-cloud.com',
  port: 3306,
  user: 'uwahfs50c2s2q9qf',
  password: 'BoelubZ0yxNAW1SJFS5f',
  database: 'bh6qoxspyjypzkmv8z3g',
};

// Configuración de CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://impulsarth.netlify.app'],
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middlewares -------------------------------------
app.use(cors(corsOptions));
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

// Routes -------------------------------------------
app.get('/', (req, res) => {
  res.send('Welcome to my API vacantes');
});
app.use('/api/vacantes', routes);

// Server running -----------------------------------
app.listen(app.get('port'), () => {
  console.log('Servidor corriendo en el puerto', app.get('port'));
});
