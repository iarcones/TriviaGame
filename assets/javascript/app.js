// VARIABLES

    var corrects = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timeCount = 9;
    var index = 0;
    var lastquestion = false;
    var crono;

var questions =[
    {question:"What superhero was born with the Curse of Kordax?",
    answers:["Aquaman", "Superman", "Hawkman", "Captain Marvel"],
    correctAnswer:"Aquaman",
    
},{
    question:"What is Superman's real name?",
    answers:["Clark Kent", "Peter Parker", "Bruce Wayne", "Kal-El"],
    correctAnswer:"Kal-El"
},{
    question:"What is the name of the Green Arrow's apprentice?",
    answers:["Blue Arrow", "Speedy", "Quick Arrow", "Slick"],
    correctAnswer:"Speedy"
},{
    question:"Who is the Oracle in the DC Universe?",
    answers:["The Riddler", "Barbara Gordon", "Lois Lane", "Jimmy Olsen"],
    correctAnswer:"Barbara Gordon"
},{
    question:"What is the name of the original Flash?",
    answers:["Barry Allen", "Bart Allen", "Wally West", "Jay Garrick"],
    correctAnswer:"Jay Garrick"
}]

$("#start").on("click", function () {

    $("#start").attr({style: "visibility: hidden;"});
    $(".areagame").attr({style: "visibility: visible;"});
    $("#title").attr({style: "visibility: visible;"});
    startTimer();
    showQuestion();
    
});




function showQuestion() {

    $("#question").html("<h2>" + questions[index].question + "</h2>");
   
    $("#answers").empty();

    for (j = 0; j < questions[index].answers.length; j++) {
        optionBtn = $("<button>");
        optionBtn.html(questions[index].answers[j]);
        optionBtn.addClass("clickBtn");
        optionBtn.css("color", "green");
        optionBtn.css("margin", "5px");
        optionBtn.css("font-size", "20px");
    
        optionBtn.val(j);
        $("#answers").append(optionBtn);
    }
    
    currentQuestion = questions[index];

    index++;

    $(".clickBtn").on("click", function () {
    
        stopTimer();

        var answerValue = ($(this).attr("value"));

        if (currentQuestion.answers[answerValue] === currentQuestion.correctAnswer) {
            corrects++;
            correctQuestion = 1;
            $("#message").empty();
            $("#message").html("<h2>Correct!!! Good Job 😀👍🏻</h2><br>");
            results();
        }
        else {
            incorrect++;
            correctQuestion = 2;
            $("#message").empty();
            $("#message").html("<h2>Nope!!! 👎🏼 the correct answer was: " + currentQuestion.correctAnswer + "</h2><br>");
            results();
        }
    });
};

function startTimer() {

    crono = setInterval(countDown, 1000);
}

function countDown() {

    $("#timer").html("<h3>Time Remaining: " + timeCount + " Seconds</h3>");
   
    timeCount--;

    if (timeCount < 0) {
        stopTimer();
        unanswered++;
        $("#message").html("<h2>Out of time 🥵🥺 . The correct answer is: " + currentQuestion.correctAnswer + "</h2>");
        results();
 
    }
}

function stopTimer() {
    clearInterval(crono);

}

function results() {
   
    setTimeout(function () {

        $("#question").empty();
        $("#answer").empty();

        timeCount = 9;
      
        if (index === questions.length) {
            gameOver();
            
        } else {
            $("#message").html("<h3>Let's go for the next one :-)</h3>");
            startTimer();
            showQuestion();
        }
    }, 1000);


}

function gameOver(){
    $("#question").empty();
    $("#answers").empty();
    $("#question").attr({style: "visibility: hidden;"});
    $("#answers").attr({style: "visibility: hidden;"});
    $("#message").empty();
    $("#message").html("<h3>All done, here's how you did! </h3><br>");

    $("#results").append("<h2> Correct Answers: " + corrects + "</h2><br>");
    $("#results").append("<h2> Incorrect Answers: " + incorrect + "</h2><br>");
    $("#results").append("<h2> Unanswered: " + unanswered + "</h2><br>");

    $("#restart").attr({style: "visibility: visible;"});

}

$("#restart").on("click", function () {

    $("#message").empty();
    $("#results").empty();
    $("#question").attr({style: "visibility: visible;"});
    $("#answers").attr({style: "visibility: visible;"});
    corrects = 0;
    incorrect = 0;
    unanswered = 0;
    timeCount = 9;
    index = 0;
    lastquestion = false;
    crono;
    
    $("#restart").attr({style: "visibility: hidden;"});
    startTimer();
    showQuestion();
    
});