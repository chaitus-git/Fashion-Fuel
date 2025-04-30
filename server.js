const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("New contact submission:", { name, email, message });
  res.send('Message received. Thank you!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
