<<<<<<< HEAD:SERVER/src/app/appConfig.js
import "dotenv/config";
import bodyParser from "body-parser";
=======
import 'dotenv/config';
import bodyParser from 'body-parser';
import db from './db';
>>>>>>> 954d418c9a36c07c7b4c269026804c02dee5dac5:SERVER/src/settings/config.js

const cookie = require("cookie-parser");

const express = require("express");

const appConfig = async (server, PATH) => {
  //PARSERS
  server.use(cookie());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  //CAPTURA AS URLS
<<<<<<< HEAD:SERVER/src/app/appConfig.js
  const urls = require("./urls").default;
  const views = require("./views").default;
  new urls(server, new views(PATH));
=======
  const urls = require('../urls').default;
  new urls(server);
>>>>>>> 954d418c9a36c07c7b4c269026804c02dee5dac5:SERVER/src/settings/config.js

  //LIBERA A PASTA STATIC E DISPONIBILIZA COMO PUBLICA
  server.use("/static", express.static(PATH + "/web/static"));

  //Conecta Banco
  db.sync({ force: false }); 

  //INICIA SERVIDOR
  server.listen(process.env.PORT, process.env.HOST, () =>
    console.log(
      `\n---\nSERVIDOR ON\nhttp://${process.env.HOST}:${process.env.PORT}/\n---`
    )
  );
};

export default appConfig;
