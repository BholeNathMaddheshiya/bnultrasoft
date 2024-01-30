const questions=[
    {
        question:"How many scroll bars will appear when zooming the document up to 400%?",
        answers:[
           {text:"1", correct: false },
           {text:"2", correct: true },
           {text:"3", correct: false },
           {text:"None of these", correct: false },

        ]
    },
    {
        question:"What is the default file extension in Libreoffice Writer?",
        answers:[
           {text:".odt", correct: true },
           {text:".ods", correct: false },
           {text:".ott", correct: false },
           {text:".odf", correct: false },

        ]
    },
    {
        question:"In which menu is the Page Layout setting option found in libreOffice Writer?",
        answers:[
           {text:"Format", correct: true },
           {text:"Insert", correct: false },
           {text:"Tool", correct: false },
           {text:"Style", correct: false },

        ]
    },
    {
        question:"Which key is used for redo in LibreOffice Writer?",
        answers:[
           {text:"Alt + Y", correct: false },
           {text:"Ctrl + Shift + Y", correct: false },
           {text:"Ctrl + Z", correct: false },
           {text:"Ctrl+ Y", correct: true },

        ]
    },
    {
        question:"LibreOffice Writer gives an option to export as the document as",
        answers:[
           {text:"PDF", correct: false },
           {text:"EPUB", correct: false },
           {text:"PDF only", correct: false },
           {text:"A and B Both", correct: true },

        ]
    },
    {
        question:"Which shortcut key is used make no any list in LibreOffice Writer?",
        answers:[
           {text:"Ctrl + Shift + F12", correct: true },
           {text:"Ctrl + F12", correct: false },
           {text:"Shift + F12", correct: false },
           {text:"Ctrl + Alt + F12", correct: false },

        ]
    },
    {
        question:"Which of the following options is word processor?",
        answers:[
           {text:"Microsoft Excel", correct: false },
           {text:"Libre Impress", correct: false },
           {text:"Libre Writer", correct: true },
           {text:"All of the these", correct: false },

        ]
    },
    {
        question:"What is the maximum font size available in font size drop down in LibreOffice Writer?",
        answers:[
           {text:"72", correct: false },
           {text:"96", correct: true },
           {text:"69", correct: false },
           {text:"90", correct: false },

        ]
    },
    {
        question:"Where Header and Footer is Located in LibreOffice Writer menus?",
        answers:[
           {text:"Format", correct: false },
           {text:"Insert", correct: true },
           {text:"Edit", correct: false },
           {text:"Tool", correct: false },

        ]
    },
    {
        question:"What is the keyboard combination for putting page breaks in Libreoffice writer?",
        answers:[
           {text:"Ctrl + Enter", correct: true },
           {text:"Shift + Enter", correct: false },
           {text:"Ctrl + Shift + Enter", correct: false },
           {text:"None of these", correct: false },

        ]
    },
    {
        question:"What is release date of Libre Office?",
        answers:[
           {text:"25 Aug 2011", correct: false },
           {text:"25 Jan 2011", correct: true },
           {text:"25 July 2011", correct: false },
           {text:"25 Jan 2012", correct: false },

        ]
    },
    {
        question:"What is the default file extension in Libreoffice Writer Template?",
        answers:[
           {text:".ott", correct: true },
           {text:".odt", correct: false },
           {text:".ods", correct: false },
           {text:".tdf", correct: false },

        ]
    },
    {
        question:"What is the % of maximum zoom in Libre Writer?",
        answers:[
           {text:"400%", correct: false },
           {text:"300%", correct: false },
           {text:"600%", correct: true },
           {text:"500%", correct: false },

        ]
    },
    {
        question:"Which of the following key is used to add ordered list in LibreOffice writer?",
        answers:[
           {text:"Ctrl + F12", correct: false },
           {text:"Ctrl + Shift + F12", correct: false },
           {text:"F12", correct: true },
           {text:"Shift + F12", correct: false },

        ]
    },
    {
        question:"What type of program is LibreOffice Writer?",
        answers:[
           {text:"Spreadsheet", correct: false },
           {text:"Database", correct: false },
           {text:"Word Processor", correct: true },
           {text:"Presentation", correct: false },

        ]
    },
    {
        question:"What is the shortcut key of Manage Template in LibreOffice Writer?",
        answers:[
           {text:"Ctrl + Shift + N", correct: true },
           {text:"Ctrl + N", correct: false },
           {text:"Shift + N", correct: false },
           {text:"None of these", correct: false },

        ]
    },
    {
        question:"In which menu are the commands like cut, copy and paste?",
        answers:[
           {text:"File", correct: false },
           {text:"Edit", correct: true },
           {text:"View", correct: false },
           {text:"Insert", correct: false },

        ]
    },
    {
        question:"What are the keyboard keys to close LibreOffice Writer application?",
        answers:[
           {text:"Ctrl + W", correct: false },
           {text:"Ctrl + Q", correct: true },
           {text:"Alt + F4", correct: false },
           {text:"None of these", correct: false },

        ]
    },
    {
        question:"What is the maximum font size that can be increased in Writer?",
        answers:[
           {text:"96 pt", correct: false },
           {text:"72 pt", correct: false },
           {text:"999.9 pt", correct: true },
           {text:"99.9 pt", correct: false },

        ]
    },
    {
        question:"What is the default name of a file when you open a new file in Writer?",
        answers:[
           {text:"Document1", correct: false },
           {text:"Untitled1", correct: true },
           {text:"File1", correct: false },
           {text:"Untitled", correct: false },

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

