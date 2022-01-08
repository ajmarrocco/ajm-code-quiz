// sets variables
var count = 75;

// It calls on the ids in the HTML file
var main = document.querySelector('#main');
var countEl = document.querySelector('#count');
var buttonEl = document.querySelector('#btn');
var beginningEl = document.querySelector('#beginning');
var instructionsEl = document.querySelector('#instructions');

//Give All done message
var finalEl = document.createElement("h1");
var scoreMessageEl = document.createElement("p");
var initialsLabelEl = document.createElement("label");
var initialsInputEl = document.createElement("input");
var submitScoreEl = document.createElement("button");

//tells user the answer is right or wrong
var confirmEl = document.createElement("div");
//divs for questions
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");
var div4 = document.createElement("div");
var div5 = document.createElement("div");
//create ordered list questions
var q1El = document.createElement("ol");
var q2El = document.createElement("ol");
var q3El = document.createElement("ol");
var q4El = document.createElement("ol");
var q5El = document.createElement("ol");
//create list item answers for question 1
var q1AnsOne = document.createElement("li");
var q1AnsTwo = document.createElement("li");
var q1AnsThree = document.createElement("li");
var q1AnsFour = document.createElement("li");
//create button for question 1
var q1AnsOneButton = document.createElement("button");
var q1AnsTwoButton = document.createElement("button");
var q1AnsThreeButton = document.createElement("button");
var q1AnsFourButton = document.createElement("button");
//create list item answers for question 2
var q2AnsOne = document.createElement("li");
var q2AnsTwo = document.createElement("li");
var q2AnsThree = document.createElement("li");
var q2AnsFour = document.createElement("li");
//create button for question 2
var q2AnsOneButton = document.createElement("button");
var q2AnsTwoButton = document.createElement("button");
var q2AnsThreeButton = document.createElement("button");
var q2AnsFourButton = document.createElement("button");
//create list item answers for question 3
var q3AnsOne = document.createElement("li");
var q3AnsTwo = document.createElement("li");
var q3AnsThree = document.createElement("li");
var q3AnsFour = document.createElement("li");
//create button for question 3
var q3AnsOneButton = document.createElement("button");
var q3AnsTwoButton = document.createElement("button");
var q3AnsThreeButton = document.createElement("button");
var q3AnsFourButton = document.createElement("button");
//create list item answers for question 4
var q4AnsOne = document.createElement("li");
var q4AnsTwo = document.createElement("li");
var q4AnsThree = document.createElement("li");
var q4AnsFour = document.createElement("li");
//create button for question 4
var q4AnsOneButton = document.createElement("button");
var q4AnsTwoButton = document.createElement("button");
var q4AnsThreeButton = document.createElement("button");
var q4AnsFourButton = document.createElement("button");
//create list item answers for question 5
var q5AnsOne = document.createElement("li");
var q5AnsTwo = document.createElement("li");
var q5AnsThree = document.createElement("li");
var q5AnsFour = document.createElement("li");
//create button for question 5
var q5AnsOneButton = document.createElement("button");
var q5AnsTwoButton = document.createElement("button");
var q5AnsThreeButton = document.createElement("button");
var q5AnsFourButton = document.createElement("button");

var savingScore = function(){
    main.appendChild(scoreMessageEl);
    scoreMessageEl.textContent = "Your final score is " + count + ".";
    clearInterval(setTimer);
    main.appendChild(initialsLabelEl);
    initialsLabelEl.textContent = "Enter Initials: ";
    main.appendChild(initialsInputEl);
    main.appendChild(submitScoreEl);
    submitScoreEl.textContent = "Submit";
}

var fifthQuestion = function(){
    //append question to the main html element
    main.appendChild(div5);
    div5.appendChild(q5El);

    q5El.textContent = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    
    //append answers to the ol question element
    q5El.appendChild(q5AnsOne);
    q5AnsOne.appendChild(q5AnsOneButton);      
    q5El.appendChild(q5AnsTwo);
    q5AnsTwo.appendChild(q5AnsTwoButton);
    q5El.appendChild(q5AnsThree);
    q5AnsThree.appendChild(q5AnsThreeButton);      
    q5El.appendChild(q5AnsFour);
    q5AnsFour.appendChild(q5AnsFourButton);
    //creates text content for questions

    //creates text content for answers
    q5AnsOneButton.textContent = "JavaScript";
    q5AnsTwoButton.textContent = "terminal/bash";
    q5AnsThreeButton.textContent = "for loops";
    q5AnsFourButton.textContent = "console.log";

    q5AnsOneButton.addEventListener("click", function(){
        div5.remove();
        q5El.remove();
        q5AnsOne.remove();
        q5AnsTwo.remove();
        q5AnsThree.remove();
        q5AnsFour.remove();
        q5AnsOneButton.remove();
        q5AnsTwoButton.remove();
        q5AnsThreeButton.remove();
        q5AnsFourButton.remove();
        confirmEl.remove();
        savingScore();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    q5AnsTwoButton.addEventListener("click", function(){
        div5.remove();
        q5El.remove();
        q5AnsOne.remove();
        q5AnsTwo.remove();
        q5AnsThree.remove();
        q5AnsFour.remove();
        q5AnsOneButton.remove();
        q5AnsTwoButton.remove();
        q5AnsThreeButton.remove();
        q5AnsFourButton.remove();
        confirmEl.remove();
        savingScore();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    q5AnsThreeButton.addEventListener("click", function(){
        div5.remove();
        q5El.remove();
        q5AnsOne.remove();
        q5AnsTwo.remove();
        q5AnsThree.remove();
        q5AnsFour.remove();
        q5AnsOneButton.remove();
        q5AnsTwoButton.remove();
        q5AnsThreeButton.remove();
        q5AnsFourButton.remove();
        confirmEl.remove();
        savingScore();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    q5AnsFourButton.addEventListener("click", function(){
        div5.remove();
        q5El.remove();
        q5AnsOne.remove();
        q5AnsTwo.remove();
        q5AnsThree.remove();
        q5AnsFour.remove();
        q5AnsOneButton.remove();
        q5AnsTwoButton.remove();
        q5AnsThreeButton.remove();
        q5AnsFourButton.remove();
        confirmEl.remove();
        savingScore();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Correct!";
    });
}


var fourthQuestion = function(){
    //append question to the main html element
    main.appendChild(div4);
    div4.appendChild(q4El);

    q4El.textContent = "String values must be enclosed within ______________ when being assigned to variables.";
    
    //append answers to the ol question element
    q4El.appendChild(q4AnsOne);
    q4AnsOne.appendChild(q4AnsOneButton);      
    q4El.appendChild(q4AnsTwo);
    q4AnsTwo.appendChild(q4AnsTwoButton);
    q4El.appendChild(q4AnsThree);
    q4AnsThree.appendChild(q4AnsThreeButton);      
    q4El.appendChild(q4AnsFour);
    q4AnsFour.appendChild(q4AnsFourButton);
    //creates text content for questions

    //creates text content for answers
    q4AnsOneButton.textContent = "commas";
    q4AnsTwoButton.textContent = "curly brackets";
    q4AnsThreeButton.textContent = "quotes";
    q4AnsFourButton.textContent = "parenthesis";

    q4AnsOneButton.addEventListener("click", function(){
        div4.remove();
        q4El.remove();
        q4AnsOne.remove();
        q4AnsTwo.remove();
        q4AnsThree.remove();
        q4AnsFour.remove();
        q4AnsOneButton.remove();
        q4AnsTwoButton.remove();
        q4AnsThreeButton.remove();
        q4AnsFourButton.remove();
        confirmEl.remove();
        fifthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    q4AnsTwoButton.addEventListener("click", function(){
        div4.remove();
        q4El.remove();
        q4AnsOne.remove();
        q4AnsTwo.remove();
        q4AnsThree.remove();
        q4AnsFour.remove();
        q4AnsOneButton.remove();
        q4AnsTwoButton.remove();
        q4AnsThreeButton.remove();
        q4AnsFourButton.remove();
        confirmEl.remove();
        fifthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    q4AnsThreeButton.addEventListener("click", function(){
        div4.remove();
        q4El.remove();
        q4AnsOne.remove();
        q4AnsTwo.remove();
        q4AnsThree.remove();
        q4AnsFour.remove();
        q4AnsOneButton.remove();
        q4AnsTwoButton.remove();
        q4AnsThreeButton.remove();
        q4AnsFourButton.remove();
        confirmEl.remove();
        fifthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Correct!";
    });


    q4AnsFourButton.addEventListener("click", function(){
        div4.remove();
        q4El.remove();
        q4AnsOne.remove();
        q4AnsTwo.remove();
        q4AnsThree.remove();
        q4AnsFour.remove();
        q4AnsOneButton.remove();
        q4AnsTwoButton.remove();
        q4AnsThreeButton.remove();
        q4AnsFourButton.remove();
        confirmEl.remove();
        fifthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });
}


var thirdQuestion = function(){
    //append question to the main html element
    main.appendChild(div3);
    div3.appendChild(q3El);

    q3El.textContent = "Arrays in JavaScript can be used to store ______________.";
    
    //append answers to the ol question element
    q3El.appendChild(q3AnsOne);
    q3AnsOne.appendChild(q3AnsOneButton);      
    q3El.appendChild(q3AnsTwo);
    q3AnsTwo.appendChild(q3AnsTwoButton);
    q3El.appendChild(q3AnsThree);
    q3AnsThree.appendChild(q3AnsThreeButton);      
    q3El.appendChild(q3AnsFour);
    q3AnsFour.appendChild(q3AnsFourButton);
    //creates text content for questions

    //creates text content for answers
    q3AnsOneButton.textContent = "numbers and strings";
    q3AnsTwoButton.textContent = "other arrays";
    q3AnsThreeButton.textContent = "booleans";
    q3AnsFourButton.textContent = "all of the above";

    q3AnsOneButton.addEventListener("click", function(){
        div3.remove();
        q3El.remove();
        q3AnsOne.remove();
        q3AnsTwo.remove();
        q3AnsThree.remove();
        q3AnsFour.remove();
        q3AnsOneButton.remove();
        q3AnsTwoButton.remove();
        q3AnsThreeButton.remove();
        q3AnsFourButton.remove();
        confirmEl.remove();
        fourthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    q3AnsTwoButton.addEventListener("click", function(){
        div3.remove();
        q3El.remove();
        q3AnsOne.remove();
        q3AnsTwo.remove();
        q3AnsThree.remove();
        q3AnsFour.remove();
        q3AnsOneButton.remove();
        q3AnsTwoButton.remove();
        q3AnsThreeButton.remove();
        q3AnsFourButton.remove();
        confirmEl.remove();
        fourthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    q3AnsThreeButton.addEventListener("click", function(){
        div3.remove();
        q3El.remove();
        q3AnsOne.remove();
        q3AnsTwo.remove();
        q3AnsThree.remove();
        q3AnsFour.remove();
        q3AnsOneButton.remove();
        q3AnsTwoButton.remove();
        q3AnsThreeButton.remove();
        q3AnsFourButton.remove();
        confirmEl.remove();
        fourthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    q3AnsFourButton.addEventListener("click", function(){
        div3.remove();
        q3El.remove();
        q3AnsOne.remove();
        q3AnsTwo.remove();
        q3AnsThree.remove();
        q3AnsFour.remove();
        q3AnsOneButton.remove();
        q3AnsTwoButton.remove();
        q3AnsThreeButton.remove();
        q3AnsFourButton.remove();
        confirmEl.remove();
        fourthQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Correct!";
    });
}

var secondQuestion = function(){
    //append question to the main html element
    main.appendChild(div2);
    div2.appendChild(q2El);

    q2El.textContent = "The condition in an if/else statement is enclosed with ______________.";
    
    //append answers to the ol question element
    q2El.appendChild(q2AnsOne);
    q2AnsOne.appendChild(q2AnsOneButton);      
    q2El.appendChild(q2AnsTwo);
    q2AnsTwo.appendChild(q2AnsTwoButton);
    q2El.appendChild(q2AnsThree);
    q2AnsThree.appendChild(q2AnsThreeButton);      
    q2El.appendChild(q2AnsFour);
    q2AnsFour.appendChild(q2AnsFourButton);
    //creates text content for questions

    //creates text content for answers
    q2AnsOneButton.textContent = "quotes";
    q2AnsTwoButton.textContent = "curly brackets";
    q2AnsThreeButton.textContent = "parenthesis";
    q2AnsFourButton.textContent = "square brackets";

    q2AnsOneButton.addEventListener("click", function(){
        div2.remove();
        q2El.remove();
        q2AnsOne.remove();
        q2AnsTwo.remove();
        q2AnsThree.remove();
        q2AnsFour.remove();
        q2AnsOneButton.remove();
        q2AnsTwoButton.remove();
        q2AnsThreeButton.remove();
        q2AnsFourButton.remove();
        confirmEl.remove();
        thirdQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    q2AnsTwoButton.addEventListener("click", function(){
        div2.remove();
        q2El.remove();
        q2AnsOne.remove();
        q2AnsTwo.remove();
        q2AnsThree.remove();
        q2AnsFour.remove();
        q2AnsOneButton.remove();
        q2AnsTwoButton.remove();
        q2AnsThreeButton.remove();
        q2AnsFourButton.remove();
        confirmEl.remove();
        thirdQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    q2AnsThreeButton.addEventListener("click", function(){
        div2.remove();
        q2El.remove();
        q2AnsOne.remove();
        q2AnsTwo.remove();
        q2AnsThree.remove();
        q2AnsFour.remove();
        q2AnsOneButton.remove();
        q2AnsTwoButton.remove();
        q2AnsThreeButton.remove();
        q2AnsFourButton.remove();
        confirmEl.remove();
        thirdQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Correct!";
    });


    q2AnsFourButton.addEventListener("click", function(){
        div2.remove();
        q2El.remove();
        q2AnsOne.remove();
        q2AnsTwo.remove();
        q2AnsThree.remove();
        q2AnsFour.remove();
        q2AnsOneButton.remove();
        q2AnsTwoButton.remove();
        q2AnsThreeButton.remove();
        q2AnsFourButton.remove();
        confirmEl.remove();
        thirdQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });
}

var firstQuestion = function(){
    //append question to the main html element
    main.appendChild(div1);
    div1.appendChild(q1El);

    q1El.textContent = "Commonly used data types DO Not Include:";
    
    //append answers to the ol question element
    q1El.appendChild(q1AnsOne);
    q1AnsOne.appendChild(q1AnsOneButton);      
    q1El.appendChild(q1AnsTwo);
    q1AnsTwo.appendChild(q1AnsTwoButton);
    q1El.appendChild(q1AnsThree);
    q1AnsThree.appendChild(q1AnsThreeButton);      
    q1El.appendChild(q1AnsFour);
    q1AnsFour.appendChild(q1AnsFourButton);
    //creates text content for questions

    //creates text content for answers
    q1AnsOneButton.textContent = "strings";
    q1AnsTwoButton.textContent = "booleans";
    q1AnsThreeButton.textContent = "alerts";
    q1AnsFourButton.textContent = "numbers";

    q1AnsOneButton.addEventListener("click", function(){
        div1.remove();
        q1El.remove();
        q1AnsOne.remove();
        q1AnsTwo.remove();
        q1AnsThree.remove();
        q1AnsFour.remove();
        q1AnsOneButton.remove();
        q1AnsTwoButton.remove();
        q1AnsThreeButton.remove();
        q1AnsFourButton.remove();
        secondQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });

    q1AnsTwoButton.addEventListener("click", function(){
        div1.remove();
        q1El.remove();
        q1AnsOne.remove();
        q1AnsTwo.remove();
        q1AnsThree.remove();
        q1AnsFour.remove();
        q1AnsOneButton.remove();
        q1AnsTwoButton.remove();
        q1AnsThreeButton.remove();
        q1AnsFourButton.remove();
        secondQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Wrong!";
    });


    q1AnsThreeButton.addEventListener("click", function(){
        div1.remove();
        q1El.remove();
        q1AnsOne.remove();
        q1AnsTwo.remove();
        q1AnsThree.remove();
        q1AnsFour.remove();
        q1AnsOneButton.remove();
        q1AnsTwoButton.remove();
        q1AnsThreeButton.remove();
        q1AnsFourButton.remove();
        secondQuestion();
        main.appendChild(confirmEl);
        confirmEl.textContent = "Correct!";
    });


    q1AnsFourButton.addEventListener("click", function(){
        div1.remove();
        q1El.remove();
        q1AnsOne.remove();
        q1AnsTwo.remove();
        q1AnsThree.remove();
        q1AnsFour.remove();
        q1AnsOneButton.remove();
        q1AnsTwoButton.remove();
        q1AnsThreeButton.remove();
        q1AnsFourButton.remove();
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