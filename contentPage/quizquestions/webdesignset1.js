const questions=[
    {
        question:"HTML stands for________?",
        answers:[
           {text:"Hyper Text Markup Language", correct: true },
           {text:"Hyper Text Machine Language", correct: false },
           {text:"Hyper Text Marking Language", correct: false },
           {text:"High Text Marking Language", correct: false },

        ]
    },
    {
        question:"Which of the following tag is used for inserting the largest heading in HTML?",
        answers:[
           {text:"&lt;head&gt;", correct: false },
           {text:"&lt;h1&gt;", correct: true },
           {text:"&lt;h6&gt;", correct: false },
           {text:"&lt;heading&gt;", correct: false },

        ]

    },
    {
        question:"Can I play audios in HTML?",
        answers:[
           {text:"True", correct: true },
           {text:"False", correct: false },
        //    {text:"Elephant", correct: true },
        //    {text:"Giraffe", correct: false },

        ]

    },
    {
        question:"Which of these tags are all &lt;table&gt; tags?",
        answers:[
           {text:"&lt;table&gt; &lt;head&gt; &lt;td&gt;", correct: false },
           {text:"&lt;table&gt; &lt;tr&gt; &lt;td&gt;", correct: true },
           {text:"&lt;table&gt; &lt;tr&gt; &lt;tt&gt;", correct: false },
           {text:"&lt;thead&gt; &lt;body&gt; &lt;tr&gt;", correct: false },

        ]
    },
    {
        question:"What is the correct HTML for creating a hyperlink?",
        answers:[
           {text:"&lt;a name=””&gt; A &lt;/a&gt; ", correct: false },
           {text:"&lt;a&gt; B &lt;/a&gt;", correct: false },
           {text:"&lt;a href=”https://www.example.com”&gt; click &lt;/a&gt;", correct: true },
           {text:"&lt;a url=”https://www.example.com”&gt; click &lt;/a&gt;", correct: false },

        ]
    },
    {
        question:"Which tag is a container?",
        answers:[
           {text:"&lt;body&gt;", correct: true },
           {text:"&lt;br&gt;", correct: false },
           {text:"&lt;hr&gt;", correct: false },
           {text:"&lt;td&gt;", correct: false },

        ]
    },
    {
        question:"What is cell padding?",
        answers:[
           {text:"Used to separate cell walls from their contents", correct: true },
           {text:"Used to set space between cells", correct: false },
           {text:"Used to provide width to a cell", correct: false },
           {text:"Both A and B above", correct: false },

        ]
    },
    {
        question:"What attribute is used to specify number of rows?",
        answers:[
           {text:"rownum", correct: false },
           {text:"rownumb", correct: false },
           {text:"rn", correct: false },
           {text:"rowspan", correct: true },

        ]
    },
    {
        question:"How can we resize the image?",
        answers:[
           {text:"By size attribute", correct: false },
           {text:"By height & width", correct: true },
           {text:"By resize attribute", correct: false },
           {text:"By rs attribute", correct: false },

        ]
    },
    {
        question:"It is possible to display pictures in HTML specification by using the tag",
        answers:[
           {text:"&lt;GR src=”imgfile”&gt;", correct: false },
           {text:"&lt;PIC src=”imgfile”&gt;", correct: false },
           {text:"&lt;GIF src=”imgfile”&gt;", correct: false },
           {text:"&lt;IMG src=”imgfile”&gt;", correct: true },

        ]
    },
    {
        question:"A Website’s home page is normally named home.html or homepage.html",
        answers:[
           {text:"FALSE", correct: true },
           {text:"TRUE", correct: false },
        //    {text:"CTRL + F8", correct: false },
        //    {text:"CTRL + F9", correct: false },

        ]
    },
    {
        question:"In &lt;img src=”image.png” alt=”This is image”&gt; alt is",
        answers:[
           {text:"A tag", correct: false },
           {text:"The Head", correct: false },
           {text:"The Body", correct: false },
           {text:"An attribute", correct: true },

        ]
    },
    {
        question:"&lt;iframe&gt; tag is used to display a webpage within a webpage.",
        answers:[
           {text:"FALSE", correct: false },
           {text:"TRUE", correct: true },
           {text:"Can't say", correct: false },
           {text:"May be", correct: false },

        ]
    },
    {
        question:"The HTML tags that create a table header are",
        answers:[
           {text:"&lt;head&gt; &lt;/head&gt;", correct: false },
           {text:"&lt;ttop&gt; &lt;/ttop&gt;", correct: false },
           {text:"&lt;th&gt;&lt;/th&gt;", correct: true },
           {text:"&lt;td&gt; &lt;/td&gt;", correct: false },

        ]
    },
    {
        question:"&lt;br&gt; tag is used for___",
        answers:[
           {text:"Underline", correct: false },
           {text:"Line Break", correct: true },
           {text:"Heading", correct: false },
           {text:"Horizontal row", correct: false },

        ]
    },
    {
        question:"HTML document is not start and end with which tag pairs?",
        answers:[
           {text:"HTML", correct: false },
           {text:"Body", correct: false },
           {text:"&lt;br&gt;", correct: true },
           {text:"Head", correct: false },

        ]
    },
    {
        question:"The extension of HTML file is",
        answers:[
           {text:".html", correct: false },
           {text:".htm", correct: false },
           {text:".xhtml", correct: false },
           {text:"A and B Both", correct: true },

        ]
    },
    {
        question:"TD tag is used for______row",
        answers:[
           {text:"Table", correct: false },
           {text:"Table Records", correct: true },
           {text:"Table Heading", correct: false },
           {text:"Row Heading", correct: false },

        ]
    },
    {
        question:"A______is a vertical collection of cells in a table.",
        answers:[
           {text:"Row", correct: false },
           {text:"Column", correct: true },
           {text:"Table Id", correct: false },
           {text:"None", correct: false },

        ]
    },
    {
        question:" A_______is the container/intersection where a row and column meet in a table.",
        answers:[
           {text:"row", correct: false },
           {text:"column", correct: false },
           {text:"cell", correct: true },
           {text:"table", correct: false },

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

