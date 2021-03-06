const express = require('express');
const router = require('express-promise-router')();

const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

router.route('/signup')
    .post(validateBody(schemas.authSchema ), UsersController.signUp);

router.route('/signin')
    .post(UsersController.signIn);

router.route('/secret')
    .post(UsersController.secret);

router.route('/test')
    .post(UsersController.test);
    
module.exports = router;