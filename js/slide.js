$(document).ready(function(e) {

	var timer;
	
	$('.group img:gt(0)').hide();

	$('.group').mouseenter(function() {
		if(timer) {clearInterval(timer)}
	})
	
	
	
	.mouseleave(function() {
		timer = setInterval(function(){
		$('.group :first-child').fadeOut(1000)
			.next('img').fadeIn().end()
			.appendTo('.group');
	},3000);
	}).mouseleave()
	

	
});
