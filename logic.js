let ques = document.querySelector(".questxt");
let btn = document.querySelector(".btn");
let btntext = document.querySelector(".btntxt");
let options = document.querySelectorAll(".option");
let content=document.querySelector(".content")
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

    options.forEach((cbtn, index) => {
        cbtn.innerHTML = currentquestion.answers[index].text;
        cbtn.dataset.correct = currentquestion.answers[index].correct;
        cbtn.classList.remove("correct", "incorrect");
        cbtn.disabled = false;
        cbtn.removeEventListener("click", checkans);
        cbtn.addEventListener("click", checkans);
    });
}

function nextbutton() {
    questionnumber += 1;
    showques();
    
}
function showresult()
{
    content.innerHTML = "<h3 class='fin'>Your Final score is </h3>" + score + "<h3 class='fin'> out of </h3>" + questions.length;
    btntext.innerText = "Replay";
    btn.removeEventListener("click", nextbutton); // Removing the nextbutton listener
    btn.addEventListener("click", startq);
}

function checkans(e) {
    const selectedbtn = e.target;
    btn.style.display = "block";
    const iscorrect = selectedbtn.dataset.correct === "true";

    if (iscorrect) {
        score+=1;
        selectedbtn.classList.add("correct");
    } else {
        selectedbtn.classList.add("incorrect");
    }

    options.forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}

btn.addEventListener("click", () => {
    if (questionnumber < questions.length ) {
        nextbutton();
    } else {
        showresult()
    }
});

startq();
