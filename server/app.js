const express = require(`express`);
const analyticsRoute = require(`./routes/analytics`);
const authRoute = require(`./routes/auth`);
const categoryRoute = require(`./routes/category`);
const orderRoute = require(`./routes/order`);
const positionRoute = require(`./routes/position`);
const app = express();

app.use('/api/analytics', analyticsRoute);
app.use('/api/auth', authRoute);
app.use('/api/category', categoryRoute);
app.use('/api/order', orderRoute);
app.use('/api/position', positionRoute);

module.exports = app;