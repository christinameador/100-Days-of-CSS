var pictures = Array.from(document.querySelectorAll('.pic'));

for (i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener('click', function(){
    this.classList.toggle('active');
  })
}