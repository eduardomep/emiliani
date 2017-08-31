var x = 0;
$(document).ready(function(){

	$(window).resize(function() {
		var ventana_ancho = $(window).width();
			if(ventana_ancho<1200){
				$('#myNav').show();
		
			}
			else{
				$('#myNav').hide();
		}
	});





	var flag = false;
	var scroll;
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if(scroll > 100 ){
			if(!flag){
				$(".navbar-collapse").css({"padding-left": "25%"});
        // $( "nav" ).addClass( "navbar-fixed-top" );
				$(".logo").css({"z-index": "901"});
				$(".navbar-collapse").css({"position": "fixed"});
				$(".navbar-collapse").css({"width": "100%"});
				$(".navbar-collapse").css({"top": "0"});
				$(".navbar-collapse").css({"z-index": "900"});
        $("#logobarra").css({"width": "120px","padding-top":"0", "border": "none",  "transition": "0.5s"});
        $("#logobarra").css({"float":"left",  "transition": "0.5s"});
        $(".logo").css({"height": "80px","padding-top":"10px",   "transition": "0.5s","background-color":"var(--azuloscuro)"});
        $("#letrasbarra").css({"font-size": "20px","padding":"10px 20px 0 0"  , "transition": "0.5s"});
				$(".go-top").css({"display":"block"});


				timer = setInterval('temporizador()', 25);




				flag = true;
			}
		}else{
			if(flag){
				$(".navbar-collapse").css({"padding-left": "25%"});
				$(".navbar-collapse").css({"z-index": "auto"});
				$(".navbar-collapse").css({"position": "absolute"});
          // $( "nav" ).removeClass( "navbar-fixed-top" );
            $(".logo").css({"height": "200px",   "transition": "0.5s","background-color":"var(--azul)"});
          $("#letrasbarra").css({"font-size": "36pt","padding":" 0"  ,    "transition": "0.5s"});
          $("#logobarra").css({"width": "175px","padding-top":"15", "border-bottom": "dashed white 4px", "float":"none",  "transition": "0.5s"});
									$(".go-top").css({"display":"none"});
				flag = false;
			}
		}



	});

});
function temporizador() {
	$(document).ready(function() {
		if(x==46){
			timer = clearInterval(timer);
		}
		else {
			$("#años").text(x);
			x++;

		}
	});


}


function openNav() {
		document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
		document.getElementById("myNav").style.width = "0%";
}



	wow = new WOW({
		boxClass: 'wow', // default
		animateClass: 'animated', // default
		offset: 0, // default
		mobile: false, // default
		live: true // default
	})
	wow.init();
