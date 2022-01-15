// It calls on the ids in the HTML file
var hsMessageEl = document.querySelector("#hs-message");
var backButtonEl = document.querySelector("#back-btn");
var clearButtonEl = document.querySelector("#clear-btn");
var listEl = document.querySelector("#list");
var initialsScoreEl = document.querySelector("#initials-score");

//clears local storage and removes list of high scores when clear button is pressed
clearButtonEl.addEventListener("click", function(){
    localStorage.clear();
    listEl.remove();
})

//for loop to add scores to local storage
for (let i=0;i<localStorage.length;i++){
    //declare variable for key initials
    const key = localStorage.key(i);
    //creates a list item for each score
    var scoreEl = document.createElement("li");
    //creates class for scoreEl
    scoreEl.className = "score-list-item";
    //appends scoreEl to listEl
    listEl.appendChild(scoreEl);
    //uses template literal to set key and vale of local storage to the inner HTML of list
    scoreEl.innerHTML += `${key} - ${localStorage.getItem(key)}`;
}
