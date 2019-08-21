const express = require('express');
const router = express.Router();
const {
    categoriesController
} = require('../controllers');

router.get('/getlistcategories', categoriesController.getListCategories)
router.post('/addcategories', categoriesController.addCategories)
router.put('/editcategories/:id', categoriesController.editCategories)
router.delete('/deletecategories/:id', categoriesController.deleteCategories)

module.exports = router;