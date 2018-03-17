$(document).ready(function() {
	$("header.primary, footer.primary, .slideshow, section.main article").hide();
	$("#home-quote-button").hide();
	$("section.main article:nth-of-type(1)").show();
	
	setTimeout(function() {
		$("#home-quote span.subheading:nth-child(1)").css("opacity", 1);
		
		setTimeout(function () {
			$("#home-quote span.subheading:nth-child(2)").css("opacity", 1);
			
			setTimeout(function() {
				$("#home-quote span.heading, #home-quote span.heading span").css("opacity", 1);
				$("#home-quote-button").show();
				$("#home-quote-button").css("opacity", 0);
				
				setTimeout(function () {
					$("#home-quote-button").css("opacity", 1);
				}, 1000);
			}, 3000);
		}, 2500);
	}, 1000);
	
	var slide = 1;
	
	$("#home-quote-button").click(function() {
		$(".page-content-wrapper section.main article:nth-child(1)").fadeOut(500);
		setTimeout(function() {
			$("header.primary, footer.primary, .slideshow, section.main article:not(:first-child)").fadeIn(500);
			$(".slideshow article").hide();
			$(".slideshow article:nth-of-type(" + slide + ")").show();
		}, 500);
	});
	
	// slideshow
	$("#left-slideshow-arrow").click(function() {
		slide--;
		
		if (slide < 1) {
			slide = $(".slideshow article").length;
		}
		
		$(".slideshow article").hide();
		$(".slideshow article:nth-of-type(" + slide + ")").fadeIn();
	});
	
	$("#right-slideshow-arrow").click(function() {
		slide++;
		
		if (slide > $(".slideshow article").length) {
			slide = 1;
		}
		
		$(".slideshow article").hide();
		$(".slideshow article:nth-of-type(" + slide + ")").fadeIn();
	});
});