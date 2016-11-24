$(function(){
    $('#sidemenu').click(function(){
    	if ($('#sidebar').hasClass('hide')) {
    		$('#sidebar').removeClass('hide').animate({
	    		'right' : '0'
	    	}).animate({
	    		'right' : '-40px'
	    	},'fast').animate({
	    		'right' : '-30px'
	    	},'fast')
    	}else{
    		$('#sidebar').addClass('hide').animate({
	    		'right' : '0'
	    	},'fast').animate({
	    		'right' : '-280px'
	    	},'fast')
    	}
    });
    $(".quickto a,ul li a").click(function(){
        var hr = $(this).attr("href");
        var headerH = $('#header').height();
        if(hr && hr !== 'javascript:void(0)'){
            var anh = $(hr).offset().top - headerH;
            $("html,body").stop().animate({scrollTop:anh},500);
        }
    });
    function ww(){
        var ww = $('#myScrollspy').width();
        $('.nav-tabs').animate({
            'width' : ww
        },10)
    };
    ww();
    $(window).resize(function(){
    	ww()
    });
    $('.link-box a').on('click', function() {
        var val = $(this).attr('value');
        if (val == 'reg') {
            $('#reg').modal('show');
            $('.lostinfo').css('visibility','hidden');
            $('#log').modal('hide').find('.input-lg').val(null);
        } else if (val == 'log') {
            $('#log').modal('show');
            $('.lostinfo').css('visibility','hidden');
            $('#reg').modal('hide').find('.input-lg').val(null);
        }
    });

    $("#login").click(function(){
        var email = $("#email").val();
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        var pwd = $('#password').val();
        var pwdlen = pwd.length;
        if (!email) {
            $(".lostinfo").css('visibility', 'visible').html("邮箱不能为空");
            return false;
        }else if (!reg.test(email)) {
            $(".lostinfo").css('visibility', 'visible').html("邮件地址不合法");
            return false;
        }else if (!pwd) {
            $(".lostinfo").css('visibility', 'visible').html("密码不能为空");
            return false;
        }else if (pwdlen<6 || pwdlen>18){
            $(".lostinfo").css('visibility', 'visible').html("密码长度为6-18位字符");
            return false;
        }else{
            $(this).submit();
        }
    });
    $("#register").click(function(){
        var emailR = $("#email-reg").val();
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        var pwdR = $('#password-reg').val();
        var pwdRlen = pwdR.length;
        var confirmPwd = $('#confirm-pwd').val();
        if (!emailR) {
            $(".lostinfo").css('visibility', 'visible').html("邮箱不能为空");
            return false;
        }else if (!reg.test(emailR)) {
            $(".lostinfo").css('visibility', 'visible').html("邮件地址不合法");
            return false;
        }else if (!pwdR) {
            $(".lostinfo").css('visibility', 'visible').html("密码不能为空");
            return false;
        }else if (pwdRlen<6 || pwdRlen>18){
            $(".lostinfo").css('visibility', 'visible').html("密码长度为6-18位字符");
            return false;
        }else if(!confirmPwd){
            $(".lostinfo").css('visibility', 'visible').html("请确认密码");
            return false;
        }else if (pwdR != confirmPwd) {
            $(".lostinfo").css('visibility', 'visible').html("密码不一致，请确认");
            return false;
        }else{
            $(this).submit();
        }
    })
})