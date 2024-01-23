const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.menu');
hamburger.addEventListener('click',function(){
      hamburger.classList.toggle('active');
      navbar.classList.toggle('active');
});
// const navLinks = document.querySelectorAll('nav-links');
// const windowPathName = window.location.pathname;
// navLinks.forEach(navLinks =>{
//       if(navLinks.href.includes(windowPathName)){
//             navLinks.classList.add('active');
//       }
// });
 
