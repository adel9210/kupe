// Toggle menu in mobile view 
Array.from(document.querySelectorAll('.toggle-side-menu'))
    .map(element => element.addEventListener('click', toggleSideMenu));

function toggleSideMenu() {
    document.querySelector('body').classList.toggle('no-scroll');
    document.querySelector('body').classList.toggle('backdrop');
    document.querySelector('nav').classList.toggle('isMobile');
}



// Hide All Active When Click Outside 
window.addEventListener('click', (event) => {
    if (event.target.closest('.nav__link')) {
        return;
    }
    // Remove all active item 
    const container = document.querySelectorAll('.nav__item--dropdown')
    Array.from(container).map(ele => ele.classList.remove('u-d-block'));

})

// Toggle Nave item in Desktop View 
Array.from(document.querySelectorAll('.nav__link')).map(li => {
    li.addEventListener('click', toggleNavItem);
});

function toggleNavItem(e) {
    // Remove all active item 
    const container = document.querySelectorAll('.nav__item--dropdown')
    Array.from(container).map(ele => ele.classList.remove('u-d-block'));


    // Show Active Element
    e.target.nextElementSibling.classList.toggle('u-d-block')

    e.preventDefault()
}


// Hide Loader 
window.addEventListener('load', () => {
    document.querySelector('.loader').classList.remove('show');
})


// Service Show overlay on service item 
var activeElement;
Array.from(document.querySelectorAll('.services .services__caption .link')).map(element => {
    element.addEventListener('click', (event) => {

        if (activeElement) {
            activeElement.classList.remove('overlay');
        }

        activeElement = event.target.offsetParent;
        
        event.target.offsetParent.classList.add('overlay');



        event.preventDefault();
    })
})