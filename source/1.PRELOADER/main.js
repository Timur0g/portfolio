let placeholder = document.querySelector('.circle-main');
let placeholderD = document.querySelector('.circle-main-2');

let btn = document.querySelectorAll('.btn')
let ch = 0;
let ch2 = 0;
let inter;


function interval(nStart, nClose) {
	inter =	setInterval(function() {
		ch+=1;
		placeholder.style.transform = 'rotateZ('+ch+'deg)';
			if(ch==360) {
				ch = 0;
			}}, 1);
		btn[nStart].style.display="none";
		btn[nClose].style.display="block";
}  

function inrevalNot(nStart, nClose) {
	clearInterval(inter);
	btn[nStart].style.display="block";
	btn[nClose].style.display="none";
}


function interval2(nStart, nClose) {
	inter2 =	setInterval(function() {
		ch2+=1;
		placeholderD.style.transform = 'rotateZ('+ch2+'deg)';
			if(ch2==360) {
				ch2 = 0;
			}}, 1);
		btn[nStart].style.display="none";
		btn[nClose].style.display="block";
}  

function inrevalNot2(nStart, nClose) {
	clearInterval(inter2);
	btn[nStart].style.display="block";
	btn[nClose].style.display="none";
}

