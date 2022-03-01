import * as mongoose from "mongoose";
import { Project } from "./models/project";
// tslint:disable-next-line:no-console

const uri = "mongodb://localhost:27017/AppleSeedsTodo";

type TDBInput = {
    db: string;
};

export default ({ db }: TDBInput) => {
    const connect = () => {
        mongoose
            .connect(db, {
            })
            .then(() => {
                // tslint:disable-next-line:no-console
                return console.info(`Successfully connected to Database`);
            })
            .catch((error) => {
                // tslint:disable-next-line:no-console
                console.error('Error connecting to database: ', error);
                return process.exit(1);
            });
    };
    connect();

    mongoose.connection.on('disconnected', connect);
};