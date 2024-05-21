const menuModule = () => {
    // const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    // const closeBtn = menu.querySelector('.close-btn');
    // const menuItems = menu.querySelectorAll('ul>li>a');

    const toggleMenu = () => {
		const handlerMenu = () => {
			const even = event.target;

			const show = () => {
				menu.classList.toggle('active-menu');
			};

			if (even.closest('.menu') || !even.closest('menu')) {
				show();
			} else if (even.closest('menu') && even.closest('[href^="#"]')) {
				show();
			}
		};
		document.body.addEventListener('click', handlerMenu);
	};
    toggleMenu();
}
export default menuModule;