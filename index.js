'use strict';

const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
let server;

app.use('/', express.static('./build'));

server = http.createServer(app);

server.listen(9005);
