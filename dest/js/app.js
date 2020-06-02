// toggle menu
Array.from(document.querySelectorAll('.toggle-side-menu'))
    .map(element => element.addEventListener('click', toggleSideMenu));

function toggleSideMenu() {
    document.querySelector('body').classList.toggle('no-scroll');
    document.querySelector('body').classList.toggle('backdrop');
    document.querySelector('nav').classList.toggle('isMobile');
}