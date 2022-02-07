function check(){
    var c = 0; //c means correct answer
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var result=document.getElementById('result');
    var quiz = document.getElementById('quizForm')
    if(q1 == "B"){c++}
    if(q2 == "B"){c++}
    if(q3 == "C"){c++}
    if(q4 == "C"){c++}
    if(q5 == "C"){c++}


    quiz.style.display = "none";
    var finalAnswer = c*20; //multiply by 20 to get 100%


     if(finalAnswer >= 80){
        result.textContent = "Your Score is: " + finalAnswer +"%"+" EXCELLENT!";
    }
    else if(finalAnswer>=50&&finalAnswer<80){
        result.textContent = "Your Score is: " + finalAnswer +"%"+" FAIRLY DONE!";
    }
    else if(finalAnswer<50){
        result.textContent = "Your Score is: " + finalAnswer +"%"+" POORLY DONE! Repeat the TEST";
    }     
}
function checkQuiz(){
    var a = document.forms["quiz"]["question1"].value;
    var b = document.forms["quiz"]["question2"].value;
    var c = document.forms["quiz"]["question3"].value;
    var d = document.forms["quiz"]["question4"].value;
    var e = document.forms["quiz"]["question5"].value;
    if (!a || !b ||!c || !d || !e) {
      alert("Please Fill All Required Fields");
      return false;
    }
 }