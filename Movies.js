var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

// Movie schema
var MovieSchema = new Schema({
    title: { type: String, required: true },
    year: {
        type: Number,
        min: 1880,
        max: 2018,
        required: true
    },
    genre: {
        type: String,
        enum: ['Action','Adventure', 'Comedy',
            'Drama','Fantasy','Horror', 'Mystery',
            'Thriller', 'Western'],
        required: true
    },
    actors: {
        type: [{
            actorName: {type: String, required: true},
            characterName: {type: String, required: true}
        }], required: true
    }
});


// return the model
module.exports = mongoose.model('Movie', MovieSchema);