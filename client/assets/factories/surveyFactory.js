app.factory('SurveyFactory', function($http){
	var factory = {}

	factory.index = function(callback){
		$http.get('/surveys').then(callback)
	}

  factory.find = function(id, callback){
    $http.get('/surveys/' + id).then(callback)
  }

	factory.create = function(newSurvey, callback){
		$http.post('/surveys', newSurvey).then(callback)
	}

  factory.vote = function(id,vote_id,callback){
    $http.patch(`/surveys/${id}/${vote_id}`).then(callback)
  }

	factory.delete = function(id, callback){
		$http.delete('/surveys/' + id).then(callback)
	}


	return factory
})
