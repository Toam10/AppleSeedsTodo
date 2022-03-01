import { app } from './app';
import { connect, CallbackWithoutResult } from 'mongoose';

const URI = `mongodb://127.0.0.1:27017/AppleSeedsTodo`;
connect(URI);

const PORT = 8080;
const SERVER_MESSAGE = `server is up and running on port ${PORT}`;

// tslint:disable-next-line: no-console
app.listen(PORT, () => console.log(SERVER_MESSAGE));
