
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active')
    hamburger.classList.toggle('active')
})