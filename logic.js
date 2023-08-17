let ques = document.querySelector(".questxt");
let btn = document.querySelector(".btn");
let btntext = document.querySelector(".btntxt");
let options = document.querySelectorAll(".option");
const questions = [
    {
        question: "What is the full form of HTML",
        answers: [
            { text: "hamba tamba markup language", correct: false },
            { text: "hit tati mar lang", correct: false },
            { text: "random testing horhi", correct: false },
            { text: "HYpertext markup language", correct: true }
        ]
    },
    {
        question: "terese puchi ?",
        answers: [
            { text: "haan", correct: false },
            { text: "nah", correct: false },
            { text: "hain", correct: false },
            { text: "urey bhai", correct: true }
        ]
    }
];
let questionnumber = 0;
let score = 0;
let correctans;

function startq() {
    questionnumber = 0;
    score = 0;
    btntext.innerHTML = "Next";
    showques();
}

function showques() {
    let currentquestion = questions[questionnumber];
    let quesno = questionnumber + 1;
    ques.innerText = quesno + ". " + currentquestion.question;
    

    currentquestion.answers.forEach((ans, index) => {
        let cbtn = options[index];
        cbtn.innerHTML = ans.text;
        if (ans.text) {
            
            cbtn.dataset.correct=ans.correct;
            
        }
        cbtn.addEventListener("click", checkans);
    });
}

function checkans(e) {
    const selectedbtn = e.target;
    btn.style.display = "block";
    const iscorrect = selectedbtn.dataset.correct == "true";

    if (iscorrect) {
        selectedbtn.classList.add("correct");
    } else {
        selectedbtn.classList.add("incorrect");
    }

    options.forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}




startq();
showques();
