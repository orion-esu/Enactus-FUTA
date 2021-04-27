const navSlide = () => {
    const burger = document.querySelector('.nav__hamburger');
    const nav = document.querySelector('.nav__item');
    const navLinks = document.querySelectorAll('.nav__item li');
    const btn = document.querySelectorAll('.btn-animate')

    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 0.6s ease forwards ${index / 7 + .4}s`;
            }

        });

        btn.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else{
                link.style.animation = `navbtnFade 0.4s ease forwards ${index / 7 + 1.3}s`;
            }

        });

        burger.classList.toggle('toggle');
    })
    
   
}

navSlide();