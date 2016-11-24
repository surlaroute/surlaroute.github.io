$(function(){
	$('#menu-r ul').find('li:last a').css('border','0');
	$('#menu-r ul').find('li:first a').css('paddingLeft','0');
	$('#menu-r ul:last').css('border','0');
	$('#menu-btn').mouseover(function(){
		$('#menu').show();
		$('.btn-name').addClass('show')
	}).mouseout(function(){
		$('#menu').hide();
		$('.btn-name').removeClass('show');
	})
	$('.pla').hover(function(){
		$('.phone-code').show();
	},function(){
		$('.phone-code').hide();
	})
	//轮播图
	var index = 0; 
	var timer = null;
	$('.img-btn li').on('click',function(){
		var index = $(this).index();
		$(this).addClass('btn-on').siblings().removeClass('btn-on');
		$('.imgs-container .imgs').stop().animate({
			'marginLeft' : - 710 * index,
		})		
	});
	function animate(){
		index ++;
			if(index > 4){
				index = 0;
			}
		$('.img-btn li').eq(index).trigger('click')
	};
	timer = setInterval(animate,4000);
	$('.imgs-container').hover(function(){
		clearInterval(timer);
	},function(){timer = setInterval(animate,4000)});
	$('.imgs-container').mouseover(function(){
		$('.prev,.next').show()
	}).mouseout(function(){
		$('.prev,.next').hide()
	});
	$('.next').click(function(){
		animate()
	});
	$('.prev').click(function(){
		index --;
			if(index < 0){
				index = 4;
			}
		$('.img-btn li').eq(index).trigger('click')
	})
	//瀑布流
	function waterfall(){
		var boxArr = $('.section5 .sec-content').children('.box');
		var hArr = []; //存储每列的高度
		boxArr.each(function(index, item){
			if(index < 5){
				hArr[index] = $(item).outerHeight(true); //获取第一行的所有box高度
			}else{								//从第二行开始
				var minHeight = Math.min.apply(null, hArr), 
				minHeightIndex = $.inArray(minHeight,hArr);//获取列中高度最小的box索引值		 
				$(item).css({			//把下个box定位在高度最小的那列下面
					position : 'absolute',
					top : minHeight,
					left : boxArr.eq(minHeightIndex).position().left
				});
				hArr[minHeightIndex] += $(item).outerHeight(true);
			}
		});
		var maxHeight = Math.max.apply(null,hArr);
		$('.section5 .sec-content').css('height',maxHeight) //高度自适应！！
	}
	waterfall();
	var dataInt = [{'src':'10.jpeg','tip':'爸爸去哪儿4','sj':'40','like':'12','user-img':'u0.png','uid':'cold','lei':'阿拉蕾'},
				   {'src':'11.jpeg','tip':'手绘 时装 插画 设计','sj':'13','like':'3','user-img':'u1.jpeg','uid':'Arizonia','lei':'设计'},
				   {'src':'12.jpeg','tip':'卷福【夏洛克 福尔摩斯】by 眠狼大大','sj':'32','like':'22','user-img':'u2.jpeg','uid':'哥斯拉-不说话','lei':'同人'},
				   {'src':'13.jpeg','tip':'夏日','sj':'43','like':'12','user-img':'u3.jpeg','uid':'哈利','lei':'板绘'},
				   {'src':'14.jpeg','tip':'董力阿拉蕾','sj':'30','like':'12','user-img':'u4.jpeg','uid':'Sab','lei':'综艺'},
				   {'src':'15.jpeg','tip':'穿过发梢，是你的温柔','sj':'10','like':'1','user-img':'u5.jpeg','uid':'菲一般猫','lei':'少女✿像'},
				   {'src':'16.jpeg','tip':'Harry Potter','sj':'21','like':'3','user-img':'u6.jpeg','uid':'古手','lei':'同人'},
				   {'src':'17.jpeg','tip':'可爱浪漫樱花','sj':'30','like':'3','user-img':'u7.jpeg','uid':'车寅次郎','lei':'默认专辑'},
				   {'src':'18.jpeg','tip':'…','sj':'13','like':'1','user-img':'u8.jpeg','uid':'神算Zzz','lei':'『慢】生活◕′小格调'},
				   {'src':'19.jpeg','tip':'鲜明的色彩，大胆的笔触，亮丽的画面……阿尔巴尼亚艺术家Josef Kote的风景油画欣赏。','sj':'12','like':'3','user-img':'u9.jpeg','uid':'古手','lei':'妙笔美画'}
				   ];
	function scrollLoad(){
		var lastBox = $('.section5 .sec-content').children('.box').last();
		var lastBoxH = $(lastBox).offset().top;
		var viewHeight = $(window).scrollTop() + $(window).height();
		var boxNum = $('.section5 .sec-content').children('.box').length;
 		if ((lastBoxH <= viewHeight) && (boxNum<=100)){
 			$.each(dataInt,function(index,item){
 				var newBox = $('<div>').addClass('box').appendTo($('.section5 .sec-content')),
 					newPic = $('<div>').addClass('pic').appendTo($(newBox)),
 					newA = $('<a href="javascript:void(0)"></a>').appendTo($(newPic)),
 					newImg = $('<img>').attr('src','img/'+$(item).attr('src')).appendTo($(newA)),
 					newPictips = $('<div>').addClass('pic-tips').html(item['tip']).appendTo($(newBox)),
 					newZan = $('<div>').addClass('zan').appendTo($(newBox)),
 					newColl = $('<span>').addClass('coll').html(item['sj']).appendTo($(newZan)),
 					newLike = $('<span>').addClass('like').html(item['like']).appendTo($(newZan)),
 					newWho= $('<div>').addClass('who').appendTo($(newBox)),
 					newUserImg = $('<img>').addClass('user-img').attr('src','img/'+$(item).attr('user-img')).appendTo($(newWho)),
 					newUserId = $('<div>').addClass('user-id').appendTo($(newWho)),
 					newAa = $('<a href="javascript:void(0)"></a>').html(item['uid']).appendTo($(newUserId)),
 					newlei = $('<div>').html('收集到 ').appendTo($(newWho)),
 					newAaa = $('<a href="javascript:void(0)"></a>').html(item['lei']).appendTo($(newlei)),
                    newtt = $('<div>').addClass('tt').appendTo($(newBox)),
                    newsj = $('<div>收集 </div>').addClass('sj').appendTo($(newtt)),
                    newpl = $('<div>').addClass('pl').appendTo($(newtt)),
                    newdz = $('<div>').addClass('dz').appendTo($(newtt)),
                    newi = $('<i>').appendTo($(newsj)),
                    newnum = $('<span>').addClass('num').html(item['sj']).appendTo($(newsj)),
                    newspan1 = $('<span>').appendTo($(newpl)),
                    newspan2 = $('<span>').appendTo($(newdz));
 			})
 			waterfall();
		}
	};
	$(window).scroll(scrollLoad);
    // 点赞与收藏
    $('.section5').on('mouseover','.box',function(){
        $(this).find('.tt').show()
    });
    $('.section5').on('mouseout','.box',function(){
        $(this).find('.tt').hide()
    })
    var num = $('.num');
    var coll = $('.coll');
    for(var i=0; i<num.length; i++){
        coll.eq(i).html(num.eq(i).html())
    };
    $(document).on('click','.sj',function(){
        var coll = $(this).parent().parent().find('.coll');
        var num = $(this).find('.num');
        var x = $(this).find('span').html();
        var ii = $(this).find('i');
        if($(ii).hasClass('al')){
            x-- ;
            $(num).html(x);
            $(coll).html(x);
            $(ii).removeClass('al');
        }else{
            x++ ;
            $(num).html(x)
            $(coll).html(x);
            $(ii).addClass('al');
        } 
    });
    $(document).on('click','.dz',function(){
        var like = $(this).parent().parent().find('.like');
        var x = $(like).html();
        var ss = $(this).find('span');
        if($(ss).hasClass('ck')){
            x-- ;
            $(like).html(x);
            $(ss).removeClass('ck');
        }else{
            x++ ;
            $(like).html(x);
            $(ss).addClass('ck');
        }
    });
    $(document).on('click','.pl',function(){
        $('.reg-mask').show();
        $('#login').show().animate({
            'height' : '506px'
        })
    })
	//sidebar
	function sidebar(){
		var innerW = $(window).width();
		var innerH = $(window).height();
		var myR = (innerW - 1200)/2-58+'px';
		var scrollT = $(document).scrollTop();
		if(innerW < 1200){
			$('#sidebar').css('right' , '0px')
		}else{
			$('#sidebar').css('right' , myR)
		}
		if (scrollT > innerH) {
			$('#sidebar').show()
		}else{
			$('#sidebar').hide()
		}
	};
	setInterval(sidebar,10);
    $(".side1").click(function(){
        $("html,body").stop().animate({scrollTop:0},300);
    });
    //视频mask
    $('.section2,.section3').find('.pic').hover(function(){
    	$(this).find('.mask').show()
    },function(){
    	$(this).find('.mask').hide()
    })
    //搜索框提示
    $('#keyword').on('input',function(){  
 		var word = $('#keyword').val();
 		$('.word').text(word);
 		if(word == ''){
 			$('.search-list').hide();
 		}else{
 			$('.search-list').show();
 		}
    });
    $('.ac').mouseover(function(){
    	$(this).addClass('selec').siblings().removeClass('selec')
    }).click(function(){
    	alert('正在努力搜索')
    });
    $('#keyword').blur(function(){
    	var len = $('#keyword').val().length;
    	if(len !== 0){
    		$('.search-list').hide()
    	}	
    }).focus(function(){
    	var len = $('#keyword').val().length;
    	if(len !== 0){
    		$('.search-list').show()
    	}
    });
	//登录框
    $('.logb').click(function(){
    	$('.reg-mask').show();
    	$('#login').show().animate({
    		'height' : '506px'
    	})
    });
    $('.close').click(function(){
    	$('.reg-mask').hide();
    	$('#login').animate({
    		'height' : '0px'
    	},function(){
    		$('#login').hide()
    	});
    	$('#user,#password').val(null)
    	$('.user-tip,.pwd-tip').css('visibility','hidden');
    });
    //登录验证
    var re = /[^\w\u4e00-\u9fa5]/g;
    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    function findStr(str,n){
    	var tmp = 0;
    	for(var i = 0; i < str.length; i++){
    		if(str.charAt(i) == n){
    			tmp++
    		}
    	}
    	return tmp
    };
    //用户名
    $('#user').blur(function(){
    	var len = $(this).val().length;
    	if(len == 0){
    		$('.user-tip').css('visibility','visible')
    	}else if(re.test(this.value)){
    		$('.user-tip').css('visibility','visible');
    		$('.user-tip').html('*含有非法字符');
    	}else if(len < 4 || len > 10){
    		$('.user-tip').css('visibility','visible');
    		$('.user-tip').html('*用户名长度为4-10个字符');
    	}else{
    		$('.user-tip').css('visibility','hidden');
    		ok1 = true;
    	}	
    });
    $('#user').on('keyup',function(){
    	var len = $(this).val().length;
    	if(len>=4 && len<=10){
    		$('.user-tip').css('visibility','hidden')
    	}else{
    		$('.user-tip').css('visibility','visible');
    		$('.user-tip').html('*用户名长度为4-10个字符');
    	}
    });
    //密码
     $('#password').blur(function(){
     	var pwd = $(this).val();
    	var len = pwd.length;
    	var m = findStr(pwd,pwd[0]);
    	if(len == 0){
    		$('.pwd-tip').css('visibility','visible')
    	}else if(len < 6 || len > 18){
    		$('.pwd-tip').css('visibility','visible');
    		$('.pwd-tip').html('*密码长度为6-18位字符');
    	}else if(m == len){
    		$('.pwd-tip').css('visibility','visible');
    		$('.pwd-tip').html('*不能全部用相同字符');
    	}else{
    		$('.pwd-tip').css('visibility','hidden');
    		ok2 = true;
    	}
    });
    $('#password').on('keyup',function(){
    	var pwd = $(this).val();
    	var len = pwd.length;
    	var m = findStr(pwd,pwd[0]);
    	if(len < 6 || len > 18){
    		$('.pwd-tip').css('visibility','visible');
    		$('.pwd-tip').html('*密码长度为6-18位字符');
    	}else if(len>=6 && len<=18){
    		$('.pwd-tip').css('visibility','hidden')
    	}
    });
    //验证码
    $('#tcode').blur(function(){
        var tcode = $(this).val();
        if(tcode == 490){
            ok3 = true;
        }else{
            $('.tcode-tip').css('visibility','visible');
        }
    });
    $('#tcode').keyup(function(){
        var tcode = $(this).val();
        if (tcode == 490) {
            $('.tcode-tip').css('visibility','hidden');
        }
    })
    //验证通过
    $('#login-in').click(function(){
    	var len1 = $('#user').val().length;
    	var len2 = $('#password').val().length;
        var len3 = $('#tcode').val().length;
    	if(len1 == 0 && len2 == 0){
    		$('.user-tip,.pwd-tip').css('visibility','visible');
            return false
    	}else if(ok1 && ok2 && ok3){
            $('user-mes').submit();
        }else{
            return false;
        }
    });
})