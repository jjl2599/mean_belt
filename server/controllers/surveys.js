var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
var User = mongoose.model('User');

module.exports = {

  index: function(req,res){
    Survey.find({}).populate('_user').exec(function(err,doc){
      if(err){
        return res.json(err)
      }
      return res.json(doc);
    })
  },

  find: function(req,res){
    Survey.findById(req.params.id, function(err,survey){
      if(err){
        return res.json(err)
      }
      else{
        return res.json(survey)
      }
    })
  },

  create: function(req, res){
    var survey = new Survey(req.body);
    survey.save(function(err,doc){
      if(err){
        return res.json(err);
      }
      User.findById(req.body._user, function(err, user){
        if(err){
          return res.json(err);
        }
        if(user){
          user.surveys.push(survey);
          user.save(function(err){
            if(err){
              return res.json(err);
            }
            return res.json(doc);
          })
        }
      })
    })
  },

  votes1: function(req,res){
    Survey.findOne(req.params.id, function(err, survey){
      if(err){
        return res.json(err);
      }
      else {
        survey.votes1++;
        survey.save(function(err){
          if(err){
            console.log('vote not counted');
          }
          else {
            return res.json(survey);
          }
        });
      }
    });
  },

  votes2: function(req,res){
    Survey.findOne(req.params.id, function(err, survey){
      if(err){
        return res.json(err);
      }
      else {
        survey.votes2++;
        survey.save(function(err){
          if(err){
            console.log('vote not counted');
          }
          else {
            return res.json(survey);
          }
        });
      }
    });
  },
  votes3: function(req,res){
    Survey.findOne(req.params.id, function(err, survey){
      if(err){
        return res.json(err);
      }
      else {
        survey.votes3++;
        survey.save(function(err){
          if(err){
            console.log('vote not counted');
          }
          else {
            return res.json(survey);
          }
        });
      }
    });
  },
  votes4: function(req,res){
    Survey.findOne(req.params.id, function(err, survey){
      if(err){
        return res.json(err);
      }
      else {
        survey.votes4++;
        survey.save(function(err){
          if(err){
            console.log('vote not counted');
          }
          else {
            return res.json(survey);
          }
        });
      }
    });
  },

  delete: function(req,res){
    Order.findByIdAndRemove(req.params.id).exec(function(err,doc){
      if(err){
        return res.json(err);
      }
      return res.json(doc);
    })
  }

}
