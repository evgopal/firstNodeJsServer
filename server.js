const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);


// page not found 

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html'))
})


app.listen(3000, () => {
    console.log('Listening on port 3000!!')
})