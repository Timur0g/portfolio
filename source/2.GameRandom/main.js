var cartsMain = document.getElementsByClassName('cart');
var cartsBack = document.getElementsByClassName('cart-bck');
var cartsText = document.getElementsByTagName('span');
let btn = document.getElementsByClassName('button');

let ch = 0;
let ch2 = 180;



obj = {
	card1: Math.floor(Math.random() * Math.floor(2)),
	card2: Math.floor(Math.random() * Math.floor(2)),
	card3: Math.floor(Math.random() * Math.floor(2)),
}

while ( (obj.card1 == 0 && obj.card2 == 0 && obj.card3 == 0) || (obj.card1 == 1 && obj.card2 == 1 && obj.card3 == 1) ) {
	obj.card1 = Math.floor(Math.random() * Math.floor(2));
	obj.card2 = Math.floor(Math.random() * Math.floor(2));
	obj.card3 = Math.floor(Math.random() * Math.floor(2));
}

if (obj.card1 == 1) {
	obj.card2 = 0;
	obj.card3 = 0;
	cartsText[0].textContent = 'Победа';
	cartsText[1].textContent = 'Поражение';
	cartsText[2].textContent = 'Поражение';
};

if (obj.card2 == 1) {
	obj.card1 = 0;
	obj.card3 = 0;
	cartsText[1].textContent = 'Победа';
	cartsText[0].textContent = 'Поражение';
	cartsText[2].textContent = 'Поражение';
};

if (obj.card3 == 1) {
	obj.card1 = 0;
	obj.card2 = 0;
	cartsText[2].textContent = 'Победа';
	cartsText[0].textContent = 'Поражение';
	cartsText[1].textContent = 'Поражение';
};


function clickClient() {
	cartsMain[0].style.transform="rotateY(180deg)";
	cartsMain[1].style.transform="rotateY(180deg)";
	cartsMain[2].style.transform="rotateY(180deg)";

	cartsBack[0].style.transform="rotateY(180deg)";
	cartsBack[1].style.transform="rotateY(180deg)";
	cartsBack[2].style.transform="rotateY(180deg)";	
}

console.log(obj);

function clickBtn() {
	document.location.reload(true);
}

