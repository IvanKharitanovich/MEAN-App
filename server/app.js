const express = require(`express`);
const authRoute = require(`./routes/auth`);
const app = express();

app.use('/api/', authRoute);

module.exports = app;