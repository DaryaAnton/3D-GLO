import Swiper from 'swiper';
import {Autoplay} from 'swiper/modules';

const swiperSlider = () => {

  const marginSlide = document.querySelectorAll('.companies-hor-item');
  marginSlide.forEach((elem) => {
    elem.style.margin = 0;
  })

  const swiper = new Swiper('.swiper', {
      modules: [Autoplay],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
          delay: 1500,
          disableOnInteraction: false,
      },
      breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
      },
  });
};

export default swiperSlider;