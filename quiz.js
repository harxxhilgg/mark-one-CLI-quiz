var readlineSync = require('readline-sync'); 

let score = 0;


var usr = readlineSync.question("what's your name ? : ");
console.log("welcome " + usr + "!");
console.log();

console.log("let's begin the quiz !!!"); 
console.log();

var questions = [{
    question: "what's my surname ? : ",
    answer: "patel"
}, {
    question: "what's my favorite PC game ? ( Hint: FPS Competetive ) : ",
    answer: "csgo"
}, {
    question: "In which University Currently I'm studying ? : ",  
    answer: "parul university"
}, {
    question: "Where do I live ? ( City ) : ",
    answer: "surat"
}, {
    question: "what's my Age ? : ",
    answer: "19"
}];


function playgame(question, answer) {
    var usrAns = readlineSync.question(question);

    if (usrAns.toLowerCase() == answer.toLowerCase()) {
        console.log("correct!");
        score = score + 1;
        console.log("you've raised your score by 1!");
    }
    else {
        console.log("wrong!");
    }

    console.log("current score: " + score);
    console.log();
    console.log();
}

function game() {
    for (let i = 0; i < questions.length; i++) {
        var currentQue = questions[i];
        playgame(currentQue.question, currentQue.answer);
    }
}

function totalscore() {
  if (score == 5 ) {
    console.log("VeryGood!, You've Scored " + score + "/5");
  }
  else if (score < 5 && score >= 3) {
    console.log("Good!, You've Scored " + score + "/5"); 
  }
  else if (score == 0) {
    console.log("You've Scored " + score + "/5 :(");
  }
  else {
    console.log("Could've been worse but You've Scored " + score + "/5");
  }
}


// calling functions

game();
totalscore();