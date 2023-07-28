const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 5000;
const Movie = require('./models/movieModel')

//this code for connecting the database
mongoose.connect('mongodb://localhost:27017/movie_listing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());


// uploaded image to the uplaods folder in local storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });





//static folder  directory uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


//movies data using get method
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch movies!', error });
  }
});


//this code for api  movies 
app.post('/api/movies', upload.single('image'), async (req, res) => {
  const { id, name, description } = req.body;
  const image = req.file.filename;
  const movie = new Movie({ id, name, image, description });
  try {
    await movie.save();
    res.json({ message: 'Movie addeded', movie });
  } catch (error) {
    res.status(500).json({ message: 'Failed to adding', error });
  }
});

//running
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



