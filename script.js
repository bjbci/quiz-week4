
var highScore=0
var newCount
var count =0
var scoreCount=0
var timerCount=20
var scoreContainer
 let currentQuestion
 let wins=0
 let losses=0

const questionBox =document.getElementById("question-box")//BOX CONTAINING QUESTIONS
console.log(questionBox)
const highScoreBox=document.getElementById("high-score")
const displayHighScoreValue=document.getElementById("display-high-score")
console.log(displayHighScoreValue)
const displayWins=document.getElementById("wins")
console.log(displayWins)
const displayLosses=document.getElementById("losses")
console.log(displayLosses)
const userScore=document.getElementById('user-score')     //BOX CONTAINING SCORE
console.log(userScore)
let nextButton=document.getElementById('next-button')     //NEXT BUTTON
console.log(nextButton)
var btnStart = document.getElementById("btnStart")        //START BUTTON
console.log(btnStart)
var abcd=document.getElementById("ABCD")
console.log(abcd)


//QUESTIONS ARRAY
let objectQuestions=[
  {
    question:"You can include JavaScript on an HTML page if it is written between:",
    options:["Script tags","Two pieces of rye bread", "Commercial breaks","The lines"],
    correct:"Script tags"
  },
{
    question: "A boolean is what kind of data type? ",
    options:["Primavera","Primary","Prim and proper","Primative"],
    correct:"Primative"
} ,  
{
    question: "An oject is a data type that is a collection of: ",
    options:["Properties","Railroads","Utilities","Hotels"],
    correct:"Properties"
},
{
    question:"Use this type of operator to determine if a number is odd or even: ",
    options:["modulus","smooth","telephone","surgeon"],
    correct:"modulus"
  },
  {
    question:"Use this method to determine the length of an array: ",
    options:[".length",".yardstick",".your arm",".make an educated guess"],
    correct:".length"
  },
  {
    question: "What captues a chunk of code to be reused in a program?",
    options:["federal marshall","butterfly net","function","screen shot"],
    correct:"function"
  },
  {
    question: "When writing an object, be careful not to forget the:",
    options:["commas","tickets","keys","to lock the door"],
    correct:"commas"
  },
  {
    question: "Which is the highest level of an objet? ",
    options:["peak","penthouse","CEO","window"],
    correct:"window"
  },
  {
    question: "An API is what? ",
    options:["Aplication Programming Interface","Any Possible Idea","All Purple Igloos","Artfully Placed Item"],
    correct:"Aplication Programming Interface"
  },
{
  question: "Week 4 homework is: ",
  options:["Gonna be a couple days late","An exercise in futility","A valuable learning experience","A lot of redundant code"],
  correct:"A valuable learning experience"
},
]  

init()
function init() {
  getWins();
  getLosses();
  displayHighScore()
}
btnStart.addEventListener('click', startQuiz)

function getWins() {
var displayWinsValue=localStorage.getItem("Wins")
displayWinsValue=JSON.parse(localStorage.getItem("Wins"))
console.log(displayWinsValue)
displayWins.innerText=displayWinsValue
}
function getLosses(){
var displayLossesValue=localStorage.getItem("Losses")
displayLossesValue=JSON.parse(localStorage.getItem("Losses"))
console.log(displayLossesValue)
displayLosses.innerText=displayLossesValue
}


function displayHighScore(){
  var displayHighScore=localStorage.getItem('High Score')
  displayHighScore=JSON.parse(localStorage.getItem('High Score'))
  console.log(displayHighScore)
  displayHighScoreValue.innerText=displayHighScore
}

function startQuiz() {
  isWin = false;
  timerCount > 0;
  // Prevents start button from being clicked when round is in progress
  btnStart.disabled = true;
  
  init()
  displayQuestions()
  startTimer()
}
// The init function is called when the page loads 
function highScoreDisplay(scoreCount){
  console.log(scoreCount)
 if(scoreCount > highScore){
   highScore=scoreCount
   highScoreBox.innerText=highScore
   localStorage.setItem('High Score','highScore')
 }
}

function endGame(){
  if(scoreCount >= 30){
    wins++
    console.log(wins)
    console.log('you are a winner')
    questionBox.innerText='You are a winner!'
  }else{
    losses++
    console.log(losses)
    console.log('you loose!')
    questionBox.innerText='You Looser!'
  }
  localStorage.setItem('High Score',JSON.stringify(scoreCount))
  localStorage.setItem("Wins",JSON.stringify(wins) )
  localStorage.setItem("Losses",JSON.stringify(losses))
}

let i=0
 function displayQuestions() {
 
   currentQuestion=objectQuestions[i]
   
   console.log('currentQuestion:',currentQuestion)
   console.log('objectQuestions[i].correct:',objectQuestions[i].correct)
   
   var quesTextParent=document.getElementById("question-box")
    var h2=document.createElement('h2')
    h2.innerText=objectQuestions[i].question
    quesTextParent.append(h2)
    
    var h3A=document.createElement('button')
    console.log(h3A)
    h3A.addEventListener('click',buttonA)
    h3A.innerText=objectQuestions[i].options[0]
    abcd.appendChild(h3A) 
    
    var h3B=document.createElement('button')
    h3B.addEventListener('click',buttonB)
    h3B.innerText=objectQuestions[i].options[1]
    abcd.appendChild(h3B)
   
    
    var h3C=document.createElement('button')
    h3C.addEventListener('click',buttonC)
    h3C.innerText=objectQuestions[i].options[2]
    abcd.appendChild(h3C)
    
    
    var h3D=document.createElement('button')
    h3D.addEventListener('click',buttonD)
    h3D.innerText=objectQuestions[i].options[3]
    abcd.appendChild(h3D)
    
    function buttonA(){
      
      buttonPressed="A"
      console.log(buttonPressed)
      console.log("Button A pressed")
      
      if(objectQuestions[i].options[0]===objectQuestions[i].correct){
        scoreCount +=5
        console.log('Correct answer')
        console.log(scoreCount)
        i++
        questionBox.innerText=" "
        abcd.innerText=" "
        console.log(currentQuestion)
        console.log(objectQuestions.length)
        if(i < objectQuestions.length){
          displayQuestions()
        }else{
          endGame()
        }
      }else{
        scoreCount -=2
        console.log('wrong Answer')
        console.log(scoreCount)
        i++
        questionBox.innerText=" "
        abcd.innerText=" "
        if(i < objectQuestions.length){
          displayQuestions()
        }else{
          endGame()
        }
      }
    }
    
    function buttonB(){
      
      buttonPressed="B"
      console.log(buttonPressed)
      console.log("button B pressed")
      if(objectQuestions[i].options[1]===objectQuestions[i].correct){
        scoreCount +=5
        console.log('Correct answer')
        console.log(scoreCount)
        i++
        questionBox.innerText=" "
        abcd.innerText=" "
       
        if(i < objectQuestions.length){
          displayQuestions()
        }else{
          endGame()
        }
      }else{
        scoreCount -=2
        console.log('wrong Answer')
        console.log(scoreCount)
        i++
        questionBox.innerText=" "
        abcd.innerText=" "
        
        if(i < objectQuestions.length){
          displayQuestions()
        }else{
          endGame()
        }
      }
    }
    function buttonC(){
      
      buttonPressed="C"
      console.log(buttonPressed)
      console.log("button C pressed")
      if(objectQuestions[i].options[2]===objectQuestions[i].correct){
        scoreCount +=5
        console.log('Correct answer')
        console.log(scoreCount)
        i++
        questionBox.innerText=" "
        abcd.innerText=" "
        
        if(i < objectQuestions.length){
          displayQuestions()
        }else{
          endGame()
        }
      }else{
        scoreCount -=2
        console.log('wrong Answer')
        console.log(scoreCount)
        i++
        questionBox.innerText=" "
        abcd.innerText=" "
        
        if(i < objectQuestions.length){
          displayQuestions()
        }else{
          endGame()
        }
      }
    }
    
    function buttonD(){
      
      buttonPressed="D"
      console.log(buttonPressed)
      console.log("button D pressed")
      if(objectQuestions[i].options[3]===objectQuestions[i].correct){
        scoreCount +=5
        console.log('Correct answer')
        console.log(scoreCount)
        i++
        questionBox.innerText=" "
        abcd.innerText=" "
        
        if(i < objectQuestions.length){
          displayQuestions()
        }else{
          endGame()
        }
      }else{
        scoreCount -=2
        console.log('wrong Answer')
        console.log(scoreCount)
        i++
        questionBox.innerText=" "
        abcd.innerText=" "
        
        if(i < objectQuestions.length){
          displayQuestions()
        }else{
          endGame()
        }
      }
    }
    userScore.innerText=scoreCount
    highScoreDisplay(scoreCount)
 return userScore
}



var timerEl=document.getElementById("counterseconds")

var newCountDisplay=document.createElement('h3')
 newCountDisplay.innerText= timerCount
 
 
 //The setTimer function starts and stops the timer and triggers winGame() and loseGame()
 function startTimer() {
   // Sets timer
  const timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    console.log("countdown running")
    if (timerCount === 0) {
      clearInterval(timer)
      timerEl.textContent="you win!"
      

    }// Tests if win condition is met
    if (timerCount === 0) {
      clearInterval(timer)
      timerEl.textContent="you loose"
      
      }  // winGame()
    } ,1000)
    }



// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

 
 

