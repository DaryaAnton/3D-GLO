const modalModule = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (window.screen.width > 768) {
                animationModal(modal, 1500);
            }
        });
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
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
};

export default modalModule;