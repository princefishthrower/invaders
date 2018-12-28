'use strict';

const http = require('http');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
let server;

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use('/', express.static('./build'));

server = http.createServer(app);

server.listen(9005);
