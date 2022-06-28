burger = document.querySelector('.burger')
logo = document.querySelector('.logo')
navlist = document.querySelector('.navlist')
navbar = document.querySelector('.navbar')



burger.addEventListener('click', ()=>{
    logo.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
