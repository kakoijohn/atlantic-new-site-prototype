$(document).ready(function() {
	//name of the page we are on
	var page = $('title').attr('title');
// 	console.log(page);

	//check if request for quote section is currently being displayed.
	var requestQuoteVisible = false;
	//set initial position of the request for quote outside the visible area.
	$('.request-quote-screen').css('left', $(window).width());

	//make size of clear banner window the rest of the window height
	$('.clear-banner-window').height($(window).height() - $('.content-start').position().top);
	//set the preheader text for the logo the proper name based on window size.
	if ($(window).width() < 930)
		$('.preheader-company-name').text('ANT');
	else
		$('.preheader-company-name').text('Atlantic Nitrogen & Testing');
	
	//resize the request a quote screen to fit inside the frame when the page loads.
	$('.request-quote-screen').height($(window).height());
	$('.request-quote-screen .inner-screen').height($(window).height() - 70);

	//resize the full winow graphic to the size of the window
	$('.full-window-graphic').height($(window).height());

	//if the window has been resized, recalculate the height of the clear banner window
	$(window).resize(function() {
		$('.clear-banner-window').height($(window).height() - $('.content-start').position().top);

		if ($(window).width() < 930)
			$('.preheader-company-name').text('ANT');
		else
			$('.preheader-company-name').text('Atlantic Nitrogen & Testing');

		//resize request a quote screen
		$('.request-quote-screen').height($(window).height());
		$('.request-quote-screen .inner-screen').height($(window).height() - 70);

		//if the screen is resized, we need to move the request for quote area
		if (requestQuoteVisible == false) {
			$('.request-quote-screen').css('left', $(window).width());
		}

		//resize the full winow graphic to the size of the window
		$('.full-window-graphic').height($(window).height());
	});

	if ($(window).width > 992) {
		$('.about').click(function() {
			toggleMenu($('#about-menu'), '.about');
		
			closeOtherMenus($('#about-menu').attr('id'));
		});
		$('.testing').click(function() {
			toggleMenu($('#testing-menu'), '.testing');
		
			closeOtherMenus($('#testing-menu').attr('id'));
		});
		$('.services').click(function() {
			toggleMenu($('#services-menu'), '.services');

			closeOtherMenus($('#services-menu').attr('id'));
		});
		$('.maintenance').click(function() {
			toggleMenu($('#maintenance-menu'), '.maintenance');

			closeOtherMenus($('#maintenance-menu').attr('id'));
		});
	} else {
		$('.about').click(function() {
			window.location.replace("html/about.html");
		});
		$('.testing').click(function() {
			window.location.replace("html/testing.html");
		});
		$('.services').click(function() {
			window.location.replace("html/services.html");
		});
		$('.maintenance').click(function() {
			
		});
	}
	
	
	function closeOtherMenus(currentMenu) {
		if (currentMenu != 'about-menu') {
	   		$('#about-menu').css('display', 'none');
	   		$('.about .arrow-icon').rotate({animateTo:0});
	   		$('.about').css('background', '');
		} if (currentMenu != 'testing-menu') {
	   		$('#testing-menu').css('display', 'none');
	   		$('.testing .arrow-icon').rotate({animateTo:0});
	   		$('.testing').css('background', '');
		} if (currentMenu != 'services-menu') {
	   		$('#services-menu').css('display', 'none');
	   		$('.services .arrow-icon').rotate({animateTo:0});
	   		$('.services').css('background', '');
		} if (currentMenu != 'maintenance-menu') {
	   		$('#maintenance-menu').css('display', 'none');
	   		$('.maintenance .arrow-icon').rotate({animateTo:0});
	   		$('.maintenance').css('background', '');
		}
	}
	
	function toggleMenu(currentMenu, className) {
		if (currentMenu.css('display') == 'none') {
			currentMenu.css('display', 'block');
			$(className + ' .arrow-icon').rotate({angle: 0, animateTo:180, duration:500});
			$(className).css('background', '#CDDAEC');
		} else {
			currentMenu.css('display', 'none');
			$(className + ' .arrow-icon').rotate({angle: 180, animateTo:0});
			$(className).css('background', '');
		}
	}
	
	var prevScroll = $(document).scrollTop();

	//menu bar transition / WOB Logo Transition
	$(document).scroll(function() {
		if ($('.content-start').visible() == false) {
			$('.preheader').css('position', 'fixed');
			$('.preheader').css('background-color', 'rgba(83, 96, 126, 0.7)');
			$('#main-menu-bar').css('padding-top', '34px');
			
			setDisplay('block');
			closeOtherMenus(null);
		} else {
			$('.preheader').css('position', 'relative');
			$('.preheader').css('background-color', '#4671D5');
			$('#main-menu-bar').css('padding-top', '0');
			
			setDisplay("none");
		}
		
		if ($(document).scrollTop() != 0) {
			$('.banner-WOB-logo').css('z-index', -10);
			$('.banner-text').css('z-index', -10);

			$('.watch-video').css('z-index', -10);
		} else if (page == 'index.html' || page == 'services.html') {
			$('.banner-WOB-logo').css('z-index', 1);
			$('.banner-text').css('z-index', 1);

			$('.watch-video').css('z-index', 1);
		}

		//if the user tries to scroll the screen while the request a quote screen is up. stop the action.
		if (requestQuoteVisible == true) {
			$(document).scrollTop(prevScroll);
		}

		prevScroll = $(document).scrollTop();
	});
	
	function setDisplay(disp) {
		$('#preheader-logo').css('display', disp);

		$('#preheader-about').css('display', disp);
		$('#preheader-testing').css('display', disp);
		$('#preheader-services').css('display', disp);
		$('#preheader-maintenance').css('display', disp);
		$('#preheader-gallery').css('display', disp);
		$('#preheader-menu-tab').css('display', disp);	
	}

	$("#3-pic-container-1").hover(function(){
		$("#3-pic-container-1").toggleClass("hovered");
		$("#3-pic-container-1-1").toggleClass("hovered");
		$("#3-pic-container-1-2").toggleClass("hovered");
		$("#3-pic-container-1-3").toggleClass("hovered");
	});
	$("#3-pic-container-2").hover(function(){
		$("#3-pic-container-2").toggleClass("hovered");
		$("#3-pic-container-2-1").toggleClass("hovered");
		$("#3-pic-container-2-2").toggleClass("hovered");
		$("#3-pic-container-2-3").toggleClass("hovered");
	});
	$("#3-pic-container-3").hover(function(){
		$("#3-pic-container-3").toggleClass("hovered");
		$("#3-pic-container-3-1").toggleClass("hovered");
		$("#3-pic-container-3-2").toggleClass("hovered");
		$("#3-pic-container-3-3").toggleClass("hovered");
	});

	$('#tetris-left').hover(function() {
		$('#tetris-left h2').toggleClass("hovered");
	});
	$('#tetris-right-1').hover(function() {
		$('#tetris-right-1 h2').toggleClass("hovered");
	});
	$('#tetris-right-2').hover(function() {
		$('#tetris-right-2 h2').toggleClass("hovered");
	});
	
	/* var xDocMid = docHeight / 2;
	var yDocMid = docWidth / 2;
	$(document).mousemove(function(event) {
		var xPos = event.pageX;
		var yPos = event.pageY;
		
		$('.big-picture-banner-img').css('margin-top',  .05 * (yDocMid - yPos));
		$('.big-picture-banner-img').css('margin-left', .05 * (xDocMid - xPos));
	}); */

	//Timeline toggles
	$('#timeline-2011').hover(function() {
		toggleTimeline('2011');
	});
	$('#timeline-2012').hover(function() {
		toggleTimeline('2012');
	});
	$('#timeline-2013').hover(function() {
		toggleTimeline('2013');
	});
	$('#timeline-2014').hover(function() {
		toggleTimeline('2014');
	});
	$('#timeline-2015').hover(function() {
		toggleTimeline('2015');
	});
	$('#timeline-2016').hover(function() {
		toggleTimeline('2016');
	});
	$('#timeline-2017').hover(function() {
		toggleTimeline('2017');
	});

	function toggleTimeline(id) {
		$('#content-2011').css('visibility', 'hidden');
		$('#content-2011').css('opacity', '0');
		$('#content-2011').css('z-index', '-1');
		$('#timeline-2011').css('background-image', 'url(../images/about/TimelineLine1.png)');
		$('#timeline-2011').css('color', 'grey');

		$('#content-2012').css('visibility', 'hidden');
		$('#content-2012').css('opacity', '0');
		$('#content-2012').css('z-index', '-1');
		$('#timeline-2012').css('background-image', 'url(../images/about/TimelineLine1.png)');
		$('#timeline-2012').css('color', 'grey');

		$('#content-2013').css('visibility', 'hidden');
		$('#content-2013').css('opacity', '0');
		$('#content-2013').css('z-index', '-1');
		$('#timeline-2013').css('background-image', 'url(../images/about/TimelineLine1.png)');
		$('#timeline-2013').css('color', 'grey');

		$('#content-2014').css('visibility', 'hidden');
		$('#content-2014').css('opacity', '0');
		$('#content-2014').css('z-index', '-1');
		$('#timeline-2014').css('background-image', 'url(../images/about/TimelineLine1.png)');
		$('#timeline-2014').css('color', 'grey');
		
		$('#content-2015').css('visibility', 'hidden');
		$('#content-2015').css('opacity', '0');
		$('#content-2015').css('z-index', '-1');
		$('#timeline-2015').css('background-image', 'url(../images/about/TimelineLine1.png)');
		$('#timeline-2015').css('color', 'grey');

		$('#content-2016').css('visibility', 'hidden');
		$('#content-2016').css('opacity', '0');
		$('#content-2016').css('z-index', '-1');
		$('#timeline-2016').css('background-image', 'url(../images/about/TimelineLine1.png)');
		$('#timeline-2016').css('color', 'grey');

		$('#content-2017').css('visibility', 'hidden');
		$('#content-2017').css('opacity', '0');
		$('#content-2017').css('z-index', '-1');
		$('#timeline-2017').css('background-image', 'url(../images/about/TimelineLine1.png)');
		$('#timeline-2017').css('color', 'grey');

		$('#content-' + id).css('visibility', 'visible');
		$('#content-' + id).css('opacity', '1');
		$('#content-' + id).css('z-index', '10');
		$('#timeline-' + id).css('background-image', 'url(../images/about/TimelineLine2.png)');
		$('#timeline-' + id).css('color', 'red');
	}

	//Pigging tab toggles
	$('#poly-pig-tab').hover(function() {
		togglePigTab('#poly-pig');
	});
	$('#gauge-pig-tab').hover(function() {
		togglePigTab('#gauge-pig');
	});
	$('#brush-pig-tab').hover(function() {
		togglePigTab('#brush-pig');
	});
	$('#smart-pig-tab').hover(function() {
		togglePigTab('#smart-pig');
	});

	function togglePigTab(id) {
		$('#poly-pig-content').css('opacity', '0');
		$('#poly-pig-content').css('visibility', 'hidden');
		$('#poly-pig-content').css('z-index', '-1');
		$('#poly-pig-tab a').css('color', '#4671D5');
		$('#poly-pig-tab a').css('border-color', 'transparent');

		$('#gauge-pig-content').css('opacity', '0');
		$('#gauge-pig-content').css('visibility', 'hidden');
		$('#gauge-pig-content').css('z-index', '-1');
		$('#gauge-pig-tab a').css('color', '#4671D5');
		$('#gauge-pig-tab a').css('border-color', 'transparent');

		$('#brush-pig-content').css('opacity', '0');
		$('#brush-pig-content').css('visibility', 'hidden');
		$('#brush-pig-content').css('z-index', '-1');
		$('#brush-pig-tab a').css('color', '#4671D5');
		$('#brush-pig-tab a').css('border-color', 'transparent');

		$('#smart-pig-content').css('opacity', '0');
		$('#smart-pig-content').css('visibility', 'hidden');
		$('#smart-pig-content').css('z-index', '-1');
		$('#smart-pig-tab a').css('color', '#4671D5');
		$('#smart-pig-tab a').css('border-color', 'transparent');

		$(id + '-content').css('opacity', '1');
		$(id + '-content').css('visibility', 'visible');
		$(id + '-content').css('z-index', '10');
		$(id + '-tab a').css('color', '#345182');
		$(id + '-tab a').css('border-right', 'solid');
		$(id + '-tab a').css('border-bottom', 'solid');
		$(id + '-tab a').css('border-width', '4px');
	}

	//when the watch video link is hovered over, take the blur off of the video
	$('.watch-video').hover(
		function() {
			//hover over
			$('.big-picture-banner video').css('-webkit-filter', 'blur(0)');
			$('.big-picture-banner video').css('-moz-filter', 'blur(0)');
			$('.big-picture-banner video').css('-o-filter', 'blur(0)');
			$('.big-picture-banner video').css('-ms-filter', 'blur(0)');
			$('.big-picture-banner video').css('filter', 'blur(0)');	
		},
		function() {
			//hover out
			$('.big-picture-banner video').css('-webkit-filter', '');
			$('.big-picture-banner video').css('-moz-filter', '');
			$('.big-picture-banner video').css('-o-filter', '');
			$('.big-picture-banner video').css('-ms-filter', '');
			$('.big-picture-banner video').css('filter', '');	
		}
	);

	//request quote show / hide
	$('.request-quote-click').click(function() {
		$('.request-quote-screen').css('left', 0);
		requestQuoteVisible = true;
	});
	$('#request-quote-exit').click(function() {
		$('.request-quote-screen').css('left', $(window).width());
		requestQuoteVisible = false;
	});
	$('.request-quote-screen').click(function() {
		if (requestQuoteVisible == true) {
			$('.request-quote-screen').css('left', $(window).width());
			requestQuoteVisible = false;
		}
	});


	//Cryo and Membrane tab toggles
	$('#membrane-button').click(function() {
		toggleMembCryoTab('#membrane');
	});
	$('#cryo-button').click(function() {
		toggleMembCryoTab('#cryo');
	});

	function toggleMembCryoTab(id) {
		$('#membrane-graphic').css('opacity', '0');
		$('#membrane-graphic').css('z-index', '-1');
		$('#membrane-button h2').css('background-color', 'white');

		$('#cryo-graphic').css('opacity', '0');
		$('#cryo-graphic').css('z-index', '-1');
		$('#cryo-button h2').css('background-color', 'white');

		$(id + '-graphic').css('opacity', '1');
		$(id + '-graphic').css('z-index', '10');
		$(id + '-button h2').css('background-color', '#cedbed');
	}

	$(window).load(function() {
		//position the dots in the correct place
		if (page == 'testing.html') {
			//cryo nitrogen dots
			$('#cryo-control-cab-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .43);
			$('#cryo-control-cab-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .62);

			$('#cryo-tank-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .25);
			$('#cryo-tank-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .85);
		
			$('#cryo-engine-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .60);
			$('#cryo-engine-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .45);

			//membrane nitrogen dots
			$('#memb-control-cab-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .50);
			$('#memb-control-cab-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .45);

			$('#memb-tank-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .60);
			$('#memb-tank-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .67);
		
			$('#memb-engine-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .48);
			$('#memb-engine-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .54);

			$('#memb-filter-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .36);
			$('#memb-filter-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .75);

			$('#memb-booster-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .45);
			$('#memb-booster-dot').css('left', $('.full-window-graphic .graphic .image img').width() * 1.03);

			$('#memb-deck-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .72);
			$('#memb-deck-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .79);
		}
	});

	$(window).resize(function() {
		if (page == 'testing.html') {
			//cryo nitrogen dots
			$('#cryo-control-cab-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .43);
			$('#cryo-control-cab-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .62);

			$('#cryo-tank-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .25);
			$('#cryo-tank-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .85);
		
			$('#cryo-engine-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .60);
			$('#cryo-engine-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .45);

			//membrane nitrogen dots
			$('#memb-control-cab-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .50);
			$('#memb-control-cab-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .45);

			$('#memb-tank-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .60);
			$('#memb-tank-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .67);
		
			$('#memb-engine-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .48);
			$('#memb-engine-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .54);

			$('#memb-filter-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .36);
			$('#memb-filter-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .75);

			$('#memb-booster-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .45);
			$('#memb-booster-dot').css('left', $('.full-window-graphic .graphic .image img').width() * 1.03);

			$('#memb-deck-dot').css('top', $('.full-window-graphic .graphic .image img').height() * .72);
			$('#memb-deck-dot').css('left', $('.full-window-graphic .graphic .image img').width() * .79);
		}
	});

	//Cryo Nitrogen dot toggles
	$('#cryo-control-cab-dot').click(function() {
		toggleCryoTab('#cryo-control-cab');
	});
	$('#cryo-tank-dot').click(function() {
		toggleCryoTab('#cryo-tank');
	});
	$('#cryo-engine-dot').click(function() {
		toggleCryoTab('#cryo-engine');
	});

	function toggleCryoTab(id) {
		$('#cryo-nitrogen-gas-content').css('opacity', '0');
		$('#cryo-nitrogen-gas-content').css('z-index', '-1');
// 		$('#cryo-control-cab-dot').css('background-color', 'white');

		$('#cryo-control-cab-content').css('opacity', '0');
		$('#cryo-control-cab-content').css('z-index', '-1');
		$('#cryo-control-cab-dot').css('background-color', 'white');

		$('#cryo-tank-content').css('opacity', '0');
		$('#cryo-tank-content').css('z-index', '-1');
		$('#cryo-tank-dot').css('background-color', 'white');

		$('#cryo-engine-content').css('opacity', '0');
		$('#cryo-engine-content').css('z-index', '-1');
		$('#cryo-engine-dot').css('background-color', 'white');

		$(id + '-content').css('opacity', '1');
		$(id + '-content').css('z-index', '20');
		$(id + '-dot').css('background-color', '#e22828');
	}

	//Membrane Nitrogen dot toggles
	$('#memb-control-cab-dot').click(function() {
		toggleMembTab('#memb-control-cab');
	});
	$('#memb-tank-dot').click(function() {
		toggleMembTab('#memb-tank');
	});
	$('#memb-engine-dot').click(function() {
		toggleMembTab('#memb-engine');
	});
	$('#memb-filter-dot').click(function() {
		toggleMembTab('#memb-filter');
	});
	$('#memb-booster-dot').click(function() {
		toggleMembTab('#memb-booster');
	});
	$('#memb-deck-dot').click(function() {
		toggleMembTab('#memb-deck');
	});

	function toggleMembTab(id) {
		$('#memb-nitrogen-gas-content').css('opacity', '0');
		$('#memb-nitrogen-gas-content').css('z-index', '-1');
// 		$('#memb-control-cab-dot').css('background-color', 'white');

		$('#memb-control-cab-content').css('opacity', '0');
		$('#memb-control-cab-content').css('z-index', '-1');
		$('#memb-control-cab-dot').css('background-color', 'white');

		$('#memb-tank-content').css('opacity', '0');
		$('#memb-tank-content').css('z-index', '-1');
		$('#memb-tank-dot').css('background-color', 'white');

		$('#memb-engine-content').css('opacity', '0');
		$('#memb-engine-content').css('z-index', '-1');
		$('#memb-engine-dot').css('background-color', 'white');

		$('#memb-filter-content').css('opacity', '0');
		$('#memb-filter-content').css('z-index', '-1');
		$('#memb-filter-dot').css('background-color', 'white');

		$('#memb-booster-content').css('opacity', '0');
		$('#memb-booster-content').css('z-index', '-1');
		$('#memb-booster-dot').css('background-color', 'white');

		$('#memb-deck-content').css('opacity', '0');
		$('#memb-deck-content').css('z-index', '-1');
		$('#memb-deck-dot').css('background-color', 'white');

		$(id + '-content').css('opacity', '1');
		$(id + '-content').css('z-index', '20');
		$(id + '-dot').css('background-color', '#e22828');
	}
});