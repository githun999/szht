;$(function(){
	//确定
	$(".btn").click(function(){
		$(".head").css({"background":"#999","opacity":"0.5"});
		$(".config").show();
		
	})
	
	//清除遮盖
		$(".config").click(function(){
			$(".config").hide();
			$(".head").css({"background":"#f5f5f5","opacity":"1"});
		})
	
	
	//返回
	$(".nav-l").click(function(){
		var oP=$(".content-p").html();
		$("content").css(location.href="set-index.html")
	})
	
	

});
