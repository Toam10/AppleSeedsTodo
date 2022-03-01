import * as Mongoose from "mongoose";
import {Project} from "./models/project";

const uri = "mongodb://localhost:27017/AppleSeedsTodo";

let database: Mongoose.Connection; export const connect = () => {  // add your own uri below
    if (database) {
        return;
    } Mongoose.connect(uri); database = Mongoose.connection; database.once("open", async () => {
        // tslint:disable-next-line:no-console
        console.log("Connected to database");
    });
    database.on("error", () => {
        // tslint:disable-next-line:no-console
        console.log("Error connecting to database");
    });
};
export const disconnect = () => {

    if (!database) {
        return;
    } Mongoose.disconnect();
};