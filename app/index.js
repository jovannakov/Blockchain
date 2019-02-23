const express = require("express");
const Blockchain = require("../blockchain/index");
const bodyParser = require("body-parser");
const path = require("path");
const http = require('http');

const HTTP_PORT = process.env.PORT || 3001;

const app = express();
const blockchain = new Blockchain();

app.use(bodyParser.json());





app.get('/blocks', (req, res)=>{
    res.json(blockchain.chain);
});


app.post('/mine', (req, res) => {
   const block = blockchain.addBlock(req.body.data);
   console.log(`New block added ${block.toString()}`);
   res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});