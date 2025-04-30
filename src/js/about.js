const allAccordion = document.querySelectorAll('.accordion');
console.log(allAccordion);

allAccordion.forEach((accordion) => {
    console.log(accordion);
    console.log(accordion.parentNode.children)



    accordion.addEventListener('click', () => {
        const list = accordion.parentNode.children[1]
        if (list.nodeName === "UL") {
            list.classList.toggle('active');
        }
    })

});