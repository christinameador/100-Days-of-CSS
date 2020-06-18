number = 0;

function next() {
    const prev = number;
    const next = (number+1)%3;
    number = next;
    
    const cards = document.getElementsByClassName('card');
    cards[prev].classList.add('hiding');
    cards[prev].classList.remove('active');
    
    setTimeout(function() {
        cards[prev].classList.remove('hiding'); 
        cards[next].classList.add('active');
    }, 600);
}