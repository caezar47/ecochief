'use strict';
$(function() { 
	var button = $('#to-top');	
  	$(window).scroll (function () {
    	if ($(this).scrollTop () > 500) {
      		button.addClass('is--visible');
    	} else {
      		button.removeClass('is--visible');
    	}
	});	 
	button.on('click', function(e){
		e.preventDefault();
		$('body, html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});		 
});