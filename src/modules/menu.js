const menuModule = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li>a');

    menuBtn.addEventListener('click', (e) =>{
        if (e.target.closest('.menu')) {
            menu.classList.toggle('active-menu');
        };
    });

    menu.addEventListener('click', (e) => {
        menuItems.forEach((link, ) => {
            link.addEventListener('click', () => {
                menu.classList.toggle('active-menu');
            });
        });
        if (e.target.closest('.close-btn') || e.target.closest('menuItems')) {
            menu.classList.toggle('active-menu');
        }
    });
}
export default menuModule;