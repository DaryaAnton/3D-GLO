const sliderModule = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dotsBlock = document.querySelector('.portfolio-dots');
    let dots;
    let currentSlide = 0;
    let timerInterval = 2000;
    let interval;

    const addDots = () => {
        slides.forEach((index) => {
            const li = document.createElement('li');
            li.classList.add('dot');
            
            if(index == 0) {
                li.classList.add('dot-active')
            }

            dotsBlock.append(li);
        })
    };
    addDots()
    dots = document.querySelectorAll('.dot');

    const prevSlide = (elems, index, srtClass) => {
        elems[index].classList.remove(srtClass);
    };
    

    const nextSlide = (elems, index, srtClass) => {
        elems[index].classList.add(srtClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slides.length) {
            currentSlide = 0;
        };
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        };

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        
        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        }else if (e.target.matches('#arrow-left')){
            currentSlide--;
        }else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }
        if(currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if(currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide()
        };
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timerInterval);
        };
    }, true);

    startSlide(timerInterval);
}
export default sliderModule;