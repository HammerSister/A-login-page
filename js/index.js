$("#welcome").ready(function(){
	setTimeout("$('#welcome').slideUp(500)",2000)
});

$("#click").click(function(){
	$("#login").animate({height:'toggle',opacity:'toggle'})
})