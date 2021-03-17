const express = require('express');
const routes = express.Router();
const emailController = require('./controllers/emailController')




routes.get('/sendEmail', emailController.hello);
routes.post('/sendEmail', emailController.sendEmail);


module.exports = routes;