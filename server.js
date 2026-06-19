const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Railway sets PORT automatically - this is critical
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  html = html.replace('YOUR_API_KEY_HERE', process.env.ANTHROPIC_API_KEY || '');
  res.send(html);
});

// Listen on all network interfaces (0.0.0.0) - required for Railway
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Finance to Impact running on port ${PORT}`);
});
