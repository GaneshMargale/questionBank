const mongoose = require('mongoose');

const Quant3Schema = new mongoose.Schema({
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
      answer: {
        type: String,
        required: [true, 'Provide answer to this question'],
      },
      contributor: {
        type: String,
        required: [true, 'Provide the name of the contributor'],
      },
    },
  ],
});

const Quant3 = mongoose.model('Quant3', Quant3Schema);

module.exports = Quant3;
