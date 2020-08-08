let frame = document.querySelector('.wrap'),
        follower = document.getElementById("follower");

frame.addEventListener('mousemove',(event)=>{
    follower.style.left = event.offsetX+'px';
    follower.style.top = event.offsetY+'px';
});

frame.addEventListener('mouseout',(event)=>{
    follower.style.left = 50+"%";
    follower.style.top = 50+"%";
})