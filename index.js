const express = require('express')
const app = express()
const history = require('connect-history-api-fallback');

const path = __dirname + '/dist/';

// ajouter le middleware à l'application
app.use(history());

app.use(express.static(path));

// Il s'agit du chemin de demande qui sera utilisé lorsque le middleware identifie que le chemin de demande doit être réécrit
history({
    index: '/index.html'
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log('Votre app est disponible sur localhost: ' + PORT)
})