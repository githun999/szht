;$(function(){
	//返回
	$(".nav-l").click(function(){
//		var oP=$(".content-p").html();
		$("content").css(location.href="set-index.html")
	})
	
	//确定
	$(".btn").click(function(){
		$("content").css(location.href="set-phone1.html");
	})
	
//	var oPs=$(".password").val()
//	if(oPs.length==11){
//		$("h2").html(oPs.replace(/(\d{3})\d{4}(\d{4})/,'$1****$2'))
//		
//	}else{
		var oH2=$("h2").html();
		$("h2").html(oH2.replace(/(\d{3})\d{4}(\d{4})/,'$1****$2'))
		
//	}
	
	
		
});
		
//发送验证码
var countdown=60;
function settime(obj) { 
	if (countdown == 0) { 
		obj.removeAttribute("disabled"); 
		obj.value="免费获取验证码"; 
		countdown = 60; 
		return;
	} else { 
		obj.setAttribute("disabled", true); 
		obj.value="重新发送(" + countdown + ")"; 
		countdown--; 
	} 
	setTimeout(function() { 
		settime(obj) 
	},1000) 
}
