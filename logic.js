let ques=document.getElementsByClassName("questxt")[0]
let btn=document.getElementsByClassName("btn")[0]
let btntext=document.getElementsByClassName("btntxt")[0]
let option=document.getElementsByClassName("options")[0]
var counter =0;
 const questions=[{question : "What is the full form of HTML" , answers : [{text:"hamba tamba markup language"} ,{text : "hit tati mar lang"},{text : "random testing horhi"},{text : "HYpertext markup language"}]},
 {question : "terese puchi ?", answers : [{text:"haan"},{text:"nah"},{text:"hain"},{text:"urey bhai"}] }]
let questionnumber=0;
let score=0;
function startq() {
    questionnumber=0
score =0;
btntext.innerHTML="Next";
showques();



}
function showques()
{
    let currentquestion = questions[questionnumber]
    let quesno = questionnumber+1
    ques.innerText=quesno +" ."+currentquestion.question;

    currentquestion.answers.forEach((ans, index) => {
        var cbtn = document.getElementsByClassName("option")[index];
        cbtn.innerHTML = ans.text;
        
    })
    
}
startq();
showques();