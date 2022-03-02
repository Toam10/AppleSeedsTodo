import mongoose from "mongoose";

// tslint:disable-next-line:no-console

type TDBInput = {
    db: string;
};

export default ({ db }: TDBInput) => {
    const connect = () => {
        mongoose
            .connect(db)
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