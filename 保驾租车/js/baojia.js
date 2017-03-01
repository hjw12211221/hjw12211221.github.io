window.addEventListener("DOMContentLoaded", function() {
	loading();
	fangxiangpan();
	playMusic();
	touch.on(".page_2 .car", "touchstart", function(ev) {
		p2Ani();
		setTimeout(function() {
			change(2)
		}, 1000);
	
	})
	
})
window.ontouchmove = function(e) {
	e.preventDefault();
}




function fangxiangpan() {

	var i = 2;
	var angle = 0;
	touch.on('.target', 'touchstart', function(ev) {
		ev.startRotate();
		ev.preventDefault();
	});

	touch.on('.target', 'rotate', function(ev) {
		var isLeft = true;
		var totalAngle = angle + ev.rotation;
		if (ev.fingerStatus === 'end') {
			angle = angle + ev.rotation;
			if (ev.direction == "left") {
				i--;
			} else if (ev.direction == "right") {
				i++;
			}
			change(i);	
		}
		this.style.webkitTransform = 'rotate(' + totalAngle + 'deg)';
	});
}

function change(index) {
	var container = document.querySelector(".container");
	$('.container>div').removeClass('active');
	$('.page_'+(index+1)).addClass('active');
	$('.target').css({'webkitTransform':'rotate(0deg)','transform':'rotate(0deg)'});
// 	TweenMax.to(container, 0.5, {
// 		left: "-" + (index * 100) + "%",
// //		ease: Linear.easeNone,
// 		onComplete: function() {
// 			document.querySelector(".page_2 .car").style.top = "26%";
//
// 		}
// 	})
	$(container).animate({"left":"-" + (index * 100) + "%"},function(){
		$(".page_2 .car").css("top","26%") ;
	})
}

function p2Ani() {
	var p2car = document.querySelector(".page_2 .car");
	var stopcar=document.querySelector('.page_2 .stopcar');
	var height = p2car.offsetHeight;
	var itemheight = $(".page_2 .stopcar").get(0).offsetTop + $(".page_2 .stopcar").get(0).offsetHeight / 2 - height;
	$(p2car).css({
		top: itemheight
	});

}


function playMusic() {
	var bt=document.querySelector(".music");
	var audioP = document.createElement("audio");
	var source = document.createElement("source");
	source.src = "music/bg.mp3";
	audioP.autoplay = true;
	audioP.loop = true;
	audioP.appendChild(source);
	document.body.appendChild(audioP)
	audioP.play();
	bt.addEventListener("touchstart", function() {
			if (audioP.paused) {
				audioP.play();
			} else {
				audioP.pause();
			}
			$(bt).toggleClass("music-animate");
	})
	// window.addEventListener('touchstart',play);
	// function play(){
	// 	audioP.play();
	// 	window.removeEventListener('touchstart',play);
	// }
}

function loading() {
	var car = document.querySelector("#t1car")
	var befg = document.querySelector(".befg")
	var jindutiao = document.querySelector(".jindutiao").offsetHeight;
	var carhei = car.offsetHeight;
	$(car).animate({"top":(jindutiao - carhei / 2)},5000);
	$(befg).animate({"height":"100%"},5000,function () {
		change(1, false)
	});

	// TweenMax.to(car, 5, {
	// 	top: (jindutiao - carhei / 2),
	// 	ease: Linear.easeNone
	// });
	// TweenMax.to(befg, 5, {
	// 	height: "100%",
	// 	ease: Linear.easeNone,
	// 	onComplete: function() {
	// 		change(1, false)
	// 	}
	// });

}