const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Merhaba, bu basit bir Node.js backend uygulamasıdır!');
});

app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} adresinde çalışıyor`);
});
