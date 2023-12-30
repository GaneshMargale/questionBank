const mongoose = require('mongoose');

const DB2 = process.env.DATABASE2.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD2
);
const questionBankDBConnection = mongoose.createConnection(DB2, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const aptitudeSchema = new mongoose.Schema({
  contestNumber: {
    type: Number,
    required: [true, 'Provide a contest number'],
    unique: true,
  },
  contestName: {
    type: String,
    required: [true, 'Provide a contest name'],
  },
  questions: [
    {
      // questionNumber: {
      //   type: Number,
      //   required: [true, 'Provide a question number'],
      // },
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
    },
  ],
  time: {
    type: Number,
    default: Date.now,
  },
  visibility: false,
});

const Aptitude = questionBankDBConnection.model('Aptitude', aptitudeSchema);

module.exports = Aptitude;
