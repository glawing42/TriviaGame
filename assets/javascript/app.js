$('#start').on("click", function(){
    $('#start').remove();
    game.loadQuestion();
})

$(document).on("click", ".answer-button", function(e){
  game.clicked(e);
})

$(document).on("click", "#reset", function(){
  game.reset();
})


// Variable for the game 


var questions = [{
	question: "	Who was the last player with at least 10 multi-homer games in a season?",
	answers: ["Albert Pujols", "Barry Bonds", "Babe Ruth", "Nelson Cruz"],
	correctAnswer: "Albert Pujols",
}, {
	question: "	Who is the only player to record more consecutive saves than the O's Zach Britton?",
	answers: ["Craig Kimbrel", "Eric Gagne", "Aroldis Chapman", "Kenley Jansen"],
	correctAnswer: "Eric Gagne",
}, {
	question: "Which pitcher hold the record for most strikeouts?",
	answers: ["Randy Johnson", "Steve Carlton", "Roger Clemens", "Nolan Ryan"],
	correctAnswer: "Nolan Ryan",
}, {
	question: "who holds the record for most Home Runs?",
	answers: ["Barry Bonds", "Hank Aaron", "Babe Ruth", "Alex Rodriguez"],
	correctAnswer: "Barry Bonds",
}, {
	question: "who holds the record for most consecutibe games played at 2,632 games?",
	answers: ["Derek Jeter", "Miguel Tejada", "Cal Ripken Jr.", "Lou Gehrig"],
	correctAnswer: "Cal Ripken Jr.",
}, {
	question: "What team did Babe Ruth play for before joining the Boston Red Sox?",
	answers: ["Baltimore Orioles", "New York Yankees", "Boston Braves", "Cincinnati Reds"],
	correctAnswer: "Baltimore Orioles",
}, {
	question: "What team moved to D.C. to become the Washington Nationals in 2005?",
	answers: ["Montreal Expos", "Tokyo Giants", "Brooklyn Dodgers", "Kansas City Monarchs"],
	correctAnswer: "Montreal Expos",
}];

var game = {
  questions:questions,
  currentQuestion:0,
  counter:300000,
  correct:0,
  incorrect:0,
  unanswered:0,
  countdown: function(){
    game.counter --;
    $("#counter").html(game.counter);
    if(game.counter<=0){
      console.log("time up!")
      game.timeUp();
    }


  },
  loadQuestion: function(){
    timer = setInterval(game.countdown, 1000);
    $("#subwrapper").html("<h2> TIME REMAINING <span id = 'counter'> 30 </span> Seconds </h2>");
    $("#subwrapper").append("<h2>" + questions[game.currentQuestion].question + "</h2>");
      for(var i = 0; i< questions[game.currentQuestion].answers.length; i++){
        $("#subwrapper").append('<button class = "answer-button" id = "button- '+i+ '" data-name="' + questions[game.currentQuestion].
              answers[i]+ '">' + questions[game.currentQuestion].answers[i]+ '</button');
      }

  },
  nextQuestion: function(){
    game.counter= 30;
    $("#counter").html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();

  },
  timeUp:function(){
    clearInterval(timer);
    game.unanswered++;
    $("#subwrapper").html("<h2> OUT OF TIME!</h2>");
    $("#subwrapper").append("<h3> The Correct Answer Was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    if(game.currentQuestion == questions.length- 1){
      setTimeout(game.results,3*1000);
    }else{
      setTimeout(game.nextQuestion,3*1000);
    }

  },
  results:function(){
    clearInterval(timer);
    $("#subwrapper").html("<h2>All Done</h2>");
    $("#subwrapper").append("<h3>Correct:" + game.correct + "</h3>");
    $("#subwrapper").append("<h3>Incorrect:" + game.incorrect + "</h3>");
    $("#subwrapper").append("<h3>Unanswered:" + game.unanswered + "</h3>");
    $("#subwrapper").append("<button id = 'reset'> RESET </button>")

  },
  clicked: function(e){
    clearInterval(timer);
    if($(e.target).data("name")==questions[game.currentQuestion].
      correctAnswer){
      game.answeredCorrectly();
  } else{
    game.answeredIncorrectly();
    }
  },
  answeredCorrectly:  function(){
    console.log("right")
    clearInterval(timer);
    game.correct++;
    $("#subwrapper").html("<h2>You Got It Right. Base Hit!!</h2>");
    if(game.currentQuestion == questions.length- 1){
      setTimeout(game.results,3*1000);
    }else{
      setTimeout(game.nextQuestion,3*1000);
    }

  },
  answeredIncorrectly: function(){
    console.log("wrong")
    clearInterval(timer);
    game.incorrect++;
    $("#subwrapper").html("<h2>WRONG STRIKEOUT!!</h2>");
    $("#subwrapper").append("<h3> The Correct Answer Was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    if(game.currentQuestion == questions.length- 1){
      setTimeout(game.results,3*1000);
    }else{
      setTimeout(game.nextQuestion,3*1000);
    }

  },
  reset: function(){
    game.currentQuestion =0;
    game.counter =0;
    game.correct=0;
    game.incorrect=0;
    game.unanswered=0;
    game.loadQuestion();
  }
}