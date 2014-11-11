$(document).ready(function() {



$(function() {
    FastClick.attach(document.body);
});

var w = window.innerWidth;
var line1 = $('.line1'), 
		line2 = $('.line2');


if (w <= 900) {
	line1.css('display', 'none');
	line2.css('display', 'none');
	console.log("Hidden");
};

var open = false,
		sponsor1open = false,
		sponsor2open = false,
		content = $('.content'),
		leftnav = $('.leftnav'), 
		sponsorone = $('.sponsorone'),
		sponsortwo = $('.sponsortwo'),
		webcare = $('.webcare'), 
		hive = $('.hive'), 
		mobileHambuger = $('#mobile-hamburger'),
		tl = new TimelineMax(),
		mobilenav = $('.mobilenav'),
		content = $('.content');

tl.to(mobilenav, 4, {backgroundColor:"#081839", delay:5, repeat:-1, yoyo:true})

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
		TweenMax.to(hive, .14, {height:170});
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

});

	mobileHambuger.click(function() {

		if(open == false) {

			TweenMax.to(content, .4, {marginLeft:270, ease:Cubic.easeOut});
			TweenMax.to(content, .4, {marginRight:-270, ease:Cubic.easeOut});

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
			TweenMax.to(leftnav, .4, {marginLeft:-270, ease:Cubic.easeInOut});
			
			open = false;
			
		}

	});

    var body =   $("body");
    var top = body.scrollTop();

    $('.aboutus').click(function(e) {
      
    	e.preventDefault();
    	
      $('html,body').animate({
         scrollTop: $("#aboutustarget").offset().top - 70
      });

      TweenMax.to(content, .4, {marginRight:0, ease:Cubic.easeInOut});
			TweenMax.to(content, .4, {marginLeft:0, ease:Cubic.easeInOut});
			TweenMax.to(leftnav, .4, {marginLeft:-400, ease:Cubic.easeInOut});
			
			open = false;
    });

    $('.usefullinks').click(function(e) {
      
    	e.preventDefault();
    	
      $('html,body').animate({
         scrollTop: $("#usefullinkstarget").offset().top - 70
      });

      TweenMax.to(content, .4, {marginRight:0, ease:Cubic.easeInOut});
			TweenMax.to(content, .4, {marginLeft:0, ease:Cubic.easeInOut});
			TweenMax.to(leftnav, .4, {marginLeft:-400, ease:Cubic.easeInOut});
			
			open = false;

		});

		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			$(".navleft h3").css('font-weight', '300', 'important')
		}

});