jQuery(function() {
	var pagetop = $('#page_top');
	pagetop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
				pagetop.fadeIn();
			} else {
				pagetop.fadeOut();
			}
		});
		pagetop.click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});

	$(function(){
	　　var clipboard = new Clipboard('.copy');
			$('.copy').click(function(){
					$("#modal-main").fadeIn("slow").delay(1500).fadeOut("slow");
			});
	});
	$(window).on('load', function() {
			var url = location.href;
			var title = document.title;
			var copy_contents = title + " " + url;
			$('.copy').attr('data-clipboard-text', copy_contents);
	});
