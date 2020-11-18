
/*

var Question=['Where do i live ?','Which is the coolest language ?','What is my name ?'];
function RandomQuestion(arr){
        var i = Math.floor(Math.random() * 3) + 1;
        var DisplayQuestion = prompt(arr[i]);
        console.log(DisplayQuestion);
}
RandomQuestion(Question);

*********/

/*
////////////////////////////////////
var Question = ['Where do i live ?', 'Which is the coolest language ?', 'What is my name ?'];
var Answer =['india','haryana','rohtak','javascript','arjun','nonu'];
function RandomQuestion(arr) {
    var i = Math.floor(Math.random() *3) ;
    console.log(arr[i]);
    return function(Ans){
        if(arr[i==0]){
            for(i=0;i<=2;i++)
                console.log(Ans[i] + ' is correct answer');    
        }
        else if(arr[i==1]);

    }
}
RandomQuestion(Question);
**/
//////////////////////////////
/*
var Question = ['Do i live in India ?', 'Is my name john ?', 'Is javaScript is the coolest language ?'];
function RandomQuestion(arr) {
    var i = Math.floor(Math.random() * 3);
    console.log(arr[i]);
};


RandomQuestion(Question);



function Inputs(ele){
    var input = prompt('Enter your answer here . (just enter the number) ');
    switch(ele){
        case ele[0]:
            if(this.input==this.opt1){
                console.log('You entered the correct answer .');
            }
            else{
                console.log('You entered wrong answer');
            }
        case ele[1]:
            if (this.input == this.opt2) {
                console.log('You entered the correct answer .');
            }
            else {
                console.log('You entered wrong answer');
            }
        default:
            if (this.input == this.opt1) {
                console.log('You entered the correct answer .');
            }
            else {
                console.log('You entered wrong answer');
            }
    }

    
};

function option() {
    var opt1 = 0;
    var opt2 = 1;
    console.log(opt1 + ' : Yes');
    console.log(opt2 + ' : No');
};
 
/*
var job = 'instructor';
switch(job){
    case'teacher':
    case 'instructor':
        console.log(firstName +' teachs how to code.');
        break;
    case'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful website.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

**/
/*
Inputs(Question);
option();






*/


var Person = function(Question,Answer,Correct){
    this.Question=Question;
    this.Answer=Answer;
    this.Correct=Correct;




    Person.prototype.DisplayQuestion = function(){

    console.log(this.Question);
    for (i = 1 ; i<= this.Answer.length ; i++)
    console.log(i + ':' + this.Answer);

    };
    Person.prototype.checkAnswer = function(ans){
    if(ans === this.Correct){
        console.log('You entered the correct answer .');
    }
    else 
        console.log('You entered the wrong answer');

    };
    var q1 = new Person('Do i live in India ?', ['yes', 'no'], 1);
    var q2 = new Person('Is js the coolest language ? ', ['yes ', 'no'], 1);
    var q3 = new Person('What is my name ?', ['mike', 'arjun', 'john'], 2);

        var questions = [q1, q2, q3];

        var n = Math.floor(Math.random() * questions.length);

        questions[n].DisplayQuestion();

        var answer = prompt('enter answer here ');

        questions[n].checkAnswer(answer);
};