const express = require('express');
const router = express.Router();
const {
    moviesController
} = require('../controllers');

router.get('/getlistmovie', moviesController.getListMovie);
router.post('/addmovie', moviesController.addMovie);
router.put('/editmovie/:id', moviesController.editMovie);
router.delete('/deletemovie/:id', moviesController.deleteMovie);

module.exports = router;