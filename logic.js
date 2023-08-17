let ques = document.querySelector(".questxt");
let btn = document.querySelector(".btn");
let btntext = document.querySelector(".btntxt");
let options = document.querySelectorAll(".option");
let content=document.querySelector(".content")
const questions = [
    {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answers: [
            { text: "Whistle", correct: false },
            { text: "Echo", correct: true },
            { text: "Ghost", correct: false },
            { text: "Cloud", correct: false }
        ]
    },
    {
        question: "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
        answers: [
            { text: "They jumped out", correct: false },
            { text: "It's magic", correct: false },
            { text: "They all drowned", correct: false },
            { text: "All the people were married", correct: true }
        ]
    },
    {
        question: "What can you hold in your left hand but not in your right hand?",
        answers: [
            { text: "A pencil", correct: false },
            { text: "Your right hand", correct: true },
            { text: "A coin", correct: false },
            { text: "A book", correct: false }
        ]
    },
    {
        question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
        answers: [
            { text: "Coal", correct: false },
            { text: "Water", correct: false },
            { text: "Salt", correct: true },
            { text: "Gold", correct: false }
        ]
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        answers: [
            { text: "Footsteps", correct: true },
            { text: "Money", correct: false },
            { text: "Memories", correct: false },
            { text: "Work", correct: false }
        ]
    },
    {
        question: "What has keys but can't open locks?",
        answers: [
            { text: "Piano", correct: true },
            { text: "Keyboard", correct: false },
            { text: "Map", correct: false },
            { text: "Locksmith", correct: false }
        ]
    },
    {
        question: "I am not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
        answers: [
            { text: "Plant", correct: true },
            { text: "Fish", correct: false },
            { text: "Fire", correct: false },
            { text: "Ice", correct: false }
        ]
    },
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answers: [
            { text: "Letter 'M'", correct: true },
            { text: "Number 2", correct: false },
            { text: "Rainbow", correct: false },
            { text: "Leap year", correct: false }
        ]
    },
    {
        question: "I am always hungry, I must always be fed. The finger I touch will soon turn red. What am I?",
        answers: [
            { text: "Fire", correct: true },
            { text: "Vampire", correct: false },
            { text: "Monster", correct: false },
            { text: "Tiger", correct: false }
        ]
    },
    {
        question: "You can drop me from the tallest building and I'll be fine, but if you drop me in water I die. What am I?",
        answers: [
            { text: "Feather", correct: true },
            { text: "Stone", correct: false },
            { text: "Glass", correct: false },
            { text: "Metal", correct: false }
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

function showresult() {
    content.innerHTML = `<h3 class='fin'>Your Final score is ${score} out of ${questions.length} </h3> `;
    btntext.innerText = "Replay";

    btn.removeEventListener("click", nextbutton);
    btn.addEventListener("click", reloadPage); 
}

function reloadPage() {
    location.reload(); 
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
    if (questionnumber < questions.length-1 ) {
        nextbutton();
    } else {
        showresult()
    }
});

startq();
