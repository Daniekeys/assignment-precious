const btnToggler = document.getElementById('nav-toggler');
const navLink = document.querySelector('.links-container');
const body = document.querySelector('body');
btnToggler.addEventListener('click', function () {
 navLink.classList.toggle('actively');
console.log("Life is too short")
});

