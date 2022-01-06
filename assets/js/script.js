// sets variables
var count = 75;

// It calls on the ids in the HTML file
var countEl = document.querySelector('#count');
var timerEl = document.querySelector('#timer');
var beginningEl = document.querySelector('#beginning');
var instructionsEl = document.querySelector('#instructions');

//creates the timer function and removes beginning title and instructions
var setTimer = function(){
    //removes beginning title
    beginningEl.remove();
    //removes instructions
    instructionsEl.remove();
    //creates the countdown function which decreases count by one and reassigns count to that value
    var countdown = function(){
        console.log(count);
        countEl.textContent = count;
        count--;
        //stops the timer when it reaches zero and shows alert message
        if(count === 0){
            clearInterval(myTimer);
        }
    }
    //runs the countdown function every 1000 ms or 1s
    var myTimer = setInterval(countdown, 1000);
}

//creates function that decreases count by one

// // Set the timer when you click the "Start Quiz" button
timerEl.addEventListener("click", function(){
    setTimer();
});