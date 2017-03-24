var mongoose = require('mongoose');

var SurveySchema = mongoose.Schema({
	question: {
		type: String,
		required: [true,"Please enter a question."],
    minlength: 8
	},
  option1:{
    type: String,
    required: [true,"Please fill out Option 1."],
    minlength: 3
	},
	votes1: {
		type: Number,
		default: 0
	},
	option2:{
    type: String,
    required: [true,"Please fill out Option 1."],
    minlength: 3
	},
	votes2: {
		type: Number,
		default: 0
	},
	option3:{
    type: String,
    required: [true,"Please fill out Option 1."],
    minlength: 3
	},
	votes3: {
		type: Number,
		default: 0
	},
	option4:{
    type: String,
    required: [true,"Please fill out Option 1."],
    minlength: 3
	},
	votes4: {
		type: Number,
		default: 0
	},
	author:{
    type: String,
    required:true
  }
}, {timestamps: true});


mongoose.model('Survey', SurveySchema);
