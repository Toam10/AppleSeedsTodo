import express from 'express';
import cors from 'cors';

import morgan from 'morgan';
import helmet from 'helmet';

import { corsConfig } from './config';
import { projectsRouter } from './routers/projects.router';

const app = express();

app.use(cors(corsConfig));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.use('/', projectsRouter);

app.use('*', ((err, req, res, next) => {
  res.status(500).send('Server Error');
}) as express.ErrorRequestHandler);
export { app };

const PORT: string | number = process.env.PORT || 4000;
// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set("useFindAndModify", false)

// mongoose
//   .connect(uri, options)
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server running on http://localhost:${PORT}`)
//     )
//   )
//   .catch(error => {
//     throw error
//   })
