const  express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const dbConnection = require('./database/connections');

dotenv.config();

const app = express();

// db connection
dbConnection();

// cors
app.use(cors());

// in built middleware
// request payload middleware
// helps in parsing json and form-urlencoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const myMiddleware = (res, req, next) => {
//     console.log("hey i am middleware");
//     next();
// };

// // application level middleware
// app.use(myMiddleware);
// // use above or below
// // app.get('/', myMiddleware, (req,res,ne) 

// let's use routing
app.use('/api/v1/product', require('./routes/productRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));


app.get('/', (req,res,ne) => {
    res.send("hello from node api server");
});

// use port from dotenv, if not specified than use 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// error level middleware
app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
});