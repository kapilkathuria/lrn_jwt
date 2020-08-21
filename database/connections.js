const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
        console.log('database connnected');
    } catch (error) {
        console.log('database connectivity error', error);
        throw new Error(error);
    }
}