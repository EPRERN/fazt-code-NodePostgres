const express = require('express');
const app = express();

//routes
app.use(require('./routes/index'));

//midlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(3000);
console.log('corriendo en port 3000')