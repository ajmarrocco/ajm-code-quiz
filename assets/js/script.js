// sets variables
var count = 75;

// It calls on the ids in the HTML file
var main = document.querySelector('#main');
var countEl = document.querySelector('#count');
var buttonEl = document.querySelector('#btn');
var beginningEl = document.querySelector('#beginning');
var instructionsEl = document.querySelector('#instructions');

//tells user the answer is right or wrong
var confirmEl = document.createElement("div");
//divs for questions
var divEl = document.createElement("div");
//create ordered list questions
var questionEl = document.createElement("ol");
//create list item answers for questions
var answerOneEl = document.createElement("li");
var answerTwoEl = document.createElement("li");
var answerThreeEl = document.createElement("li");
var answerFourEl = document.createElement("li");
//create buttons for answers
var buttonOneEl = document.createElement("button");
var buttonTwoEl  = document.createElement("button");
var buttonThreeEl = document.createElement("button");
var buttonFourEl = document.createElement("button");

//Creates Elements for savingScore function
var finalEl = document.createElement("h1");
var scoreMessageEl = document.createElement("p");
var initialsLabelEl = document.createElement("label");
var initialsInputEl = document.createElement("input");
var submitScoreEl = document.createElement("button");

// removes previous question and answers when going to new question
var removing = function(){
    divEl.remove();
    questionEl.remove();
    answerOneEl.remove();
    answerTwoEl.remove();
    answerThreeEl.remove();
    buttonFourEl.remove();
    buttonOneEl.remove();
    buttonTwoEl.remove();
    buttonThreeEl.remove();
    buttonFourEl.remove();
    confirmEl.remove();
}

//adds questions 
var appendingQuestions = function(){
    main.appendChild(divEl);
    divEl.appendChild(questionEl);
}

// adds answers and buttons to new question
var appendingAnswers = function(){
    questionEl.appendChild(answerOneEl);
    answerOneEl.appendChild(buttonOneEl);      
    questionEl.appendChild(answerTwoEl);
    answerTwoEl.appendChild(buttonTwoEl);
    questionEl.appendChild(answerThreeEl);
    answerThreeEl.appendChild(buttonThreeEl);      
    questionEl.appendChild(answerFourEl);
    answerFourEl.appendChild(buttonFourEl);
}

// saves the score
var savingScore = function(){
    removing();
    main.appendChild(scoreMessageEl);
    scoreMessageEl.textContent = "Your final score is " + count + ".";
    // stops timer
    clearInterval(myTimer);
    main.appendChild(initialsLabelEl);
    initialsLabelEl.textContent = "Enter Initials: ";
    main.appendChild(initialsInputEl);
    main.appendChild(submitScoreEl);
    submitScoreEl.textContent = "Submit";
}

//fifth question function
var fifthQuestion = function(){
    //append question to the main html element
    appendingQuestions();

    questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    
    //append answers to the ol question element
    appendingAnswers();

    //creates text content for answers
    buttonOneEl.textContent = "JavaScript";
    buttonTwoEl.textContent = "terminal/bash";
    buttonThreeEl.textContent = "for loops";
    buttonFourEl.textContent = "console.log";

    //sets button 1 click event
    buttonOneEl.addEventListener("click", function(){
        savingScore();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    //sets button 2 click event
    buttonTwoEl.addEventListener("click", function(){
        savingScore();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    //sets button 3 click event
    buttonThreeEl.addEventListener("click", function(){
        savingScore();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    //sets button 4 click event 
    buttonFourEl.addEventListener("click", function(){
        savingScore();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Correct!";
    });
}


var fourthQuestion = function(){
    //append question to the main html element
    appendingQuestions();

    questionEl.textContent = "String values must be enclosed within ______________ when being assigned to variables.";
    
    //append answers to the ol question element
    appendingAnswers();
    //creates text content for questions

    //creates text content for answers
    buttonOneEl.textContent = "commas";
    buttonTwoEl.textContent = "curly brackets";
    buttonThreeEl.textContent = "quotes";
    buttonFourEl.textContent = "parenthesis";

    buttonOneEl.addEventListener("click", function(){

        fifthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    buttonTwoEl.addEventListener("click", function(){
        removing();
        fifthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    buttonThreeEl.addEventListener("click", function(){
        removing();
        fifthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Correct!";
    });


    buttonFourEl.addEventListener("click", function(){
        removing();
        fifthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });
}


var thirdQuestion = function(){
    //append question to the main html element
    appendingQuestions();

    questionEl.textContent = "Arrays in JavaScript can be used to store ______________.";
    
    //append answers to the ol question element
    appendingAnswers();
    //creates text content for questions

    //creates text content for answers
    buttonOneEl.textContent = "numbers and strings";
    buttonTwoEl.textContent = "other arrays";
    buttonThreeEl.textContent = "booleans";
    buttonFourEl.textContent = "all of the above";

    buttonOneEl.addEventListener("click", function(){
        removing();
        fourthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    buttonTwoEl.addEventListener("click", function(){
        removing();
        fourthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    buttonThreeEl.addEventListener("click", function(){
        removing();
        fourthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    buttonFourEl.addEventListener("click", function(){
        removing();
        fourthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Correct!";
    });
}

var secondQuestion = function(){
    //append question to the main html element
    appendingQuestions();

    questionEl.textContent = "The condition in an if/else statement is enclosed with ______________.";
    
    //append answers to the ol question element
    appendingAnswers();
    //creates text content for questions

    //creates text content for answers
    buttonOneEl.textContent = "quotes";
    buttonTwoEl.textContent = "curly brackets";
    buttonThreeEl.textContent = "parenthesis";
    buttonFourEl.textContent = "square brackets";

    buttonOneEl.addEventListener("click", function(){
        removing();
        thirdQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    buttonTwoEl.addEventListener("click", function(){
        removing();
        thirdQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    buttonThreeEl.addEventListener("click", function(){
        removing();
        thirdQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Correct!";
    });


    buttonFourEl.addEventListener("click", function(){
        removing();
        thirdQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });
}

var firstQuestion = function(){
    //append question to the main html element
    appendingQuestions();

    questionEl.textContent = "Commonly used data types DO Not Include:";
    
    //append answers to the ol question element
    appendingAnswers();
    //creates text content for questions

    //creates text content for answers
    buttonOneEl.textContent = "strings";
    buttonTwoEl.textContent = "booleans";
    buttonThreeEl.textContent = "alerts";
    buttonFourEl.textContent = "numbers";

    buttonOneEl.addEventListener("click", function(){
        removing();
        secondQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    buttonTwoEl.addEventListener("click", function(){
        removing();
        secondQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    buttonThreeEl.addEventListener("click", function(){
        removing();
        secondQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Correct!";
    });


    buttonFourEl.addEventListener("click", function(){
        removing();
        secondQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });
}

//creates the timer function and removes beginning title and instructions
var setTimer = function(){
    //removes beginning title
    beginningEl.remove();
    //removes instructions
    instructionsEl.remove();
    //removes instructions
    buttonEl.remove();
    // calls first question
    firstQuestion();
    //creates the countdown function which decreases count by one and reassigns count to that value
    var countdown = function(){
        console.log(count);
        countEl.textContent = count;
        count--;
        //stops the timer when it reaches zero and shows alert message
        if(count === 0){
            clearInterval(myTimer);     
            savingScore();
        } 
    }
    //runs the countdown function every 1000 ms or 1s
    var myTimer = setInterval(countdown, 1000);
}

//creates function that decreases count by one

// // Set the timer when you click the "Start Quiz" button
buttonEl.addEventListener("click", function(){
    setTimer();
});