$(document).ready(function(){
	loadmainImgBG();
	$('#bannerBox a').hover(function(){
		$(this).find('.overWindow').addClass('overS');
	},function(){
		$(this).find('.overWindow').removeClass('overS');
	});
});

//mainImgBG
function loadmainImgBG(){
	$('.carousel').carousel({
		interval: 4000
	});
}
