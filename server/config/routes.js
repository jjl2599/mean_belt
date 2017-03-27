var mongoose = require('mongoose');
var Users = require('./../controllers/users.js');
var Surveys = require('./../controllers/surveys.js');

module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.get('/users/:id', Users.show);
	app.post('/sessions', Users.login);
	app.get('/surveys', Surveys.index);
	app.get('/surveys/:id', Surveys.find);
	app.post('/surveys', Surveys.create);
	app.patch('/surveys/:id/:vote_id', Surveys.vote);
	app.delete('/surveys/:id', Surveys.delete);
}
