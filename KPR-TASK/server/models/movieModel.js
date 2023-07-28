const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
