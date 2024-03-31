const questions=[
    {
        question:"Major Component of IoT is/are __________.",
        answers:[
           {text:"Sensors", correct: false },
           {text:"Actuators", correct: false },
           {text:"Smart Applications", correct: false },
           {text:"All of the Above", correct: true },

        ]
    },
    {
        question:"Which of the following is used to capture data from the physical world in IoT devices ?",
        answers:[
           {text:"Actuators", correct: false },
           {text:"Microprocessors", correct: false },
           {text:"Microcontrollers", correct: false },
           {text:"Sensors", correct: true },

        ]

    },
    {
        question:"TCP stands for :",
        answers:[
           {text:"Transmission and Communication Protocol", correct: false },
           {text:"Temperature Control Protocol", correct: false },
           {text:"Telecommunication Control Protocol", correct: false },
           {text:"Transmission Control Protocol", correct: true },

        ]

    },
    {
        question:"__________ is heart of Computer system.",
        answers:[
           {text:"Memory", correct: false },
           {text:"I/O", correct: false },
           {text:"Counter", correct: false },
           {text:"Processor", correct: true },

        ]
    },
    {
        question:"An IoT network is a collection of__________devices.",
        answers:[
           {text:"Signal", correct: false },
           {text:"Machine to machine", correct: false },
           {text:"Network", correct: false },
           {text:"Interconnected", correct: true },

        ]
    },
    {
        question:"What is the full form of the MQTT?",
        answers:[
           {text:"Multi-Queue Telemetry Things", correct: false },
           {text:"Multiple Queue Telemetry Things", correct: false },
           {text:"Message Queue Telemetry Transport", correct: true },
           {text:"Message Queue Telemetry Things", correct: false },

        ]
    },
    {
        question:"The IoT networks that has a very short range is :?",
        answers:[
           {text:"Short-range Wireless Network", correct: true },
           {text:"WAN", correct: false },
           {text:"LAN", correct: false },
           {text:"Fox", correct: false },

        ]
    },
    {
        question:"Which memory storage is widely used in Embedded Systems ?",
        answers:[
           {text:"EEPROM", correct: false },
           {text:"Flash memory", correct: false },
           {text:"DRAM", correct: true },
           {text:"SRAM", correct: false },

        ]
    },
    {
        question:"What is the full form of the LPWAN?",
        answers:[
           {text:"Low Power Wide Area Network", correct: true },
           {text:"Low Protocol Wide Area Network", correct: false },
           {text:"Long Protocol Wide Area Network", correct: false },
           {text:"Long Power Wide Area Network", correct: false },

        ]
    },
    {
        question:"What is the main purpose of WoT (Web of Things) in the IoT?",
        answers:[
           {text:"Increase the cost", correct: false },
           {text:"Complex the development", correct: false },
           {text:"Reduce the security", correct: false },
           {text:"Improve the usability and interoperability", correct: true },

        ]
    },
    {
        question:"What is the Arduino UNO?",
        answers:[
           {text:"Hardware device", correct: true },
           {text:"Software", correct: false },
           {text:"Network", correct: false },
           {text:"Protocol", correct: false },

        ]
    },
    {
        question:"______ allows the user to control electronic components.",
        answers:[
           {text:"Android API", correct: false },
           {text:"RETful API", correct: true },
           {text:"MQTT API", correct: false },
           {text:"CoAP API", correct: false },

        ]
    },
    {
        question:"Which one of the following protocols is lightweight?",
        answers:[
           {text:"IP", correct: false },
           {text:"HTTP", correct: false },
           {text:"MQTT", correct: true },
           {text:"CoAP", correct: false },

        ]
    },
    {
        question:"What is the full form of IANA?",
        answers:[
           {text:"International-Aid-for-Network-Authority", correct: false },
           {text:"Internet-Association-Numbers-Authority", correct: false },
           {text:"Internet-Assigned-Numbers-Authority", correct: true },
           {text:"Inter-Assessment-Number-Access", correct: false },

        ]
    },
    {
        question:"What is the standard port number of secure MQTT?",
        answers:[
           {text:"1883", correct: false },
           {text:"8000", correct: false },
           {text:"8883", correct: true },
           {text:"8888", correct: false },

        ]
    },
    {
        question:"What is the full form of HDLC?",
        answers:[
           {text:"Higher Data Level Communication", correct: false },
           {text:"Higher Data Link Communication", correct: false },
           {text:"High Data Level Control", correct: false },
           {text:"High-level Data Link Control", correct: true },

        ]
    },
    {
        question:"The term Internet of Things was invented by_____",
        answers:[
           {text:"James John", correct: false },
           {text:"Mack", correct: false },
           {text:"William Derl", correct: false },
           {text:"Kevin Ashton", correct: true },

        ]
    },
    {
        question:"Which of the following is not a Layer of IoT?",
        answers:[
           {text:"Transport Layer", correct: true },
           {text:"Perception Layer", correct: false },
           {text:"Network Layer", correct: false },
           {text:"Business Layer", correct: false },

        ]
    },
    {
        question:"How many Levels are mainly present in IoT?",
        answers:[
           {text:"Seven", correct: false },
           {text:"Four", correct: false },
           {text:"Six", correct: true },
           {text:"Ten", correct: false },

        ]
    },
    {
        question:"Centralized Controller is present in which Level of IoT?",
        answers:[
           {text:"Level 6", correct: true },
           {text:"Level 4", correct: false },
           {text:"Level 5", correct: false },
           {text:"Level 4", correct: false },

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

