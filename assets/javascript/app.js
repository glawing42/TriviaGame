// Variable for the game 


// var questions = [{
// 	question: "	Who was the last player with at least 10 multi-homer games in a season?",
// 	choices: ["Albert Pujols", "Barry Bonds", "Babe Ruth", "Nelson Cruz"],
// 	correctAnswer: 1
// }, {
// 	question: "	Who is the only player to record more consecutive saves than the O's Zach Britton?",
// 	choices: ["Craig Kimbrel", "Eric Gagne", "Aroldis Chapman", "Kenley Jansen"],
// 	correctAnswer: 2
// }, {
// 	question: "Which pitcher hold the record for most strikeouts?",
// 	choices: ["Randy Johnson", "Steve Carlton", "Roger Clemens", "Nolan Ryan"],
// 	correctAnswer: 4
// }, {
// 	question: "who holds the record for most Home Runs?",
// 	choices: ["Barry Bonds", "Hank Aaron", "Babe Ruth", "Alex Rodriguez"],
// 	correctAnswer: 1
// }, {
// 	question: "who holds the record for most consecutibe games played at 2,632 games?",
// 	choices: ["Derek Jeter", "Miguel Tejada", "Cal Ripken Jr.", "Lou Gehrig"],
// 	correctAnswer: 3
// }, {
// 	question: "What team did Babe Ruth play for before joining the Boston Red Sox?",
// 	choices: ["Baltimore Orioles", "New York Yankees", "Boston Braves", "Cincinnati Reds"],
// 	correctAnswer: 1
// }, {
// 	question: "What team moved to D.C. to become the Washington Nationals in 2005?",
// 	choices: ["Montreal Expos", "Tokyo Giants", "Brooklyn Dodgers", "Kansas City Monarchs"],
// 	correctAnswer: 1
// }];

var questionArray =["Who was the last player with at least 10 multi-homer games in a season?",
			"	Who is the only player to record more consecutive saves than the O's Zach Britton?",
			"Which pitcher hold the record for most strikeouts?",
			"who holds the record for most Home Runs?", "who holds the record for most consecutibe games played at 2,632 games?",
			"What team did Babe Ruth play for before joining the Boston Red Sox?",
			"What team moved to D.C. to become the Washington Nationals in 2005?"];

var answerArray = [[" Albert Pujols ", " Barry Bonds ", " Babe Ruth ", " Nelson Cruz "],["Craig Kimbrel", "Eric Gagne", "Aroldis Chapman", "Kenley Jansen"],
	["Randy Johnson", "Steve Carlton", "Roger Clemens", "Nolan Ryan"], ["Barry Bonds", "Hank Aaron", "Babe Ruth", "Alex Rodriguez"],
	["Derek Jeter", "Miguel Tejada", "Cal Ripken Jr.", "Lou Gehrig"], ["Baltimore Orioles", "New York Yankees", "Boston Braves", "Cincinnati Reds"],
	["Montreal Expos", "Tokyo Giants", "Brooklyn Dodgers", "Kansas City Monarchs"]];

var correctAnswer = ["0","1","3","0","2","0","0"]


var selectedAnswer;
var correctTally =0;
var incorrectTally =0;
var unansweredTally =0;	
var timer = 15;






// Functions
// ===========================================================================================
console.log(questionArray);
console.log(answerArray);
console.log(correctAnswer);
function startGame(){

}

$(document).ready(function(){
	$('#countDown').hide();
	$('.answerchoice').hide();
    $('.startBtn').on('click', function() {
        $('button').hide('.startBtn');
       	$('#countDown').show()
       	$('.answerchoice').show();
       	$('.container').show();
       	// for(var i = 0; i<questionArray.length; i++){
       	// 	document.write("<br>" + questionArray[i]);
       	// }
       	var myTimer = setInterval(countDown, 1000)

      
      $("#question").html("<h3>" + questionArray[0] + "</h3>");
      $("#question").append("<p>" + answerArray[0] + "</p>");
      $("#question").append("<p>" + correctAnswer[0] + "</p>");
      	 if (answerArray[0] == correctAnswer[0]) {
             wins++;
     
      	
      

       if(myTimer === 1 ){
       	(newQuestion)

       }}

    console.log(questionArray[0] + answerArray[0]);
        // if (answerArray[0] == correctAnswer[0]) {
        //      wins++;
             
        // }   	


    function countDown() {
    	document.timer.field.value = timer-- + ' seconds left';
    	if(timer === 0){
    		clearInterval(myTimer);
    	}

    	}     	
        countDown();




    })


})




