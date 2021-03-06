
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
const cors = require('cors')
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/registerauth', (req, res) => {

  console.log(req.body);

  // const {to,from,subject,text} = req.query ;
  //   console.log()

  {/* <a href="" 
style="background-color:#333333;border:1px solid #333333;border-color:#333333;border-radius:6px;border-width:1px;color:#ffffff;display:inline-block;font-family:arial,helvetica,sans-serif;font-size:16px;font-weight:normal;letter-spacing:0px;line-height:16px;padding:12px 18px 12px 18px;text-align:center;text-decoration:none" 
target="_blank">Activate Your Account</a> */}


  const msg = {
    to: `${req.body.email}`,
    from: 'divertechnologyturkey@gmail.com',
    subject: 'Verify your account',
    text: `PlanApp`,
    html: `
  <h3>Hey! ${req.body.fullname} welcome to PlanApp</h3>
    <p>Activate your account down below</p>
    <a href="http://localhost:3000/activate" 
style="background-color:#25A3E9;border:1px solid #25A3E9;border-color:#25A3E9;border-radius:6px;border-width:1px;color:#ffffff;display:inline-block;font-family:arial,helvetica,sans-serif;font-size:16px;font-weight:normal;letter-spacing:0px;line-height:16px;padding:12px 18px 12px 18px;text-align:center;text-decoration:none" 
target="_blank">Activate Your Account</a>
  `,
  };
  sgMail.send(msg)
    .then(() => {
      console.log("Mail has successfully sent")
      res.status(200).send('Welcome').end();
    })
    .catch(error => {
      console.log(error)
      res.status(500).end()
    })
})

const PORT = process.env.PORT || 4002

app.listen(PORT, () => {
  console.log(`Send mail activate on ${PORT}`)
})

