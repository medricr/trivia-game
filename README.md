# trivia-game
A timed, trivia game with a multiple choice format

# Game Description
A basic trivia game. The user will be presented with 5 questions, each of which will have three potential answers, only one of which is correct. The user will be prompted to select one of those three answers. If the user's guess is correct, it will be logged as such, and vis versa. At the end of the game, the user will be presented with their score, as a ratio, and be given a letter grade based on their preformance. 

# QUESTIONS
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

7 - 



# APP.JS VARS
    goodGuess [int] - tracks correct guesses
    badGuess [int] - tracks incorrect guesses
    qbank [array] - holds the question packages

# APP.JS OBJECTS
    qpack [object] (args: question [string], anser [array], correct index [int])- question package: contains question for the user and 4 potential answers, one of which is correct
    { 
        question (string) - the question that the user will be presented with
        answers (array) - 4 potential answers, one of which is correct 
        right_answer (int) - the index of the correct anser in the answers array  
    }

# APP.JS FUNCTIONS
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

        the user is presented with a questions

            the users choice of the available options is logged

                if correct
                    goodGuess++
                else
                    badGuess++

        do this until there are no more questions availabe

    end question loop

    present the user with their score

    offer an option for repeat
    end question loop
app end
                
