const questions=[
    {
        question:"A_____tag can connect user to a place on the same web page or place on another site.",
        answers:[
           {text:"&lt;link&gt;", correct: false },
           {text:"&lt;hyperlink&gt;", correct: false },
           {text:"&lt;a&gt;", correct: true },
           {text:"&lt;anchor&gt;", correct: false },

        ]
    },
    {
        question:"Text within Strong tag is displayed as_________",
        answers:[
           {text:"Indented", correct: false },
           {text:"Italic", correct: false },
           {text:"Bold", correct: true },
           {text:"List", correct: false },

        ]

    },
    {
        question:"In HTML, the correct way of commenting out something would be using:",
        answers:[
           {text:"## and #", correct: false },
           {text:"&lt;! -- and -- &gt;", correct: true },
           {text:"&lt;/- and -/-&gt;", correct: false },
           {text:"&lt;!- and -!&gt;", correct: false },

        ]

    },
    {
        question:"Which HTML tag is used to displayed this CO<sub>2</sub> in HTML page?",
        answers:[
           {text:"&lt;subscript&gt;", correct: false },
           {text:"&lt;sub&gt;", correct: true },
           {text:"&lt;down&gt;", correct: false },
           {text:"None of these", correct: false },

        ]
    },
    {
        question:"In HTML, the tags are_______",
        answers:[
           {text:"in upper case", correct: false },
           {text:"case-sensitive", correct: false },
           {text:"in lowercase", correct: false },
           {text:"not case sensitive", correct: true },

        ]
    },
    {
        question:"Which tag is used in HTML5 for the initialization of the document type?",
        answers:[
           {text:"&lt;! DOCTYPE html&gt;", correct: true },
           {text:"&lt;Doctype HTML&gt;", correct: false },
           {text:"&lt;DOCTYPE&gt;", correct: false },
           {text:"&lt;\Doctype html&gt;", correct: false },

        ]
    },
    {
        question:"Which tag is used to underline the text in HTML?",
        answers:[
           {text:"&lt;p&gt;", correct: false },
           {text:"&lt;underline&gt;", correct: false },
           {text:"&lt;u&gt;", correct: true },
           {text:"&lt;ul&gt;", correct: false },

        ]
    },
    {
        question:"Which attribute is not essential under &lt;iframe&gt;?",
        answers:[
           {text:"src", correct: false },
           {text:"height", correct: false },
           {text:"width", correct: false },
           {text:"frame border", correct: true },

        ]
    },
    {
        question:"What is the use of &lt;hr/&gt; tag in HTML?",
        answers:[
           {text:"For making content appearance italics", correct: false },
           {text:"To create horizontal rule between sections", correct: true },
           {text:"To create vertical rule between sections", correct: false },
           {text:"To create a line break", correct: false },

        ]
    },
    {
        question:"Which HTML tag is used to convert the plain text into italic format?",
        answers:[
           {text:"&lt;b&gt;", correct: false },
           {text:"&lt;p&gt;", correct: false },
           {text:"&lt;a&gt;", correct: false },
           {text:"&lt;i&gt;", correct: true },

        ]
    },
    {
        question:"Which tag is used to create a blank line in HTML?",
        answers:[
           {text:"&lt;br&gt;", correct: true },
           {text:"&lt;b&gt;", correct: false },
           {text:"&lt;em&gt;", correct: false },
           {text:"&lt;a&gt;", correct: false },

        ]
    },
    {
        question:"How to create a checkbox in HTML Form?",
        answers:[
           {text:"&lt;input type=”box”&gt;", correct: false },
           {text:"&lt;input type=”checkbox”&gt;", correct: true },
           {text:"&lt;input type=”check”&gt;", correct: false },
           {text:"&lt;input type=”smallbox”&gt;", correct: false },

        ]
    },
    {
        question:"Which tag is used to create a numbered list in HTML?",
        answers:[
           {text:"&lt;ol&gt;", correct: true },
           {text:"&lt;ul&gt;", correct: false },
           {text:"&lt;li&gt;", correct: false },
           {text:"&lt;numberlist&gt;", correct: false },

        ]
    },
    {
        question:"Which tag is used to create a dropdown in HTML Form?",
        answers:[
           {text:"&lt;input&gt;", correct: false },
           {text:"&lt;text&gt;", correct: false },
           {text:"&lt;select&gt;", correct: true },
           {text:"&lt;textarea&gt;", correct: false },

        ]
    },
    {
        question:"To show deleted text, which HTML element is used?",
        answers:[
           {text:"&lt;delete&gt;", correct: false },
           {text:"&lt;del&gt;", correct: true },
           {text:"&lt;deletetext&gt;", correct: false },
           {text:"&lt;textdeleted&gt;", correct: false },

        ]
    },
    {
        question:"Which of the following tag is used to create a text area in HTML form?",
        answers:[
           {text:"&lt;text&gt; &lt;/text&gt;", correct: false },
           {text:"&lt;input type=”text”/&gt;", correct: false },
           {text:"&lt;textarea&gt; &lt;/textarea&gt;", correct: true },
           {text:"&lt;input type=”textarea”/&gt;", correct: false },

        ]
    },
    {
        question:"Which of the following HTML tag is used to add a row in a table?",
        answers:[
           {text:"&lt;th&gt;", correct: false },
           {text:"&lt;td&gt;", correct: false },
           {text:"&lt;tt&gt;", correct: false },
           {text:"&lt;tr&gt;", correct: true },

        ]
    },
    {
        question:"In HTML, which attribute is used to create a link that opens in a new window tab?",
        answers:[
           {text:"src=”_blank”", correct: false },
           {text:"target=”_blank”", correct: true },
           {text:"alt=”newwindow”", correct: false },
           {text:"target=”_self”", correct: false },

        ]
    },
    {
        question:"Which character is used to represent when a tag is closed in HTML?",
        answers:[
           {text:"#", correct: false },
           {text:"/", correct: true },
           {text:"!", correct: false },
           {text:"\\", correct: false },

        ]
    },
    {
        question:"Which HTML tag is used to insert an image?",
        answers:[
           {text:"&lt;img src=”img.png”/&gt;", correct: true },
           {text:"&lt;img url=”img.png”/&gt;", correct: false },
           {text:"&lt;img link=”img.png”/&gt;", correct: false },
           {text:"&lt;img insert=”img.png”/&gt;", correct: false },

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

