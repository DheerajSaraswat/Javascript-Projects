const startButton = document.getElementById("start");
startButton.addEventListener("click", quiz, false);
const title = document.getElementById("title");
const card = document.querySelector(".card");
const quizQue = document.getElementById("quiz");
const option = document.getElementById('optionButtons')
const submit = document.getElementById('submit')
const next = document.getElementById('next')
const but = document.querySelector('.but')
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const question = document.querySelector('#ques')
const div = document.createElement('div')
const body = document.querySelector('body')

const questions = [
  {
    question: "1. What is typeof of NaN?",
    options: ["NaN", "number", "undefined", "null"],
    answer: "number",
  },
  {
    question: "2. console.log(String.raw`HelloTwitter\tworld`);",
    options: [
      "HelloTwitterworld",
      "HelloTwitter world",
      "HelloTwitter\tworld",
      "Hello Twitter world",
    ],
    answer: "HelloTwitter\tworld",
  },
  {
    question: "3. console.log(typeof typeof 1);",
    options: ["string", "number", "1", "true"],
    answer: "string",
  },
  {
    question: "4. console.log(3 > 2 > 1);",
    options: ['true', 'false', 'undefined', 'Error'],
    answer: 'false'
  },
  {
    question: "5. What sort of language Javacript is?",
    options: ['Statically Typed', 'Dynamically Typed', 'Bothe','None'],
    answer: 'Dynamically Typed'
  },
];

let answerChecker = 0;
let checker = true;
let count = 1
let score = 0
let ans = ''
let nextListener
function quiz() {
  startButton.style.visibility = 'hidden'
  next.style.visibility = "visible";
  submit.style.visibility = "visible";
  option.addEventListener('click', (e)=>{
    for( let i = 1; i<=4; i++){
        if(i == e.target.id.at(6)){
            document.querySelector(`#${e.target.id}`).style.backgroundColor = '#001e4d'
            document.querySelector(`#${e.target.id}`).style.color =
              "#fff";
            ans = e.target
            // console.log(ans);
            submit.addEventListener(
              "click",
              checkAns,
              false
            );
        } else {
            document.querySelector(`#option${i}`).style .backgroundColor = '#fff'
            document.querySelector(`#option${i}`).style.color = "#001e4d";
        }
    }
  } ,false)

}
let some = true
function checkAns(){
      console.log(ans);
      if (ans.innerHTML === questions[answerChecker].answer) {
        document.querySelector(`#${ans.id}`).style.backgroundColor =
          "rgb(10, 132, 10)";
        if(some){
          score+=1;
          some = false
        }
        if (nextListener) {
          next.removeEventListener('click', nextListener, false);
          // console.log(score);
        }
        nextListener = () => {
          answerChecker += 1;
          nextQuestion();
          some = true
        };
        if(answerChecker===4){
          next.innerHTML = 'See Result'
          next.addEventListener('click', ()=>{
            card.remove()
            
            div.innerHTML = `Your score is ${score}`
            div.style.color = '#fff'
            div.style.fontSize = '48px'
            
            document.body.appendChild(div)
          } ,false)
        } else {
          next.addEventListener("click", nextListener, false);
        }
        
      } else {
        //   console.log("hey");
        document.querySelector(`#${ans.id}`).style.backgroundColor =
          "rgb(205, 101, 101)";
          some = false
      }
    
}
function nextQuestion(){
    reset()
    question.innerHTML = questions[answerChecker].question;
    option1.innerHTML = questions[answerChecker].options[0];
    option2.innerHTML = questions[answerChecker].options[1];
    option3.innerHTML = questions[answerChecker].options[2];
    option4.innerHTML = questions[answerChecker].options[3];
}
function reset(){
    option1.style.backgroundColor = "#fff";
    option2.style.backgroundColor = "#fff";
    option3.style.backgroundColor = "#fff";
    option4.style.backgroundColor = "#fff";
    option1.style.color = "#001e4d";
    option2.style.color = "#001e4d";
    option3.style.color = "#001e4d";
    option4.style.color = "#001e4d";
}