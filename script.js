

window.addEventListener('resize', function() {
    if (window.innerWidth <= 600) {
        console.log("La pantalla es pequeña, puedes hacer algo aquí.");
    } else {
        console.log("La pantalla es grande, puedes hacer algo diferente aquí.");
    }
});
(function() {
    const faqsItem = document.querySelectorAll('.faqs-item-collapse');

    faqsItem.forEach((item) => {
        item.addEventListener('click', () => {
            const collpaseContainer = item.parentElement;

            if (collpaseContainer.classList.contains('faqs-item-open')) {
                collpaseContainer.classList.remove('faqs-item-open');
            } else {
                collpaseContainer.classList.add('faqs-item-open');
            }
        })
    });
})();
