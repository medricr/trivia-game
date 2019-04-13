// Variables for tracking user preformance
var correct_guesses = 0;
var incorrect_guesses = 0;
// Boolean variables for running the game
var clock_running = false;
var good_guess = false;
var question_answered = false;
// integer variables
var intervalId;
var result_screen_id;
var time;
// array variables
var question_bank;
var answer_array;
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
    time = 5;
    intervalId = setInterval(count, 1000);
    clock_running = true;
}
// function that will stop the clock from running
function stop() {
    clearInterval(intervalId);
    clock_running = false;  
    // if the clock stopped and the user didnt answer it..
    if(!question_answered){
        // log as a strike...
        incorrect_guesses++;
        // 
        question_bank.shift();
        alert("you didnt guess");
        $(".qbar").hide();
        $(".result_card").show();
        $("#result").text("Incorrect. That's "+incorrect_guesses+" bad guesses so far, better luck next time!")
        setTimeout(function(){
            $(".qbar").show();
            $(".result_card").hide();
            if (question_bank[0] != null) { 
                // good_guess = true;
                ask();
            }
            else{
                (".qbar").hide();
                    $(".result_card").show();
                    $("#result").text("Game over! Your final score was "+ correct_guesses + " correct guesses, and "+ incorrect_guesses+ " incorrect guesses out of 10 questions");
            }
        },3000);
    }
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
// function that will prompt the user with questions and answers
function ask() {
    question_answered = false;
    $(".answer_space").empty();
    create_card(question_bank[0]);
    start();
    // when an answer button is clicked....
    $(".answer-btn").on("click", function () {
        question_answered = true;
        // grab its id and check against the right_anser variable. if true...
        if ($(this).text() == question_bank[0].correct_answer) {
            // stop the clock...
            stop();
            // increment good guess...
            correct_guesses++;
            // dequeue qbank...
            question_bank.shift();
            // switch answered to true...
            good_guess = true;
            // question_answered = true;
            $(".qbar").hide()
            $(".result_card").show();
            $("#result").text("Correct! That's "+correct_guesses+" good guesses so far, keep it up!")
            setTimeout(function(){
                $(".qbar").show();
                $(".result_card").hide();
                
                if (question_bank[0] != null) { 
                    // good_guess = true;
                    ask();
                }
                else{
                    $(".qbar").hide();
                    $(".result_card").show();
                    $("#result").text("Game over! Your final score was "+ correct_guesses + " correct guesses, and "+ incorrect_guesses+ " incorrect guesses out of 10 questions");
                }
            },3000);
        }
        else {
            stop();
            incorrect_guesses++;
            question_bank.shift();
            good_guess = false;
            // question_answered = true;
            $(".qbar").hide();
            $(".result_card").show();
            $("#result").text("Incorrect. That's "+incorrect_guesses+" bad guesses so far, better luck next time!")
            setTimeout(function(){
                $(".qbar").show();
                $(".result_card").hide();
                
                if (question_bank[0] != null) { 
                    ask();
                }
                else{
                    (".qbar").hide();
                    $(".result_card").show();
                    $("#result").text("Game over! Your final score was "+ correct_guesses + " correct guesses, and "+ incorrect_guesses+ " incorrect guesses out of 10 questions");
                }
            },3000);          
        }
    });   
};
// program is ready to fire  
$(document).ready(function () {
    $(".qbar").hide();
    $(".result_card").hide();
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple",
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
    ask(); 
    })
});