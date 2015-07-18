# shakeIt
A small plugin to add shake methods on elements.

Example:

$('.box').on('click', function() {
	$(this).shake({
	  howMany: 2, // how many times we want the element to shake
	  animationDirection: {left: 20}, // which direction to shake (X/Y)
	  originalPos: {left: 0} // what position to to return to
  	});		
});
