var hsMessageEl = document.querySelector("#hs-message");
var backButtonEl = document.querySelector("#back-btn");
var clearButtonEl = document.querySelector("#clear-btn");
var initialsScoreEl = document.querySelector("#initials-score");



clearButtonEl.addEventListener("click", function(){
    localStorage.clear();
})

for (let i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);
    console.log(key);
    console.log(localStorage.getItem(key));
    initialsScoreEl.innerHTML += `${key} ; ${localStorage.getItem(key)}`;
}
