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