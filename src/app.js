import express from "express";
import morgan from "morgan";
import { appPort  } from "./config";

import "./database";

import router from "./routes/index.router";

export const main = async() =>{
    const app = express();

    //configure application

    //setup middlewares
    app.use( express.json() );
    app.use( express.urlencoded( {extended: false }) );
    app.use( morgan('dev') );

    //setup router
    app.use(router);


    await app.listen(appPort);

    console.log(`listening on port ${appPort}`);

} 