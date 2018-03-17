$(document).ready(function() {
	// timeline hover box
	$("#timeline-hover-box").hide();
	
	var timelineData = [{
		date: "1803 - 1815",
		title: "Napoleonic Wars"
	}, 
	{
		date: "1815",
		title: "Congress of Vienna"
	}, 
	{
		date: "1834",
		title: "Creation of Zollverein"
	}, 
	{
		date: "1848",
		title: "Frankfurt Assembly"
	}, 
	{
		date: "1862",
		title: "Bismarck Delivers \"Iron and Blood\" Speech"
	}, 
	{
		date: "1866",
		title: "Defeat of Austria"
	}, 
	{
		date: "1870 - 1871",
		title: "Franco-Prussian War"
	},
	{
		date: "1871",
		title: "Unification of Germany"
	}];
	
	$(".timeline-node").mouseenter(function() {
		$("#timeline-hover-box").fadeIn(200);
		
		$("#timeline-hover-box b").html(timelineData[$(this).index(".timeline-node")].date);
		$("#timeline-hover-box span").html(timelineData[$(this).index(".timeline-node")].title);
		
		$("#timeline-hover-box").offset({
			top: $(this).offset().top - 1.75 * $("#timeline-hover-box").height(), 
			left: $(this).offset().left - $("#timeline-hover-box").outerWidth()/2 + $(this).width()/2
		});
	});
	
	$(".timeline-node").mouseleave(function() {
		$("#timeline-hover-box").fadeOut(200);
	});
	
	// timeline information
	$("section.main article:not(section.main article:nth-of-type(1))").hide();
	$("section.main article:nth-of-type(2)").show();
	
	var currentArticle = $("section.main article:nth-of-type(2)");
	
	$(".timeline-node").click(function() {
		currentArticle.fadeOut(500);
		$("section.main article:nth-of-type(" + (2 + $(this).index(".timeline-node") + 1) + ")").fadeIn(500);
		currentArticle = $("section.main article:nth-of-type(" + (2 + $(this).index(".timeline-node") + 1) + ")");
	});
});