$(function () {

	$(window).on('load', function () {
		$preloader = $('.loaderArea'),
			$loader = $preloader.find('.loader');
		$loader.fadeOut();
		$preloader.delay(350).fadeOut('slow');
	});

	$('.js-accordion-btn').click(function () {

		var dropDown = $(this).parent().find('.js-accordion-content');

		$(this).closest('.js-accordion').find('.js-accordion-content').not(dropDown).slideUp();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.js-accordion').find('.js-accordion-btn.active').removeClass('active');
			$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();
	});

	if ($(window).width() > 767) {
		if ($(".hero__video").length > 0) {
			$(".hero__video source").attr("src", $(".hero__video").find('source').data('src')); document.querySelector('#video-bg').load();
		}

	}

	$(".irs").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
	});

	// попап гео
	$('.location__toggle').click(function (e) {
		$(this).closest('.location').addClass('open');
	});
	$('.location__link').click(function (e) {
		e.preventDefault();
		$(this).closest('.location__city').find('.location__toggle').text($(this).text());
		$(this).closest('.location').removeClass('open');
	});

	// закрытие по клику за пределами
	$(document).mouseup(function (e) {

		var interactiveElems = [$('.location')],
			div;
		for (i = 0; i < interactiveElems.length; ++i) {
			div = interactiveElems[i];
			if ((!div.is(e.target) && div.has(e.target).length === 0)) {
				if (div.hasClass('open')) div.removeClass('open');
			}
		}

	});

	var swiper = new Swiper('.sectificate-slider__swiper', {
		autoHeight: true,
		slidesPerView: 4,
		spaceBetween: 0,
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1601: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
		}
	});

	var swiper2 = new Swiper('.catalogSlider-slider__swiper', {
		autoHeight: true,
		slidesPerView: 3,
		spaceBetween: 0,
		// loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1601: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
		}
	});
	var swiper3 = new Swiper('.basketSlider-slider__swiper', {
		autoHeight: true,
		slidesPerView: 4,
		spaceBetween: 0,
		// loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1601: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
		}
	});

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		// autoHeight: true,
		spaceBetween: 10,
		// loop: true,
		// observer: true,
		// observeParents: true,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1601: {
				slidesPerView: 5,
				spaceBetween: 0,
			},
		}
	});
	var galleryTop = new Swiper('.gallery-top', {
		autoHeight: true,
		loop: true,
		observer: true,
		observeParents: true,
		spaceBetween: 10,
		thumbs: {
			swiper: galleryThumbs
		}
	});
	var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1601: {
				slidesPerView: 5,
				spaceBetween: 0,
			},
		}
	});
	var galleryTop2 = new Swiper('.gallery-top2', {
		autoHeight: true,
		loop: true,
		observer: true,
		observeParents: true,
		spaceBetween: 10,
		thumbs: {
			swiper: galleryThumbs2
		}
	});

	var galleryThumbs3 = new Swiper('.gallery-thumbs3', {
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1601: {
				slidesPerView: 5,
				spaceBetween: 0,
			},
		}
	});
	var galleryTop3 = new Swiper('.gallery-top3', {
		autoHeight: true,
		loop: true,
		observer: true,
		observeParents: true,
		spaceBetween: 10,
		thumbs: {
			swiper: galleryThumbs3
		}
	});

	var swiper4 = new Swiper('.others__slider', {
		autoHeight: true,
		initialSlide: 1,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		}
		// autoplay: {
		// 	delay: 5000,
		// },
	});

	var swiper = new Swiper('.choice__slider', {
		autoHeight: true,
		initialSlide: 1,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		}
		// autoplay: {
		// 	delay: 5000,
		// },
	});

	// Мобильное меню
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__mnu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


let myHeader = document.querySelector('.header');

window.addEventListener('scroll', (e) => {

	if (window.pageYOffset > 100) {
		myHeader.classList.add('active');
	} else {
		myHeader.classList.remove('active');
	}

});

const navMenuFixed = document.querySelector('.nav')
if (navMenuFixed) {
	let sticky = navMenuFixed.offsetTop
}

document.addEventListener('DOMContentLoaded', () => {


	function handleScrollMenu() {
		// console.log(window.pageYOffset)
		if (navMenuFixed) {
			if (window.pageYOffset > 200) {
				navMenuFixed.classList.add('sticky')
			} else {
				navMenuFixed.classList.remove('sticky')
			}
		}

	}

	window.addEventListener('scroll', handleScrollMenu);



	// Перемещение элементов

	const movingElements = (myWrapWhere, myWrapWhereFrom, position, myElem, positionBack) => {
		let wrapWhere = document.querySelector(myWrapWhere);
		let wrapWhereFrom = document.querySelector(myWrapWhereFrom);
		let elem = document.querySelector(myElem);

		if (wrapWhere && elem) {
			if (document.documentElement.clientWidth <= 575) {
				wrapWhere.insertAdjacentElement(position, elem);
			} else {
				wrapWhereFrom.insertAdjacentElement(positionBack, elem);
			}
		}

	}

	movingElements('.header__mnu', '.header__top .container', 'beforeend', '.header__top-soc', 'afterbegin');
	movingElements('.header__mnu', '.header__top .container', 'beforeend', '.header__top-search', 'afterbegin');

	window.addEventListener('resize', function () {
		movingElements('.header__mnu', '.header__top .container', 'beforeend', '.header__top-soc', 'afterbegin');
		movingElements('.header__mnu', '.header__top .container', 'beforeend', '.header__top-search', 'afterbegin');
	})

	// end перемещение элементов


	// tabs

	const myTabs = () => {

		const tabs = (myTargets, myContents, val) => {
			let targets = document.querySelectorAll(myTargets);
			let contents = document.querySelectorAll(myContents);

			if (targets.length > 1 && contents.length > 1) {
				targets.forEach((target, i) => {
					target.addEventListener('click', (e) => {
						e.preventDefault();
						targets.forEach(elem => {
							if (e.target == elem || e.target.parentNode == elem || e.target.parentNode.parentNode) {
								hideElems();
								showElems(i);
							}
							// if (e.target.closest(myTargets)) {
							// 	hideElems();
							// 	showElems(i);
							// }
						})
					});
				});

				function hideElems() {
					targets.forEach(target => {
						target.classList.remove('active');
					});
					contents.forEach(cont => {
						cont.classList.remove('myShow');
						cont.classList.add('myHide');
					});
				}

				function showElems(i = val) {
					targets[i].classList.add('active');
					contents[i].classList.remove('myHide');
					contents[i].classList.add('myShow');
				}

				hideElems();
				showElems();
			}

		};

		tabs('.articlesEl__target > a', '.articlesEl__content > .articlesEl__content-1', 0);
		tabs('.cardEl__target > .cardEl__target-elem', '.cardEl__content > .cardEl__content-elem', 0);
		tabs('.popup_form-target > a ', '.popup_form-content > .popup_form-content-elem', 0);
		tabs('.popup_form-target2 > a ', '.popup_form-content2 > .popup_form-content-elem', 1);

	};

	myTabs();

	//end tabs


	const modals = () => {

		function bindModal(triggerSelector, closeClickOverlay = true) {
			let trigger = document.querySelectorAll(triggerSelector);
			let windows = document.querySelectorAll('[data-modal-b]');

			trigger.forEach(item => {
				item.addEventListener('click', (e) => {
					let modalAttr = item.getAttribute('data-modal');
					let modal = document.querySelector(`[${modalAttr}]`);

					if (modal) {

						if (item.classList.contains('popup_calc_button')) {
							if (modalState.width === undefined || modalState.height === undefined || modalState.form === undefined) {
								return false;
							}
						}

						if (item.classList.contains('popup_calc_profile_button')) {
							if (modalState.type === undefined || modalState.profile === undefined) {
								return false;
							}
						}

						windows.forEach(t => {
							t.style.display = 'none';
						})

						modal.style.display = 'block';
						document.body.style.overflow = 'hidden';


						modal.addEventListener('click', (e) => {
							if (e.target === modal && closeClickOverlay) {

								windows.forEach(t => {
									t.style.display = 'none';
								});

								modal.style.display = 'none';
								document.body.style.overflow = "";
							}
							if (e.target.getAttribute('data-close') == '') {
								modal.style.display = 'none';
								document.body.style.overflow = "";
							}
						});
					}

				})

			})



		}

		bindModal('.popup__t');

	};

	modals();


	var phoneMask = IMask(
		document.querySelector('.phone-mask'), {
		mask: '+{7}(000)000-00-00'
	});


	let headerCard = document.querySelector('.header__card');
	let dialog = document.querySelector('.dialog');
	let dialogClose = document.querySelector('.dialog-close');

	if (headerCard) {
		headerCard.addEventListener('click', (e) => {
			dialog.classList.toggle('is-visible')
		})
	}
	if (dialogClose) {
		dialogClose.addEventListener('click', (e) => {
			dialog.classList.toggle('is-visible')
		})
	}



});


$(document).ready(function () {
	$('.js-videoWrapper').each(function (i, el) {
		var id = $(this).data('id');
		var poster = "url('https://i1.ytimg.com/vi/" + id + "/sddefault.jpg')";
		$(this).append('<iframe class="videoIframe js-videoIframe" frameborder="0" src="" allowtransparency="true" allowfullscreen="" data-src="https://www.youtube.com/embed/' + id + '?autoplay=1"></iframe>');
		$(this).find('.js-videoPoster').css('background-image', poster);
	});

});

$(document).on('click', '.js-videoPoster', function (ev) {
	ev.preventDefault();
	var $poster = $(this);
	var $wrapper = $poster.closest('.js-videoWrapper');
	videoPlay($wrapper);
});

function videoPlay($wrapper) {
	var $iframe = $wrapper.find('.js-videoIframe');
	var src = $iframe.data('src');
	$wrapper.addClass('js-videoWrapper-active');
	$iframe.attr('src', src);
}

// 	function videoStop($wrapper) {
// 		if (!$wrapper) {
// 			var $wrapper = $('.js-videoWrapper');
// 			var $iframe = $('.js-videoIframe');
// 		} else {
// 			var $iframe = $wrapper.find('.js-videoIframe');
// 		}

// 		$wrapper.removeClass('videoWrapperActive');
// 		$iframe.attr('src','');
// 	}