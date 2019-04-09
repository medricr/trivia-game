// Variables for tracking user preformance
var goodGuess = 0;
var badGuess = 0;
var qbank = [];
var intervalId;
var time;
// Boolean variables for running the game
var answered = false;
var clockRunning = false;



// Qpack object, which will hold a question, and its answers
function qpack(q, question_bank, answer_index) {

    this.question = q;
    this.answers = question_bank;
    this.right_answer = answer_index;
}

function count() {
    time--;

    $(".timer").text(time);
}

// function that will prompt the user with questions and answers
function ask(question_pack) {
    time = 20;
    intervalId = setInterval(count,1000);
    clockRunning=true;
    // STEP 1: fill the question space in the html with the question from qpack
    $(".question_space").text(question_pack.question);
    // alert(this.right_answer);
    // STEP 2: create a button for each answer
    for(let i=0; i<question_pack.answers.length; i++) {
        // create a new button...
        var answerbutton = $('<button class="btn answer-btn"><span class="btn-text"></span></button>');
        // fill it with the appropriate text...
        $(answerbutton).text(question_pack.answers[i]);
        // give it an ID so that it can be referenced later
        $(answerbutton).attr("id",i);
        // and append it to the question bar in the html
        $(".qbar").append(answerbutton);
        $(".qbar").append('</br>');
    };

    // when an answer button is clicked....
    $(".answer-btn").on("click",function() {
        // grab its id and check against the right_anser variable. if true...
        if(this.id == question_pack.right_answer) {
            // alert the user
            alert("correct");
            // increment good guess
            goodGuess++;
            // and return true
            return true;
        }
        else {
            alert("incorrect");
            badGuess++;
            return false;
        }
    })

};
var ans_set_0=["medric","peter","claire","james"];
var ans_set_1=["daly city","sacramento","oakland","davis"];
var question0 = new qpack("What is my name?",ans_set_0,0);
// var question0 = new qpack("What is my name?", qbank0,0);
var question1 = new qpack("what city are we in?",ans_set_1,3)

qbank=[question0,question1];


$(document).ready(function() {
// alert(question0.right_answer);
$(".qbar").hide();
$("#start-btn").on("click",function() {

    $("#start-btn").hide();
    $(".qbar").show();
    ask(question0);
});


});
