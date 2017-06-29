$(document).on('turbolinks:load', function() {
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
    $('.item.boxes.gallery.image').click(function() {
        $('#nav-icon1').addClass('open');
        $(this).toggleClass('index');
        $('#gallery.content.gallery').addClass('hide');
        $('#carousel').addClass('show');
        $('body').addClass('carousel');
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
var $windowSize = $(window).width();
if ($windowSize >= 992) {
  $('#gallery-container.container.gallery').addClass('grid');
	$('#gallery.gallery.content').addClass('grids');
	$('#carousel').addClass('show');
	//logic for carousel and screen different sizes
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots:false,
		fade: true,
		lazyLoad: 'ondemand',
		prevArrow: '<button type="button" data-role="none" class="slick-prev ajabutton" aria-label="previous" tabindex="0" role="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next ajabutton" aria-label="next" tabindex="0" role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>'
    });
		// init Masonry
		var $grid = $('.grid').imagesLoaded( function() {
     $('.grid').packery({
			gutter: 15,
			columnWidth: 150,
			itemSelector: '.grid-item',
			isFitWidth: true
		});
		// layout Masonry after each image loads
		});
	}
else if ($windowSize <= 991) {  $('.slider-for').slick({
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
			prevArrow: '<button type="button" data-role="none" class="slick-prev ajabutton" aria-label="previous" tabindex="0" role="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next ajabutton" aria-label="next" tabindex="0" role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
			centerPadding: '0px',
			centerMode: true,
			focusOnSelect: true
	});
	  $('.item.boxes.gallery.image').removeClass('grid-item grid-item--size1 grid-item--size2');

		}
});
