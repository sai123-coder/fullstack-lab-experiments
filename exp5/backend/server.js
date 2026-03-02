const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/studentdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  age: Number
});

const Student = mongoose.model('Student', studentSchema);

app.post('/api/students', async (req, res) => {
  try {
    console.log("Incoming data:", req.body);

    const student = new Student(req.body);
    await student.save();

    res.status(201).json(student);
  } catch (err) {
    console.error("Error saving:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));