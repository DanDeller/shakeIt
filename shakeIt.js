(function($) {

	/*\
	 *	Shake plugin
	 *	Quick way to apply error shake to elements
	\*/

	$.fn.shake = function(options) {

		// set out default options
		var options = $.extend({
			animationDirection: {left: 15},
			originalPos: {left: 0},
			howMany: 2
		}, options);

		this.each(function() {
     	for (var x = 1; x <= options.howMany; x++) {
        $(this).animate(options.animationDirection, 80).animate(options.originalPos, 80);
			}
		});

		return this;
	}

}(jQuery));
