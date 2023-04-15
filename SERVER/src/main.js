// RESPONSÁVEL PELO CONTROLE DE TODOS OS APPS

import express from "express";
import appConfig from './app/appConfig';

const PATH = __dirname;
const server = express();

// SERVIDOR DO APLICATIVO
appConfig(server, PATH);
