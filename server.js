const  express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// use port from dotenv, if not specified than use 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req,res,ne) => {
    res.send("hello from node server");
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});