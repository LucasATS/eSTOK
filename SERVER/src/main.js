// RESPONSÁVEL PELO CONTROLE DE TODOS OS APPS

import express from "express";
<<<<<<< HEAD
import appConfig from "./app/appConfig";
=======
import appConfig from './settings/config';
>>>>>>> 954d418c9a36c07c7b4c269026804c02dee5dac5

const PATH = __dirname;
const server = express();

express.request.headers;
// SERVIDOR DO APLICATIVO
appConfig(server, PATH);
