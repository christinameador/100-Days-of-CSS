let input = document.querySelector('.input');
let show = document.querySelector('.wrapper');

input.addEventListener('keyup',(e)=>{
    if(e.target.value === 'password')
        {
            show.classList.add('anim');
        }
})