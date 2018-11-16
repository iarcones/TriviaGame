// VARIABLES

var corrects = 0;
var incorrect = 0;
var unanswered = 0;

var questionTimer;


var questions =[
    {question:"what's your name",
    answers:["Isabel", "Sasha", "Jerome", "Jimmy"],
    correctAnswer:"Isabel",
    
},{
    question:"What is the state you are leaving",
    answers:["Colorado", "California", "Arizona", "Florida"],
    correctAnswer:"California"
},{
    question:"What the most populated state of America",
    answers:["Colorado", "California", "Arizona", "Florida"],
    correctAnswer:"Florida"
}]

console.log("questions.length: " + questions.length);

// console.log("this is the answer for question 1 : "+ answers.questions[0])

// FUNCTIONS

// for (var i=0; i < questions.length; i++){
//     console.log(questions[i])
// for (var q=0; q < answers.question1.length; q++){
//     console.log(answers.question1[q])
// for (var a=0; a < rightAnswer.length; a++){
//     console.log(rightAnswer[a])
// }
// }
// }

////////




///// TIMER 




// BODY



// Insert the contents of the unsorted array into the #start div
// document.querySelector("#start").innerText = unsortedArr.join(", ");

// Get a reference to the go button in the DOM, add a click event listener to it


var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function() {
    console.log("calling start");
    start();

});

function questionsTrivia(){ 
    console.log ("I am in questionsTrivia");

    for (var i = 0; i < questions.length; i++) {
        console.log ("I am in the for: " + i);
        var time=30;
     
        while(time > 0 || correctQuestion === 0){

            console.log ("I am in the while: " + time + " | " + correctQuestion);
           
            $("#question").text(questions[i].question);
            $("#A1").text(questions[i].answers[0]);
            $("#A2").text(questions[i].answers[1]);
            $("#A3").text(questions[i].answers[2]);
            $("#A4").text(questions[i].answers[3]);

            var correctQuestion = 0;

            intervalId = setInterval(count, 1000);
           
            var startBtn = document.querySelector(".answer");
            startBtn.addEventListener("click", function() {
                if (questions[i].answers[value] === questions[i].correctAnswer) {
                    corrects++;
                    correctQuestion = 1;
                }
                else {
                    incorrect++;
                    correctQuestion = 2;
                }
            });
            
        }
        if (time === 0 || correctQuestion === 2) {
            console.log("sorry the answer was: " + questions[i].correctAnswer);
        }
        else {
            console.log("great good answer: " + questions[i].correctAnswer);
        } 
        setTimeout(cleanAlert, 3000);
    }
}

function results() {
   
    $(".questions").attr({style: "visibility: hidden;"});
    $(".results").attr({style: "visibility: visible;"});
    $("#corrects").text(unanswered);
    $("#incorrect").text(incorrect);
    $("#unanswered").text(unanswered);
    var startOverBtn = document.querySelector("#startOver");
    startBtn.addEventListener("click", function() {
       start();
    
    });
}

function start() {

    var time=30
    $("#start").attr({style: "visibility: hidden;"});
    $(".areagame").attr({style: "visibility: visible;"});
    $(".questions").attr({style: "visibility: visible;"});
    console.log("start");
    console.log(questions[0].question);
    questionsTrivia();

}

function count() {
    time--;
    $("#timing").text(time);
  }

function cleanAlert() {
    /// clean the messages for previous question
}

// function timeRemaining() {
// var clockRunning= false;
// var time=30
// var timmer = {

    // reset: function() {
    //   time = 30;
    //   $("#display").text("00:00");
    // },
    
    // start: function() {
    //   // DONE: Use setInterval to start the count here and set the clock to running.
    //   if (!clockRunning) {
    //     intervalId = setInterval(stopwatch.count, 1000);
    //     clockRunning = true;
       
    //   }
    // },
    // stop: function() {
    //   clearInterval(intervalId);
    //   clockRunning = false;
    // },

 
 
  