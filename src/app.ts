import express, { request, response } from 'express';
var nodemailer = require("nodemailer");
var mandrillTransport = require('nodemailer-mandrill-transport');

var smtpTransport = nodemailer.createTransport(mandrillTransport({
    auth: {
      apiKey : 'fSTbY9Q5pNCqykcitjBqzw'
    }
}));

let mailData={
    from : 'nihaldewangan487@gmail.com',
    to : 'reciver@domain.com',
    subject : "This is from Mandrill",
    html : "Hello,<br>Sending this email using Node and Mandrill"
 };

 smtpTransport.sendMail(mailData, function(error: any, response: any){
    if(error) {
       throw new Error("Error in sending email");
    }
    console.log("Message sent: " + JSON.stringify(response));
  });



const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('My first node project');
});

app.post('/pp', (req, res) => {
    // res.jsonp({ status:200 , message:"Suitable Message",
    //     data:{ success: ['List of Successful emails'], 
    //         failure:['List of Failed emails'] }
    //     });

        const message = {
            "html": req.body.html,
            "text": req.body.text,
            "subject": req.body.subject,
            "from_email": req.body.from_email,
            "from_name": req.body.from_name,
            "to": [{
                    "email": req.body.to["email"],
                    "name": req.body.to["name"],
                    "type": req.body.to["type"]
                }],
            }
            

        });

          
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});