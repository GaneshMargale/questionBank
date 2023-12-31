const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Logical1 = require('../Model/Logical1Model');
const Logical2 = require('../Model/Logical2Model');
const Logical3 = require('../Model/Logical3Model');
const Verbal1 = require('../Model/Verbal1Model');
const Verbal2 = require('../Model/Verbal2Model');
const Verbal3 = require('../Model/Verbal3Model');
const Quant1 = require('../Model/Quant1Model');
const Quant2 = require('../Model/Quant2Model');
const Quant3 = require('../Model/Quant3Model');
const Quant4 = require('../Model/Quant4Model');
const Contest = require('../Model/contestModel');
const Result = require('../Model/resultModel');

const updateQuery = (req) => {
  if (!req.body) {
    throw new AppError('Request body is missing', 400);
  }

  const question = {
    questionDescription: req.body.questionDescription,
    options: req.body.options,
    answer: req.body.answer,
    contributor: req.body.contributor,
  };

  return {
    $push: { Questions: question },
  };
};

//Add a new Question
exports.updateAptitude = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (id === '65806a9acf226c50947b05f3') {
    const Q1 = await Quant1.findById(id);

    let duplicateFound = false;

    for (const question of Q1.Questions) {
      if (question.questionDescription === req.body.questionDescription) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      return next(new AppError('A question already exists', 201));
    }
    const quantOne = await Quant1.findByIdAndUpdate(id, updateQuery(req), {
      new: true,
      runValidators: true,
    });
    if (!quantOne) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: quantOne.length,
      data: {
        Question: quantOne,
      },
    });
  } else if (id === '65806aa1426dda2c9c969c3b') {
    const Q2 = await Quant2.findById(id);

    let duplicateFound = false;

    for (const question of Q2.Questions) {
      if (question.questionDescription === req.body.questionDescription) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      return next(new AppError('A question already exists', 201));
    }
    const quantTwo = await Quant2.findByIdAndUpdate(id, updateQuery(req), {
      new: true,
      runValidators: true,
    });
    if (!quantTwo) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: quantTwo.length,
      data: {
        Question: quantTwo,
      },
    });
  } else if (id === '65806aa8289c666188f5512f') {
    const Q3 = await Quant3.findById(id);

    let duplicateFound = false;

    for (const question of Q3.Questions) {
      if (question.questionDescription === req.body.questionDescription) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      return next(new AppError('A question already exists', 201));
    }
    const quantThree = await Quant3.findByIdAndUpdate(id, updateQuery(req), {
      new: true,
      runValidators: true,
    });
    if (!quantThree) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: quantThree.length,
      data: {
        Question: quantThree,
      },
    });
  } else if (id === '65806aae47154e5f6c175a69') {
    const Q4 = await Quant4.findById(id);

    let duplicateFound = false;

    for (const question of Q4.Questions) {
      if (question.questionDescription === req.body.questionDescription) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      return next(new AppError('A question already exists', 201));
    }
    const quantFour = await Quant4.findByIdAndUpdate(id, updateQuery(req), {
      new: true,
      runValidators: true,
    });
    if (!quantFour) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: quantFour.length,
      data: {
        Question: quantFour,
      },
    });
  } else if (id === '65806a8a6cab405088369313') {
    const L1 = await Logical1.findById(id);

    let duplicateFound = false;

    for (const question of L1.Questions) {
      if (question.questionDescription === req.body.questionDescription) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      return next(new AppError('A question already exists', 201));
    }
    const LogicalOne = await Logical1.findByIdAndUpdate(id, updateQuery(req), {
      new: true,
      runValidators: true,
    });
    if (!LogicalOne) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: LogicalOne.length,
      data: {
        Question: LogicalOne,
      },
    });
  } else if (id === '65806a7f348c1821e41a40e4') {
    const L2 = await Logical2.findById(id);

    let duplicateFound = false;

    for (const question of L2.Questions) {
      if (question.questionDescription === req.body.questionDescription) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      return next(new AppError('A question already exists', 201));
    }
    const LogicalTwo = await Logical2.findByIdAndUpdate(id, updateQuery(req), {
      new: true,
      runValidators: true,
    });
    if (!LogicalTwo) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: LogicalTwo.length,
      data: {
        Question: LogicalTwo,
      },
    });
  } else if (id === '65806a762e48bf6234202e3f') {
    const L3 = await Logical3.findById(id);

    let duplicateFound = false;

    for (const question of L3.Questions) {
      if (question.questionDescription === req.body.questionDescription) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      return next(new AppError('A question already exists', 201));
    }
    const LogicalThree = await Logical3.findByIdAndUpdate(
      id,
      updateQuery(req),
      {
        new: true,
        runValidators: true,
      }
    );
    if (!LogicalThree) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: LogicalThree.length,
      data: {
        Question: LogicalThree,
      },
    });
  } else if (id === '65806a2e927e31153868ddab') {
    const V1 = await Verbal1.findById(id);

    let duplicateFound = false;

    for (const question of V1.Questions) {
      if (question.questionDescription === req.body.questionDescription) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      return next(new AppError('A question already exists', 201));
    }
    const VerbalOne = await Verbal1.findByIdAndUpdate(id, updateQuery(req), {
      new: true,
      runValidators: true,
    });
    if (!VerbalOne) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: VerbalOne.length,
      data: {
        Question: VerbalOne,
      },
    });
  } else if (id === '65806a5c9f1c8121100de4a6') {
    const V2 = await Verbal2.findById(id);

    let duplicateFound = false;

    for (const question of V2.Questions) {
      if (question.questionDescription === req.body.questionDescription) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      return next(new AppError('A question already exists', 201));
    }
    const VerbalTwo = await Verbal2.findByIdAndUpdate(id, updateQuery(req), {
      new: true,
      runValidators: true,
    });
    if (!VerbalTwo) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: VerbalTwo.length,
      data: {
        Question: VerbalTwo,
      },
    });
  } else if (id === '65806a650ff25c63506ae016') {
    const V3 = await Verbal3.findById(id);

    let duplicateFound = false;

    for (const question of V3.Questions) {
      if (question.questionDescription === req.body.questionDescription) {
        duplicateFound = true;
        break;
      }
    }

    if (duplicateFound) {
      return next(new AppError('A question already exists', 201));
    }
    const VerbalThree = await Verbal3.findByIdAndUpdate(id, updateQuery(req), {
      new: true,
      runValidators: true,
    });
    if (!VerbalThree) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: VerbalThree.length,
      data: {
        Question: VerbalThree,
      },
    });
  }
});

//Delete a Question
exports.deleteQuestion = catchAsync(async (req, res, next) => {
  const questionId = req.params.questionId;

  const quantOne = await Quant1.updateOne(
    { 'Questions._id': questionId },
    { $pull: { Questions: { _id: questionId } } }
  );

  if (quantOne.nModified > 0) {
    const updated = await Quant1.findOne();
    return res.status(200).json({
      status: 'success',
      data: updated,
    });
  }

  const quantTwo = await Quant2.updateOne(
    { 'Questions._id': questionId },
    { $pull: { Questions: { _id: questionId } } }
  );

  if (quantTwo.nModified > 0) {
    const updated = await Quant2.findOne();
    return res.status(200).json({
      status: 'success',
      data: updated,
    });
  }

  const quantThree = await Quant3.updateOne(
    { 'Questions._id': questionId },
    { $pull: { Questions: { _id: questionId } } }
  );

  if (quantThree.nModified > 0) {
    const updated = await Quant3.findOne();
    return res.status(200).json({
      status: 'success',
      data: updated,
    });
  }

  const quantFour = await Quant4.updateOne(
    { 'Questions._id': questionId },
    { $pull: { Questions: { _id: questionId } } }
  );

  if (quantFour.nModified > 0) {
    const updated = await Quant4.findOne();
    return res.status(200).json({
      status: 'success',
      data: updated,
    });
  }

  const LogicalOne = await Logical1.updateOne(
    { 'Questions._id': questionId },
    { $pull: { Questions: { _id: questionId } } }
  );

  if (LogicalOne.nModified > 0) {
    const updated = await Logical1.findOne();
    return res.status(200).json({
      status: 'success',
      data: updated,
    });
  }

  const LogicalTwo = await Logical2.updateOne(
    { 'Questions._id': questionId },
    { $pull: { Questions: { _id: questionId } } }
  );

  if (LogicalTwo.nModified > 0) {
    const updated = await Logical2.findOne();
    return res.status(200).json({
      status: 'success',
      data: updated,
    });
  }

  const LogicalThree = await Logical3.updateOne(
    { 'Questions._id': questionId },
    { $pull: { Questions: { _id: questionId } } }
  );

  if (LogicalThree.nModified > 0) {
    const updated = await Logical3.findOne();
    return res.status(200).json({
      status: 'success',
      data: updated,
    });
  }

  const VerbalOne = await Verbal1.updateOne(
    { 'Questions._id': questionId },
    { $pull: { Questions: { _id: questionId } } }
  );

  if (VerbalOne.nModified > 0) {
    const updated = await Verbal1.findOne();
    return res.status(200).json({
      status: 'success',
      data: updated,
    });
  }

  const VerbalTwo = await Verbal2.updateOne(
    { 'Questions._id': questionId },
    { $pull: { Questions: { _id: questionId } } }
  );

  if (VerbalTwo.nModified > 0) {
    const updated = await Verbal2.findOne();
    return res.status(200).json({
      status: 'success',
      data: updated,
    });
  }

  const VerbalThree = await Verbal3.updateOne(
    { 'Questions._id': questionId },
    { $pull: { Questions: { _id: questionId } } }
  );

  if (VerbalThree.nModified > 0) {
    const updated = await Verbal3.findOne();
    return res.status(200).json({
      status: 'success',
      data: updated,
    });
  } else {
    return next(new AppError('Question not found', 404));
  }
});

//Create a Module
exports.createQuant1 = catchAsync(async (req, res, next) => {
  const newQuant1 = await Quant4.create(req.body);

  res.status(200).json({
    status: 'success',
    Questions: newQuant1,
  });
});

//Get module name and id
exports.getModules = catchAsync(async (req, res, next) => {
  const modules = [
    {
      moduleName: 'Quant1',
      id: '65806a9acf226c50947b05f3',
    },
    {
      moduleName: 'Quant2',
      id: '65806aa1426dda2c9c969c3b',
    },
    {
      moduleName: 'Quant3',
      id: '65806aa8289c666188f5512f',
    },
    {
      moduleName: 'Quant4',
      id: '65806aae47154e5f6c175a69',
    },
    {
      moduleName: 'Logical1',
      id: '65806a8a6cab405088369313',
    },
    {
      moduleName: 'Logical2',
      id: '65806a7f348c1821e41a40e4',
    },
    {
      moduleName: 'Logical3',
      id: '65806a762e48bf6234202e3f',
    },
    {
      moduleName: 'Verbal1',
      id: '65806a2e927e31153868ddab',
    },
    {
      moduleName: 'Verbal2',
      id: '65806a5c9f1c8121100de4a6',
    },
    {
      moduleName: 'Verbal3',
      id: '65806a650ff25c63506ae016',
    },
  ];

  return res.status(200).json({
    message: 'success',
    data: modules,
  });
});

//Get all questions Module wise
// exports.getQuestions = catchAsync(async (req, res, next) => {
//   const modules = [
//     Quant1,
//     Quant2,
//     Quant3,
//     Quant4,
//     Logical1,
//     Logical2,
//     Logical3,
//     Verbal1,
//     Verbal2,
//     Verbal3,
//   ];

//   const result = {};

//   for (let i = 0; i < modules.length; i++) {
//     const moduleData = await modules[i].find();

//     if (!moduleData || moduleData.length === 0) {
//       return next(new AppError(`No data found for Module${i + 1}`, 404));
//     }

//     result[`Module${i + 1}`] = moduleData[0].Questions;
//   }

//   return res.status(200).json({
//     status: 'success',
//     data: result,
//   });
// });

//Refactoring needed Get Questions
exports.getQuestions = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (id === '65806a9acf226c50947b05f3') {
    const Q1 = await Quant1.find();

    if (!Q1) {
      return next(new AppError('Module does not exit', 201));
    }

    res.status(200).json({
      status: 'success',
      results: Q1.length,
      data: {
        Question: Q1[0].Questions,
      },
    });
  } else if (id === '65806aa1426dda2c9c969c3b') {
    const Q2 = await Quant2.find();

    if (!Q2) {
      return next(new AppError('Module does not exit', 201));
    }

    res.status(200).json({
      status: 'success',
      results: Q2.length,
      data: {
        Question: Q2[0].Questions,
      },
    });
  } else if (id === '65806aa8289c666188f5512f') {
    const Q3 = await Quant3.find();

    if (!Q3) {
      return next(new AppError('Module does not exit', 201));
    }

    res.status(200).json({
      status: 'success',
      results: Q3.length,
      data: {
        Question: Q3[0].Questions,
      },
    });
  } else if (id === '65806aae47154e5f6c175a69') {
    const Q4 = await Quant4.find();

    if (!Q4) {
      return next(new AppError('Module does not exit', 201));
    }

    res.status(200).json({
      status: 'success',
      results: Q4.length,
      data: {
        Question: Q4[0].Questions,
      },
    });
  } else if (id === '65806a8a6cab405088369313') {
    const L1 = await Logical1.find();

    if (!L1) {
      return next(new AppError('Module does not exit', 404));
    }

    res.status(200).json({
      status: 'success',
      results: L1.length,
      data: {
        Question: L1[0].Questions,
      },
    });
  } else if (id === '65806a7f348c1821e41a40e4') {
    const L2 = await Logical2.find();

    if (!L2) {
      return next(new AppError('Module does not exit', 404));
    }

    res.status(200).json({
      status: 'success',
      results: L2.length,
      data: {
        Question: L2[0].Questions,
      },
    });
  } else if (id === '65806a762e48bf6234202e3f') {
    const L3 = await Logical3.find();

    if (!L3) {
      return next(new AppError('Module does not exit', 404));
    }

    res.status(200).json({
      status: 'success',
      results: L3.length,
      data: {
        Question: L3[0].Questions,
      },
    });
  } else if (id === '65806a2e927e31153868ddab') {
    const V1 = await Verbal1.find();
    if (!V1) {
      return next(new AppError('Cannot found', 404));
    }

    res.status(200).json({
      status: 'success',
      results: V1.length,
      data: {
        Question: V1[0].Questions,
      },
    });
  } else if (id === '65806a5c9f1c8121100de4a6') {
    const V2 = await Verbal2.find();

    if (!V2) {
      return next(new AppError('Module does not exit', 404));
    }

    res.status(200).json({
      status: 'success',
      results: V2.length,
      data: {
        Question: V2[0].Questions,
      },
    });
  } else if (id === '65806a650ff25c63506ae016') {
    const V3 = await Verbal3.find();

    if (!V3) {
      return next(new AppError('Module does not exit', 404));
    }

    res.status(200).json({
      status: 'success',
      results: V3.length,
      data: {
        Question: V3[0].Questions,
      },
    });
  }
});

// function getRandomQuestions(array, numQuestions) {
//   const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
//   return shuffledArray.slice(0, numQuestions);
// }

// exports.createContest = catchAsync(async (req, res, next) => {
//   const modules = [
//     Quant1,
//     Quant2,
//     Quant3,
//     Quant4,
//     Logical1,
//     Logical2,
//     Logical3,
//     Verbal1,
//     Verbal2,
//     Verbal3,
//   ];

//   const result = [];

//   for (let i = 0; i < modules.length; i++) {
//     const moduleData = await modules[i].find();

//     if (!moduleData || moduleData.length === 0) {
//       return next(new AppError(`No data found for Module${i + 1}`, 404));
//     }
//     const question = getRandomQuestions(
//       moduleData[0].Questions,
//       req.body.Module[i]
//     );

//     // for (let j = 0; j < question.length; j++) {
//     //   result.push(question[j]);
//     // }
//     result = result.concat(question);
//   }

//   return res.status(200).json({
//     status: 'success',
//     length: result.length,
//     data: result,
//   });
// });

function getRandomQuestions(array, numQuestions) {
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, numQuestions);
}

exports.createContest = catchAsync(async (req, res, next) => {
  const modules = [
    Quant1,
    Quant2,
    Quant3,
    Quant4,
    Logical1,
    Logical2,
    Logical3,
    Verbal1,
    Verbal2,
    Verbal3,
  ];

  let result = [];

  for (let i = 0; i < modules.length; i++) {
    const moduleData = await modules[i].find();

    if (!moduleData || moduleData.length === 0) {
      return next(new AppError(`No data found for Module${i + 1}`, 404));
    }

    const questions = getRandomQuestions(
      moduleData[0].Questions,
      req.body.Module[i]
    );

    result = result.concat(questions);
  }

  const contestData = await Contest.find();

  contestData.sort((a, b) => b.contestNumber - a.contestNumber);
  const contestNumber = contestData[0].contestNumber;
  const formattedContestNumber =
    contestNumber + 1 < 10 ? `0${contestNumber + 1}` : contestNumber + 1;

  const contest = {
    contestNumber: contestNumber + 1,
    contestName: `Aptitude - ${formattedContestNumber}`,
    questions: result,
    time: req.body.time,
    visibility: false,
  };

  const newContest = await Contest.create(contest);

  const newResult = {
    contestNumber: contestNumber + 1,
    contestName: `Aptitude - ${formattedContestNumber}`,
    Results: [],
  };

  await Result.create(newResult);

  return res.status(200).json({
    status: 'success',
    data: newContest,
  });
});

exports.deleteContest = catchAsync(async (req, res, next) => {
  const contest = await Contest.findOneAndDelete({
    contestNumber: req.params.contestNumber,
    contestName: req.params.contestName,
  });

  const result = await Result.findOneAndDelete({
    contestNumber: req.params.contestNumber,
    contestName: req.params.contestName,
  });

  return res.status(200).json({
    status: 'success',
    data: null,
  });
});
