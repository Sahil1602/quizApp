// var answerList = [];



function quizObj(obj){

    var quizWrap = document.createElement('div');


    var question = document.createElement('h2');
    question.innerHTML= 'Q' + obj.id + '. ' + obj.question;
    quizWrap.appendChild(question);


    for(var i=0; i < obj.options.length; i++){
        var optWrap = document.createElement('label');
        optWrap.className = 'quiz-opt-wrap';


        var radioBtn = document.createElement('input');
        radioBtn.className = 'quiz-opt';
        radioBtn.type = 'radio';
        radioBtn.name = 'question' + obj.id;
        radioBtn.value = 'option' + (i + 1);
        optWrap.appendChild(radioBtn);
        // console.log(optWrap);

        var label = document.createTextNode(obj.options[i]);
        optWrap.appendChild(label);
        optWrap.appendChild(document.createElement('br'))
        optWrap.onclick = function(e){
            // console.log('question' + obj.id + ' ' + 'option' + (i+1) + ' ' + 'clicked');
            
            if(e.target.name !== undefined){
                console.log(e.target.name + ' ' + e.target.value);
                // mainForm.onsubmit = function(){
                //     console.log(answerList);
                // }
                
            }
            
        }
        
        quizWrap.appendChild(optWrap);

    }

    return quizWrap;
}



/* <div id="quiz-wrap">
                <h2>this is a dummmmy questionnn 1......</h2>
                <label class="quiz-opt-wrap">
                    <input class="quiz-opt" type="radio" name="question1" value="option1" /> option1<br>
                </label>
                <label class="quiz-opt-wrap">
                    <input class="quiz-opt" type="radio" name="question1" value="option2" /> option2<br>
                </label>
                <label class="quiz-opt-wrap">
                    <input class="quiz-opt" type="radio" name="question1" value="option3" /> option3<br>
                </label>
                <label class="quiz-opt-wrap">
                    <input class="quiz-opt" type="radio" name="question1" value="option4" /> option4<br>
                </label>  
            </div> */   

var xhr = new XMLHttpRequest()

xhr.open('GET', 'http://5d76bf96515d1a0014085cf9.mockapi.io/quiz', true)

xhr.send()

var mainForm = document.getElementById('quiz-form');
xhr.onreadystatechange = function(){
    if(this.readyState === 4){
        // console.log(JSON.parse(this.responseText));
        var response = JSON.parse(this.responseText);

        var submitBtn = document.getElementById('sub-btn');

        for(i=0; i<response.length; i++){
           mainForm.insertBefore(quizObj(response[i]), mainForm.lastElementChild);
        }
    }    
}

mainForm.addEventListener('submit', function(e){
    e.preventDefault();
})
