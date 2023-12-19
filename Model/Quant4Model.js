const mongoose = require('mongoose');

const Quant4Schema = new mongoose.Schema({
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

const Quant4 = mongoose.model('Quant4', Quant4Schema);

module.exports = Quant4;
