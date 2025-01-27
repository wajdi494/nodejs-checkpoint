const nodemailer=require("nodemailer")
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sahraouimariem234@gmail.com',
      pass: 'vqcz fvzc hdus elkw'
    }
  });
  
  var mailOptions = {
    
    to: 'skiouichames61@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });