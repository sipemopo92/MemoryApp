const express = require('express');
const cors = require('cors');

const app = express();
const usersRoutes = require('./routes/users');
const scoresRoutes = require('./routes/scores');


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', usersRoutes);
app.use('/scores', scoresRoutes);


app.listen(3000, () => {
    console.log('Listening on port 3000')
});