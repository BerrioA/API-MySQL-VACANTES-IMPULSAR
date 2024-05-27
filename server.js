const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
  host: 'bh6qoxspyjypzkmv8z3g-mysql.services.clever-cloud.com',
  port: 3306,
  user: 'uwahfs50c2s2q9qf',
  password: 'BoelubZ0yxNAW1SJFS5f',
  database: 'bh6qoxspyjypzkmv8z3g',
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API vacantes')
})
app.use('/api/vacantes', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('Servidor corriendo en el puerto', app.get('port'))
})
