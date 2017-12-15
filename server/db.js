const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_restaurants');

module.exports = mongoose;
