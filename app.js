/**
 * Created by siva on 7/3/17.
 */
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');



const privateKey  = fs.readFileSync('sslcert/server.key');
const certificate = fs.readFileSync('sslcert/server.crt');

const credentials = {key: privateKey, cert: certificate};

const app = express();
const port = 8000;

app.get('/', (req, res)=>{
    res.send('invalid entry point');
    console.log('invalid entry point')
});

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port);