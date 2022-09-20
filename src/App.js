import express from 'express';        
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from '../src/api/router/index.js';

const app = express();

app.use( morgan('dev') );
app.use( cors({}) );
app.use( express.json() );

app.get( '/', ( req, res ) => res.send('car-rent-test-hello') );

app.use( '/api', indexRouter );

export default app;