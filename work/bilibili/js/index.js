$(function(){
	//头部下拉菜单
	$('.main-menu > li').hover(function(){$(this).find('.sec-link').show()
	},function(){$('.sec-link').hide()
	});
	//app下载链接
	$('.app-link').hover(function(){$('.app-link img').show()
	},function(){$('.app-link img').hide()
	});
	//热门视频区mask
	$('.top-section-r li').hover(function(){
		$(this).find('.video-mask').show();
		$(this).find('.video-info').animate({
			'marginTop' : -103
		},200)
	},function(){
		$('.video-mask').hide();
		$(this).find('.video-info').animate({
			'marginTop' : -26
		},200)
	});
	//视频mask-v1
	$('.imgs > li').hover(function(){
		$(this).find('.video-mask-v1').show();
		$(this).find('.video-s').animate({
			'top' : 0
		},200)
	},function(){
		$('.video-mask-v1').hide();
		$(this).find('.video-s').animate({
			'top' : -24
		},200)
	});
	// 广告区轮播图
	var index = 0; 
	var timer = null;
	$('.top-section-btns li').mouseover(function(){
		index = $(this).index();
		$(this).addClass('li-hover').siblings().removeClass('li-hover');		  
	}).mouseout(function(){
		index = $(this).index();
		$(this).removeClass('li-hover')
	});
	$('.top-section-btns li').on('click',function(){
		var index = $(this).index();
		var mywidth = $('.top-section-ads a').eq(0).width();
		$(this).addClass('checked').siblings().removeClass('checked');
		$('.top-section-ads').animate({
			'marginLeft' : - mywidth * index,
		})		
	});
	function go(){
		timer = setInterval(function(){
			index ++;
			if(index > 4){
				index = 0;
			}
			$('.top-section-btns li').eq(index).trigger('click')
		},4000)
	};
	go();
	$('.top-section-ads').hover(function(){
		clearInterval(timer);
	},go);
	//侧栏切换
	$('#broadcast').find('.mini-links li').click(function(){
		index = $(this).index();
		$(this).find('a').addClass('selected');
		$(this).siblings().find('a').removeClass('selected');
		$('#broadcast').find('.side-inner').animate({
			'left' : -260 * index,
		})	
	});
	$('#cartoon .mini-side').find('.mini-links li').mouseover(function(){
		index = $(this).index();
		$(this).find('a').addClass('selected');
		$(this).siblings().find('a').removeClass('selected');
		$('#cartoon').find('.side-inner').stop().animate({
			'left' : -260 * index,
		},200)	
	});
	//二维码链接
	$('.app-list li').hover(function(){
		$(this).find('.code').show()
	},function(){
		$(this).find('.code').hide()
	});
	//sidebar
	function sidebar(){
		var innerW = $(window).width();
		var myR = (innerW - 1160)/2-56+'px';
		var scrollT = $(document).scrollTop();
		if(innerW < 1252){
			$('#sidebar').css('right' , '0px')
		}else{
			$('#sidebar').css('right' , myR)
		}
		if (scrollT > 230) {
			$('#sidebar').css('top' , '0px')
		}else{
			$('#sidebar').css('top' , '230px')
		}
	};
	setInterval(sidebar,10);
	// $(function(){
	//     $("#sidebar li a").click(function(){
	//         var hr = $(this).attr("href");
	//         var anh = $(hr).offset().top;
	//         $("html,body").stop().animate({scrollTop:anh},500);
	//     })
	// });
	$('a[href*=#],area[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	        var $target = $(this.hash);
	        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
	        if ($target.length) {
	        	var targetOffset = $target.offset().top;
	       		$('html,body').animate({
		            scrollTop: targetOffset
		        },500);
	        	return false;
	        }
	    }
	});
	$(window).scroll(function(){
        var top = $(document).scrollTop();          
        var sidebar = $("#sidebar");                   
        var box = $(".main-content").find(".box");   
        var curId = "";                      
        box.each(function(){
            var m = $(this);                        
            var itemsTop = m.offset().top;      
            if(top > itemsTop-100){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });
        var curLink = sidebar.find(".sidebar-hover");
        if( curId && curLink.attr("href") != curId){
            curLink.removeClass("sidebar-hover");
            sidebar.find( "[href=" + curId + "]" ).addClass("sidebar-hover");
        };
        if(top < 470){
        	curLink.removeClass("sidebar-hover");
        };       
    });
})