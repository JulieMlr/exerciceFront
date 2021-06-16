const express = require('express')
const app = express()

const path = __dirname + '/dist/';

app.use(express.static(path));

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log('Votre app est disponible sur localhost: ' + PORT)
})