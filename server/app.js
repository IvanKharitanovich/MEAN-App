const express = require(`express`);
const mongoose = require(`mongoose`);
const bodyParser = require(`body-parser`);
const cors = require(`cors`);
const morgan = require(`morgan`);
const keys = require(`./config/keys`)
const analyticsRoute = require(`./routes/analytics`);
const authRoute = require(`./routes/auth`);
const categoryRoute = require(`./routes/category`);
const orderRoute = require(`./routes/order`);
const positionRoute = require(`./routes/position`);
const app = express();

mongoose.connect(keys.mongoURI).then(() => {
        console.log(`CONNECTED TO DB`)
    }
)

app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/analytics', analyticsRoute);
app.use('/api/auth', authRoute);
app.use('/api/category', categoryRoute);
app.use('/api/order', orderRoute);
app.use('/api/position', positionRoute);

module.exports = app;


