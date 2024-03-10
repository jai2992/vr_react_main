// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // If your React app is on a different domain

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/vrproject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const questionSchema = new mongoose.Schema({
    id:Number,
    
  questionText: String,
  options: [ {
    id: Number,
    text: String,
  }],

},
{
    collection: "questions",
  }
  );

const Question = mongoose.model('Question', questionSchema);

// Middleware
app.use(cors()); // Enable CORS for all routes

// Route to get all questions
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
