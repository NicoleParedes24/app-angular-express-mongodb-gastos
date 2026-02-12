const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// settings
app.set('puerto', process.env.PORT || 3000);
app.set('nombreApp', 'Gestión de gastos');

// middlewares
app.use(cors());              // 👈 ESTA LÍNEA SOLUCIONA TODO
app.use(morgan('dev'));
app.use(express.json());

// rutas
// rutas
app.use('/api/gastos', require('./src/routes/gastos.routes'));
app.use('/api/users', require('./src/routes/users.routes'));


module.exports = app;
