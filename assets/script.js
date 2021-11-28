var startButton = document.getElementById("start-btn");

var introEl = document.getElementById("intro");
var endGameEl = document.getElementById("end");

var playAgainEl = document.getElementById("restart-btn");
var nameEl= document.querySelector("input");

var quizEl = document.querySelector("quiz");

//questions


 var question1El = document.getElementById("q1");
 var question2El = document.getElementById("q2");
 var question3El = document.getElementById("q3");
 var question4El = document.getElementById("q4");
 var question5El = document.getElementById("q5");


//answers
var answerButtonEl = document.getElementById("btn");
var answerButton2El = document.getElementById("btn-2");
var answerButton3El = document.getElementById("btn-3");
var answerButton4El = document.getElementById("btn-4");
var answerButton5El = document.getElementById("btn-5");



var correctAnswers = document.getElementById("correct-1");
var correctAnswer2 = document.getElementById("correct-2");
var correctAnswer3 = document.getElementById("correct-3");
var correctAnswer4 = document.getElementById("correct-4");
var correctAnswer5 = document.getElementById("correct-5");
   
console.log (correctAnswers)
console.log(correctAnswer2)

var right = document.getElementById("right");


var restartEl = document.getElementById("restart-btn");
var endButtonEl = document.getElementById("end-btn");

var button = document.querySelector("btn");

var currentQuestion = 0;
var score = 0;

var totalScore = score;


var buttonHandler = function (event) {
  var buttonEl = event.target;
 
  if (buttonEl === correctAnswers || buttonEl === correctAnswer2 || buttonEl === correctAnswer3 || buttonEl === correctAnswer4 || buttonEl === correctAnswer5) {
      alert("Correct!")
      totalScore = score + 1;
  } 
  else {alert("Wrong");
  }
};



//Starting the Game
function startGame () {
introEl.classList.add("hide");
currentQuestion = currentQuestion ;
question1El.classList.remove("hide");
console.log ( currentQuestion);
totalScore = 0;
console.log("score is", score);
}


startButton.addEventListener("click",startGame);
    

function question2() {
    question1El.classList.add("hide");
    question2El.classList.remove("hide");
    currentQuestion = currentQuestion + 1;
    console.log("Question", currentQuestion);
    console.log(buttonHandler);
    totalScore
    console.log("score is", score);
}
    
    function question3() {
        question2El.classList.add("hide");
        question3El.classList.remove("hide");
        currentQuestion = currentQuestion +1;
        console.log(currentQuestion);
        console.log(buttonHandler);
        console.log(correctAnswers);
        score = totalScore;
        console.log ("score is", score);
    }
    
   function question4() {
    question3El.classList.add("hide");
    question4El.classList.remove("hide");
    currentQuestion = currentQuestion +1;
    console.log("score is", score);
   }

    function question5() {
        question4El.classList.add("hide");
        question5El.classList.remove("hide");
        currentQuestion = currentQuestionS +1;
        console.log("score is", score);
    }

function restart() {
question5El.classList.add("hide");
endGameEl.classList.remove("hide");
console.log("score is", score);
}

function playAgain () {
    endGameEl.classList.add("hide")
    question1El.classList.remove("hide");

}

    playAgainEl.addEventListener("click", playAgain);


function endGame() {
    alert("Goodbye!");
    endGameEl.classList.add("hide");
}

endButtonEl.addEventListener("click", endGame);




    answerButtonEl.addEventListener("click", question2);
    answerButton2El.addEventListener("click", question3);
    answerButton3El.addEventListener("click", question4);
    answerButton4El.addEventListener("click", question5);
    answerButton5El.addEventListener("click", restart);

    question1El.addEventListener("click", buttonHandler);
    question2El.addEventListener("click", buttonHandler);
    question3El.addEventListener("click", buttonHandler);
    question4El.addEventListener("click", buttonHandler);
    question5El.addEventListener("click", buttonHandler);

    
    

    











