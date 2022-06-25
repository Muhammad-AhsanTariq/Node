var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'm.ahsan7133@gmail.com',
    pass: 'ahsan713'
  }
});

var mailOptions = {
  from: 'm.ahsan7133@gmail.com',
  to: 'tariq.ahsan71@gamil.com',
  subject: 'Sending Email using Node.js',
  text: 'do it!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

