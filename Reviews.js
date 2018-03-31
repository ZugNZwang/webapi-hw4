var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

// Review schema
var ReviewSchema = new Schema({
    reviewer: {type: String, required: true},
    movie: {type: String, required: true},
    quote: {type: String, required: true},
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    }
});

// return the model
module.exports = mongoose.model('Review', ReviewSchema);