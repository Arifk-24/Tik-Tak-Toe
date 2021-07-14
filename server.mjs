import express from 'express';
import mangodb from 'mongodb';
var app = express();
app.use(express.urlencoded());
 
app.use(express.json());

app.get('/',function(req,res){
   res.send("welcome to the proxy ");
   res.end();
})
app.get('/react', function(req, res){
   console.log("i have recieved")
   res.send("hello there i am Arif khan");
   res.end();
})

app.post('/create_profile', function (req, res) {  
   // Prepare output in JSON format 
   var response = req.body;
   const MongoClient = mangodb.MongoClient;
   const uri = "mongodb+srv://Arif:Bhayyu@cluster0.hkvs8.mongodb.net/account?retryWrites=true&w=majority";
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
   client.connect(function (err,result){
      if(err) 
      {
         throw err;
      }
      console.log(result);
     const collection = client.db("account").collection("info");
     collection.insertOne(response).then(re=>{
        return re;
     }).then(data=>
      {
         console.log(data);
         client.close();
      }).catch(er=>{
         console.log(er);
      });
   });
   res.end();
})

app.post('/login', function(req,res)
{
   let response = req.body;
   console.log("hello bro");
   console.log(response);
   res.end(JSON.stringify(response)); 
})
var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})