app.controller('SurveysController',['SurveyFactory', 'UserFactory', '$location', '$routeParams', function(SurveyFactory, UserFactory,$location, $routeParams){
  var self = this

	self.errors = []
	self.surveys = []

  self.index = function(){
		SurveyFactory.index(function(res){
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else {
				self.surveys = res.data
			}
		})
	}

  self.find = function(){
		SurveyFactory.find($routeParams.id, function(survey){
      self.survey = survey.data
		})
	}

  self.create = function(newSurvey){
    newSurvey.author = UserFactory.current_user.firstname
		self.errors = []
		SurveyFactory.create(newSurvey, function(res){
			if(res.data.code && res.data.code == 11000){
				self.errors.push('The survey must be unique')
			} else
			if(res.data.errors){
				for (key in res.data.errors) {
					self.errors.push(res.data.errors[key]['message'])
				}
			} else {
				self.index()
				self.newSurvey = {}
				self.errors = []
        $location.url('/main')
			}
		})
	}

  self.vote = function(id,vote_id){
    SurveyFactory.vote(id,vote_id, function(res){
      self.find();
    });
  }


  self.delete = function(id){
		SurveyFactory.delete(id, function(res){
			self.index()
		})
	}

  // self.find();
}]);
