import express, { request, response } from 'express';
const mc = require('superagent');
// import bodyParser from 'body-parser';

const mailchimpInstance   = 'us1',
    // listUniqueId        = 'b6a82d89f0',
    mailchimpApiKey     = '576fb4e6dab3fd2010efa5385c92f975-us1';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = 5000;
app.get('/', (req, res) => {
  res.send('My first node project');
});

app.post('/pp', (req, res) => {
    // res.send(req.body);
    // const res_c = String(res.status(200))
    console.log(req.body)
    res.jsonp({ status:200 , message:"Suitable Message",
        data:{ success: ['List of Successful emails'], 
            failure:['List of Failed emails'] }
        });
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});