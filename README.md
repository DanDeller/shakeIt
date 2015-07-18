# shakeIt
A small plugin to add shake methods on elements.

Example:

<html>
<head>
	<style type="text/css">
		#button {position: absolute; width: 50px;height: 50px;background-color: red; transition: all 0.3s linear 0s}
		.move {margin: 0 0 0 100px}
		.box {position: relative; width: 50px; height: 50px; border: 1px solid #4c4c4c}
	</style>
	<title>ShakeIt</title>
</head>
<body>
  <div class="box">
  	<p>Box</p>
  </div>
  <div class="box">
  	<p>Box</p>
  </div>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript">

  $('.box').on('click', function() {
  	$(this).shake({
  		howMany: 2, // how many times we want the element to shake
  		animationDirection: {left: 20}, // which direction to shake (X/Y)
  		originalPos: {left: 0} // what position to to return to
  	});		
  });

	</script>
</body>
</html>
