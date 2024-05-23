const menuModule = () => {
    const menu = document.querySelector('menu');

	const toggleMenu = (event) => {
		const show = () => {
			menu.classList.toggle('active-menu');
		};

		if (event.target.closest('.menu') || !event.target.closest('menu')) {
			show();
		} else if (event.target.closest('menu') && event.target.closest('[href^="#"]')) {
			show();
		}
	};
	document.body.addEventListener('click', toggleMenu);
}
export default menuModule;