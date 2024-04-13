const questions=[
    {
        question:"What is the maximum possible length of an identifier?",
        answers:[
           {text:"16", correct: false },
           {text:"32", correct: false },
           {text:"64", correct: false },
           {text:"None of these above", correct: true },

        ]
    },
    {
        question:"In which language is Python written?",
        answers:[
           {text:"English", correct: false },
           {text:"PHP", correct: false },
           {text:"C", correct: true },
           {text:"All of these", correct: false },

        ]

    },
    {
        question:"Identify the error:print('Hello World!'))",
        answers:[
           {text:"Missing Quotation Marks", correct: false },
           {text:"Print Syntax Error", correct: false },
           {text:"Extra Parenthesis", correct: true },
           {text:"Missing Parenthesis", correct: false },

        ]

    },
    {
        question:"What is the output of:print('Hello', end='@');print('World')",
        answers:[
           {text:"HelloWorld", correct: false },
           {text:"Hello World", correct: false },
           {text:"Hello@World", correct: true },
           {text:"Hello@ World", correct: false },

        ]
    },
    {
        question:"What will be the output of: print('Python', 'Programming', sep='-')",
        answers:[
           {text:"PythonProgramming", correct: false },
           {text:"Python,Programming", correct: false },
           {text:"Python Programming", correct: false },
           {text:"Python-Programming", correct: true },

        ]
    },
    {
        question:"What does the sep parameter do in the print() function?",
        answers:[
           {text:"Separates Lines", correct: false },
           {text:"Separates Syntax Errors", correct: false },
           {text:"Specifies Separator Between Values", correct: true },
           {text:"None of These", correct: false },

        ]
    },
    {
        question:"What is the purpose of the end parameter in the print() function?",
        answers:[
           {text:"To add a space at the end", correct: false },
           {text:"To end the script", correct: false },
           {text:"To Specify the string appended after the last value", correct: true },
           {text:"To break the line", correct: false },

        ]
    },
    {
        question:"Which function in Python is used to display data as output?",
        answers:[
           {text:"display()", correct: false },
           {text:"show()", correct: false },
           {text:"print()", correct: true },
           {text:"output()", correct: false },

        ]
    },
    {
        question:"What is the default type of data returned by the input() function in Python 3.x?",
        answers:[
           {text:"string", correct: true },
           {text:"int", correct: false },
           {text:"boolean", correct: false },
           {text:"list", correct: false },

        ]
    },
    {
        question:"Find the mistake:x=(1,2,3); x[1]=4; print(x)",
        answers:[
           {text:"No Error", correct: false },
           {text:"Syntax Error", correct: false },
           {text:"x[1] should be x[2]", correct: false },
           {text:"Tuples are immutable", correct: true },

        ]
    },
    {
        question:"Identify the error in this code:x = [1, 2, 3]; print(x)",
        answers:[
           {text:"No any Error", correct: true },
           {text:"Syntax Error in variable x", correct: false },
           {text:"Missing bracket in x", correct: false },
           {text:"Error: No any use of round bracket()", correct: false },

        ]
    },
    {
        question:"Which of these collections defines a DICTIONARY?",
        answers:[
           {text:"[10, 20, 30", correct: false },
           {text:"{'name': 'Ram', 'age': '24'}", correct: true },
           {text:"('apple', True, 1.5)", correct: false },
           {text:"{'apple', 'banana', 'cherry'}", correct: false },

        ]
    },
    {
        question:"Which of the following is an immutable data type?",
        answers:[
           {text:"Lists", correct: false },
           {text:"Dictionaries", correct: false },
           {text:"Tuples", correct: true },
           {text:"Sets", correct: false },

        ]
    },
    {
        question:"Find the mistake:user_input = input('Enter a number: '); print('You entered: ', int(user_input))",
        answers:[
           {text:"Syntax error", correct: false },
           {text:"int() should be str()", correct: false },
           {text:"No error", correct: true },
           {text:"input() function used incorrectly", correct: false },

        ]
    },
    {
        question:"What is the purpose of an if statement in Python?",
        answers:[
           {text:"To loop through a sequence", correct: false },
           {text:"To define a function", correct: false },
           {text:"To execute a block conditionally", correct: true },
           {text:"To handle exceptions", correct: false },

        ]
    },
    {
        question:"In Python, which keyword is used to check additional conditions if the previous conditions fail?",
        answers:[
           {text:"switch", correct: false },
           {text:"then", correct: false },
           {text:"else if", correct: false },
           {text:"elif", correct: true },

        ]
    },
    {
        question:"What will happen if the condition in an if statement in Python evaluates to False?",
        answers:[
           {text:"The program will stop", correct: false },
           {text:"It will raise an error", correct: false },
           {text:"It will skip to the next if", correct: false },
           {text:"It will execute the else block", correct: true },

        ]
    },
    {
        question:"Which of the following is a valid conditional statement in Python?",
        answers:[
           {text:"if a == 5:", correct: true },
           {text:"if a = 5:", correct: false },
           {text:"if a <> 5:", correct: false },
           {text:"if (a = 5):", correct: false },

        ]
    },
    {
        question:"What is the outcome if the elif and else blocks are missing in an if statement?",
        answers:[
           {text:"Syntax error", correct: false },
           {text:"The program will stop", correct: false },
           {text:"Nothing, it's optional", correct: true },
           {text:"Runtime error", correct: false },

        ]
    },
    {
        question:"What is the output of the following code? x = 10; if x > 5:  print('Greater') ",
        answers:[
           {text:"Greater", correct: true },
           {text:"Error", correct: false },
           {text:"Nothing", correct: false },
           {text:"Less", correct: false },

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

