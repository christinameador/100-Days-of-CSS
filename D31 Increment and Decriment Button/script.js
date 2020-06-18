const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const counter = document.querySelector('.counter');

if (inc) {
  inc.addEventListener('click', function(e) {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
        animateCounter();
  });
}

if (dec) {
  dec.addEventListener('click', function(e) {
    let counterValue = parseInt(counter.innerHTML);
    
    // if (counterValue === 0) {
    //   return false;
    // }
        
        animateCounter();
    
    counter.innerHTML = counterValue - 1;
  })
}

function animateCounter() {
    counter.classList.add('animation');
    setTimeout(function() {
        counter.classList.remove('animation');
    }, 100)
}