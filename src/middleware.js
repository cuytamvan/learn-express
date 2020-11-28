const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`😋 - Not Found - ${req.originalUrl}`);
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    code: 500,
    message: err.message,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
