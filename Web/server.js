/* eslint no-console: 0 */
import path from 'path';
import express from 'express';

import falcorExpress from 'falcor-express';

import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import todoRouter from './todo-router';

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/model.json',falcorExpress.dataSourceRoute(() => new todoRouter()));

app.listen(port);
