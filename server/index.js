import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes';
import handleErrors from './middleware/errorHandler';

/**
 * Initialize app object
 */
const app = express();

/**
 * Middleware setup
 */
app.use(cors());
app.use(express.static('public'));
app.use(morgan('dev'));

/**
 * API routes
 */
app.use(router);

/**
 * Index.html route
 *
 * this is not needed during development or if you're hosting the site somewhere else
 * i.e. apache/nginx
 */
app.get('*', (req, res) => {
  const publicDir = process.env.PUBLIC_DIR || path.join(process.cwd(), '../client/public');
  return res.sendFile(path.join(publicDir, 'index.html'));
});

/**
 * Fallback error handler
 */
app.use(handleErrors);

/**
 * Bind the app to a port -- then we can access it at localhost:<port>
 */
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

export default app;