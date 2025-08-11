document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', { // Исправлено название класса
        slidesOffsetBefore: 16,
        slidesPerView: 1.3,
        spaceBetween: 32,
        slidesOffsetAfter: 16,
        centeredSlidesBounds: true, // Ограничение, чтобы активный слайд не выходил за границы

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const toggleButton = document.getElementById('toggleButton');
    const gridItems = document.querySelectorAll('.swiper-slide');

    let isExpanded = false;

    toggleButton.addEventListener('click', () => {
        if (isExpanded) {
            gridItems.forEach((item, index) => {
                if (index >= 6) {
                    item.classList.add('hidden'); // Скрываем элементы начиная с третьего
                }
            });
            toggleButton.textContent = 'Показать всё'; // Меняем текст на кнопке
        } else {
            gridItems.forEach(item => {
                item.classList.remove('hidden'); // Показываем все элементы
            });
            toggleButton.textContent = 'Скрыть'; // Меняем текст на кнопке
        }
        isExpanded = !isExpanded; // Переключаем состояние
    });
});