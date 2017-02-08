
$(document).ready(function () {
//hide alert on default
function hide(){
	$('#alert').hide()
};
hide();

// Back to top button
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


//move horizontal timeline to bottom of page after half way down//
$(window).scroll(function() {

    if ($(this).scrollTop()>600)
     {
        $('.horizontal').fadeOut();
        $('.horizontalfooter').fadeIn();
     }
    else
     {
      $('.horizontal').fadeIn();
     }
 });

//hide elements before clicks
//$('#rowtop').hide();

//on click of vertical number, show the timeline item//
//$('#billion').click(function(e){
	//e.preventDefault();
	//$('#rowtop').show();
//});

//on second click, hide the timeline item//


/*if (window)<500px, show "The universe is too vast for your screen!"*/

$(window).resize(function(){
	if ($(window).width() < 878) { 
		$('#alert').show();
	}else{
		$('#alert').hide();
		}
	});

/*button to flip the order (present on top)*/

$('#reverse').click(function(reverse){
	if ($('section').hasClass('timeline')) {
		reverse.preventDefault();
		$('section').removeClass('timeline');
		$('section').addClass('timeline-switched');
	} //else {
		//reverse.preventDefault()
		//$('section').removeClass('timeline-switched');
		//$('section').addClass('timeline');}
});

$('#reverse').click(function(verticalreverse){
		if ($('article').hasClass('vertical')) {
			verticalreverse.preventDefault();
			$('article').removeClass('vertical');
			$('article').addClass('verticalSwitched');
		}
});

});