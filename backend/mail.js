
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
const cors = require('cors')
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
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
  html: `
  <h3>Welcome to PlanApp ${req.body.fullname}</h3>
    <p>Activate your account down below</p>
    <a href="http://localhost:3000/activate"><button>Activate</button></a>
  `,
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

app.listen(PORT , () =>
{
  console.log(`Send mail activate on ${PORT}`)
})

