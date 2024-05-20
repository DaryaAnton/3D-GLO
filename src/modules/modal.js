const modalModule = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    let active = false;
    

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (active === false && window.screen.width > 768) {
                animationModal(modal, 1500);
            }
        });
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    function animationModal(elem, duration) {
        var start = null;
        function step(mark) {
          if (!start) start = mark;
          var progress = mark - start;
          elem.style.opacity = Math.min(progress / duration, 1);
          if (progress < duration) {
            requestAnimationFrame(step);
          };
        };
        requestAnimationFrame(step);
    };
};

export default modalModule;
//что происходит вообьще?!