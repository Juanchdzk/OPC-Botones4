$(document).ready(function(){

	$('.icon-airplane').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});


	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$('.icon-airplane').slideDown(300);
		} else{
			$('.icon-airplane').slideUp(300);
		}
	})
});