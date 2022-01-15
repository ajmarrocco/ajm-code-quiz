var hsMessageEl = document.querySelector("#hs-message");
var backButtonEl = document.querySelector("#back-btn");
var clearButtonEl = document.querySelector("#clear-btn");
var listEl = document.querySelector("#list");
var initialsScoreEl = document.querySelector("#initials-score");


clearButtonEl.addEventListener("click", function(){
    localStorage.clear();
    listEl.remove();
})

for (let i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);
    console.log(key);
    console.log(localStorage.getItem(key));
    var scoreEl = document.createElement("li");
    scoreEl.className = "score-list-item";
    listEl.appendChild(scoreEl);
    scoreEl.innerHTML += `${key} - ${localStorage.getItem(key)}`;

    // console.log(scoreEl.innerHTML);
    // console.log(typeof scoreEl.innerHTML);


    // const map1 = new Map();

    // map1.set(key, localStorage.getItem(key))
    // console.log(map1);
    // console.log(typeof map1);
}
