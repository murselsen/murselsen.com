const allAccordion = document.querySelectorAll('.accordion');
console.log(allAccordion);

allAccordion.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        const list = accordion.parentNode.children[1]
        if (list.nodeName === "UL") {
            list.classList.toggle('active');
        }
    })

});
