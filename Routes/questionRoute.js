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

module.exports = router;
