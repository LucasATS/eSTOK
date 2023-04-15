import views from './views';
import 'dotenv/config';

const express = require('express');

const appConfig = async (server, PATH) => {

  //CAPTURA AS URLS
  const urls = require('./urls').default;
  new urls(server, views);

  //LIBERA A PASTA STATIC E DISPONIBILIZA COMO PUBLICA
  server.use('/static', express.static(PATH + '/static'));

  //INICIA SERVIDOR
  server.listen(process.env.PORT, process.env.HOST, () =>
    console.log(`\n---\nSERVIDOR ON\nhttp://${process.env.HOST}:${process.env.PORT}/\n---`)
  );
};

export default appConfig;