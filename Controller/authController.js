const User = require('../Model/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.signup = catchAsync(async (req, res, next) => {
  const users = await User.find();

  let duplicateFound = false;

  for (const user of users) {
    if (user.name === req.body.name) {
      duplicateFound = true;
      break;
    }
  }

  if (duplicateFound) {
    return next(new AppError('A user already exists', 201));
  }
  const username = req.body.currentUser;
  const password = req.body.currentPassword;

  if (!username || !password) {
    return next(new AppError('Please provide name and password', 400));
  }

  const user = await User.findOne({ username }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect name or password', 401));
  }

  const newUser = await User.create({
    name: req.body.name,
    username: req.body.username,
    admin: req.body.admin,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new AppError('Please provide name and password', 400));
  }

  const user = await User.findOne({ username }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect name or password', 401));
  }

  res.status(200).json({
    status: 'success',
    message: 'Logged in successfully',
    data: {
      username: user.username,
      admin: user.admin,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const username = req.body.currentUser;
  const password = req.body.currentPassword;

  if (!username || !password) {
    return next(new AppError('Please provide name and password', 400));
  }

  const user = await User.findOne({ username }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect name or password', 401));
  }

  const deleteUser = await User.findOneAndDelete({
    username: req.body.username,
  });

  if (!deleteUser) {
    return next(new AppError('User not found', 404));
  }

  res.status(201).json({
    status: 'success',
    message: 'User deleted successfully',
  });
});
