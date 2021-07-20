const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res){
  const firstName = req.body.firstName;
  const secondName = req.body.secondName;
  const email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: secondName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us19.api.mailchimp.com/3.0/lists/c843162ed2";
  const options = {
    method: "POST",
    auth: "alberto:0521d06b41229eecc9c6eb9e08be2667-us19"
  };

  const request = https.request(url, options, function(response) {
    response.on("data", function(data) {
      if(response.statusCode === 200){
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post('/failure', function(req, res) {
  res.redirect('/');
})

app.listen(3000, function() {
  console.log("Server running at port 3000");
});

//0521d06b41229eecc9c6eb9e08be2667-us19
//c843162ed2
