submitBtn.onclick = function(){
    var q1 = document.getElementById("addressInput");
    console.log(q1.value);
    var q2 = document.getElementById("pStatusInput");
    console.log(q2.value);
    var q3 = document.getElementById("ttInput");
    console.log(q3.value);
    var q4 = document.getElementById("failuresInput");
    console.log(q4.value);
    var q5 = document.getElementById("higherEdInput");
    console.log(q5.value);
    var q6 = document.getElementById("motherJobInput");
    console.log(q6.value);
    var q7 = document.getElementById("fatherJobInput");
    console.log(q7.value);
    var q8 = document.getElementById("reasonInput");
    console.log(q8.value);

    formAnswers = [q1.value, q2.value, q3.value, q4.value, q5.value, q6.value, q7.value, q8.value];
    console.log(formAnswers);
};


