$(document).ready(function() {

	$(".user_buttons").click(function() {
		$(this).next().slideToggle();
	});

	$(".menu_btn").click(function() {
		$(".main_menu ul").slideToggle();
	});


	//Попап менеджер FancyBox
	
	$(".fancybox").fancybox();

	
	// // Каруселька
	
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
    	margin:0,
    	responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        }

   		 }
	});

		
	$(".next_btn").click(function() {
		owl.trigger('next.owl.carousel');
		
	});

	$(".prev_btn").click(function(){
		owl.trigger('prev.owl.carousel');
		
	});


	//Аякс отправка форм

	$("#suscribe").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#suscribe").serialize()
		}).done(function() {
			alert("Спасибо за подписку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});