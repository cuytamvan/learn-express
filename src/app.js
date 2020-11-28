const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');
const favicon = require('serve-favicon');

dotenv.config();

const api = require('./Api');
const middleware = require('./middleware');

const app = express();
app.use(favicon(path.join(__dirname, '../public', 'favicon.svg')));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    code: 200,
    message: 'udah gila 🤣',
    app: {
      name: process.env.APP_NAME,
    },
  });
});

app.use('/api', api);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

module.exports = app;
