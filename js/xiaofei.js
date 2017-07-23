
var i = 1;

$("#xl").on("click",function(){
	if (i == 1) {
		$(".box").css('display','block');
		i = 2;
	} else{
		$(".box").css('display','none');
		i=1;
	}
	
})

$(".box li").on("onfocus",function(){
		if (i==true){
			$(this).css('background','red')
			}else{
			$(this).css('background','#fff')
			}
			
})
