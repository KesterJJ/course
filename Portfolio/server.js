const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});



let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.WORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
   });

var mailOptions = {
    from: 'enquiries.kesterjones@gmail.com',
    to: 'kesterjjones@gmail.com',
    subject: 'enquiry',
    text: 'this is my enquiry'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });