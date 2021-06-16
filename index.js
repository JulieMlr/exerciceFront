const express = require('express');

const app = express();
const history = require('connect-history-api-fallback');

const path = `${__dirname}/dist/`;

// ajouter le middleware à l'application
app.use(history());

app.use(express.static(path));

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello' });
});

app.listen(PORT, () => {
  console.log(`Votre app est disponible sur localhost: ${PORT}`);
});
