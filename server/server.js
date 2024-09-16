const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email service like Outlook, Yahoo, etc.
  auth: {
    user: 'choudhry00641@gmail.com', // Your email
    pass: 'lsnl xuhh hnjz gowq',  // App password (not your regular password)
  },
});

// Route to handle form submission
app.post('/contact', (req, res) => {

  res.send("server running")
});

app.get('/',(req,res)=>{
  res.send("server running")
})

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
