'use strict';
document.addEventListener("DOMContentLoaded", () => {

	// запрет скачивания
	document.getElementsByTagName('img').ondragstart = function() { return false; };

	// открытие меню
	let buttonToOpenMenu = document.querySelector('.header--wrapper__menu');
	let menu = document.querySelector('.menu');
	let body = document.querySelector('body');

	buttonToOpenMenu.onclick = () => {
	buttonToOpenMenu.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('overflow');
	}

	// открытие модального окна
	let menuOpen = document.querySelector('.header--wrapper__contact');
	let modal = document.querySelector('.modal');
	let modalClose = document.querySelector('.close');

	menuOpen.onclick = () => {
		modal.classList.add('active');
		body.classList.add('overflow');
	}

	menuOpen.onclick = () => {
		modal.classList.add('active');
		body.classList.add('overflow');
	}

	modalClose.onclick = () => {
		menuOpen.classList.remove('active');
		modal.classList.remove('active');
		body.classList.remove('overflow');
	}

	body.onclick = (event) => {
		if (buttonToOpenMenu.classList.contains('active')) {
			if (!menu.contains(event.target) && !buttonToOpenMenu.contains(event.target) && !event.target.closest('.menu .menu--wrapper')) {
				buttonToOpenMenu.classList.remove('active');
				menu.classList.remove('active');
				body.classList.remove('overflow');
			}
		}
		if (modal.classList.contains('active')) {
			if (!event.target.closest('.header--wrapper__contact') && !event.target.closest('.modal .modal--wrapper') && !event.target.closest('.modal .modal--close')) {
				modal.classList.remove('active');
				document.body.classList.remove('overflow');
			}
		}
	}

	const smoothHeight = (itemSelector, buttonSelector, contentSelector) => {
		const items = document.querySelectorAll(itemSelector);

		if (!items.length) return;

		// Добавляем класс 'active', 'data-open="true"' и устанавливаем max-height первому элементу
		const firstItem = items[0];
		const firstButton = firstItem.querySelector(buttonSelector);
		const firstContent = firstItem.querySelector(contentSelector);
		firstItem.classList.add('active');
		firstButton.classList.add('active');
		firstItem.dataset.open = 'true';
		firstContent.style.maxHeight = `${firstContent.scrollHeight}px`;

		items.forEach(el => {
				const button = el.querySelector(buttonSelector);
				const content = el.querySelector(contentSelector);

				button.addEventListener('click', () => {
						if (el.dataset.open !== 'true') {
								// Закрываем все открытые элементы
								items.forEach(item => {
										if (item.dataset.open === 'true') {
												item.dataset.open = 'false';
												item.classList.remove('active');
												item.querySelector(buttonSelector).classList.remove('active');
												item.querySelector(contentSelector).style.maxHeight = '';
										}
								});

								// Открываем текущий элемент
								el.dataset.open = 'true';
								button.classList.add('active');
								el.classList.add('active');
								content.style.maxHeight = `${content.scrollHeight}px`;
						} else {
								// Закрываем текущий элемент
								el.dataset.open = 'false';
								el.classList.remove('active');
								button.classList.remove('active');
								content.style.maxHeight = '';
						}
				});

				const onResize = () => {
						if (el.dataset.open === 'true') {
								if (parseInt(content.style.maxHeight) !== content.scrollHeight) {
										content.style.maxHeight = `${content.scrollHeight}px`;
								}
						}
				};

				window.addEventListener('resize', onResize);
		});
	};
	smoothHeight('.services .main--services__item', '.services .main--services__item--button', '.services .main--services__item--wrapper');

	// скролл вверх
	const buttonTop = document.querySelector(".top");
	const footerScroll = document.querySelector(".footer--wrapper__scroll");

	window.addEventListener("scroll", () => {
		if(window.innerWidth > 550){
			if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) && (document.documentElement.scrollHeight - window.innerHeight) * 0.9 > window.pageYOffset) {
				buttonTop.style.right = "40px";
			} else {
				buttonTop.style.right = "-100%";
			}
		} else {
			if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) && (document.documentElement.scrollHeight - window.innerHeight) * 0.99 > window.pageYOffset) {
				buttonTop.style.right = "15px";
			} else {
				buttonTop.style.right = "-100%";
			}
		}
	});

	buttonTop.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});

	footerScroll.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});

	let title_h1 = document.querySelectorAll('.h1, .main--about__wrapper--text');
	if(title_h1) {
		const project_item = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in');
				}
			});
		});
		const arr = document.querySelectorAll('.h1, .main--about__wrapper--text');
		arr.forEach(i => {
			project_item.observe(i);
		});
	}

	let project = document.querySelectorAll('.main--projects__grid, .main--services__item');
	if(project) {
		const project_item = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in-bottom');
				}
			});
		});
		const arr1 = document.querySelectorAll('.main--projects__grid, .main--services__item');
		arr1.forEach(i => {
			project_item.observe(i);
		});
	}

	let title = document.querySelectorAll('.h2');
	if(title) {
		const h2_item = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in');
				}
			});
		});
		const arr1 = document.querySelectorAll('.h2');
		arr1.forEach(i => {
			h2_item.observe(i);
		});
	}

	let services_item = document.querySelectorAll('.main--about__wrapper--right');
	if(services_item) {
		const services__item = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in-right');
				}
			});
		});
		const arr2 = document.querySelectorAll('.main--about__wrapper--right');
		arr2.forEach(i => {
			services__item.observe(i);
		});
	}

	let connect_item = document.querySelectorAll('.main--connect .h1');
	if(connect_item) {
		const services__item = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in');
				}
			});
		});
		const arr2 = document.querySelectorAll('.main--connect .h1');
		arr2.forEach(i => {
			services__item.observe(i);
		});
	}

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		effect: "cards",
		grabCursor: true,
		loop: true,
		rotate: true,
		initialSlide: 2,
		cardsEffect: {
			perSlideOffset: 8,
			perSlideRotate: 1,
		},
	});
	

});

