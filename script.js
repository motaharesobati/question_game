let url = 'https://hamsam.tvapps.ir/api/v1/questions'
let dataQuestion = ""

let questionNumber = 1;
fetch(url, { 
     method: 'GET',
     headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMjQwNmE5Y2UxMDEzNmQ0MWMzMzBjOTcxZWNlZDIwM2Y4MmRmZTJlMjdhMGRlOTNmZDg5M2NkMmRkY2IxYTFkZGZiMDRkYzA1ZDA4NDFkOTYiLCJpYXQiOjE3NDc0ODI4ODEuMzE1NjQ5LCJuYmYiOjE3NDc0ODI4ODEuMzE1NjUxLCJleHAiOjE3NzkwMTg4ODEuMzEyMDM5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.NYv_daS0gd8bDhwoQixH4tcwXsWM5XZZl9VvSTrb0PXFttyn6B5ppLt-rWhh0g7iqbLEIU2-rnlao2f7PdbqBDPKScKdz6FIG-Sd5GBO45yZKCgihsxdz0UCMjCGftiFY3X7bmVyW-ULcO9ob78CvSoSpIKLKjIdJXlVwwORhbDc7n4Vl7rJldnWASmLb6r8ulzmwAfGKF1otNpgh-jSGKr2ntorPy3m6DzuZv3mTctrTE7ed0h9Cxva8jd1Vm1shbTO9MSH1AxxZxdHz-c3X8gT9zIu0kbInxNVlIoSL3Ez6dSgEvBfVp1ns7TeBKtBGLPksso3Qvlk0bAhAZLlefnh-UXC4omf0AJu8hvzFQb_1fFDPBE0cg3zdibMYBH5n0T3warIcOOq491_RAKjb-_BhaRXJOxV-fqSaUrJKutACB3v3euykB6Shs0gOP564mP_tjjIDtNlWN5AO3L2YkNFQdnc7LZ9VlANhRw5LrFK3leqKUX-wPHZ9-ck0MMaC0kKxAcs7FQ1My0HvcsEM4jXLYGr7e60NN7uixUWnclSbyJbK65Cuj_nRZqUoxBUvj7bn2YwrtEOnbVbbbbFcS54YD5vjI_WttJYfcgPkL8jKhMcKQc0jggSO2ckRDDPfAT8_b8NnBbajb1jEd6sAhlx5iVYWEltXri2LxIQE2A'}
 
   }).then(response => 
      response.json().then(data => ({
          data: data,
          status: response.status
      })
  ).then(res => {
      dataQues = res.data.data
      if(dataQues.length === 0){
          let imagepopup = document.getElementById('imagepopup');
          imagepopup.style.display = 'block'
          let backgroundimagepopup = document.getElementById('backgroundimagepopup');
          backgroundimagepopup.style.display = 'block'
      }
      console.log(res.status, dataQues)
      quesAnswer (questionNumber,dataQuestion) 
  }));
     let parentOfImg = document.getElementById('general')
      function quesAnswer(numb){
          numb = numb -1

          let questions = document.getElementById('mainQuestion')     
          questions.innerHTML = (dataQues[numb]['question_text'])
          console.log("question_text"+dataQues[numb]['question_text']);
          let option1 = document.getElementById('option1')
          option1.innerHTML =  (dataQues[numb]['answers'][0]['answer_text'])

          let option2 = document.getElementById('option2')
          option2.innerHTML =  (dataQues[numb]['answers'][1]['answer_text'])

          let option3 = document.getElementById('option3')
          option3.innerHTML =  (dataQues[numb]['answers'][2]['answer_text'])

          let option4 = document.getElementById('option4')
          option4.innerHTML =  (dataQues[numb]['answers'][3]['answer_text'])
          var myvideo = document.getElementById("myVideo");
          let img = document.createElement('img');
          img.classList.add('image')
          myvideo.style.display = 'none'

          
          document.getElementById('mainQuestion').appendChild(img)
          answered = false
          timeLeft = 20;
     }


          let answered = false
          let correctAnswers = 0;
          let wrongAnswer = 0;
          function checkAnswer (option){
          let question_selected_id = dataQues[question_counter-1]['id']
          let question_selected_answer = dataQues[question_counter-1]['answers'][option-1]['id']
          if (answered) return;
          answered = true

     let urls = 'https://hamsam.tvapps.ir/api/v1/questions/answer'
     fetch(urls, { 
          method: 'POST',
          headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMjQwNmE5Y2UxMDEzNmQ0MWMzMzBjOTcxZWNlZDIwM2Y4MmRmZTJlMjdhMGRlOTNmZDg5M2NkMmRkY2IxYTFkZGZiMDRkYzA1ZDA4NDFkOTYiLCJpYXQiOjE3NDc0ODI4ODEuMzE1NjQ5LCJuYmYiOjE3NDc0ODI4ODEuMzE1NjUxLCJleHAiOjE3NzkwMTg4ODEuMzEyMDM5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.NYv_daS0gd8bDhwoQixH4tcwXsWM5XZZl9VvSTrb0PXFttyn6B5ppLt-rWhh0g7iqbLEIU2-rnlao2f7PdbqBDPKScKdz6FIG-Sd5GBO45yZKCgihsxdz0UCMjCGftiFY3X7bmVyW-ULcO9ob78CvSoSpIKLKjIdJXlVwwORhbDc7n4Vl7rJldnWASmLb6r8ulzmwAfGKF1otNpgh-jSGKr2ntorPy3m6DzuZv3mTctrTE7ed0h9Cxva8jd1Vm1shbTO9MSH1AxxZxdHz-c3X8gT9zIu0kbInxNVlIoSL3Ez6dSgEvBfVp1ns7TeBKtBGLPksso3Qvlk0bAhAZLlefnh-UXC4omf0AJu8hvzFQb_1fFDPBE0cg3zdibMYBH5n0T3warIcOOq491_RAKjb-_BhaRXJOxV-fqSaUrJKutACB3v3euykB6Shs0gOP564mP_tjjIDtNlWN5AO3L2YkNFQdnc7LZ9VlANhRw5LrFK3leqKUX-wPHZ9-ck0MMaC0kKxAcs7FQ1My0HvcsEM4jXLYGr7e60NN7uixUWnclSbyJbK65Cuj_nRZqUoxBUvj7bn2YwrtEOnbVbbbbFcS54YD5vjI_WttJYfcgPkL8jKhMcKQc0jggSO2ckRDDPfAT8_b8NnBbajb1jEd6sAhlx5iVYWEltXri2LxIQE2A',
               'Content-Type': 'application/json'
          },
          body: JSON.stringify({"question_id": question_selected_id, "answer_id": question_selected_answer})
     
     }).then(response => 
          response.json().then(data => ({
               data: data,
               status: response.status

          })
     ).then(res => {
          
          let answerData = res.data.data
          let correctOption = (answerData['correct'])
          if(correctOption == true){
               correctAnswers += 1;
               document.getElementById('option'+option).style.backgroundColor = '#8bc34a';
               document.getElementById('loadingGif').style.display = 'none'
          }else{
               wrongAnswer += 1;
               document.getElementById('option'+option).style.backgroundColor = 'red';
               document.getElementById('loadingGif').style.display = 'none'

               for(let i = 0; i < dataQues[question_counter-1]['answers'].length; i++){
                    if(dataQues[question_counter-1]['answers'][i]['id'] == (answerData['correct_answer_id'])){
                         console.log("id javab doros =" + (answerData['correct_answer_id']));
                         console.log('i = ' + i)
                         document.getElementById('option'+(i+1)).style.backgroundColor = '#8bc34a';
                    }

               }
          }     
     function resetOptionColors() {
          let options = document.querySelectorAll('.answer-button'); 
          options.forEach(option => {
               option.style.backgroundColor = 'black';

          });
               
          }
     myTimeout = setTimeout(myGreeting, 1000);
     function myGreeting() {
          resetOptionColors() 
          question_counter += 1
          quesAnswer (question_counter,dataQues)
     }
          document.getElementById("correctAnswers").innerHTML = toPersianNumbers(correctAnswers) ;    
          document.getElementById("wrongAnswer").innerHTML = toPersianNumbers(wrongAnswer) ;
          quesAnswer (questionNumber,dataQuestion)  
          
     }));
}


     function toPersianNumbers(number) {
          const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
          return number.toString().replace(/\d/g, (digit) => persianDigits[digit]);
     }
          let question_counter = 1
          let Allquestions = 10
          let totalQuestion = 20
          let general = document.getElementById("general")
          var timeLeft = 20;   
          let timerElement = document.getElementById('times');
          let currentIndex = 1;
          let countdown = setInterval(myTimer, 1000) 
     function myTimer(){
          timeLeft--; 
          timerElement.textContent = toPersianNumbers(timeLeft);
               if (timeLeft <= 0) {
               questionNumber = questionNumber+1
               question_counter += 1
               quesAnswer (questionNumber,dataQuestion)
               }
               if(questionNumber >= Allquestions){
                    clearInterval(countdown);
               }
   
               if(question_counter == totalQuestion){
                    document.getElementById('myPopup').style.display = 'block'
                    document.getElementById('backgroundofpopup').style.display = 'block'
                    //document.getElementById('container').style.display = 'block'
                    document.getElementById("resultOfCorrect").innerHTML = toPersianNumbers(correctAnswers)
                    document.getElementById("resultOfWrong").innerHTML = toPersianNumbers(wrongAnswer) ;
               }
                    document.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                    closePopup(); 
                    }
                    });
     }


               document.getElementById('option1').style.border = '1px solid'
               document.addEventListener('keydown', function(event) {
               if(event.key == "ArrowDown"){
                    if (currentIndex < 4){
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
               }
               if(event.key == 'ArrowUp'){
                    if (currentIndex > 1){
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
               } 
               if(event.key == 'Enter'){
               checkAnswer(currentIndex)
               document.getElementById('loadingGif').style.display = 'block'
               questionNumber = questionNumber+1
               }
               })
          function closePopup() {
               const popup = document.getElementById("myPopup"); 
               if (popup) {
               popup.style.display = "none"; 
               }
          }


/*
          function scorepage(){
               fetch('https://hamsam.tvapps.ir/api/v1/score/list', {
                 headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYTJhYjgwYzU2ZjhhYzQ5NThmMWFlZjM4NTM5OGY2MjMwNTFmMjIyMDVlNGU0ZTFmOTc4MTZiZTJmMzkxOTdkMjNhNzk2M2VhNzgxNzA4ZmEiLCJpYXQiOjE3MzMwNDk5NDguODg4MzA2LCJuYmYiOjE3MzMwNDk5NDguODg4MzExLCJleHAiOjE3NjQ1ODU5NDguODgxODIzLCJzdWIiOiIyNDUiLCJzY29wZXMiOlsiV2ViIl19.NXuBN-lY8FrVTmQ6nFF0Zo7D-f-V66dnHY-qfVBtjS6FTgztcBqioWOWIZPoiHOdl5DJ7j0xi5H0G1XhziFwZSAU7IKW9ke1iRSD6KIeT8FA4lJ60VM03vLKGU24lcRLd_PCByqL2gAEbHOUmrXzNg6uYWm6Zh_LX8QgrraHCkuc62suLrli1Ium6Sd7G70MD9VwLCpsV52gkV4TstFUr4jbKtlRE2i_2PmjDT4EA-0COrXhTsPDyIRhjbiwsKfspA8aouciwU_uHaXQ2RGpYrRyDflS72qGc82jkmi79FID8E__IdSn12VkYXVqQtJPvpG8R1ttENfkCoXrTvHMNEAFK2DL11F13smDAVbo1-IGOXFaj6F86AGXEHr7WmmUq8r6vgtpZ6Lcly4IJwFdxMx-CbOLDGAqokhsKOxw1iGitZzk0EN6v7SB0qG621CCmi_XthQA8oZJrmHFElKpc742ZjO-lf85uGgrNYpXpURNp-_rHd62-l_POqz_JV8_Cei8w1fCLgJo-E52k3_dOAd2a4jb6NDu0Lg2jk6j_pto0LQkpbSW0Erl_-4kvRnoox1BFNtHo-UmBIJxa6a3oHD8CSyyjJ0cyzyr1lk4t9jD0lU590RjBGOCF7k_2k-1pc9RU2RgP0JEHHoRj5MT5SSsGV2WDuzpwypWE6D40Vo'}
               })
               .then(function(responses) {return responses.json(); })
                 .then(function(json){
           
                   let container = document.getElementById('container');
                   function createBoxes() {
                       for(let  i = 0; i < json.data.data.length; i++){
                           let box = document.createElement('div');
                           box.classList.add('box')
                           let picpfimg = document.createElement('img');
                               picpfimg.src = './2815428ss.png'
                               picpfimg.classList.add('imageContainer','col-md-2')
                               box.appendChild(picpfimg)
                           let username = document.createElement("div")
                               username.innerHTML = (json['data']['data'][i]['username'])
                               username.classList.add("username",'col-md-2','m-2');
                               box.appendChild(username)
                           let rank = document.createElement('div')
                               rank.innerHTML = ( 'رتبه:' + json['data']['data'][i]['rank'])
                               rank.classList.add('rank','col-md-3','m-2')
                               box.appendChild(rank)
                           let score = document.createElement('div')
                               score.innerHTML = ('امتیاز کسب شده:' + json['data']['data'][i]['score'])
                               score.classList.add('score','col-md-4','m-2')
                               box.appendChild(score)
                               container.appendChild(box);
           
                       }
                           
                           
                   }createBoxes()

           
           
                     
               
                     
                       let generalColumn = document.getElementById("generalcol")
                       if(generalColumn){
                       generalColumn.appendChild(container)
                       }
                   
                   
                 })
               }
               scorepage()

    
            */