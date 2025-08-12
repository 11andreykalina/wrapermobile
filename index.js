// Ожидаем полной загрузки DOM-дерева перед выполнением скрипта
document.addEventListener("DOMContentLoaded", function () {
  // Инициализация слайдера Swiper с указанными параметрами
  const swiper = new Swiper(".swiper-container", {
    // Исправлено название класса
    // Отступ перед первым слайдом (в пикселях)
    slidesOffsetBefore: 16,
    // Количество отображаемых слайдов (1.3 означает частичный показ следующего)
    slidesPerView: 1.3,
    // Расстояние между слайдами (в пикселях)
    spaceBetween: 32,
    // Отступ после последнего слайда (в пикселях)
    slidesOffsetAfter: 16,
    // Ограничение, чтобы активный слайд не выходил за границы контейнера
    centeredSlidesBounds: true,

    // Настройки пагинации (точек навигации)
    pagination: {
      // Селектор элемента для пагинации
      el: ".swiper-pagination",
      // Возможность переключать слайды по клику на точки
      clickable: true,
    },
  });

  // Получаем кнопку переключения по ID
  const toggleButton = document.getElementById("toggleButton");
  // Получаем изображение
  const navImg = document.querySelector(".nav-img");
  // Получаем все элементы слайдов
  const gridItems = document.querySelectorAll(".swiper-slide");

  // Флаг для отслеживания состояния (развернуто/свернуто)
  let isExpanded = false;

  // Добавляем обработчик клика на кнопку
  toggleButton.addEventListener("click", () => {
    // Если элементы развернуты
    if (isExpanded) {
        // Перебираем все элементы слайдов
        gridItems.forEach((item, index) => {
            // Проверяем ширину окна
            if (window.innerWidth >= 1120) {
                // Скрываем элементы начиная с 8-го (индекс 7 и выше)
                if (index >= 8) {
                    item.classList.add("hidden"); // Добавляем класс hidden
                }
            } else {

                if (window.innerWidth <= 768) {
                // Скрываем элементы начиная с 6-го (индекс 5 и выше)
                 } if (index >= 6) {
                    item.classList.add("hidden"); // Добавляем класс hidden
                }
            }
        });
      // Меняем текст кнопки на "Показать всё"
      toggleButton.textContent = "Показать всё";
      navImg.classList.remove('rotated');
    } else {
      // Если элементы свернуты - показываем все
      gridItems.forEach((item) => {
        item.classList.remove("hidden"); // Удаляем класс hidden
      });
      // Меняем текст кнопки на "Скрыть"
      toggleButton.textContent = "Скрыть";
      navImg.classList.add('rotated');
    }
    // Инвертируем значение флага
    isExpanded = !isExpanded;
  });
});
