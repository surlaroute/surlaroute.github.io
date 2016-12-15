$(function(){
	$('#keep').on('click',function(){
		var cpnname = $('#cpn-name').val();
		if(cpnname){
			var cpn = $('<div>').addClass('cpn').appendTo($('.content')),
					coname = $('<div>').addClass('co-name').html(cpnname).appendTo($(cpn)),
					dele = $('<div>').addClass('dele').html('删除').appendTo($(cpn)),
					modi = $('<div>').addClass('modi').html('修改').appendTo($(cpn))
		};
		$(this).hide();
		$('.content').show();
		$('.newcpn').hide();
		$('#add').show();
	});
	$('#add').on('click',function(){
		$(this).hide();
		$('.content').hide();
		$('.newcpn').show();
		$('#keep').show()
	});
	$('.cpn').on('click','.dele',function(){
		var que = confirm('确定要删除吗？');
		if(que){
			$(this).parent().animate({'height':'0'},100,function(){
				$(this).remove()
			})
		}else{
			$(this).animate({'margin-right':'-15%'})
		}
	});
	$('.content').on('swipeleft','.cpn',function(){
    	$(this).find('.dele').animate({'margin-right':'0'});
    	$(this).siblings().find('.dele').animate({'margin-right':'-15%'})
	});
	$('.content').on('swiperight','.cpn',function(){
	    $(this).find('.dele').animate({'margin-right':'-15%'})
	});
})