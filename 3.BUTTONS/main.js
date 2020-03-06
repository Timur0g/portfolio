let button = document.getElementsByClassName('button-1');
let circle = document.getElementsByClassName('circle');

let ch = 0;
let intervalvar;



function interval() {
		intervalvar = setInterval(function() { 
		circle[0].style.transform = "rotateZ("+ ch +"deg)";
		circle[1].style.transform = "rotateZ("+ ch +"deg)";
		circle[2].style.transform = "rotateZ("+ ch +"deg)";
		circle[3].style.transform = "rotateZ("+ ch +"deg)";
		circle[4].style.transform = "rotateZ("+ ch +"deg)";
		circle[5].style.transform = "rotateZ("+ ch +"deg)";
		ch++;
		if (ch == 360) {
			ch=0;
		}
},30);
} 

button[0].addEventListener('mouseenter', function() {
	interval();
});

button[0].addEventListener('mouseleave', function() {
	clearInterval(intervalvar);
});






/*  circle[0].style.top ="0px";
	circle[0].style.left ="340px";*/