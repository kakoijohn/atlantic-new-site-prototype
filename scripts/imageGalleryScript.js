var flickrApiData;

function jsonFlickrApi(data) {
	flickrApiData = data;
	console.log("called");
}

$(document).ready(function() {
	//load FlickrAPI Data
	$.getScript("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=533c22f090843c3fdaf6e47fc2ef63a5&user_id=138911296%40N02&format=json&sort=date-taken-desc", function() {
		var threePicBlock = "<div class=\"three-picture-section\">";
		$.each(flickrApiData.photos.photo, function(i, photo) {
			var source = "https://farm5.staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg";
// 			console.log(source);

			threePicBlock += "<div class=\"single-image\"><img src=\"" + source + "\" class=\"gallery-image\" id=\"photo_" + i + "\"></div>";

			if ((i + 1) % 3 == 0) {
				threePicBlock += "</div>";
				$("#images").append(threePicBlock);
				threePicBlock = "<div class=\"three-picture-section\">";
			}
		});
		var numPhotos = $('.gallery-image').size();
		$("#images").append("</div>");

// 		console.log(flickrApiData);

		//once the images have loaded, make sure they are vertically centered.
		$('.gallery-image').on('load', function() {
			$('.gallery-image').each(function() {
				console.log((120 - $(this).height() / 2));
				$(this).css('margin-top', (120 - $(this).height() / 2));
			});
		});

		var imageFullscreenVisible = false;

		$('.image-fullscreen .inner-screen').css('max-height', $(window).height() - 70);
		$(window).resize(function() {
			$('.image-fullscreen .inner-screen').css('max-height', $(window).height() - 70);
	
			$('.image-fullscreen .inner-screen').one('webkitTransitionEnd otransitionend msTransitionEnd transitionend', function(e) {
				$('.exit-button').css('left', $('.inner-screen').width() + $('.inner-screen').offset().left - $('.exit-button').width() - 10);
		    });
		
		});
	
		//image fullscreen show / hide
		var currentSourceID;
		$('.gallery-image').click(function() {
			var source = $(this).attr("src");
			source = source.substring(0, source.length - 5) + "h.jpg";
			
			currentSourceID = $(this).attr("id");
	
// 			console.log(source);
	
			$('.image-fullscreen .inner-screen').attr("src", source);
	
			//wait until our fullscreen image has loaded.
			$('.image-fullscreen .inner-screen').on('load', function() {
				$('.image-fullscreen').css('opacity', 1);
				$('.image-fullscreen').css('z-index', 10);
				imageFullscreenVisible = true;
	
				//move exit button to fit on image
				$('.exit-button').css('left', $('.inner-screen').width() + $('.inner-screen').offset().left - $('.exit-button').width() - 10);
			});
		});
		$('.right-arrow').click(function() {
			var currIDNum = currentSourceID.replace("photo_", "");
// 			console.log(currIDNum);
			if (currIDNum < numPhotos - 1) {
				var nextID = "#photo_" + (parseInt(currIDNum) + 1);
				var nextSource = $(nextID).attr("src");
				nextSource = nextSource.substring(0, nextSource.length - 5) + "h.jpg";
	
				currentSourceID = $(nextID).attr("id");
	
				$('.image-fullscreen .inner-screen').attr("src", nextSource);
	
				//wait until our fullscreen image has loaded.
				$('.image-fullscreen .inner-screen').on('load', function() {
					$('.image-fullscreen').css('opacity', 1);
					$('.image-fullscreen').css('z-index', 10);
					imageFullscreenVisible = true;
	
					//move exit button to fit on image
					$('.exit-button').css('left', $('.inner-screen').width() + $('.inner-screen').offset().left - $('.exit-button').width() - 10);
				});
			}
		});
		$('.left-arrow').click(function() {
			var currIDNum = currentSourceID.replace("photo_", "");
// 			console.log(currIDNum);
			if (currIDNum > 0) {
				var prevID = "#photo_" + (parseInt(currIDNum) - 1);
				var prevSource = $(prevID).attr("src");
				prevSource = prevSource.substring(0, prevSource.length - 5) + "h.jpg";
		
				currentSourceID = $(prevID).attr("id");
					
				$('.image-fullscreen .inner-screen').attr("src", prevSource);
	
				//wait until our fullscreen image has loaded.
				$('.image-fullscreen .inner-screen').on('load', function() {
					$('.image-fullscreen').css('opacity', 1);
					$('.image-fullscreen').css('z-index', 10);
					imageFullscreenVisible = true;
	
					//move exit button to fit on image
					$('.exit-button').css('left', $('.inner-screen').width() + $('.inner-screen').offset().left - $('.exit-button').width() - 10);
				});
			}
		});
		$('#image-fullscreen-exit').click(function() {
			$('.image-fullscreen').css('opacity', 0);
			$('.image-fullscreen').css('z-index', -10);
			imageFullscreenVisible = false;
		});
	
	
		$('.image-fullscreen .inner-screen').hover(function() {
			$('.exit-button a').css('opacity', 1);
			$('.image-fullscreen .inner-screen').css('border-radius', '20px');
		}, function() {
			$('.exit-button a').css('opacity', 0);
			$('.image-fullscreen .inner-screen').css('border-radius', '0');
		});
	
		$('.exit-button a').hover(function() {
			$('.exit-button a').css('opacity', 1);
			$('.image-fullscreen .inner-screen').css('border-radius', '20px');
		}, function() {
			$('.exit-button a').css('opacity', 0);
			$('.image-fullscreen .inner-screen').css('border-radius', '0');
		});
	
	
		var prevScroll = $(document).scrollTop();
	
		//scroll disable when image is fullscreen
		$(document).scroll(function() {
			if (imageFullscreenVisible == true) {
				$(document).scrollTop(prevScroll);
			}
	
			prevScroll = $(document).scrollTop();
		});


	});
});