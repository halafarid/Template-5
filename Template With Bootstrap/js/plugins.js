$(document).ready(function () {
	/* bt7akm fe w2t 7rkt el indicators fel carousel */
	$('.carousel').carousel({
		interval:5000 /* 5000 = 5second */
	});

	/* Nice Scroll */
	$('html').niceScroll();

	/* byzhar el color option lma bdos 3la el gear */
	$('.gear-check').click(function () {
		$('.color-option').fadeToggle();
	});

	/* bydef el colors ely gwa el gear */
	var colorLi = $('.color-option ul li')
	
	colorLi
		.eq(0).css("backgroundColor", "#f41b17").end()
		.eq(1).css("backgroundColor", "#b027a7").end()
		.eq(2).css("backgroundColor", "#178de4").end()
		.eq(3).css("backgroundColor", "#e47317");

	colorLi.click(function () {
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	});

	/* Scroll To Top */
	var scrollButton = $('#scroll-top');

	$(window).scroll(function () {
		if($(this).scrollTop()>= 500)
		{
			scrollButton.show();
		}
		else /* if($(this).scrollTop() < 500) */
		{
			scrollButton.hide();
		}
		/* $(this).scrollTop() >= 500 ? scrollButton.show() : scrollButton.hide();
			if condition ? true : false */
	})

	/* lma ados 3la el button ytla3ly foo2 */
	scrollButton.click(function () {
		$("html,body").animate({scrollTop:0}, 600); /* 600 de el sor3a ely bytla3 beha */
	})
});

/* Loading Screen */
$(window).load(function () {
	/* 1000 = 1sec (1000 ms)*/
	$('.loading .sk-fading-circle').fadeOut(2000, function () { /* El action byo3d 2d ehh fel saf7a */
			$('body').css("overflow", "auto"); /* To Show The Scroll */
			
			$(this).parent().fadeOut(1000, function () { /* el saf7a bt7aml fe ad eh b3d e5tfa2 el action */
					$(this).remove(); //by7zfo mn el code nfso
			});
	}); 
})


