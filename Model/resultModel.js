const mongoose = require('mongoose');

const DB2 = process.env.DATABASE2.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD2
);
const resultDBConnection = mongoose.createConnection(DB2, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
const resultSchema = new mongoose.Schema({
  contestNumber: {
    type: Number,
    required: [true, 'Provide a contest number'],
    unique: true,
  },
  // contestType: {
  //   type: String,
  //   required: [true, 'Provide a contest type'],
  //   lowercase: true,
  //   enum: {
  //     values: ['aptitude', 'dsa'],
  //     message: 'The type shoulde be aptitude or dsa',
  //   },
  // },
  contestName: {
    type: String,
    required: [true, 'Provide a contest name'],
  },
  Results: [
    {
      usn: {
        type: String,
        required: [true, 'Please provide a valid usn'],
        lowercase: true,
      },
      branch: {
        type: String,
        required: [true, 'Please provide a branch'],
        lowercase: true,
        enum: {
          values: ['cse', 'ece', 'ise'],
          message: 'The type should cse, ece or ise',
        },
      },
      name: {
        type: String,
        required: [true, 'Provide a name'],
      },
      points: {
        type: Number,
        required: [true, 'Provide the points'],
      },
      timeLeft: {
        type: Number,
        required: [true, 'Provide the time'],
      },
    },
  ],
});

const Result = resultDBConnection.model('Result', resultSchema);

module.exports = Result;
