const url = 'data.json'
let dataQuestion = ""

let questionNumber = 1;

fetch(url, { 
    method: 'GET'
  })
  .then(function(response) { return response.json(); })
  .then(function(json) {

     dataQuestion = json
     quesAnswer (questionNumber,dataQuestion)  
  })
  let parentOfImg = document.getElementById('general')

  function quesAnswer(numb, json){
    numb = numb -1

  let questions = document.getElementById('mainQuestion')
  questions.innerHTML = (json['data'][numb]['question'])
  console.log(json['data'][numb]['question']);

  let option1 = document.getElementById('option1')
  option1.innerHTML =  (json['data'][numb]['option1'])

  let option2 = document.getElementById('option2')
  option2.innerHTML =  (json['data'][numb]['option2'])

  let option3 = document.getElementById('option3')
  option3.innerHTML =  (json['data'][numb]['option3'])

  let option4 = document.getElementById('option4')
  option4.innerHTML =  (json['data'][numb]['option4'])

  var myvideo = document.getElementById("myVideo");
  let img = document.createElement('img');
  img.classList.add('image')
  myvideo.style.display = 'none'

  /*
  if((json['data'][numb]['image']) != null){
    img.src = (json['data'][numb]['image'])
    console.log(json['data'][numb]['image']);
  }*/

    if((json['data'][numb]['image']) != null){
     img.src = (json['data'][numb]['image'])
}else if((json['data'][numb]['video']) != null){
     myvideo.src = (json['data'][numb]['video'])
     myvideo.style.display = 'block';
     console.log(json['data'][numb]['video']);
}
  document.getElementById('mainQuestion').appendChild(img)
// clearTimeout(myTimeout);
     answered = false
    timeLeft = 20

}
let answered = false
let correctAnswers = 0;
let wrongAnswer = 0;
function checkAnswer (option){
     if (answered) return;
     answered = true

     let correctOption = (dataQuestion['data'][questionNumber-1]['answer'])
     if(option == correctOption){
          document.getElementById('option'+option).style.backgroundColor = '#8bc34a';

     }else{
          document.getElementById('option'+option).style.backgroundColor = 'red';
          document.getElementById('option' + correctOption).style.backgroundColor = '#8bc34a';
      //console.log(correctOption);
     }          

      myTimeout = setTimeout(myGreeting, 1000);
     function myGreeting() {
          
          questionNumber = questionNumber+1
          question_counter += 1
          document.getElementById('option'+option).style.backgroundColor = '#12131E'; 
          document.getElementById('option' + correctOption).style.backgroundColor =  '#12131E';
          quesAnswer (questionNumber,dataQuestion)
          //console.log(question_counter);
     }
     
     
     

     if (option === dataQuestion['data'][questionNumber-1]['answer']) {
          correctAnswers += 1;
      }
      document.getElementById("correctAnswers").innerHTML = toPersianNumbers(correctAnswers) ;
      if (option != dataQuestion['data'][questionNumber-1]['answer']) {
          wrongAnswer += 1;
      }
      document.getElementById("wrongAnswer").innerHTML = toPersianNumbers(wrongAnswer) ;

}


function toPersianNumbers(number) {
     const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
     return number.toString().replace(/\d/g, (digit) => persianDigits[digit]);
 }
let question_counter = 1
let Allquestions = 21
let totalQuestion = 21
let general = document.getElementById("general")
var timeLeft = 20;   
let timerElement = document.getElementById('times');
let currentIndex = 1;
let countdown = setInterval(myTimer, 1000) 

function myTimer(){
    timeLeft--; 
    timerElement.textContent = toPersianNumbers(timeLeft);
        if (timeLeft <= 0) {
       // timerElement.textContent = 0; 
       questionNumber = questionNumber+1
       question_counter += 1
       quesAnswer (questionNumber,dataQuestion)
    }
    if(questionNumber >= Allquestions){
     clearInterval(countdown);
}
     if(question_counter == totalQuestion){
          //alert('سوال ها تمام شد')
          document.getElementById('myPopup').style.display = 'block'
          document.getElementById('backgroundofpopup').style.display = 'block'
          document.getElementById("resultOfCorrect").innerHTML = toPersianNumbers(correctAnswers)
          document.getElementById("resultOfWrong").innerHTML = toPersianNumbers(wrongAnswer) ;

     }
     document.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
              closePopup(); 
          }
      });
     
     console.log(question_counter);   
  }


document.getElementById('option1').style.border = '1px solid'
document.addEventListener('keydown', function(event) {
     if(event.key == "ArrowLeft"){
          currentIndex += 1
          if(currentIndex == 2){
               document.getElementById('option'+currentIndex).style.border = '1px solid'
               document.getElementById('option1').style.border = 0
          }
          if(currentIndex == 3){
               document.getElementById('option'+currentIndex).style.border = '1px solid'
               document.getElementById('option2').style.border = 0
          }
          if(currentIndex == 4){
               document.getElementById('option'+currentIndex).style.border = '1px solid'
               document.getElementById('option3').style.border = 0
          }
     }
     if(event.key == 'ArrowRight'){
          currentIndex--
          if(currentIndex == 3){
              document.getElementById('option4').style.border = 0
               document.getElementById('option'+ currentIndex).style.border = '1px solid'
          }
          if(currentIndex == 2){
               document.getElementById('option3').style.border = 0
                document.getElementById('option'+ currentIndex).style.border = '1px solid'
           }
           if(currentIndex == 1){
               document.getElementById('option2').style.border = 0
                document.getElementById('option'+ currentIndex).style.border = '1px solid'
           }console.log(currentIndex);
     } 
     if(event.key == 'Enter'){
          checkAnswer(currentIndex)
     }

})
function closePopup() {
     const popup = document.getElementById("myPopup"); 
     if (popup) {
         popup.style.display = "none"; 
     }
 }