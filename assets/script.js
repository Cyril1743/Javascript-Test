//Varibles for Event listeners
var startbutton = document.querySelector("#startbutton");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var questionDiv = document.querySelector("#question")
var time = document.querySelector("#timerspan")
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
var correctAnswer = ["To add functionality", "All the above", "Type and Value", "Return the remainder", "All the above", "A function", "Document Object Model"]

//Function to start the game
//Check to see if the answer is correct
//Functon to end the game and record the score