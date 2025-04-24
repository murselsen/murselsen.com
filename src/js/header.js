const navbarToggle = document.querySelector('#navbar-toggle');
const navbarToggleIcon = document.querySelector('#navbar-toggle-icon');

const checkActivePageLink = () => {
    const activePageLink = window.location.href.split('/').pop();
    console.log(activePageLink)
    const links = document.querySelectorAll('.Navbar__content-item a');
    if (activePageLink === '' || activePageLink === ' ') {
        console.log(links[0])
        links[0].parentElement.classList.add('active');
    }
    links.forEach(link => {
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