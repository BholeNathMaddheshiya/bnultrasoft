const questions=[
    {
        question:"What will be the following output?>>>  34^99+4+20*(45//2)*2>>2",
        answers:[
           {text:"305", correct: false },
           {text:"215", correct: true },
           {text:"200", correct: false },
           {text:"405", correct: false },

        ]
    },
    {
        question:"Python range() function takes can be initialized in:",
        answers:[
           {text:"range (stop)", correct: false },
           {text:"range (start, stop)", correct: false },
           {text:"range (start, stop, step)", correct: false },
           {text:"All of these", correct: true },

        ]

    },
    {
        question:"What is not a correct syntax to output \"Hello World\" in Python?",
        answers:[
           {text:"print('Hello World')", correct: false },
           {text:"print('''Hello World''')", correct: false },
           {text:"print(\"Hello World\")", correct: false },
           {text:"p(\"Hello World\")", correct: true },

        ]

    },
    {
        question:"which of the following is not insert COMMENTS in Python code?",
        answers:[
           {text:"/*This is a comment*/  ", correct: false },
           {text:"//This is a comment", correct: false },
           {text:"\"This is a comment\"", correct: false },
           {text:"All of these", correct: true },

        ]
    },
    {
        question:"Which one is NOT a legal variable name?",
        answers:[
           {text:"Myvar", correct: false },
           {text:"my_var", correct: false },
           {text:"_myvar", correct: false },
           {text:"my-var", correct: true },

        ]
    },
    {
        question:"How do you create a variable with the numeric value 5?",
        answers:[
           {text:"x = int(5)", correct: false },
           {text:"x = 5", correct: false },
           {text:"Both the other answers are correct ", correct: true },
           {text:"None of These", correct: false },

        ]
    },
    {
        question:"What is the correct file extension for Python files?",
        answers:[
           {text:".py", correct: true },
           {text:".pyt", correct: false },
           {text:".pyth", correct: false },
           {text:".pt", correct: false },

        ]
    },
    {
        question:"What is the correct syntax to output the type of a variable or object in Python?",
        answers:[
           {text:"print(typeOf(x))", correct: false },
           {text:"print(typeof x)", correct: false },
           {text:"print(type(x))", correct: true },
           {text:"print(typeof(x))", correct: false },

        ]
    },
    {
        question:"Which operator is used to multiply numbers?",
        answers:[
           {text:"*", correct: true },
           {text:"%", correct: false },
           {text:"#", correct: false },
           {text:"x", correct: false },

        ]
    },
    {
        question:"Which of these collections defines a LIST?",
        answers:[
           {text:"('apple', 'banana', 'cherry')", correct: false },
           {text:"{'apple', 'banana', 'cherry'}", correct: false },
           {text:"{'name': 'apple', 'color': 'green'}", correct: false },
           {text:"['apple', 'banana', 'cherry']", correct: true },

        ]
    },
    {
        question:"Which of these collections defines a SET?",
        answers:[
           {text:"{'apple', 'banana', 'cherry'}", correct: true },
           {text:"{'name': 'apple', 'color': 'green'}", correct: false },
           {text:"('apple', 'banana', 'cherry')", correct: false },
           {text:"['apple', 'banana', 'cherry']", correct: false },

        ]
    },
    {
        question:"Which of these collections defines a DICTIONARY?",
        answers:[
           {text:"['apple', 'banana', 'cherry']", correct: false },
           {text:"{'name': 'apple', 'color': 'green'}", correct: true },
           {text:"('apple', 'banana', 'cherry')", correct: false },
           {text:"{'apple', 'banana', 'cherry'}", correct: false },

        ]
    },
    {
        question:"How do you start writing an if statement in Python?",
        answers:[
           {text:"if x > y:", correct: false },
           {text:"if (x > y):", correct: false },
           {text:"Both", correct: true },
           {text:"if x > y then:", correct: false },

        ]
    },
    {
        question:"Which statement is used to stop a loop?",
        answers:[
           {text:"exit", correct: false },
           {text:"stop", correct: false },
           {text:"break", correct: true },
           {text:"return", correct: false },

        ]
    },
    {
        question:"Before a variable is assigned a value in Python, it must be declared",
        answers:[
           {text:"Not Sure", correct: false },
           {text:"True", correct: false },
           {text:"False", correct: true },
           {text:"None of the above", correct: false },

        ]
    },
    {
        question:"Python supports which types of programming?",
        answers:[
           {text:"object-oriented programming", correct: false },
           {text:"structured programming", correct: false },
           {text:"functional programming", correct: false },
           {text:"all of the mentioned", correct: true },

        ]
    },
    {
        question:"Which of the following is false statement in python",
        answers:[
           {text:"int(144)==144", correct: false },
           {text:"int('144')==144", correct: false },
           {text:"int(144.0)==144", correct: false },
           {text:"None of the above", correct: true },

        ]
    },
    {
        question:"What will be the output of the following code? print(type(1/2))",
        answers:[
           {text:"class 'float'", correct: true },
           {text:"class 'int'", correct: false },
           {text:"NameError: ‘½' is not defined.", correct: false },
           {text:"0.5", correct: false },

        ]
    },
    {
        question:"Which of the following operator in python performs exponential (power) calculation on operands?",
        answers:[
           {text:"not in", correct: false },
           {text:"is", correct: false },
           {text:"**", correct: true },
           {text:"//", correct: false },

        ]
    },
    {
        question:"Which of the following operator in python evaluates to true if the variables on either side of the operator point to the same object and false otherwise?",
        answers:[
           {text:"is", correct: true },
           {text:"**", correct: false },
           {text:"//", correct: false },
           {text:"not in", correct: false },

        ]
    },
   
   
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex=0;
let score =0;
function startQuiz(){
    currentQuestionIndex=0;
    score= 0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){

    resetState();

let currentQuestion=questions[currentQuestionIndex];
let questionNo =currentQuestionIndex + 1;
questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer =>{
  const button =document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct){
    button.dataset.correct=answer.correct;
  }
  button.addEventListener("click", selectAnswer)

});


}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
       answerButtons.removeChild(answerButtons.firstChild); 
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
       score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
   Array.from(answerButtons.children).forEach(button => {
       if(button.dataset.correct === "true"){
         button.classList.add("correct");
       }
       button.disabled = true;
   });
   nextButton.style.display = "block";

}

function  showScore(){
    resetState();
    questionElement.innerHTML= `Your Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML= "Start Quiz Again";
    nextButton.style.display ="block";
}

function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});



startQuiz();

