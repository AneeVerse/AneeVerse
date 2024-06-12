(function ($) {
	"use strict";

	// Background Image Active
	function bgImageActive($scope, $) {
		$("[data-background]").each(function () {
			$(this).css(
				"background-image",
				"url(" + $(this).attr("data-background") + ") "
			);
		});
	}

	// service carousel
	function serviceSlider($scope, $) {
		let service_slider_1 = new Swiper(".gly-p1-slider-active", {
			loop: true,
			rtl: false,
			speed: 1000,
			autoplay: {
				delay: 5000,
			},
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			pagination: {
				el: ".gly-p1-pagination",
				clickable: true,
			},
		});
	}

	// brandActive
	function brandActive($scope, $) {
		let brand_slider_1 = new Swiper(".gly-sponser-1-active", {
			loop: true,
			speed: 5000,
			autoplay: {
				delay: 0,
			},

			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 5,
				},
			},
		});
	}

	// testimonialActive
	function testimonialActive($scope, $) {
		let testimonial_slider_1 = new Swiper(".gly-t1-active", {
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: ".gly_t1_next",
				prevEl: ".gly_t1_prev",
			},

			pagination: {
				el: ".swiper-pagination",
				type: "fraction",
			},
		});

		if($('.gly-t5-active'.length)) {

			var testimonial_slider_2 = new Swiper('.gly-t5-active', {
			  speed: 1000,
			  loop: true,
			  spaceBetween: 30,
			  slidesPerView: 4,
			  autoplay: {
				delay: 4000,
			  },

			  pagination: {
				el: ".gly-testimonial-5-slider-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			  },


			  breakpoints: {
				0: {
				  slidesPerView: 1,
				},
				576: {
				  slidesPerView: 1,
				},
				768: {
				  slidesPerView: 2,
				},
				992: {
				  slidesPerView: 2,
				},
				1200: {
				  slidesPerView: 2,
				},
				1400: {
				  slidesPerView: 3,
				},
				1600: {
				  slidesPerView: 3,
				},
				1800: {
				  slidesPerView: 4,
				},
			  },


			});
		  }
	}

	// project Slider
	function projectSlider($scope, $) {
		let glyp2 = new Swiper(".gly-p2-active", {
			loop: true,
			spaceBetween: 25,
			speed: 2000,
			centeredSlides: true,
			autoplay: {
				delay: 5000,
			},

			navigation: {
				nextEl: ".gly_p2_next",
				prevEl: ".gly_p2_prev",
			},

			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
			},
		});
	}

	// team slider active
	function teamSlider($scope, $) {
		if ($(".gly-t4-active".length)) {
			var temaSlider_1 = new Swiper(".gly-t4-active", {
				speed: 1000,
				loop: true,
				spaceBetween: 30,
				slidesPerView: 4,
				autoplay: {
					delay: 4000,
				},
				pagination: {
					el: ".gly-team-3-slider-pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">' +
							(index + 1) +
							"</span>"
						);
					},
				},

				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 3,
					},
					1600: {
						slidesPerView: 4,
					},
				},
			});
		}
	}

	// heroSlider
	function heroSlider($scope, $) {
		let heroSlider_1 = new Swiper('.gly-hero-4-active', {
			loop: true,
			rtl: false,
			speed: 3000,
			autoplay: {
			  delay: 5000,
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			navigation: {
				nextEl: ".gly_h4_next",
				prevEl: ".gly_h4_prev",
			},

		});
	}

	// service carousel
	function serviceCarousel($scope, $) {
		let service_slider_2 = new Swiper('.gly-s4-active', {
			loop: true,
			spaceBetween: 30,
			speed: 1000,
			autoplay: {
			  delay: 4000,
			},

			navigation: {
				nextEl: ".gly_s4_next",
				prevEl: ".gly_s4_prev",
			},

			breakpoints: {
				0: {
				  slidesPerView: 1,
				},
				768: {
				  slidesPerView: 2,
				},
				992: {
				  slidesPerView: 2,
				},
				1200: {
				  slidesPerView: 3,
				},
			},
		});
	}

	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_hero_section.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_service_section.default",
			function ($scope, $) {
				serviceSlider($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_brand.default",
			function ($scope, $) {
				brandActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_testimonial.default",
			function ($scope, $) {
				testimonialActive($scope, $);
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_project_moving.default",
			function ($scope, $) {
				projectSlider($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_team.default",
			function ($scope, $) {
				teamSlider($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_contact_info.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_newsletter.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_hero_slider.default",
			function ($scope, $) {
				heroSlider($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_service_lists.default",
			function ($scope, $) {
				serviceCarousel($scope, $);
			}
		);
	});
})(jQuery);
