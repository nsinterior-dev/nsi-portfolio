const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-items');

    burger.addEventListener('click', () => {
        //toggle navv
        nav.classList.toggle('nav-active');
        //animate links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.aimation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');

    });

   
}

navSlide();