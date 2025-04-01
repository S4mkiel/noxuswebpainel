const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: 'http://127.0.0.1:5500', // Permite requisições do painel web
  }),
);

let updateData = null;

app.post('/api/send-update', (req, res) => {
  const { updateKey, updatedItems, additionalInfo } = req.body;
  if (!updateKey || !updatedItems || !additionalInfo) {
    return res.status(400).json({ error: 'Dados incompletos' });
  }
  updateData = { updateKey, updatedItems, additionalInfo };
  res.json({ success: true });
});

app.get('/api/send-update', (req, res) => {
  res.json(updateData || {});
});

// Novo endpoint para limpar os dados
app.post('/api/clear-update', (req, res) => {
  updateData = null;
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
