import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination, Autoplay],
	// Responsive breakpoints
	breakpoints: {
		768: {
			slidesPerView: 1.1,
			spaceBetween: 30,
		},
		1023: {
			slidesPerView: 1.2,
			spaceBetween: 30,
		},

		1210: {
			slidesPerView: 1.2,
			spaceBetween: 50,
		}
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

document.addEventListener('click', documentActions);

function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open');
	}
	e.preventDefault();
}