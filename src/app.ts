import express, { request, response } from 'express';
var nodemailer = require("nodemailer");
// const mailchimpClient = require("@mailchimp/mailchimp_transactional")("'fSTbY9Q5pNCqykcitjBqzw");
var mandrillTransport = require('nodemailer-mandrill-transport');

// ----------------------------------------
// var message = {
//         from : "",
//         to : "",
//         subject : "",
//         html : ""
//      };
// ---------------------------------------------




var smtpTransport = nodemailer.createTransport(mandrillTransport({
    auth: {
      apiKey : 'fSTbY9Q5pNCqykcitjBqzw'
    }
}));


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

    

    let mailData={
          from : req.body.from_email,
          to : req.body.to["email"],
          subject : req.body.subject,
          html : req.body.html
       };
      
       smtpTransport.sendMail(mailData, function(error: any, response: any){
          if(error) {
             throw new Error("Error in sending email");
          }
          console.log("Message sent: " + JSON.stringify(response));
          // console.log(req.body);
        });

        //  message = {
        //     from : req.body.from_email,
        //     to : req.body.to["email"],
        //     subject : req.body.subject,
        //     html : req.body.html
        //  };

            // const run = async () => {
            // // const api_res = await mailchimpClient.messages.send({ message: message });
            // const api_res = await mailchimpClient.messages.send({ message: {"from_email":"nihaldewangan487@gmail.com", 
            //     "subject":"Hello World",
            //     "text":"Welcome to Mailchimp Transactional!",
            //     "to":[
            //         {
            //          "email":"nihaldewangan487@gmail.com",
            //          "type":"to"
            //             }
            //           ] 
            //            } });
            //     console.log(api_res);
            //   };
              
            //   run()
            res.send("assa");

        });

        // let mailData={
        //     from : req.body.from_email,
        //     to : req.body.to["email"],
        //     subject : req.body.subject,
        //     html : req.body.html
        //  };
        
        //  smtpTransport.sendMail(message, function(error: any, response: any){
        //     if(error) {
        //        throw new Error("Error in sending email");
        //     }
        //     console.log("Message sent: " + JSON.stringify(response));
        //     // console.log(req.body);
        //   });

          
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});