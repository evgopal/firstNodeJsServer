const http = require('http');

const express = require('express');

const app = express();


app.use((req, res, next) => {
    console.log('In the middleware')

}) 

app.listen(3000, () => {
    console.log('Listening on port 3000!!')
})