$(function () {
  $('.team__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    autoplay: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          // variableWidth: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
  })
})

// прокрутка вниз с хедера на высоту экрана
const $scrollDown = document.querySelector('#scroll-down')

// ф-я прокрутки в низ на высоту окна
const scrollPage = () => {
  // высота видимой области окна
  let windowCoords = document.documentElement.clientHeight
  ;(function scroll() {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, 10)
      setTimeout(scroll, 0)
    }
    if (window.pageYOffset > windowCoords) {
      window.scrollTo(0, windowCoords)
    }
  })()
}

$scrollDown.addEventListener('click', scrollPage)

// mobile menu

const $menuBtn = document.querySelector('.menu__btn')
const $menuList = document.querySelector('.menu__list')
const $body = document.querySelector('body')
$menuBtn.addEventListener('click', () => {
  $menuBtn.classList.toggle('menu__btn--active')
  $menuList.classList.toggle('menu__list--active')
  $body.classList.toggle('lock')
})
