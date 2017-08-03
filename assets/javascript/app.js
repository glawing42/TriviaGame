// Variable for the game 


var questions = [{
	question: "	Who was the last player with at least 10 multi-homer games in a season?",
	choices: ["Albert Pujols", "Barry Bonds", "Babe Ruth", "Nelson Cruz"],
	correctAnswer: 1
}, {
	question: "	Who is the only player to record more consecutive saves than the O's Zach Britton?",
	choices: ["Craig Kimbrel", "Eric Gagne", "Aroldis Chapman", "Kenley Jansen"],
	correctAnswer: 2
}, {
	question: "Which pitcher hold the record for most strikeouts?",
	choices: ["Randy Johnson", "Steve Carlton", "Roger Clemens", "Nolan Ryan"],
	correctAnswer: 4
}, {
	question: "who holds the record for most Home Runs?",
	choices: ["Barry Bonds", "Hank Aaron", "Babe Ruth", "Alex Rodriguez"],
	correctAnswer: 1
}, {
	question: "who holds the record for most consecutibe games played at 2,632 games?",
	choices: ["Derek Jeter", "Miguel Tejada", "Cal Ripken Jr.", "Lou Gehrig"],
	correctAnswer: 3
}, {
	question: "What team did Babe Ruth play for before joining the Boston Red Sox?",
	choices: ["Baltimore Orioles", "New York Yankees", "Boston Braves", "Cincinnati Reds"],
	correctAnswer: 1
}, {
	question: "What team moved to D.C. to become the Washington Nationals in 2005?",
	choices: ["Montreal Expos", "Tokyo Giants", "Brooklyn Dodgers", "Kansas City Monarchs"],
	correctAnswer: 1
}];

// var questions = [{
// 	q1: "	Who was the last player with at least 10 multi-homer games in a season?",
// 	q2: "	Who is the only player to record more consecutive saves than the O's Zach Britton?",
// 	q3: "Which pitcher hold the record for most strikeouts?",
// 	q4: "who holds the record for most Home Runs?",
// 	q5: "who holds the record for most consecutibe games played at 2,632 games?",
// 	q6: "What team did Babe Ruth play for before joining the Boston Red Sox?",
// 	q7: "What team moved to D.C. to become the Washington Nationals in 2005?",
// 	}];
	
var score = 0;
var questionIndex = 0;	
var correctAnswer ;
var wrongAnswer ;
var intervalId ;
var timer = 15;






// Functions
// ===========================================================================================
console.log(questions);
// function startGame(){

// }

// function gamePlay(){
// 	$('.startBtn').on('click', function(){
// 		$('button').remove('.startBtn');
// 		displayQuestions(question[0].question[0]);
// 		

// 	});
function countDown(){
	document.timer.field.value = timer -- + 'seconds left';
	if (timer !=-1)
		setTimeout('countDown()', 1000);
	else
		alert('you lose');	 
}
countDown();


// }
