// ................BURGER................................................

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('open-menu');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('open-menu');
      $('body').toggleClass('lock');
   })
})

// кнопка наверх
$('.back-to-top').click(function () {
   $('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
});

$(window).scroll(function () { // Отслеживаем начало прокрутки
   let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

   if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
      $('.back-to-top').addClass('back');
   } else {
      $('.back-to-top').removeClass('back');
   }
});

// слайдер 
const swiper = new Swiper('.offer__slider', {
   slidesPerView: 5,
   speed: 800,
   spaceBetween: 23,
   autoHeight: true,
   loop: true,
   breakpoints: {
      320: {
         slidesPerView: 1.2,
         spaceBetween: 10,
      },
      500: {
         slidesPerView: 2.2,
      },
      767: {
         slidesPerView: 3.2,
      },
      991: {
         slidesPerView: 4.2,
      },
      1199: {
         slidesPerView: 5.9,
      }
   }
});

// ............... анимация  при скролле

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;
         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);

}