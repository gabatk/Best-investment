const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav__link');

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const stopScroll = () => {
	if (navBtn.classList.contains('is-active')) {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'auto';
	}
};

const removeClass = () => {
	navMobile.classList.remove('nav-mobile--active');
	navBtn.classList.remove('is-active');
	stopScroll();
};

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	stopScroll();

	navLinks.forEach(link => {
		link.addEventListener('click', removeClass);
	});
};

navBtn.addEventListener('click', handleNav);
handleCurrentYear();
