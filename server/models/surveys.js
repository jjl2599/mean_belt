var mongoose = require('mongoose');

var SurveySchema = mongoose.Schema({
	question: {
		type: String,
		required: [true,"Please enter a question."],
    minlength: [8, "The question must be at least 8 charcters long."]
	},
	option1: {
        content: {
            type: String,
						required: [true,"Please fill out Option 1."],
				    minlength: 3
    }, count: {
        type: Number,
        default: 0
  }},
	option2: {
        content: {
            type: String,
						required: [true,"Please fill out Option 2."],
				    minlength: 3
    }, count: {
        type: Number,
        default:0
  }},
	option3: {
        content: {
            type: String,
						required: [true,"Please fill out Option 3."],
				    minlength: 3
    }, count: {
        type: Number,
        default: 0
  }},
	option4: {
        content: {
            type: String,
						required: [true,"Please fill out Option 4."],
				    minlength: 3
    }, count: {
        type: Number,
        default: 0
  }},
	author:{
    type: String,
    required: true
  }
}, {timestamps: true});


mongoose.model('Survey', SurveySchema);
