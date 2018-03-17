// webpage scripts
// main function
$(document).ready(function() {
	// sets header nav top to header bottom
	//$("#nav-buttons").offset({top: $("header").offset().top + $("header").height() + 20});
	
	// nav animation
	var animating = false;
	
	// opening and closing menu icon animation
	function openNav() {
        animating = true;
        $(".menu-icon-div:nth-child(2)").css("visibility", "hidden");
        $(".menu-icon-div:nth-child(1)").css("margin-top", "13px");
        $(".menu-icon-div:nth-child(2)").css("margin-top", "-3px");
        $(".menu-icon-div:nth-child(3)").css("margin-top", "-3px");
		
        setTimeout(function() {
            $(".menu-icon-div:nth-child(1)").css("-webkit-transform", "rotate(45deg)");
            $(".menu-icon-div:nth-child(1)").css("-ms-transform", "rotate(45deg)");
            $(".menu-icon-div:nth-child(1)").css("-moz-transform", "rotate(45deg)");
            $(".menu-icon-div:nth-child(1)").css("-o-transform", "rotate(45deg)");
            $(".menu-icon-div:nth-child(1)").css("transform", "rotate(45deg)");
            $(".menu-icon-div:nth-child(3)").css("-webkit-transform", "rotate(-45deg)");
            $(".menu-icon-div:nth-child(3)").css("-ms-transform", "rotate(-45deg)");
            $(".menu-icon-div:nth-child(3)").css("-moz-transform", "rotate(-45deg)");
            $(".menu-icon-div:nth-child(3)").css("-o-transform", "rotate(-45deg)");
            $(".menu-icon-div:nth-child(3)").css("transform", "rotate(-45deg)");
			
            animating = false;
        }, 500);
    }
	
	function closeNav() {
		animating = true;
        $(".menu-icon-div:nth-child(1)").css("-webkit-transform", "rotate(45deg)");
        $(".menu-icon-div:nth-child(1)").css("-ms-transform", "rotate(0deg)");
        $(".menu-icon-div:nth-child(1)").css("-moz-transform", "rotate(0deg)");
        $(".menu-icon-div:nth-child(1)").css("-o-transform", "rotate(0deg)");
        $(".menu-icon-div:nth-child(1)").css("transform", "rotate(0deg)");
        $(".menu-icon-div:nth-child(3)").css("-webkit-transform", "rotate(0deg)");
        $(".menu-icon-div:nth-child(3)").css("-ms-transform", "rotate(0deg)");
        $(".menu-icon-div:nth-child(3)").css("-moz-transform", "rotate(0deg)");
        $(".menu-icon-div:nth-child(3)").css("-o-transform", "rotate(0deg)");
        $(".menu-icon-div:nth-child(3)").css("transform", "rotate(0deg)");
		
        setTimeout(function() {
            $(".menu-icon-div:nth-child(1)").css("margin-top", "5px");
            $(".menu-icon-div:nth-child(2)").css("margin-top", "5px"); 
            $(".menu-icon-div:nth-child(3)").css("margin-top", "5px");
            $(".menu-icon-div:nth-child(2)").css("visibility", "visible");
			
            animating = false;
        }, 500);
	}
	
	// menu icon click
	$(".menu-icon").click(function() {
		if (!$(".menu-icon").hasClass("active") && !$("#nav-buttons").hasClass("open") && ! animating) {
			$("#nav-buttons").toggleClass("open");
			$(".menu-icon").toggleClass("active");
			openNav();
		} else {
			$("#nav-buttons").toggleClass("open");
			$(".menu-icon").toggleClass("active");
			closeNav();
		}
	});
	
	// content click
	$("main.primary, footer.primary").click(function() {
		if ($(".menu-icon").hasClass("active") && $("#nav-buttons").hasClass("open") && !animating) {
			$("#nav-buttons").toggleClass("open");
			$(".menu-icon").toggleClass("active");
		
			closeNav();
		}
	});
});