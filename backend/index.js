const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors')
const PORT = 3000;

app.use(bodyParser.json());

app.use(cors
    ({
        origin:[ "http://localhost:4200"]
    })
)

const userRouter = require('./src/routes/users.route')

app.use('/user',userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });