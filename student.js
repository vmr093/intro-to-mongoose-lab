const mongoose = require('mongoose'); // Importing mongoose

// Defining the Student schema
const studentSchema = new mongoose.Schema({
  name: String, 
  age: Number,   
  course: String, 
});

// Creating the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student; 