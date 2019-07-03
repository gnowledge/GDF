const fs= require('fs');
const express = require('express');
const app = express();
const hostname = '127.0.0.1'; // Local host ip.
const homebase=fs.readFileSync('./with_radio_final.html');
const query=require('./query').query;
//var server = http.createServer(function(req, res) {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/html');
//  res.write(homebase);
//  res.end();
//});

app.get('/',(req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(homebase);
  res.end();
});

app.get('/with_radio_final.html',(req, res) => {
  sub=req.query['Subject'];
  pred=req.query['Predicate'];
  obj=req.query['ObjecT'];
  type=req.query['type'];
  console.log("SUBJECT= "+sub);
  console.log("PREDICATE= "+pred);
  console.log("OBJECT= "+obj);
  console.log("TYPE= "+type);
  query(type, sub, pred, obj);
});

//PORT
const port = process.env.PORT || 3000

app.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});