jQuery(document).ready(function ($) {
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		console.log('scrollFunction')
		const header = document.querySelector('header.header');
		console.log(header)

		if (
			document.body.scrollTop > 60 ||
			document.documentElement.scrollTop > 60
		) {
		    header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	}

	$(".mobile-search-icon").click(function () {
		$(".mobile-search").toggleClass("search-open");
	});

	$("a").click(function () {
		var targetElement = $($(this).attr("href"));

		// Check if the target element exists
		if (targetElement.length) {
			$("html, body").animate(
				{
					scrollTop: targetElement.offset().top,
				},
				500
			);
		}

		return false;
	});
}); //end ready
