const express = require('express');
const aptitudeController = require('../Controller/aptitudeController');

const router = express.Router();

// Route to add a question
router.route('/:id').patch(aptitudeController.updateAptitude);

// Route to delete a question
router.route('/delete/:questionId').delete(aptitudeController.deleteQuestion);

router
  .route('/')
  // Route to create Module (Not useful)
  .post(aptitudeController.createQuant1)
  //Route to get the modules with ids
  .get(aptitudeController.getModules);

//Route to get all the questions module specific
router.route('/getQuestions/:id').get(aptitudeController.getQuestions);

//Create a contest
router.route('/Contest').post(aptitudeController.createContest);

//Delete a contest
router
  .route('/deleteContest/:contestNumber/:contestName')
  .delete(aptitudeController.deleteContest);
module.exports = router;
