import mongoose from "mongoose";
import config from "config";

export default function connect() {
    const databaseUri = config.get('databaseUri') as string;
    console.log(databaseUri)
    return mongoose.connect( databaseUri, {})
    .then(()=>{
        console.log('Database connexion succeeded')
    })
    .catch(()=>{
        console.log('Database connexion failed')
        process.exit(1)
    })
}