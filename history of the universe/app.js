
$(document).ready(function () {


// Back to top
  $(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeIn(200);
			}
	});
			
// Back to top animation
	$('.go-top').click(function(event) {
		event.preventDefault();
				
	$('html, body').animate({scrollTop: 0}, 300);
	});

/*.scrollTop() is how many pixels down fromt the top i am, if scrolltop > 500, some function//
};