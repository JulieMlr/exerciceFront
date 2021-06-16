const express = require('express')
const app = express()

const path = __dirname + '/dist/';

app.use(express.static(path));

app.get('/', function (req, res) {
    res.sendFile(path + "index.html");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log('Votre app est disponible sur localhost: ' + PORT)
})