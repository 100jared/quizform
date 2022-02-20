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

    if (q1==""||q2==""||q3==""||q4==""||q5=="") {
        alert("Please Fill All Required Fields");
        return false;
      }

    quiz.style.display = "none";
    var totalVal = c*20; //multiply by 20 to get 100%


     if(totalVal >= 80){
        result.textContent = "Your Score is: " + totalVal +"%"+" EXCELLENT!";
    }
    else if(totalVal>=50&&totalVal<80){
        result.textContent = "Your Score is: " + totalVal +"%"+" FAIRLY DONE!";
    }
    else if(totalVal<50){
        result.textContent = "Your Score is: " + totalVal +"%"+" POORLY DONE! Repeat the TEST";
    }     
}

    // function checkQuiz(){
    //     var a = document.forms["quiz"]["question1"].value;
    //     var b = document.forms["quiz"]["question2"].value;
    //     var c = document.forms["quiz"]["question3"].value;
    //     var d = document.forms["quiz"]["question4"].value;
    //     var e = document.forms["quiz"]["question5"].value;
    //     if (a==""||b==""||c==""||d==""||e=="") {
    //       alert("Please Fill All Required Fields");
    //       return false;
    //     }
    //  }
 
