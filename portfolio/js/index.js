// Anchor---------------------------

const headerNav = document.querySelector('.main-nav__list');
const navMain = document.querySelector('.main-nav');

const closeMenu = function (event) {
        if (event.target.classList.contains('main-nav__link')) {
                document.body.classList.remove('_lock');
                navMain.classList.remove('main-nav--opened');
        }
}

const buttonToScroll = function (event) {
        event.preventDefault();
        const id = event.target.getAttribute('href');
        navMain.addEventListener('click', closeMenu);
        if (id) {
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
        }

};

headerNav.addEventListener('click', buttonToScroll);

// Menu---------------------------

const navToggle = document.querySelector('.main-nav__toggle');

const navToggleOnClick = () => {
        document.body.classList.toggle('_lock');
        navMain.classList.toggle('main-nav--opened');
};

if (navToggle) {
        navToggle.addEventListener('click', navToggleOnClick);
}

// Self-check---------------------------

console.log(`
1. Вёрстка валидная +10
        + для проверки валидности вёрстки используйте сервис https://validator.w3.org/

2. Вёрстка семантическая +20
        + В коде странице присутствуют следующие элементы (УКАЗАНО МИНИМАЛЬНОЕ КОЛИЧЕСТВО, МОЖЕТ БЫТЬ БОЛЬШЕ):
            + <header>, <main>, <footer> +2
            + шесть элементов <section> (по количеству секций) +2
            + только один заголовок <h1> +2
            + пять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2
            + один элемент <nav> (панель навигации) +2
            + два списка ul > li > a (панель навигации, ссылки на соцсети) +2
            + десять кнопок <button> +2
            + два инпута: <input type="email"> и <input type="tel"> +2
            + один элемент <textarea> +2
            + три атрибута placeholder +2

3. Вёрстка соответствует макету +48
        + блок <header> +6
        + секция hero +6
        + секция skills +6
        + секция portfolio +6
        + секция video +6
        + секция price +6
        + секция contacts +6
        + блок <footer> +6

4. Требования к css + 12
        + для построения сетки используются флексы или гриды +2
        + при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
        + фоновый цвет тянется на всю ширину страницы +2
        + иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2
        + изображения добавлены в формате .jpg +2
        + есть favicon +2

5. Интерактивность, реализуемая через css +20
        + плавная прокрутка по якорям +5
        + ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5
        + интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5
        + обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5

        
        110/110
`);