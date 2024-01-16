import 'dotenv/config';
import bodyParser from 'body-parser';
import db from './db';
import { rotina_inativa_lotes } from '../rotinas';

const cookie = require('cookie-parser');

const express = require('express');

const cors = require('cors');

const DEBUG = false;

const appConfig = async (server, PATH) => {

  /*
  //CORS ACESSO LIBERADO
  server.use((req, res, next) => {
      //CORRINGA (*) PARA TODOS
      res.header("Access-Control-Allow-Origin", "*");
      //METODOS GET E POST LIBERADOS
      res.header("Access-Control-Allow-Methods", 'GET,POST');
      server.use(cors());
      next();
  });
  */

  
  //CONFIGURA STATUS DEBUG
  server.use((req, res, next) => {
    //CORRINGA (*) PARA TODOS
    req.status_debug = DEBUG;
    next();
  });


  //PARSERS
  server.use(cookie());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());


  //CAPTURA AS URLS
  const urls = require('../urls').default;
  new urls(server);


  //LIBERA A PASTA STATIC E DISPONIBILIZA COMO PUBLICA
  server.use('/static', express.static(PATH + '/web/static'));


  //Conecta Banco
  db.sync({ force: false });


  //INICIA SERVIDOR
  const PORT = process.env.PORT || '3000';
  const HOST = process.env.HOST || 'localhost';

  server.listen(PORT, HOST, () =>
    console.log(`\n---\nSERVIDOR ON\nhttp://${HOST}:${PORT}/\n---`)
  );


  //INICIA ROTINAS
  rotina_inativa_lotes();
};

export default appConfig;