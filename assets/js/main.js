$(document).ready(function(){
	// SCROLL ANIMATION
	window.addEventListener('scroll', () => {
		let pageContent = document.queryselector('')
	});

	// smoothscroll
	$('#back-to-top').click(function(link){
		link.preventDefault();

		let target = $(this).attr('href');

		$('html, body').stop().animate({
			scrollTop: $(target).offset().top - 25
		},3000);

	})

	// back-to-top
	$(window).scroll(function(){

		let position = $(this).scrollTop();

		if(position>= 300){
			$('#back-to-top').addClass('scrollTop');
		} else{
			$('#back-to-top').removeClass('scrollTop');
		}	
	})









});
