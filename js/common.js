$(function() {
//////////   Плавный скролл якорных ссылок     //////////////////
$("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
});
/////////Появление кнопочки наверх в левом нижнем углу////////
$(window).scroll(function(){
	if ($(window).scrollTop() > 400) {
		$('.btnToUp').addClass(' activeUp');
	}
	if ($(window).scrollTop() <= 400) {
		$('.btnToUp').removeClass(' activeUp');
	}
})
///////////////Hover на секции преимуществ////////////////
$(".feature").on("mouseover", function() {
	$($(this).find("svg path")).attr("fill", "#915d42");
	$(this).attr('class', 'feature activeFeature text-center wow fadeInUp')
});
$(".feature").on("mouseout", function() {
	$($(this).find("svg path")).attr("fill", "#000000");
	$(this).attr('class', 'feature text-center wow fadeInUp')
});
/////////////////Счетчик для секции Достижения///////
var firsTry = true;
$(window).scroll(function() {
	$('#achievements').each(function() {
		var cPos = $(this).offset().top,
		topWindow = $(window).scrollTop();
		if (cPos < topWindow + 600) {
			if (firsTry) {
				$('.count').each(function() {
					$(this).addClass(' viz');
					$(this).prop('Counter', 0).animate({
						Counter: $(this).text()
					}, {
						duration: 3500,
						easing: 'swing',
						step:function(now) {
							$(this).text(Math.ceil(now));
						}
					});
				});
				firsTry = false;
			}
		}
	});
});
});
/////////////////Выдвигающееся меню///////////////////
function showOutSlideMenu(n) {
	var Mnu = $("#outSlideMenu"),
		Content = $(".content"),
		ElementsWidth = $("#outSlideMenu").css("width");
	if (n == 1) {
		Mnu.css("left", "0");
		Content.css("left", "+" + ElementsWidth);
	}
	if (n == 0) {
		Mnu.css("left", "-" + ElementsWidth);
		Content.css("left", "0");
	}
}
////////////////Дополнительное меню О НАС//////////////////
var key = 1;
function showToggleMenu() {
	if (key) {
		$('.toggleMenu ul').css("display", "block");
		key = 0;
	}
	else {
		$('.toggleMenu ul').css("display", "none");
		key = 1;
	}
}