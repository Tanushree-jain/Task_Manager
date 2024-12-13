const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const userRouter = require('./src/routes/users.route')

app.use('/user',userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });