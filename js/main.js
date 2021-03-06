(function() {
    'use-strict';

    const nav = document.querySelector('header');
    const trailer = document.querySelector('.modal-video');

    window.addEventListener('scroll',() => {
        if(!nav.classList.contains('active')) (window.pageYOffset > 0) ? nav.classList.add('fixed') : nav.classList.remove('fixed');
    });

    document.querySelector('.menu-btn').addEventListener('click', () => {
        nav.classList.toggle('active');
        nav.classList.toggle('fixed');
    })

    document.querySelector('div.nav-link').addEventListener('click', () => {
        let submenu = document.querySelector('.sub-menu');    
        submenu.classList.toggle('active');
        submenu.classList.contains('active') ? document.querySelector('div.nav-link svg path').setAttribute("d", "M112 328l144-144 144 144"): document.querySelector('div.nav-link svg path').setAttribute("d", "M112 184l144 144 144-144");
    });
    
    let playr;
    
    document.addEventListener('DOMContentLoaded', () => {
        playr = new Plyr('#player');
        trailer.querySelector('video').load();
    })

    document.querySelector('.video-selector').addEventListener('click', () => {
        trailer.classList.add('active');
    });
    document.querySelector('.modal-video .close').addEventListener('click', () => {
        trailer.classList.remove('active');
        playr.stop();
    });
}());
