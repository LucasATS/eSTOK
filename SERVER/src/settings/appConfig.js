import 'dotenv/config';
import bodyParser from 'body-parser';
import db from './db';

const cookie = require('cookie-parser');

const express = require('express');

const appConfig = async (server, PATH) => {

  //PARSERS
  server.use(cookie());
  server.use(bodyParser.urlencoded({extended:true}));
  server.use(bodyParser.json());

  //CAPTURA AS URLS
  const urls = require('../urls').default;
  new urls(server);

  //LIBERA A PASTA STATIC E DISPONIBILIZA COMO PUBLICA
  server.use('/static', express.static(PATH + '/web/static'));

  //Conecta Banco
  db.sync({ force: force }); 

  //INICIA SERVIDOR
  server.listen(process.env.PORT, process.env.HOST, () =>
    console.log(`\n---\nSERVIDOR ON\nhttp://${process.env.HOST}:${process.env.PORT}/\n---`)
  );
};

export default appConfig;