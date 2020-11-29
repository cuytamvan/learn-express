const app = require('./app');

const port = process.env.APP_PORT || 5000;
app.listen(port, () => {
  console.log(`Listen taahh http://[::1]:${port}`);
});
