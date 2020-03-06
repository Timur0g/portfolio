const subscribe__exit = document.querySelector('.subscribe__exit');
const subscribe = document.querySelector('.subscribe');

console.log(document.body.clientWidth);
    
    if( document.body.clientWidth <= 768 ) {
        subscribe.style.left = '50%';
        subscribe.style.bottom = '0';
        subscribe__exit.addEventListener('click', function() {
            subscribe.style.bottom = '-100%';
        });
    }

    else if(document.body.clientWidth > 768) {
        subscribe.style.left = '30px';
        subscribe.style.bottom = '30px';
        subscribe__exit.addEventListener('click', function() {
            subscribe.style.left = '-100%';
        });
    };
    