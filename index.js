const readLineSync = require("readline-sync");
const chalk = require("chalk");
let score = 0;
const userName = readLineSync.question(("Please enter your name."));
console.log(`Welcome ${userName} to DO YOU KNOW me!`);
console.log("There are 10 Questions in total. +2 for every right answer and -1 for every incorrect answer.\n");

const check = quizList => {
  for (let i = 0; i < quizList.length; i++) {
    let userAns = readLineSync.question(`Q ${i+1}. ${quizList[i].ques}`);

    if (userAns.toLowerCase() == quizList[i].ans.toLowerCase()) {
      score += 2;
      console.log(chalk.cyan("Superb!"));
    }
    else {
      console.log(chalk.red("Sorry! The correct answer is ") + chalk.green(quizList[i].ans));
      score -= 1;
    }
    console.log(`Your score is : ${score}`);
    console.log("---------------");
  }

}

const arrayOfQuestions = [
  q1 = {
    ques: "Well do you know my name? ",
    ans: "Omkar Ghate"
  },
  q2 = {
    ques: "Which course am I currently pursuing? ",
    ans: "Engineering"
  },
  q3 = {
    ques: "Where do I live? ",
    ans: "Kolhapur"
  },
  q4 = {
    ques: "What's my favourite book? ",
    ans: "Freedom from the known"
  },
  q5 = {
    ques: "Whom do I admire the most? ",
    ans: "Steve Jobs"
  },
  q6 = {
    ques: "Which is my favorite sport? ",
    ans: "Cricket"
  },
  q7 = {
    ques: "What's my age? ",
    ans: "20"
  },
  q8 = {
    ques: "Do I have an interest in spirituality? ",
    ans: "Yes"
  },
  q9 = {
    ques: "What is my nationality? ",
    ans: "Indian"
  },
  q10 = {
    ques: "What is my goal in life? ",
    ans: "Absolute Freedom"
  }
]

check([...arrayOfQuestions]);

console.log("End of the QUIZ!");
console.log(`Your score is : ${score}`);

if (score >= 15) console.log(chalk.blue("You are my closest friend!"));
else if (score >= 5 && score < 15) console.log(chalk.green("We are good friends."));
else console.log("We need to talk more often :");
