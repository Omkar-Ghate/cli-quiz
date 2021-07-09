var readLineSync = require("readline-sync");
var score=0;
var userName = readLineSync.question("Please enter your name.")
console.log("Welcome " + userName + " to DO YOU KNOW me!");
console.log("There are 10 Questions in total. +2 for every right answer and -1 for every incorrect answer.\n");
function check(quizList){
 for(var i=0;i<quizList.length;i++){
   var userAns = readLineSync.question("Q" + (i+1) + ". " + quizList[i].ques);
   if(userAns==quizList[i].ans){
     score+=2;
     console.log("Superb!");
   }
   else{
     console.log("Sorry! The correct answer is " + quizList[i].ans);
     score-=1;
   } 
   console.log("Your score is : " + score);
   console.log("---------------");
 }
}

var chalk=require('chalk');
var takeinput=require('readline-sync');
var q1={
  ques:"Well do you know my name?",
  ans:"Omkar Ghate"
}
var q2={
  ques:"Guess my age if I am millennial?",
  ans:22
}
var q3={
  ques:"Where do I live?",
  ans:"Kolhapur"
}
var q4={
  ques:"What's my favourite book?",
  ans:"Freedom from the known"
}
var q5={
  ques:"Whom do I admire the most?",
  ans:"Steve Jobs"
}
var q6={
  ques:"What is my favourite no.?",
  ans:7
}
var q7={
  ques:"I prefer Green Tea or Coffee?",
  ans:"Green Tea"
}
var q8={
  ques:"Who is my favourite superhero?",
  ans:"Shakti Man"
}
var q9={
  ques:"Who is my favourite cartoon character?",
  ans:"Nobita"
}
var q10={
  ques:"What is my goal?",
  ans:"Product Based Company"
}
var quizList=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
check(quizList);

console.log("End of the QUIZ!");
console.log("Your final score is " + score);