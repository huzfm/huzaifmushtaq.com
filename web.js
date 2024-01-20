const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.menu');
hamburger.addEventListener('click',function(){
      hamburger.classList.toggle('active');
      navbar.classList.toggle('active');
})