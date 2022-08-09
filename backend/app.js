const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/billing', { useNewUrlParser: true, useUnifiedTopology: true })

const clientsRoutes = require('./api/routes/clients')

app.use('/clients', clientsRoutes)

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      error: {
          message: error.message
      }
  });
});

app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port 3000');
});