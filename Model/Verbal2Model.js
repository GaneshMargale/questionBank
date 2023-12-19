const mongoose = require('mongoose');

const Verbal2Schema = new mongoose.Schema({
  Questions: [
    {
      questionDescription: {
        type: String,
        required: [true, 'Provide the question description'],
      },
      options: {
        A: { type: String, required: [true, 'Provide option A'] },
        B: { type: String, required: [true, 'Provide option B'] },
        C: { type: String, required: [true, 'Provide option C'] },
        D: { type: String, required: [true, 'Provide option D'] },
      },
      contributor: {
        type: String,
        required: [true, 'Provide the name of the contributor'],
      },
    },
  ],
});

const Verbal2 = mongoose.model('Verbal2', Verbal2Schema);

module.exports = Verbal2;
