const express = require('express');
const router = express.Router();
const {
    movcatController
} = require('../controllers');

router.get('/getlistmovcategory', movcatController.getListMovCategory);
router.post('/addmovcategory', movcatController.addMovCategory);
router.delete('/deletemovcategory', movcatController.deleteMovCategory);

module.exports = router;