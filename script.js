const bars = document.querySelector('.fa-bars'),
    close = document.querySelector('.fa-xmark'),
    navToggle = document.getElementById('navtoggle'),
    listMenu = document.getElementById('list-menu'),
    mains = document.querySelector('main'),
    footer = document.querySelector('footer'),
    ftr = document.querySelector('.ftr'),
    Links = document.querySelectorAll('.link');

    
// Showcase List Menu Navbar
navToggle.addEventListener('click', () => {
    listMenu.classList.toggle('active');
    close.classList.toggle('active');
    bars.classList.toggle('active');
    mains.classList.toggle('myopacity');
    footer.classList.toggle('myopacity');
    ftr.classList.toggle('myopacity');
});

// Hidden list Menu Navbar
Links.forEach(link => {
    link.addEventListener('click', () => {
        bars.classList.add('active');
        close.classList.remove('active');
        listMenu.classList.remove('active');
        mains.classList.remove('myopacity');
        footer.classList.remove('myopacity');
        ftr.classList.remove('myopacity');
    });
})

// Animation about scrolling Logos
const container = document.getElementById('scrollContainer');
container.innerHTML += container.innerHTML;
let x = 0;
function scroll() {
    x -= 1;
    container.style.transform = `translateX(${x}px)`;

    if (Math.abs(x) >= container.scrollWidth / 2) {
        x = 0;
    }
    requestAnimationFrame(scroll);
}
scroll();


