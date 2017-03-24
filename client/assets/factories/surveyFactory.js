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

  factory.votes1 = function(id, callback){
    $http.put('/votes1/' + id, survey).then(callback)
  }
	factory.votes2 = function(id, callback){
    $http.put('/votes2/' + id, survey).then(callback)
  }
	factory.votes3 = function(id, callback){
    $http.put('/votes3/' + id, survey).then(callback)
  }
	factory.votes4 = function(id, callback){
    $http.put('/votes4/' + id, survey).then(callback)
  }

	factory.delete = function(id, callback){
		$http.delete('/surveys/' + id).then(callback)
	}


	return factory
})
