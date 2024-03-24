const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 5000;

const userCredentials =[
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
  { email: 'user3@example.com', password: 'password3' },
  { email: 'user4@example.com', password: 'password4' },
  { email: 'user5@example.com', password: 'password5' },
  { email: 'user6@example.com', password: 'password6' },
  { email: 'user7@example.com', password: 'password7' },
  { email: 'user8@example.com', password: 'password8' },
  { email: 'user9@example.com', password: 'password9' },
  { email: 'user10@example.com', password: 'password10' }
];
app.use(bodyParser.json());
app.use(cors());



// Endpoint for admin login
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    return res.json({ success: true, message: 'Admin logged in successfully' });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.post('/user/login', (req, res) => {
  const { email, password } = req.body;
  const user = userCredentials.find(cred => cred.email === email);
  if (user && user.password === password) {
    return res.status(200).json({ success: true, message: 'User logged in successfully' });
  }
  else{
    return res.status(404).json({ success: false, message: 'Invalid credentials' });
  }
  
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
