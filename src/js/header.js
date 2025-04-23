const navbarToggle = document.querySelector('#navbar-toggle');
const navbarToggleIcon = document.querySelector('#navbar-toggle-icon');

const checkActivePageLink = () => {
    const activePageLink = window.location.href.split('/').pop();
    document.querySelectorAll('.Navbar__content-item a').forEach(link => {
        const linkHref = link.getAttribute('href');

        if (activePageLink === linkHref) {
            link.parentElement.classList.add('active');
        }
    });
}


checkActivePageLink();


navbarToggle.addEventListener('click', () => {
    const navbarContent = document.querySelector('.Navbar__content');
    navbarContent.classList.toggle('active');
    navbarToggleIcon.classList.toggle('ri-menu-line');
    navbarToggleIcon.classList.toggle("ri-close-circle-fill");
})