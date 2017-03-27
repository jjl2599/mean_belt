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
    User.findById(req.params.id , function(err, user){
      var survey = new Survey(req.body);
      survey.save(function(err,survey){
        if(err){
          return res.json(err);
        }
        else{
          return res.json(survey);
        }
      })
    })
  },

  vote: function(req, res) {
   Survey.findById(req.params.id).exec(function(err, survey) {
     if (err) {
       return res.json(err);
     };
     if (req.params.vote_id == 1) {
       survey.option1.count++;
       survey.save(function(err,survey){
         if(err){
           return res.json(err);
         }
         else{
           return res.json(survey)
         }
       })
     } else if (req.params.vote_id == 2) {
       survey.option2.count++;
       survey.save(function(err,survey){
         if(err){
           return res.json(err);
         }
         else{
           return res.json(survey)
         }
       })
     } else if (req.params.vote_id == 3) {
     survey.option3.count++;
     survey.save(function(err,survey){
       if(err){
         return res.json(err);
       }
       else{
         return res.json(survey)
       }
     })
   } else if (req.params.vote_id == 4) {
     survey.option4.count++;
     survey.save(function(err,survey){
       if(err){
         return res.json(err);
       }
       else{
         return res.json(survey)
       }
      })
    }
   });
  },


  delete: function(req,res){
    Survey.findByIdAndRemove(req.params.id).exec(function(err,doc){
      if(err){
        return res.json(err);
      }
      return res.json(doc);
    })
  }

}
