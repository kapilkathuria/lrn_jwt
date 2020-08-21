const  express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const myMiddleware = (res, req, next) => {
    console.log("hey i am middleware");
    next();
};

// application level middleware
app.use(myMiddleware);
// use above or below
// app.get('/', myMiddleware, (req,res,ne) 

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