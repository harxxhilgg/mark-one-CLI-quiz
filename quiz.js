var readlineSync = require('readline-sync'); 

let score = 0;


var usr = readlineSync.question("what's your name ? : ");
console.log("welcome " + usr + "!");


var questions = [{
    question: "what's my surname ? : ",
    answer: "patel"
}, {
    question: "what's my favorite PC game ? ( Hint: FPS Competetive ) : ",
    answer: "csgo"
}, {
    question: "In which University Currently I'm studying ? : ", 
    answer: "paruluniversity"
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
    console.log("you've Scored: " + score);
}


// calling functions

game();
totalscore();