(function(){
	function change(){
		document.documentElement.style.fontSize=20 * document.documentElement.clientWidth / 320 +"px"
	}change();
	window.addEventListener('resize',change,false);
})()



