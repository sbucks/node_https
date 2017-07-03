/**
 * Created by siva on 7/3/17.
 */
const express = require('express');
const https = require('https');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');



const privateKey  = fs.readFileSync('/home/iceboxoffice/ssl/keys/b099a_bf1a1_769cfebdb65d8a4f63b230d9230bb82b.key');
const certificate = fs.readFileSync('/home/iceboxoffice/ssl/certs/iceboxoffice_com_b099a_bf1a1_1520433759_d4b866dad1dfcd0338f5b4fce4a7b4e3.crt');

const credentials = {key: privateKey, cert: certificate};

const app = express();
const port = 8000;

app.get('/', (req, res)=>{
    res.send('invalid entry point');
    console.log('invalid entry point')
});
app.use(helmet());

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port);