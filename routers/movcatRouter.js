const express = require('express');
const router = express.Router();
const {
    movcatController
} = require('../controllers');

router.get('/getlistmovcategory', movcatController.getListMoviCategory);
router.post('/addmovcategory', movcatController.addMoviCategory);
router.delete('/deletemovcategory', movcatController.deleteMoviCategory);

module.exports = router;