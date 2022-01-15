// sets variables
var count = 75;
var countSubtract = 9;
var qIndex = 0;
var myTimer = 0;

// It calls on the ids in the HTML file
var main = document.querySelector('#main');
var countEl = document.querySelector('#count');
var buttonEl = document.querySelector('#btn');
var beginningEl = document.querySelector('#beginning');
var instructionsEl = document.querySelector('#instructions');

//set array of objects
var questions = [
    {
        question:"Commonly used data types DO Not Include:",
        answers:["strings", "booleans","alerts","numbers"],
        correct:"alerts"
    },
    {
        question:"The condition in an if/else statement is enclosed with ______________.",
        answers:["quotes","curly brackets","parentheses","square brackets"],
        correct:"parentheses"
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
//sets attribute href to highscore.html to a
highScorePageEl.setAttribute("href", "./highscore.html");
submitScoreEl.className = "submit-btn";

//subtracts 9 plus an extra 1 that is subtracted by delay of setInterval()
var penalty = function(){ 
    count -= countSubtract;
}

//saves score and links to high score page via a parent element to submit button 
var savingScore = function(){
    //event listener for click of submit button and stores key and value to storage
    submitScoreEl.addEventListener("click", function(){
        localStorage.setItem(initialsInputEl.value, JSON.stringify(count));
    });
}

// submits the score
var submitScore = function(){
    //clears timer
    clearInterval(myTimer);
    questionEl.remove();
    //sets countEl to the final value of count
    countEl.textContent = count;
    //creates elements to save score
    main.appendChild(finalMessageEl);
    finalMessageEl.appendChild(finalEl);
    //shows all done message
    finalEl.textContent = "All done!";
    finalMessageEl.appendChild(scoreMessageEl);
    //shows final count
    scoreMessageEl.textContent = "Your final score is " + count + ".";
    main.appendChild(scoreContainerEl);
    scoreContainerEl.appendChild(initialsLabelEl);
    initialsLabelEl.textContent = "Enter Initials: ";
    scoreContainerEl.appendChild(initialsInputEl);
    scoreContainerEl.appendChild(highScorePageEl);
    submitScoreEl.textContent = "Submit";
    highScorePageEl.appendChild(submitScoreEl);
    main.appendChild(confirmEl);
    //runs saves score
    savingScore();
}

//Selects question
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
                optionsEl.className = "li-style";
                answerBtnEl.className = "new-btn";
                //sets text for button to each index j
                answerBtnEl.textContent = options[j];
                //appends answers and buttons
                questionEl.appendChild(optionsEl);
                optionsEl.appendChild(answerBtnEl);
                main.appendChild(confirmEl);
                //sets event listener
                answerBtnEl.addEventListener("click",function(){
                    if(options[j] === questions[qIndex].correct){
                        //shows correct message and goes to next question
                        confirmEl.textContent = "Correct!";
                        confirmEl.className = "cnfm";
                        countEl.textContent = count;
                        //goes to next number in index
                        qIndex++;
                        if (qIndex >= questions.length){
                            //Goes to finished quiz
                            submitScore();
                        }
                        if (qIndex >= questions.length){
                            return;
                        } else{
                        selectQuestion(qIndex);
                        }
                        //shows wrong message and goes to next question
                    } else {
                        //subtracts 9 plus an extra 1 that is subtracted by delay of setInterval()
                        penalty();
                        confirmEl.textContent = "Wrong!";
                        confirmEl.className = "cnfm";
                        //goes to next number in index
                        countEl.textContent = count;                        
                        qIndex++;
                        if (qIndex >= questions.length){
                            //Goes to finished quiz
                            submitScore();
                        }
                        if (qIndex >= questions.length){
                            return;
                        } else{
                        selectQuestion(qIndex);
                        }
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
    myTimer = setInterval(countdown, 1000);  

    // calls first question
    selectQuestion(qIndex);
}

// Set the timer when you click the "Start Quiz" button
buttonEl.addEventListener("click", function(){
    setTimer();
});
