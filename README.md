# trivia-game
A timed, trivia game with a multiple choice format

### Game Description
A basic trivia game. The user will be presented with 5 questions, each of which will have three potential answers, only one of which is correct. The user will be prompted to select one of those three answers. If the user's guess is correct, it will be logged as such, and vis versa. At the end of the game, the user will be presented with their score, as a ratio, and be given a letter grade based on their preformance. 

#### QUESTIONS
1 - What was the title of The Twilight Zone's (1959) pilot episode?

    a. Where is Everybody?
    b. Nightmare at 20,000 Feet  
    c. King Nine Will Not Return
    d. I Sing The Body Electric

2 - What is the last name of 2001: A Space Oddyssey's protagonist?

    a. Bowman
    b. Clarke
    c. Banner
    d. McElroy

3 - Octavia Butler's anthology "Lillith's Brood" does not contain which of the following books?

    a. Dawn
    b. Fledgeling
    c. Adulthood Rites
    d. Imago

4 - Which of the following Ray Bradbury novels was recently turned into an HBO miniseries starring Michael B. Jordan?

    a. Farenheit 451
    b. Martian Chronicles
    c. The Illustrated Man
    d. Something Wicked This Way Comes

5 - Before writing "The Sparrow" in 1996, Mary Doria Russell had earned a PHD in :

    a. Biological Anthropology
    b. Mechanical Engineering
    c. Music Theory
    d. Dentistry

6 - Which of the following radio plays caused widespread panic upon its release?

    a. War of the Worlds
    b. The Day The Earth Stood Still
    c. Time Machine
    d. King Kong

7 - This classic science fiction series is often miscredited as having broadcast the first interracial kiss on US telivision

    a. Star Trek
    b. The Twilight Zone
    c. The Outer Limits
    d. The Six Million Dollar Man

8 - Which of the following authors is often credited with writing the "first" science fiction novel?

    a. Mary Shelley
    b. H.G. Wells
    c. Victor Hugo
    d. H.P. Lovecraft

# NOTES
    > 4.8.19 - Need more functions, cant assign timer tasks to ask(). Should include seperate functions to
        - start/stop timer
        - create question_form div
        - add/remove question_form div from question_bar
        - display result screen with timeout
        - direct gameplay
            {
                populate board with first element in question bank
                start timer
                get answer
                    respond
                wipe board
                if question_bank[0] == null
                    endgame screen
                else
                    dequeue question bank
            }  

# APP.JS VARS
    goodGuess [int] - tracks correct guesses
    badGuess [int] - tracks incorrect guesses
    qbank [array] - holds the question packages
    intervalId [int] - id value of the timer that is set
    time [int] - holds the number of seconds left on the clock
    anwered [bool] - tracks whether or not the user has answerd a question, and dictates when the timer starts and stops
    correct [bool] - tracks whether or not the users guess was correct
    clock_running [bool] - tracks whether or not the clock us running

# APP.JS OBJECTS
    qpack [object] (args: question [string], anser [array], correct index [int])- question package: contains question for the user and 4 potential answers, one of which is correct
    { 
        question (string) - the question that the user will be presented with
        answers (array) - 4 potential answers, one of which is correct 
        right_answer (int) - the index of the correct anser in the answers array  
    }

# APP.JS FUNCTIONS
    start() {starts timer}
    
    stop() {stops timer}

    count()
    {
        if clock is running
            subtract time
        if clock runs out
            stop clock
            set clock_running to false
    }

    create_form(args: qpack)
    {
        create new div
        assign the values of qpack to the newly created div
        return div
    }

    fill_qbar(args: div returned by create_form)
    {
        populate qbar with the div passed to this function
    }

    clear_qbar() {clear qbar}
    }

    result_screen (args: correct)
    {
        if the user guessed correct
            display appropriate screen
            timeout
            return
        else
            same as above w/ opposite case
    }

    trivia_go() {initialize & begin game}

    trivia_stop() {halt/end game}

    ask [function] (args: qpack) 
    {
        prompt next question from qbank
        display possible answers from qpack
        get user answer
            if correct
                display result screen
                log good guess
            else
                display result screen
                log bad guess
    }   

# APP.JS DESIGN/PSEUDOCODE
app start

    begin question loop
        start clock
        next question_card is constructed and presented to the player
        aks the question presented on the card
            log the users answer
                if it is correct
                    stop clock
                    log good guess
                    display appropriate result screen
                else
                    display appropriate result screen
        clear question_card
        reset clock
    if no questions remain
        end question loop
    display final score
    prompt reset
        if user chooses reset
            return to beginning of question loop
app end
                
