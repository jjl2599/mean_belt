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
	app.get('/votes1/:id', Surveys.votes1);
	app.get('/votes2/:id', Surveys.votes2);
	app.get('/votes3/:id', Surveys.votes3);
	app.get('/votes4/:id', Surveys.votes4);
	app.delete('/surveys/:id', Surveys.delete);
}
