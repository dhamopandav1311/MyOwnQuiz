var readLineSync = require('readline-sync');

var userName = readLineSync.question("What is your name? ");

console.log("Hello " + userName + "! Do You know Dharmik? ")
score = 0;
correct = 0;
wrong = 0;

var questions = [{question: "What is age of Dharmik? ",
answer: "21"}, 
{ question: `Where he is living right now? 
  A. Surat
  B. Ahemdabad
`,
answer: "a" },
{ question: "What is Dharmik's fav food? ",
answer: "pizza" }];



function play(question, answer){
  var i;
    userAnswer = readLineSync.question(question);
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct! ");
    score = score + 1;
    correct++; 
    console.log("Your current score is: " + score);
  } else{
    console.log("Wrong!");
    score = score - 1;  
    wrong++;
    console.log("Your current score is: " + score);
  }  

  console.log("---------------------------------") ;
 
}

for(var i=0; i<questions.length; i++){
  currentQuesion = questions[i];
  play(currentQuesion.question, currentQuesion.answer)
}

console.log("You Scored: " + score);
console.log("Total number of correct answers: " + correct);
console.log("Total number of wrong answers: " + wrong);
