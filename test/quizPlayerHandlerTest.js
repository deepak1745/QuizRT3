var expect = require('chai').expect,
	sinon = require('sinon'),
  request = require('supertest'),
	app = require('../app.js'),
	address = request("http://localhost:8080"),
<<<<<<< HEAD
  Quiz = require("../models/quiz"),
  Question=require("../models/question");

	var mockFindOne = {
    exec: function (callback) {
        callback(null, [{'topicId':'topic1', 'multiplier':76,
				'questions':[ {'question':'who', 'correctIndex':2,
				'image':'fhgfj','topicId':'Football-players',
				'options':'Mick Mills'}],
				'gameId':'game1'}])
			},
		populate : function(){
			return this;
		}
				//callback(null, null);
};

  var modelStub = sinon.stub(Quiz, 'findOne');


  describe.only('Find a item given the argument', function(){
       beforeEach(function(done){
         modelStub.withArgs({'gameId':'game1'}).returns(mockFindOne);
         done();
       });

     it('should attempt to find items', function(done){
       address
         .get('/quizPlayer/quizData/topic1,game1')
         //.expect('Content-Type', "text/html; charset=utf-8")
         .end(function(err, res){
           if (err) return done(err);
           //expect(res.statusCode).to.be.equal(500);
            console.log(res.body);
          // expect(res.body[0].multiplier).to.be.equal(76);
           done();
         });
=======
	Tournament = require("../models/tournament");


  describe.only('Test Tournament Handler Router', function (err) {

   it('Getting /quizPlayer/quizData/:id get function from "QUIZ PLAYER HANDLER" through App.js', function (done)
  	 {address
  		.get('/quizPlayer/quizData/')
  		.end(function(err,res) {
  		 expect(res.statusCode).to.be.equal(200);
  		 done();
  		});
>>>>>>> 350399d0edcbb7a492b83c92482acd8bcf410b0a
     });
   });
