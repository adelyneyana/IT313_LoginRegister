const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/reset-password', (req, res) => {
  const { email } = req.body;

 
  console.log(`Password recovery requested for email: ${email}`);
  
  res.json({ success: true, message: 'Password reset email sent successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
