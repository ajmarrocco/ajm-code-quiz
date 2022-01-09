// sets variables
var count = 75;
var countSubtract = 15;

// It calls on the ids in the HTML file
var main = document.querySelector('#main');
var countEl = document.querySelector('#count');
var buttonEl = document.querySelector('#btn');
var beginningEl = document.querySelector('#beginning');
var instructionsEl = document.querySelector('#instructions');

var questions = [
    {
        question:"Commonly used data types DO Not Include:",
        answer1:"strings",
        answer2:"booleans",
        answer3:"alerts",
        answer4:"numbers",
        correct:"alerts"
    },
    {
        question:"The condition in an if/else statement is enclosed with ______________.",
        answer1:"quotes",
        answer2:"curly brackets",
        answer3:"parenthesis",
        answer4:"square brackets",
        correct:"parethesis"
    },
    {
        question:"Arrays in JavaScript can be used to store ______________.",
        answer1:"numbers and strings",
        answer2:"other arrays",
        answer3:"booleans",
        answer4:"all of the above",
        correct:"all of the above"
    },
    {
        question:"String values must be enclosed within ______________ when being assigned to variables.",
        answer1:"commas",
        answer2:"curly brackets",
        answer3:"quotes",
        answer4:"parenthesis",
        correct:"quotes"
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is: ",
        answer1:"JavaScript",
        answer2:"terminal/bash",
        answer3:"for loops",
        answer4:"console.log",
        correct:"console.log"
    }
];

console.log(questions[0].question);

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

//subtracts 15
var penalty = function(){ 
    this.count -= countSubtract;
    // console.log(count);
}

var selectQuestion = function(){

    for (let i = 0; i < questions.length; i++){
        main.appendChild(divEl);
        divEl.appendChild(questionEl);

        // debugger;
        
        var someFunc = function(index){
        questionEl.textContent = questions[i].question;

        questionEl.appendChild(answerOneEl);
        answerOneEl.appendChild(buttonOneEl);      
        questionEl.appendChild(answerTwoEl);
        answerTwoEl.appendChild(buttonTwoEl);
        questionEl.appendChild(answerThreeEl);
        answerThreeEl.appendChild(buttonThreeEl);      
        questionEl.appendChild(answerFourEl);
        answerFourEl.appendChild(buttonFourEl);

        buttonOneEl.textContent = questions[i].answer1;
        buttonTwoEl.textContent = questions[i].answer2;
        buttonThreeEl.textContent = questions[i].answer3;
        buttonFourEl.textContent = questions[i].answer4;
        console.log(questions[i].answer4);
        // debugger;
        buttonOneEl.addEventListener("click", function(){        
            if (questions[i].answer1 === questions[i].correct){
                main.appendChild(confirmEl);
                confirmEl.textContent = "Correct!";
                penalty();
            } else{
                main.appendChild(confirmEl);
                confirmEl.textContent = "Wrong!";
                penalty();
            }
        });
        buttonTwoEl.addEventListener("click", function(){        
            if (questions[i].answer2 === questions[i].correct){
                main.appendChild(confirmEl);
                confirmEl.textContent = "Correct!";
                penalty();
            } else{
                main.appendChild(confirmEl);
                confirmEl.textContent = "Wrong!";
                penalty();
            }
        });
        buttonThreeEl.addEventListener("click", function(){        
            if (questions[i].answer3 === questions[i].correct){
                main.appendChild(confirmEl);
                confirmEl.textContent = "Correct!";
                penalty();
            } else{
                main.appendChild(confirmEl);
                confirmEl.textContent = "Wrong!";
                penalty();
            }
        });
        buttonFourEl.addEventListener("click", function(){        
            if (questions[i].answer4 === questions[i].correct){
                main.appendChild(confirmEl);
                confirmEl.textContent = "Correct!";
                penalty();
            } else{
                main.appendChild(confirmEl);
                confirmEl.textContent = "Wrong!";
                penalty();
            }
        });
    }
    someFunc(i);
    }
}

// saves the score
var savingScore = function(){
    main.appendChild(initialsLabelEl);
    initialsLabelEl.textContent = "Enter Initials: ";
    main.appendChild(initialsInputEl);
    main.appendChild(submitScoreEl);
    submitScoreEl.textContent = "Submit";
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
    selectQuestion();
    //creates the countdown function which decreases count by one and reassigns count to that value
    var countdown = function(){
        // console.log(count);
        countEl.textContent = count;
        count--;
        //stops the timer when it reaches zero and shows alert message
        if(count < 0){
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