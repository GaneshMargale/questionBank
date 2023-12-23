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

exports.createQuant1 = catchAsync(async (req, res, next) => {
  const newQuant1 = await Quant4.create(req.body);

  res.status(200).json({
    status: 'success',
    Questions: newQuant1,
  });
});

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
