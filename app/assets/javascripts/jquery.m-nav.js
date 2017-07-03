$(document).on('ready', function() {
    $('#nav-icon1').click(function() {
        if ($("#carousel").is(":visible")) {
            $(this).removeClass('open');
            $('#gallery.content.gallery').removeClass('hide');
            $('#carousel').removeClass('show');
            $('body').removeClass('carousel');
        } else {
            $(this).toggleClass('open');
            $('#m-nav').toggleClass('left');
            $('#logo').toggleClass('open-logo');
            $('#body').toggleClass('open-body');
            $('#navbar').toggleClass('navigation');
            $('.var-amenities').toggleClass('open-index');
            $('.row.var-rooms').toggleClass('open-row');
            $('.row.var-rooms').toggleClass('closed-row');
            $('.row.hidden-index-text').toggleClass('open-row');
        }
    });
		$(window).resize(function(){
    var $windowSize = $(window).width();
		var $boxHeight = $('.row.var-rooms.closed-row').css('height');
		var $textBoxWidth = $('.row.var-rooms.closed-row').css('width');
		var $boxWidth = $('.box-up').css('height');
		margins = (parseInt($windowSize) - parseInt($boxWidth))/2 + "px";
		boxTop = (parseInt($boxHeight) - 500)/2 + "px";
		textTop = ((parseInt($boxHeight)/2) - 16) + "px";
		textLeft = ((parseInt($textBoxWidth)/4) - 500) + "px";
		$('.index-box-text').css('top', textTop);
		$('.index-box').css('margin-top', boxTop);
		$('.index-box').css('margin-left', textLeft);
		$('.box-up.index').css('left', margins);
		$('.box-up.review').css('left', margins);
		$('#navbar').css('width', $windowSize);
		$('.footer').css('width', $windowSize);
		console.log(top);
	}).resize();

	$("#reservationSelected").click(function(){
		$("#contactSelector").text($(this).text());
		$("#contactSelector").val($(this).text());
		$("#commentForm").removeClass('selected');
		$("#reserveForm").addClass('selected');
 });

 $("#commentSelected").click(function(){
	 $("#contactSelector").text($(this).text());
	 $("#contactSelector").val($(this).text());
	 $("#commentForm").addClass('selected');
	 $("#reserveForm").removeClass('selected');
 });

    $('#private').click(function() {
        $('#private-text').toggleClass('show-text');
    });
    $('#shared').click(function() {
        $('#shared-text').toggleClass('show-text');
    });
    $('#common').click(function() {
        $('#common-text').toggleClass('show-text');
    });
		$('.review-content').click(function() {
				$(this).toggleClass('selected');
		});
		$('.private-shared').click(function() {
			$('.private-shared').removeClass('select');
			$(this).addClass('select');
});
		// $('#prvtbtn').click(function() {
		// 		$(this).toggleClass('select');
		// 		$('#privateRoom').toggle( !this.checked );
		// 	if ($("#sharedRoom").is(":checked")) {
		// 			$('#sharedRoom').prop("checked", false);
		// 			$('#shrdbtn').removeClass('select');
		// 	}
		// });
		// $('#shrdbtn').click(function() {
		// 		$(this).toggleClass('select');
		// 		$('#sharedRoom').toggle(!this.checked);
		// 	// if ($("#privateRoom").is(":checked")) {
		// 		console.log($("#privateRoom").is(":checked"));
		// 			$('#privateRoom').prop("checked", false);
		// 			$('#prvtbtn').removeClass('select');
		// });
    switch (window.location.pathname) {
        case '/about':
            $('body').addClass('height-important');
            break;
        case '/gallery':
            $('body').addClass('height-important');
						$('#navbar').addClass('navigation-gallery');
            break;
        case '/contact':
            $('body').addClass('height-important');
						$('#navbar').addClass('navigation-gallery');
            break;
        case '/review':
            $('body').addClass('height-important');
            break;
        case '/':
            $('body').removeClass('height-important');
            break;
    };
    $(function() {
        //caches a jQuery object containing the header element
        var header = $("#navbar");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.addClass("navigation-scroll");
            } else {
                header.removeClass("navigation-scroll")
            }
        });
    });
		$(window).resize(function(){
var $windowSize = $(window).width();
if ($windowSize >= 992) {
  $('#gallery-container.container.gallery').addClass('grid');
	$('#gallery.gallery.content').addClass('grids');
	$('#carousel').addClass('show');
	//logic for carousel and screen different sizes
	var $grid = $('.grid').imagesLoaded( function() {
		$('.grid').packery({
			gutter: 15,
			columnWidth: 150,
			itemSelector: '.grid-item',
			isFitWidth: true
		});
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots:false,
		fade: true,
		variableWidth: false,
		// lazyLoad: 'ondemand',
		prevArrow: '<button type="button" data-role="none" class="slick-prev ajabutton" aria-label="previous" tabindex="0" role="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next ajabutton" aria-label="next" tabindex="0" role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>'
    });
		$('.item.boxes.gallery.image').click(function() {
				$('body').addClass('carousel');
				actIndex = $(this).attr('data-slick-index');
				var slider = $('.slider-for');
				slider[0].slick.slickGoTo(parseInt(actIndex));
				$("body").scrollTop(0);
	});
});
	}
else if ($windowSize <= 991) {
	$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			lazyLoad: 'ondemand',
			asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			arrows: true,
			mobileFirst: true,
			prevArrow: '<span type="button" data-role="none" class="slick-prev ajabutton" aria-label="previous" tabindex="0" role="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
			nextArrow: '<span type="button" data-role="none" class="slick-next ajabutton" aria-label="next" tabindex="0" role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>',
			centerPadding: '0px',
			centerMode: true,
			focusOnSelect: true
	});
	$('.item.boxes.gallery.image').click(function() {
			$('#nav-icon1').addClass('open');
			$('#gallery.content.gallery').addClass('hide');
			$('#carousel').addClass('show');
			$('body').addClass('carousel');
			actIndex = $(this).attr('data-slick-index');
			var slider = $('.slider-for');
			slider[0].slick.slickGoTo(parseInt(actIndex));
			$("body").scrollTop(0);
	});
	  $('.boxes.gallery.image').removeClass('grid-item grid-item--size1 grid-item--size2');

		}
$(".slider-for").slick("refresh");
	}).resize();
});
