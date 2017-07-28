
var mySwiper = new Swiper('.swiper-container', {
					direction: 'vertical',
//					loop: true,
					//				initialSlide:1
					freeMode: false,
					//				autoplay: 500,
					//				autoplayDisableOnInteraction: false,
					onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
						swiperAnimateCache(swiper); //隐藏动画元素 
						swiperAnimate(swiper); //初始化完成开始动画
					},
					onTouchEnd: function(swiper) {

					},
					onSlideChangeEnd: function(swiper) {
						if(swiper.activeIndex == 3){
							console.log(3);
						var startX,endX,a=0,b=0,n=0;
						$(document).on("touchstart",function(e){
							startX = e.originalEvent.touches[0].pageX;
						});
						
						$(document).on("touchmove",function(e){
							endX = e.originalEvent.touches[0].pageX;
							a = parseInt((endX - startX)/10);
							
							if(a > b){
							n--;
							if(n < 0){
								n = 71;
							}
							}else if(a == b){
							n = n;	
							}else{
								n++;
								if(n > 71){
									n = 0;
								}
							}
							b = a;
							$("#main img").eq(n).show().siblings().hide();
						});
						
						
						}
						swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
					}
				})


// 汽车自动转动
var time1=null;
isRotate=false;
$(".quan").click(function(){
   if(isRotate==false){
   	time1=setInterval(carRotate,50);
   	isRotate=true;
   }else{
    clearInterval(time1);
    isRotate=false;
   }
})
var x=0;
function carRotate(){
   $("#main img").eq(x).show().siblings().hide();
   if(x>=71){
   	x=0;
   }
   x++;
}

// 汽车放大、缩小
var scale=1;
$(".jia").click(function(){
	scale+=0.5;
	if(scale>=2){
		scale=2;
	}
	$("#main").css({
		"transform":"scale("+scale+")"
	})
});
$(".jian").click(function(){
	scale-=0.5;
	if(scale<=0.5){
		scale=0.5;
	}
	$("#main").css({
		"transform":"scale("+scale+")"
	})
});




// $(".face").hover(function(){
// 	$(".car1").animate({
// 		left:"1.3rem",
// 		top:"2.4rem"
// 	});
// },function(){
// 	$(".car1").animate({
// 		left:"-2.65rem",
// 		top:"3.4rem"
// 	});
// });


/*$(".light").hover(function(){
	$(".bigcarlight").show();
},function(){
	$(".bigcarlight").hide();
})*/


// 查看车身、大灯
var flag1=true,flag2=true,flag3=true;
$(".face").click(function(){
	if(flag1){
		$(".car1").animate({
			left:"1.3rem",
 		    top:"2.4rem"
		},100);
		$(".hand").hide();
		flag1=false;
	}else{
		$(".car1").animate({
		    left:"-2.65rem",
		    top:"3.4rem"
 	},100);
		flag1=true;
	}
})

$(".light").click(function(){
	if(flag2){
		$(".bigcarlight").css("display","block");
		// $(".hand").hide();
		flag2=false;
	}else{
		$(".bigcarlight").css("display","none");
		flag2=true;
	}
})

$(".sheel").click(function(){
	if(flag3){
		$(".car1").animate({
			left:"-4rem",
 		    top:"1rem"
		},100);
		flag3=false;
	}else{
	$(".car1").animate({
		    left:"-2.65rem",
		    top:"3.4rem"
 	},100);
		flag3=true;
	}
})

$(".airTitle").click(function(){
	$(".hand5").hide();
	$(".airTitle").fadeOut(100);
	$(".airText").fadeOut(100,function(){
		$(".detail1").fadeIn(1000);
		$(".detail2").fadeIn(1000,function(){
			$(".detail1").fadeOut(1500);
			$(".detail2").fadeOut(1500,function(){
				$(".detail3").fadeIn(1000);
				$(".detail4").fadeIn(1000,function(){
					$(".detail3").fadeOut(1500);
					$(".detail4").fadeOut(1500,function(){
						$(".airTitle").show();
						$(".airText").show();
					})
				})
			})
		});
	})
})



$(".cliFont").click(function(){
	console.log(1);
	$(".black").hide();
	$(".click").hide();
	$(".cliFont").hide();
})











var sound=document.getElementsByTagName('audio');
var isPlay7=false;
$(".sound").click(function(){
	$(".hand7").hide();
    if(isPlay7==false){
    	sound[1].play();
    	isPlay7=true;
    	sound[0].pause();
    	isPlay=false;
    }else{
    	sound[1].pause();
    	isPlay7=false;
    	isPlay=true;
    }
})
var isPlay=true;
sound[0].play();
$(".music").click(function(){
	if(isPlay){
		sound[0].pause();
		isPlay=false;
		isPlay7=true;
		$(".music").css({
			"animation":"null"
		})
	}else{
		sound[0].play();
		isPlay=true;
		sound[1].pause();
		isPlay7=false;
		$(".music").css({
			"animation":"rotate 1.5s 0s linear infinite normal"
		})
	}
})