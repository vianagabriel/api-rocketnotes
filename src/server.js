require('express-async-errors');
const AppError = require('./utils/AppError');

const express = require('express');
const app = express();

const database = require('./database/sqlite');
database();

const routes  = require('./routes/index');
app.use(express.json())

app.use(routes);

app.use((error, req, res, next) => {
   if(error instanceof AppError){
     return res.status(error.statusCode).json({
        error: 'error',
        message: error.message
     })
   }
   console.log(error);
   return res.status(500).json({
    error: 'error',
    message: 'Internal server error'
   })
})
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})
