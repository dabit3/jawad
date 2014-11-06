$(document).ready(function() {
	
var open = false;

var tl = new TimelineMax();

var content = $('.content'),
		leftnav = $('.leftnav');


$('#hamburger').click(function() {

	if(open == false) {

		TweenMax.to(content, .3, {marginLeft:300, ease:Cubic.easeOut});
		TweenMax.to(content, .3, {marginRight:-300, ease:Cubic.easeOut});

		TweenMax.to(leftnav, .3, {marginLeft:0, ease:Cubic.easeOut});

		/* $('.content').animate({
			marginRight: '-300px'
		}, {duration: 300, queue:false}); 

		$('.leftnav').animate({
			marginLeft: '0px'
		}, {
			duration:300, queue:false
		}) */

		// 	$('.content').css('margin-left', '300px');
		// $('.content').css('margin-right', '-300px');
	
		open = true;

	} else {

		TweenMax.to(content, .3, {marginRight:0, ease:Cubic.easeIn});
		TweenMax.to(content, .3, {marginLeft:0, ease:Cubic.easeIn});
		TweenMax.to(leftnav, .3, {marginLeft:-300, ease:Cubic.easeIn});
		

		
		open = false;
	}

})




});