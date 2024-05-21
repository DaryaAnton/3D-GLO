const modalModule = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (window.screen.width > 768) {
                animationModal(modal, 500);
            }
        });
    });

    function animationModal(elem, duration) {
        let start;
        function step(timestamp) {
            if (!start) {
                start = timestamp;
            }; 
            const opacity = (timestamp - start) / duration;
            elem.style.opacity = opacity;
            if (opacity >= 1) {
                return;
            };
            requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    modal.addEventListener('click', (e) => {

        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        };
    });
};

export default modalModule;