$(document).ready(function(){
	$(".start-two ul li:nth-child(2)").mouseover(function(){
				$(".labor-box").css({"display":"block"});
				$(".labor-box1").css({"display":"block"});
	});
	$(".start-two ul li:nth-child(2)").mouseout(function(){
				$(".labor-box").css({"display":"none"});
				$(".labor-box1").css({"display":"none"});
	});
});