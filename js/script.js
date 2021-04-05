const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav__item');
    const navLinks = document.querySelectorAll('.nav__list')

    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle');
    })
    
   
}

navSlide();