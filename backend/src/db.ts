import * as Mongoose from 'mongoose';
// import Todo from "./models/project";

const uri = 'mongodb://localhost:27017/AppleSeedsTodo';

let database: Mongoose.Connection;
export const connect = () => {
  // add your own uri below

  if (database) {
    return;
  }
  Mongoose.connect(uri);
  database = Mongoose.connection;
  database.once('open', async () => {
    console.log('Connected to database');
  });
  database.on('error', () => {
    console.log('Error connecting to database');
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
