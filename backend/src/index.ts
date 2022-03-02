import { app } from './app';
import { connect } from 'mongoose';
import { passwordDev } from './config/dev';
import { passwordProd } from './config/prod';

if (process.env.NODE_ENV === 'production') {
  connect(
    process.env.MONGO_URL || `mongodb+srv://AppleSeedsTodo:${passwordProd}@cluster0.ekf6u.mongodb.net/AppleSeedsTodo`,
    {}
  );
} else {
  connect(
    process.env.MONGO_URL || `mongodb+srv://AppleSeedsTodo:${passwordDev}@cluster0.ekf6u.mongodb.net/AppleSeedsTodo`,
    {}
  );
}
// const URI = `mongodb://127.0.0.1:27017/AppleSeedsTodo`;
// connect(URI);

const PORT = process.env.PORT || 8080;
const SERVER_MESSAGE = `server is up and running on port ${PORT}`;

// tslint:disable-next-line: no-console
app.listen(PORT, () => console.log(SERVER_MESSAGE));
