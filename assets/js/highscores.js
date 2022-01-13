var hsMessageEl = document.querySelector("#hs-message");
var backButtonEl = document.querySelector("#back-btn");
var clearButtonEl = document.querySelector("#clear-btn");



clearButtonEl.addEventListener("click", function(){
    localStorage.clear();
})

var initialAndScore = localStorage.getItem(key, value);
textarea.textContent = initialAndScore;