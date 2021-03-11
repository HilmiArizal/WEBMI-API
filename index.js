const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { connection } = require('./Database');
const PORT = process.env.PORT || 2021;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(process.cwd()+"/Users/hilmiarizal/Documents/Developer/TESTING/ANGULAR/my-second-project"));

const users = [];

app.get('/getAllUsers', (req, res) => {
    res.json(users);
})

const {userRouter} = require('./Router');
app.use('/users', userRouter)

app.listen(PORT, () => console.log(`${PORT} IS RUNNNIG`))