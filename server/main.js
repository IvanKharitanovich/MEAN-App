const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`));