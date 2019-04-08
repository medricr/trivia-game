// Variables for tracking user preformance
goodGuess = 0;
badGuess = 0;
qbank = [];

// Qpack object, which will hold a question, and its answers
function qpack(q, question_bank, answer_index) {

    this.question = q;
    this.answers = question_bank;
    this.right_answer = answer_index;

}

// function that will prompt the user with questions and answers
function ask(question_pack) {
    // STEP 1: fill the question space in the html with the question from qpack
    $(".question_space").text(question_pack.question);
    // STEP 2: create a button for each answer
    for(let i=0; i<question_pack.answers.length; i++) {
        // create a new button...
        var answerbutton = $('<button class="btn btn-primary"><span class="btn-text"></span></button>');
        // fill it with the appropriate text...
        $(answerbutton).text(question_pack.answers[i]);
        // and append it to the question bar in the html
        $(".qbar").append(answerbutton);
    };

};
var ans_set_0=["medric","peter","claire","james"];
var question0 = new qpack("What is my name?",ans_set_0,0);
// var question0 = new qpack("What is my name?", qbank0,0);

$(document).ready(function() {
$("#start-btn").on("click",function() {

    ask(question0);
});


});
