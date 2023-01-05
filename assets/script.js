//Varibles for Event listeners
var startbutton = document.querySelector("#startbutton");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var questionDiv = document.querySelector("#question")
var time = document.querySelector("#timerspan")
var answerResult = document.querySelector("#answerResult")
var score = document.querySelector("#score")
var finalScore = document.querySelector("#finalScore")
var submit = document.querySelector("#submit")
var savedname = document.querySelector("#savedname")
var highscore = document.querySelector("#highScores")
var highscoreUl = document.querySelector("#highScoreList")
var reset = document.querySelector("#reset")
var restart = document.querySelector("#restart")
var startMessage = document.querySelector("#startMessage")
var count = 60
//Varibles for the game
var chosenAnswer = "";
var questionNumber = 0;
var questions = ["What is JavaScript used for?", "What is an example of a primitive tag?", "What do strict equality operators measure?", "What does a % do?", "What is an array?", "What is a method in JavaScript?", "What does DOM stand for in JavaScript?"];
var answers = {
    0: ["To style a page", "To add functionality", "JavaScript isn't used", "To add stucture to a page"],
    1: ["Boolean", "Number", "String", "All the above"],
    2: ["Only type", "Only value", "Type and value", "Neither type or value"],
    3: ["Nothing", "Returns the remainder", "Returns the difference", "Returns the added value"],
    4: ["A list", "An object", "Something surrounded by []", "All the above"],
    5: ["A function", "A particular way to do something", "Nothing", "A systematic approach"],
    6: ["Dirty Old Man", "Date of Manufacture", "Document Object Model", "Distributed Order Management"]
};
var correctAnswer = ["To add functionality", "All the above", "Type and value", "Returns the remainder", "All the above", "A function", "Document Object Model"]
var highscores = []
var highscoreObj;
//Event Listeners for buttons
answer1.addEventListener("click", function () {
    chosenAnswer = answer1.textContent
    checkAnswer()
})
answer2.addEventListener("click", function () {
    chosenAnswer = answer2.textContent
    checkAnswer()
})
answer3.addEventListener("click", function () {
    chosenAnswer = answer3.textContent
    checkAnswer()
})
answer4.addEventListener("click", function () {
    chosenAnswer = answer4.textContent
    checkAnswer()
})
submit.addEventListener("click", function (event) {
    event.preventDefault()
    highscoreObj = JSON.parse(localStorage.getItem("highscores"))
    if (highscoreObj) {
        highscores = Object.values(highscoreObj)
        initials = savedname.value
        highscores.push(initials + ":" + count)
        localStorage.setItem("highscores", JSON.stringify(highscores))
        score.setAttribute("style", "display: none")
        getHighScores()
    } else {
        initials = savedname.value
        highscores.push(initials + ":" + count)
        localStorage.setItem("highscores", JSON.stringify(highscores))
        score.setAttribute("style", "display: none")
        getHighScores()
    }
})
reset.addEventListener("click", function () {
    localStorage.clear()
})
restart.addEventListener("click", function () {
    highscore.setAttribute("style", "display: none")
    startGame()
})

//Function to start the game
startbutton.addEventListener("click", startGame)
function startGame() {
    questionNumber = 0
    count = 60
    var timer = setInterval(function () {
        count--
        time.textContent = count
        if (count <= 0) {
            clearInterval(timer)
            endGame()
        } else if (questionNumber == 7) {
            clearInterval(timer)
            endGame()
        }
    }, 1000)
    startbutton.setAttribute("style", "display: none")
    answer1.setAttribute("style", "display: block")
    answer2.setAttribute("style", "display: block")
    answer3.setAttribute("style", "display: block")
    answer4.setAttribute("style", "display: block")
    startMessage.setAttribute("style", "display: none")
    populateQuestion()
}
function populateQuestion() {
    questionDiv.textContent = questions[questionNumber]
    answer1.textContent = answers[questionNumber][0]
    answer2.textContent = answers[questionNumber][1]
    answer3.textContent = answers[questionNumber][2]
    answer4.textContent = answers[questionNumber][3]
}
//Check to see if the answer is correct
function checkAnswer() {
    var answerTimerTime = 1
    var answerTimer = setInterval(function () {
        answerTimerTime--
        if (answerTimerTime === 0) {
            clearInterval(answerTimer)
            answerResult.textContent = ""
        }
    }, 1000)
    if (chosenAnswer == correctAnswer[questionNumber]) {
        questionNumber++
        count = count + 20
        answerResult.textContent = "Correct!"
        if (questionNumber != 7) {
            populateQuestion()
        }
    } else {
        questionNumber++
        count = count - 10
        answerResult.textContent = "Wrong!"
    }
}
//Functon to end the game
function endGame() {
    questionDiv.setAttribute("style", "display: none")
    answer1.setAttribute("style", "display:none")
    answer2.setAttribute("style", "display:none")
    answer3.setAttribute("style", "display:none")
    answer4.setAttribute("style", "display:none")
    score.setAttribute("style", "display: block")
    finalScore.textContent = count
}
//Function to record the scores
function getHighScores() {
    highscores = JSON.parse(localStorage.getItem("highscores"))
    highscore.setAttribute("style", "display: block")
    for (let i = 0; i < highscores.length; i++) {
        li = document.createElement("li")
        highscoreUl.appendChild(li)
        li.textContent = highscores[i]
    }
}