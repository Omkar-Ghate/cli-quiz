var readLineSync = require("readline-sync");
var chalk = require("chalk");
var score=0;
var userName = readLineSync.question(("Please enter your name."));
console.log("Welcome " + (userName) + " to DO YOU KNOW me!");
console.log("There are 10 Questions in total. +2 for every right answer and -1 for every incorrect answer.\n");
function check(quizList){
 for(var i=0;i<quizList.length;i++){
   var userAns = readLineSync.question("Q" + (i+1) + ". " + quizList[i].ques);
 
   if(userAns.toLowerCase()==quizList[i].ans.toLowerCase()){
     score+=2;
     console.log(chalk.cyan("Superb!"));
   }
   else{
     console.log(chalk.red("Sorry! The correct answer is ") + chalk.green(quizList[i].ans));
     score-=1;
   } 
   console.log("Your score is : " + score);
   console.log("---------------");
 }
}

var q1={
  ques:"Well do you know my name? ",
  ans:"Omkar Ghate"
}
var q2={
  ques:"Which course am I currently pursuing? ",
  ans:"Engineering"
}
var q3={
  ques:"Where do I live? ",
  ans:"Kolhapur"
}
var q4={
  ques:"What's my favourite book? ",
  ans:"Freedom from the known"
}
var q5={
  ques:"Whom do I admire the most? ",
  ans:"Steve Jobs"
}
var q6={
  ques:"Which is my favorite sport? ",
  ans:"Cricket"
}
var q7={
  ques: "What's my age? ",
  ans: "20"
}
var q8={
  ques:"Do I have an interest in spirituality? ",
  ans:"Yes"
}
var q9={
  ques:"What is my nationality? ",
  ans:"Indian"
}
var q10={
  ques:"What is my goal in life? ",
  ans:"Absolute Freedom"
}

var quizList=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
check(quizList);

console.log("End of the QUIZ!");
console.log("Your final score is " + score);
if(score>=9)console.log(chalk.blue("You are my closest friend!"));
else if(score>=5 && score<9)console.log(chalk.gree("We are good friends."));
else console.log("We need to talk more often :)");