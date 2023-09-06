$(document).ready(function(){

	// Global Variables

		var toggle_primary_button = $('.wpburger'),
				toggle_primary_icon = $('.wpburger'),
				toggle_secondary_button = $('nav li span'),
				primary_menu = $('nav'),
				secondary_menu = $('nav ul ul'),
				webHeight = $(document).height(),
				window_width = $(window).width();

	// Company name and phone number on content area
	$("main * :not('h1')").each(function() {
		var regex1 = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{6})/g;
		var regex2 = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{4}[\s.-]?\d{4})/g;
		var regex = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/g;
				$(this).html(
						$(this).html()
						.replace(/CompanyName/gi, "<span class='comp'>$&</span>")
						.replace(regex1, "<strong>$&</strong>").replace(regex2, "<strong>$&</strong>").replace(regex, "<strong>$&</strong>"));
		});

		// Forms on content area
		var form = $('main').find('#myframe');
			if(form.length > 0) {
			document.getElementById('myframe').onload = function(){
			  calcHeight();
			};
		}

	// Add class to tab having drop down
	$( "nav li:has(ul)").find('span').addClass("active");

	//Multi-line Tab
	toggle_secondary_button.click(function(){
		$(this).parent("li").children("ul").slideToggle();
		$(this).toggleClass('active');
	});

	// Basic functionality for nav_toggle
	$(toggle_primary_button).click(function(){
		primary_menu.addClass('toggle_right_style');
		$('.toggle_right_nav').addClass('toggle_right_cont');
		$('body').addClass('active');
	});

	$('.toggle_nav_close, .menu_slide_right small').click(function(){
		primary_menu.removeClass('toggle_right_style')
		$('.toggle_right_nav').removeClass('toggle_right_cont');
		$('body').removeClass('active');
	});

	// Swap Elements
	function swap_this(){
		if(window_width <= 800){
			$('.logo').insertBefore('.wpburger');
			$('#nav_area').insertBefore('header');
		}else {
			$('#nav_area').insertAfter('header');
			$('.logo').insertAfter('.logo_nav');
		}
	}

	swap_this();

	// Reset all configs when width > 800
	$(window).resize(function(){
		window_width = $(this).width();

		swap_this();

		if(window_width > 800) {

			secondary_menu.removeAttr('style');
			toggle_secondary_button.removeClass("active");
			$('body').removeClass('active');
		}

	});

	$('.rslides').responsiveSlides();
	// $(".box_skitter_large").skitter();

	$('.back_top').click(function () { // back to top
		$("html, body").animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	$(window).scroll(function(){  // fade in fade out button
	var windowScroll = $(this).scrollTop();

		if (windowScroll > (webHeight * 0.5) ) {
			$(".back_top").fadeIn();
		} else{
			$(".back_top").fadeOut()
		};

		// For (AddThis) Plugins
		if($('body #at-share-dock').hasClass('at-share-dock')) {
			$('.back_top').addClass('withAddThis_plugins');
			$('.footer_btm').addClass('withAddThis_ftr_btm');
		} else {
			$('.back_top').removeClass('withAddThis_plugins');
			$('.footer_btm').removeClass('withAddThis_ftr_btm');
		}
		// End (AddThis) Plugins

	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

});
