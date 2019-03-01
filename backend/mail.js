
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.post('/registerauth',(req,res)=>{

console.log(req.body);

  // const {to,from,subject,text} = req.query ;
//   console.log()
const msg = {
  to: `${req.body.email}`,
  from: 'divertechnologyturkey@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: `<strong>Welcome to PlanApp ${req.body.fullname}</strong>`,
};
  sgMail.send(msg)
  .then(()=>{
      console.log("Mail has successfully sent")
  })
  .catch(error => {
      console.log(error)
  })
})

const PORT = process.env.PORT || 4002

app.listen(PORT , ()=>{console.log(`Send mail activate on ${PORT}`)})

