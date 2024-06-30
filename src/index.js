import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calculator from './modules/calculator';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sendForm from './modules/sendForm';
import swiperSlider from './modules/swiperSlider';

timer('03 august 2024');
menu();
modal();
calculator(100);
validation();
tabs();
slider();
const formAll = document.querySelectorAll('form');
formAll.forEach((form) => {
    sendForm(
        {
            formId: form.id,
            someElement: [
                {
                   type: 'block',
                   id: 'total' 
                }
            ]
        }
    );
});
swiperSlider();