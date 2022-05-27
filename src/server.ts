import path from "path";
//set the config directrory
process.env["NODE_CONFIG_DIR"] = path.join(__dirname, "../config/env")
import config from "config";
import express from "express";
import connect from "./database/connect"
import routes from "./routes"

//get the config params
const host = config.get('host') as string;
const port = config.get('port') as number;

//instance of the server
const app = express()

//to parse JSON payloads requested
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//server is listning
app.listen(port, host, () => {
    console.log(`Server run on http://${host}:${port}`);
    connect();
    routes(app);
})