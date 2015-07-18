# shakeIt
A small plugin to add shake methods on elements.

Example:

```
$('.box').on('click', function() {
	$(this).shake({
		howMany: 2,
		animationDirection: {left: 20},
		originalPos: {left: 0}
	});		
});
