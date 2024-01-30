const questions=[
    {
        question:"Which shortcut key is used for inserting table in LibreOffice Writer?",
        answers:[
           {text:"Ctrl+F11", correct: false },
           {text:"Ctrl+F12", correct: true },
           {text:"Ctrl+F10", correct: false },
           {text:"Ctrl+F9", correct: false },

        ]
    },
    {
        question:"Which option should be used to type CO<sub>2</sub> to get 2 at its proper place?",
        answers:[
           {text:"Subscript", correct: true },
           {text:"Superscript", correct: false },
           {text:"Underline", correct: false },
           {text:"Bold", correct: false },

        ]

    },
    {
        question:"Can Libre create a custom page style in Libre Office Writer?",
        answers:[
           {text:"True", correct: true },
           {text:"False", correct: false },
        //    {text:"Elephant", correct: true },
        //    {text:"Giraffe", correct: false },

        ]

    },
    {
        question:"What is the minimum and maximum font size in the Libre Office Writer?",
        answers:[
           {text:"6, 96", correct: true },
           {text:"6, 69", correct: false },
           {text:"7, 72", correct: false },
           {text:"11, 96", correct: false },

        ]
    },
    {
        question:"Which of the following key is used to add bullet list in LibreOffice writer?",
        answers:[
           {text:"Ctrl + F12", correct: false },
           {text:"Ctrl + Shift + F12", correct: false },
           {text:"F12", correct: false },
           {text:"Shift + F12", correct: true },

        ]
    },
    {
        question:"What is the shortcut to create a new document in LibreOffice Writer?",
        answers:[
           {text:"Ctrl + N", correct: true },
           {text:"Ctrl + shift + N", correct: false },
           {text:"Shift + N", correct: false },
           {text:"None of These", correct: false },

        ]
    },
    {
        question:"You can change the magnification of the page (i.e., make it bigger or smaller) using __________ option",
        answers:[
           {text:"Zoom bar", correct: true },
           {text:"Proofing level", correct: false },
           {text:"Page indicator", correct: false },
           {text:"Help", correct: false },

        ]
    },
    {
        question:"Which of the following default font size in LibreOffice Writer?",
        answers:[
           {text:"8", correct: false },
           {text:"10", correct: false },
           {text:"12", correct: true },
           {text:"14", correct: false },

        ]
    },
    {
        question:"Which shortcut key will be used to enlarge the screen in LibreOffice?",
        answers:[
           {text:"Ctrl + Shift + J", correct: true },
           {text:"Ctrl + Alt + R", correct: false },
           {text:"Ctrl + R", correct: false },
           {text:"Ctrl + J", correct: false },

        ]
    },
    {
        question:"What is the shortcut key to comment in LibreOffice Writer?",
        answers:[
           {text:"Ctrl + Shift + C", correct: false },
           {text:"Ctrl + C", correct: false },
           {text:"Ctrl + Alt + M", correct: false },
           {text:"Ctrl + Alt + C", correct: true },

        ]
    },
    {
        question:"Formatting marks can be toggled using _______shortcut keys.",
        answers:[
           {text:"CTRL + F10 ", correct: true },
           {text:"CTRL + F7", correct: false },
           {text:"CTRL + F8", correct: false },
           {text:"CTRL + F9", correct: false },

        ]
    },
    {
        question:"Which shortcut key is used for inserting table in LibreOffice Writer?",
        answers:[
           {text:"Ctrl + F11", correct: false },
           {text:"Ctrl + F12", correct: true },
           {text:"Ctrl + F10 ", correct: false },
           {text:"Ctrl + F9", correct: false },

        ]
    },
    {
        question:"In which menu the commands like bold, italic, underline are found in LibreOffice writer?",
        answers:[
           {text:"Style", correct: false },
           {text:"Format", correct: true },
           {text:"Edit", correct: false },
           {text:"Insert", correct: false },

        ]
    },
    {
        question:"Which of the following functions key is used to perform a spelling check?",
        answers:[
           {text:"F1", correct: false },
           {text:"F2", correct: false },
           {text:"F7", correct: true },
           {text:"F8", correct: false },

        ]
    },
    {
        question:"In which menu we can insert address Block for mail merge in LibreOffice writer?",
        answers:[
           {text:"Insert", correct: false },
           {text:"Format", correct: false },
           {text:"Tool", correct: true },
           {text:"Edit", correct: false },

        ]
    },
    {
        question:"To check the grammar we should go in_______menu?",
        answers:[
           {text:"Format", correct: false },
           {text:"Edit", correct: false },
           {text:"Insert", correct: false },
           {text:"Tool", correct: true },

        ]
    },
    {
        question:"What is the minimum Zoom percentage in LibreOffice writer?",
        answers:[
           {text:"20", correct: true },
           {text:"10", correct: false },
           {text:"5", correct: false },
           {text:"15", correct: false },

        ]
    },
    {
        question:"What is the shortcut for increasing the font size in LibreOffice writer?",
        answers:[
           {text:"Ctrl + ]", correct: true },
           {text:"Ctrl + >", correct: false },
           {text:"Ctrl + [", correct: false },
           {text:"None of these", correct: false },

        ]
    },
    {
        question:"In which menu is the auto correct option found in LibreOffice Writer?",
        answers:[
           {text:"Edit Menu", correct: false },
           {text:"Format", correct: false },
           {text:"Tool", correct: true },
           {text:"Insert", correct: false },

        ]
    },
    {
        question:"To close window of current opened document in Libre Writer, we should press________?",
        answers:[
           {text:"Ctrl + W", correct: true },
           {text:"Ctrl + Q", correct: false },
           {text:"Ctrl + Shift + Q", correct: false },
           {text:"Alt + W", correct: false },

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

