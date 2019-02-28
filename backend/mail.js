
const express = require('express')
const app = express();
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/sendmail',(req,res)=>{
  // const {to,from,subject,text} = req.query ;
const msg = {
  to: 'melihozden403@gmail.com',
  from: 'divertechnologyturkey@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
  sgMail.send(msg)
  .then(()=>{
      console.log("Mail has successfully sent")
  })
  .catch(error => {
      console.log(error)
  })
})
app.listen(4002 , ()=>{console.log("Send mail activate")})

