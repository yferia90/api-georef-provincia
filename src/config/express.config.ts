import 'dotenv/config';
import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from '../routes';
import dbInit from '../db/mongo';
import { options } from '../../swaggerOptions';

// Swagger documentation
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const app: Application = express();
/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// options swagger docs
const configSwaggerDoc = swaggerJsDoc(options);

app.use('/v1', routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(configSwaggerDoc));
dbInit().then();

export default app;