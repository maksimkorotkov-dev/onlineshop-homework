$(function () {

	var mixer = mixitup('.new-product__items-inner');

	$(".card-glory__stars").rateYo({
		rating: 4.5,
		starWidth: "12px",
		readOnly: true,
		normalFill: "#ffffff",

	});

	$(".new-product-stars").rateYo({
		rating: 4.5,
		starWidth: "12px",
		readOnly: true,
		normalFill: "#ffffff",

	});



	$('.slider__inner').slick();

	$('.wrapper').slick({
		slidesToShow: 3,
		slidesToScroll: 3
	}
	);

	var show = true;
	var countbox = ".result__inner";
	$(window).on("scroll load resize", function () {
		if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height(); // Высота окна браузера
		var d_height = $(document).height(); // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
			$('.result__number').css('opacity', '1');
			$('.result__number').spincrement({
				thousandSeparator: ",",
				duration: 3000
			});

			show = false;
		}
	});

});


