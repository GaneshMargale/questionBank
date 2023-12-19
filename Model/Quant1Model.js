const mongoose = require('mongoose');

const Quant1Schema = new mongoose.Schema({
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

const Quant1 = mongoose.model('Quant1', Quant1Schema);

module.exports = Quant1;
