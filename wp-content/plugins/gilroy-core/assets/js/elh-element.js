(function ($) {
	"use strict";

	/*----- ELEMENTOR LOAD FUNTION CALL ---*/
	$(window).on("elementor/frontend/init", function () {

		var txbackgroundImage = function () {
			var img = $("[data-background]");
			img.css("background-image", function () {
				var bg = "url(" + $(this).data("background") + ")";

				if ($(this).data("background")) {
					return bg;
				} else {
					return false;
				}
			});
		};

		// nice select
		var niceSelect = function () {
			if ($("select").length) {
				$("select").niceSelect();
			}
		};

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/hero_slider.default",
			function ($scope, $) {
				// txHeroSliderOne();
				// txbackgroundImage();
			}
		);
	});
})(jQuery);
