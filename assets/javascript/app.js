// Variables for tracking user preformance
var correct_guesses = 0;
var incorrect_guesses = 0;
// Boolean variables for running the game
// var answered = false;
var clock_running = false;
var question_bank;
var intervalId;
var time = 20;
var answer_array = [];
// function that will count down the timer as it is running
function count() {
    if (clock_running) {
        time--;
        $(".timer").text(time);
    }
    if (time == 0) { stop(); }
}
// function that will start the timer counting at 20
function start() {
    time = 21;
    intervalId = setInterval(count, 1000);
    clock_running = true;
}
// function that will stop the clock from running
function stop() {
    clearInterval(intervalId);
    clock_running = false;
}
// function that will shuffle array (Durstenfeld Shuffle: Found on Stackoverflow, provided by Laurens Holst)
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
// function that will create the question/answer card
function create_card(question_pack) {
    // STEP 1: fill the question space in the html with the question from qpack
    $(".question_space").html(question_pack.question);
    // STEP 2: create a button for each answer
    answer_array = question_pack.incorrect_answers;
    answer_array.push(question_pack.correct_answer);
    shuffle(answer_array);
    for (let i = 0; i < answer_array.length; i++) {
        // create a new button...
        var answerbutton = $('<button class="btn answer-btn"><span class="btn-text"></span></button>');
        // fill it with the appropriate text...
        $(answerbutton).html(answer_array[i]);
        // give it an ID so that it can be referenced later
        $(answerbutton).attr("id", i);
        // and append it to the question bar in the html
        $(".answer_space").append(answerbutton);
        $(".answer_space").append('</br>');
    };

}
function result_card(good_guess)
// function that will prompt the user with questions and answers
function ask(question_pack) {
    start();
    // when an answer button is clicked....
    $(".answer-btn").on("click", function () {
        // grab its id and check against the right_anser variable. if true...
        if ($(this).text() == question_pack.correct_answer) {
            stop();
            // increment good guess
            correct_guesses++;
            // dequeue qbank
            question_bank.shift();
            // switch answered to true
            answered = true;
            // if qbank still has elements in it
            if (question_bank[0] != null) { 
                $(".answer_space").empty();
                create_card(question_bank[0]);
                ask(question_bank[0]);
            }
            return;
        }
        else {
            stop();
            alert("incorrect");
            incorrect_guesses++;
            answered = true;
            return;
        }
    })
};
// program is ready to fire  
$(document).ready(function () {
    $(".qbar").hide();
    $.ajax({
        url: "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple",
        method: "GET"
    }).then(function(response) {
        question_bank = response.results;
        // when the user clicks the start button...
        $("#start-btn").on("click", function () {
        // hide it...
        $("#start-btn").hide();
        // reveal the question bar
        $(".qbar").show();
    });
    create_card(question_bank[0]);
    ask(question_bank[0]); 
    })
});