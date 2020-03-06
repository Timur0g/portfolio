let button = document.getElementsByClassName('button-1');
let circle = document.getElementsByClassName('circle');

let ch = 0;
let intervalvar;

function interval() {
		intervalvar = setInterval(function() { 
			for(let i = 0; i < circle.length; i++) {
				circle[i].style.transform = "rotateZ("+ ch +"deg)";
			}
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