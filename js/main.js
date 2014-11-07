$(document).ready(function() {
	
var open = false;
var sponsor1open = false;
var sponsor2open = false;

var tl = new TimelineMax();

var content = $('.content'),
		leftnav = $('.leftnav'), 
		sponsorone = $('.sponsorone'),
		sponsortwo = $('.sponsortwo'),
		webcare = $('.webcare'), 
		hive = $('.hive');

$(sponsorone).click(function() {

	if (sponsor2open == true) {
		TweenMax.to(hive, 0, {height:0});
		sponsor2open = false;
	}

	if (sponsor1open == false) {
		TweenMax.to(webcare, .14, {height:145});
		sponsor1open = true;
	} else {
		TweenMax.to(webcare, .14, {height:0});
		sponsor1open = false;
	}

});


$(sponsortwo).click(function() {

	if(sponsor1open == true) {
		TweenMax.to(webcare, 0, {height:0});
		sponsor1open = false;
	}

	if (sponsor2open == false) {
		TweenMax.to(hive, .14, {height:145});
		sponsor2open = true;
	} else {
		TweenMax.to(hive, .14, {height:0});
		sponsor2open = false;
	}

});


$('#hamburger').click(function() {

	if(open == false) {

		TweenMax.to(content, .4, {marginLeft:400, ease:Cubic.easeOut});
		TweenMax.to(content, .4, {marginRight:-400, ease:Cubic.easeOut});

		TweenMax.to(leftnav, .4, {marginLeft:0, ease:Cubic.easeOut});

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

		TweenMax.to(content, .4, {marginRight:0, ease:Cubic.easeInOut});
		TweenMax.to(content, .4, {marginLeft:0, ease:Cubic.easeInOut});
		TweenMax.to(leftnav, .4, {marginLeft:-400, ease:Cubic.easeInOut});
		

		
		open = false;
	}

})


    var body =   $("body");
    var top = body.scrollTop();

    $('.aboutus').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '1040px'}, 400);
        TweenMax.to(content, .4, {marginRight:0, ease:Cubic.easeInOut});
			TweenMax.to(content, .4, {marginLeft:0, ease:Cubic.easeInOut});
			TweenMax.to(leftnav, .4, {marginLeft:-400, ease:Cubic.easeInOut});
			
			open = false;
    })


});