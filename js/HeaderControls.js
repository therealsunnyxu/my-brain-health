const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('navDrawer');
const header = document.querySelector('header');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('closed');

    // Animation-related changes and header opacity adjustment
    if (nav.classList.contains('closed')) {
        nav.classList.add('max-h-0');
        nav.classList.remove('max-h-screen');
        // Set header to transparent initially when nav is closed (if scrollY <= 472)
        header.classList.toggle('bg-gray-900/10', window.scrollY <= 472);
    } else {
        nav.classList.remove('max-h-0');
        nav.classList.add('max-h-screen');
        // Set header to opaque when nav is open, overriding scroll effects
        header.classList.remove('bg-gray-900/10');
        header.classList.add('bg-green-900');
    }
});

window.addEventListener('scroll', () => {
    // Only adjust header opacity based on scroll position if nav is closed
    if (nav.classList.contains('closed')) {
        header.classList.toggle('bg-gray-900/10', window.scrollY <= 472);
        header.classList.toggle('bg-green-900', window.scrollY > 472);
    }
});