// sets variables
var count = 75;
var countSubtract = 10;
var qIndex = 0;

// It calls on the ids in the HTML file
var main = document.querySelector('#main');
var countEl = document.querySelector('#count');
var buttonEl = document.querySelector('#btn');
var beginningEl = document.querySelector('#beginning');
var instructionsEl = document.querySelector('#instructions');
var clearButtonEl = document.querySelector("#clear-btn");

//set array of objects
var questions = [
    {
        question:"Commonly used data types DO Not Include:",
        answers:["strings", "booleans","alerts","numbers"],
        correct:"alerts"
    },
    {
        question:"The condition in an if/else statement is enclosed with ______________.",
        answers:["quotes","curly brackets","parenthesis","square brackets"],
        correct:"parethesis"
    },
    {
        question:"Arrays in JavaScript can be used to store ______________.",
        answers:["numbers and strings","other arrays","booleans","all of the above"],
        correct:"all of the above"
    },
    {
        question:"String values must be enclosed within ______________ when being assigned to variables.",
        answers:["commas","curly brackets","quotes","parenthesis"],
        correct:"quotes"
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers:["JavaScript","terminal/bash","for loops","console.log"],
        correct:"console.log"
    }
];

//tells user the answer is right or wrong
var confirmEl = document.createElement("div");
//divs for questions
var divEl = document.createElement("div");
//create ordered list questions
var questionEl = document.createElement("ol");
//Class names for styling in CSS
confirmEl.className = "cnfm";
divEl.className = "divdiv";
questionEl.className = "quest";
//Creates Elements for submitScore function
var finalMessageEl = document.createElement("div");
var finalEl = document.createElement("h1");
var scoreMessageEl = document.createElement("p");
var scoreContainerEl = document.createElement("div");
var initialsLabelEl = document.createElement("label");
var initialsInputEl = document.createElement("input");
var highScorePageEl = document.createElement("a");
var submitScoreEl = document.createElement("button");
//Classes Elements for submitScore function
finalMessageEl.classname = "final-msg";
finalEl.className = "all-done";
scoreMessageEl.className = "score-msg";
scoreContainerEl.className = "score-container";
initialsLabelEl.className = "init-label";
initialsInputEl.className = "init-input";
highScorePageEl.setAttribute("href", "./highscore.html");
submitScoreEl.className = "submit-btn";
//subtracts 10
var penalty = function(){ 
    this.count -= countSubtract;
}
//TO DO: displays score to user
var showScore = function(){
    var bestScore = savingScore();
    var scoreText = document.querySelector("#initials-score");

    scoreText.textContent = bestScore;   
}
//saves count to storage
var savingScore = function(){
    submitScoreEl.addEventListener("click", function(){
    localStorage.setItem(initialsInputEl.value, JSON.stringify(count));
    });

    var savedScore = localStorage.setItem(initialsInputEl.value, JSON.stringify(count));
    console.log(savedScore);

    if(savedScore === null){
        savedScore = 0;
    }

    if(this.count > count){
        localStorage.setItem(initialsInputEl.value, JSON.stringify(count));
    }

    console.log(savedScore);

    // return savedScore;
}

// submits the score
var submitScore = function(){
    //creates elements to save score
    main.appendChild(finalMessageEl);
    finalMessageEl.appendChild(finalEl);
    //shows all done message
    finalEl.textContent = "All done!";
    finalMessageEl.appendChild(scoreMessageEl);
    //shows final cout
    scoreMessageEl.textContent = "Your final score is " + count + ".";
    main.appendChild(scoreContainerEl);
    scoreContainerEl.appendChild(initialsLabelEl);
    initialsLabelEl.textContent = "Enter Initials: ";
    scoreContainerEl.appendChild(initialsInputEl);
    scoreContainerEl.appendChild(highScorePageEl);
    submitScoreEl.textContent = "Submit";
    highScorePageEl.appendChild(submitScoreEl);
    //runs saves score
    savingScore();
    // runs display score
    showScore();
}

//TO DO: Selects question
var selectQuestion = function(qIndex){
    
    //loops through object array
    for (let i = 0; i < questions.length; i++){
        //appends div and questions
        main.appendChild(divEl);
        divEl.appendChild(questionEl);
        //sets text of question with qIndex
        questionEl.textContent = questions[qIndex].question;
        //sets answers to variable
        var options = questions[qIndex].answers;
            //creates a list item and a button for every answers
            for (let j = 0; j < options.length; j++){
                //variables for answers and buttons
                var optionsEl = document.createElement("li");
                var answerBtnEl = document.createElement("button");
                //sets text for button to each index j
                answerBtnEl.textContent = options[j];
                //appends answers and buttons
                questionEl.appendChild(optionsEl);
                optionsEl.appendChild(answerBtnEl);
                //sets event listener
                answerBtnEl.addEventListener("click",function(){
                    if(options[j] === questions[qIndex].correct){
                        //shows correct message and goes to next question
                        main.appendChild(confirmEl);
                        confirmEl.textContent = "Correct!";
                        //goes to next number in index
                        qIndex++;
                        if (qIndex >= questions.length){
                            //TO DO: wants to stop count
                            submitScore();
                        }
                        selectQuestion(qIndex);
                        //shows wrong message and goes to next question
                        } else {
                        main.appendChild(confirmEl);
                        confirmEl.textContent = "Wrong!";
                        //subtracts ten to score
                        penalty();
                        //goes to next number in index                        
                        qIndex++;
                        if (qIndex >= questions.length){
                            //TO DO: wants to stop count
                            submitScore();
                        }
                        selectQuestion(qIndex);
                    }
                })
            }
    }   
}   


//creates the timer function and removes beginning title and instructions
var setTimer = function(){
    //removes beginning title
    beginningEl.remove();
    //removes instructions
    instructionsEl.remove();
    //removes instructions
    buttonEl.remove();
    //creates the countdown function which decreases count by one and reassigns count to that value
    var countdown = function(){
        countEl.textContent = count;
        count--;
        //stops the timer when it reaches zero or below zero and shows save message
        if(count <= 0){
            count = 0;
            countEl.textContent = 0;
            clearInterval(myTimer);   
            submitScore();  
        } else if (qIndex >= questions.length){
            clearInterval(myTimer);
        }
    }
    // //runs the countdown function every 1000 ms or 1s
    var myTimer = setInterval(countdown, 1000);  

    // calls first question
    selectQuestion(qIndex);
}

// Set the timer when you click the "Start Quiz" button
buttonEl.addEventListener("click", function(){
    setTimer();
});

// TO DO: clears storage
// clearButtonEl.addEventListener("click", function(){
//     localStorage.clear();
// });