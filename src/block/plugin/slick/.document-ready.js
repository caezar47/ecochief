'use strict';
$(function() { 
	var partners 		= $('[data-slick-partners]');

	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';
	var count = $('.slick-count');


	partners.slick({
		rows:2,
		slidesPerRow:5,
		infinite:false,
		arrows: false,
		dots: true,
		responsive: [
			{
		  		breakpoint: 1400,
		  		settings: {
				    rows:2,
				    slidesPerRow:4,
		  		}
			},
			{
		  		breakpoint: 767,
		  		settings: {
				    rows:2,
				    slidesPerRow:3,
				    slidesToShow: 1,
				    slidesToScroll: 1
		  		}
			},
			{
		  		breakpoint: 550,
				settings: {
				    rows:2,
				    slidesPerRow:2,
				    slidesToShow: 1,
				    slidesToScroll: 1
				}
			}
		]
	});


	/*partners.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [		  
		    {
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
		    },		  
		    {
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
		    }
		]
	});

   	uni.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$(this).find(count).html(i + '/' + slick.$dots[0].children.length);
    });
   	uni.on('init reInit', function(event, slick, currentSlide, nextSlide) {
   		$(".section__wrap").children('[data-glow]').parallax( { mouseport: $(".section__wrap"), decay: 0.5 }, {});
    });
	uni.slick({
		slide: '.card__wrap',
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: $(this).find('.slick-btn.is--prev.is--uni'),
		nextArrow: $(this).find('.slick-btn.is--next.is--uni'),
		draggable: false,
		swipe: false,
		touchMove: false,
		fade: true, 	
	});

	
   	gallery.on('init reInit', function(event, slick, currentSlide, nextSlide) {
   		$(".section__wrap").children('[data-glow]').parallax( { mouseport: $(".section__wrap"), decay: 0.5 }, {});
    });
	gallery.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		infinite: false,
		swipe: false,
		touchMove: false,
		fade: true, 	
		autoplay: true,
		speed: 350,
		autoplaySpeed: 5000,
  		asNavFor: gallery_thumb
	});
	gallery_thumb.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false,
		autoplay: false,
  		asNavFor: gallery,
		focusOnSelect: true,
	});
	
    if($(document).width() < 768) {
	    ch_adv.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$(this).find(count).html(i + '/' + slick.$dots[0].children.length);
	    });
	}
	ch_adv.slick({		
  		responsive: [	
			{
				breakpoint: 99999,
				settings: "unslick"
		    },	
			{
				breakpoint: 767,
				settings:{
					slide: '.card__item',
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					infinite: false,
					prevArrow: $(this).find('.slick-btn.is--prev.is--ch-adv'),
					nextArrow: $(this).find('.slick-btn.is--next.is--ch-adv'),
				}
		    }

		]
	});
    ch_group.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$(this).find(count).html(i + '/' + slick.$dots[0].children.length);
    });

	ch_group.slick({
		slide: '.slide--group',
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
		autoplay: false,
		prevArrow: $(this).find('.slick-btn.is--prev.is--ch-item'),
		nextArrow: $(this).find('.slick-btn.is--next.is--ch-item'),
	});

	ch_card.slick({		
  		responsive: [	
			{
				breakpoint: 99999,
				settings: "unslick"
		    },	
			{
				breakpoint: 1199,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					arrows: false,
					dots: false,
					variableWidth: true,
				}
		    }

		]
	});*/
}); 