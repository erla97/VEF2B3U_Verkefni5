//Liður 6
var startltem = document.getElementsByTagName('ul');
var nextItem = startltem.nextSibling;
document.getElementById("demo").innerHTML = nextItem; 

//Liður 7
var question1 = {
	question: "How many seasons are there of The Office US.?",
	options: [7, 8, 9, 10],
	answer: 9
}

var question2 = {
	question: "If you cry in space the tears just stick to your face",
	options: ["True", "False"],
	answer: "True"
}

document.getElementById("q1text").innerHTML += question1.question;
document.getElementById("q1btn1").innerHTML = question1.options[0];
document.getElementById("q1btn2").innerHTML = question1.options[1];
document.getElementById("q1btn3").innerHTML = question1.options[2];
document.getElementById("q1btn4").innerHTML = question1.options[3];

document.getElementById("q2text").innerHTML += question2.question;
document.getElementById("q2btn1").innerHTML = question2.options[0];
document.getElementById("q2btn2").innerHTML = question2.options[1];