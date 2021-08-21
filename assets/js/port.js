const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}



const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}
$(document).ready(function(){
	// SCROLL ANIMATION

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