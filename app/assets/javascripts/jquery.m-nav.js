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
            $('#overlay').toggleClass('overlay')
        }
    });
    $('#overlay').click(function() {
      $('#nav-icon1').toggleClass('open');
      $('#m-nav').toggleClass('left');
      $('#logo').toggleClass('open-logo');
      $('#body').toggleClass('open-body');
      $('#navbar').toggleClass('navigation');
      $('.var-amenities').toggleClass('open-index');
      $('.row.var-rooms').toggleClass('open-row');
      $('.row.var-rooms').toggleClass('closed-row');
      $('.row.hidden-index-text').toggleClass('open-row');
      $(this).toggleClass('overlay')

      });

    $(window).resize(function() {

    }).resize();

    $("#reservationSelected").click(function() {
        $("#contactSelector").text($(this).text());
        $("#contactSelector").val($(this).text());
        $("#commentForm").removeClass('selected');
        $("#reserveForm").addClass('selected');
    });

    $("#commentSelected").click(function() {
        $("#contactSelector").text($(this).text());
        $("#contactSelector").val($(this).text());
        $("#commentForm").addClass('selected');
        $("#reserveForm").removeClass('selected');
    });

    $('.review-content').click(function() {
        $(this).toggleClass('selected');
    });
    $('.private-shared').click(function() {
        $('.private-shared').removeClass('select');
        $(this).addClass('select');
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
    $(window).resize(function() {
        var $privateText = $('#private-text')
        var $sharedText = $('#shared-text')
        var $commonText = $('#common-text')
        var $textBoxWidth = $('.row.var-rooms.closed-row').css('width');
        var $windowSize = $(window).width();
        var $boxHeight = $('.row.var-rooms.closed-row').css('height');
        var $boxWidth = $('.box-up').css('height');
        margins = (parseInt($windowSize) - parseInt($boxWidth)) / 2 + "px";
        boxTop = (parseInt($boxHeight) - 500) / 2 + "px";
        textTop = ((parseInt($boxHeight) / 2) - 16) + "px";
        textLeft = ((parseInt($textBoxWidth) / 4) - 500) + "px";
        $('.box-up.index').css('left', margins);
        $('.box-up.review').css('left', margins);
        $('.box-up').fadeIn();
        if ($windowSize >= 992) {
            $('#gallery-container.container.gallery').addClass('grid');
            $('#gallery.gallery.content').addClass('grids');
            $('#carousel').addClass('show');
            $('#private-text').appendTo($('#topdiv'));
            var $shadedBox = $('.index-box.large');
            var $shadedText = $('.index-box-text.large')
            var $hypotenuse = $('#common').css('height');
            sides = Math.sqrt(Math.pow(parseInt($hypotenuse), 2) / 2) + 'px';
            topMargin = (parseInt($hypotenuse) - parseInt(sides)) / 2 + 'px';
            topText = parseInt(topMargin) * 2 + 20 + 'px';
            $($shadedBox).css('width', sides);
            $($shadedBox).css('height', sides);
            $($shadedBox).css('margin-top', topMargin);
            $($shadedText).css('top', topText);
            $($shadedBox).fadeIn();
            $('#shared').click(function() {

              $('#common').removeClass('top col-lg-5');
              $('#common').appendTo('#mobileRow1');
                $('#private').removeClass('top col-lg-5');
                $('#private').appendTo('#mobileRow2');
                $('#common>.index-box').removeClass('hidden').addClass('large');
                $('#private>.index-box').removeClass('hidden').addClass('large');
                $('#common>.index-box-text').removeClass('hidden').addClass('large');
                $('#private>.index-box-text').removeClass('hidden').addClass('large');
                $(this).prependTo('#topdiv');
                $(this).addClass('top col-lg-5');
                $('#shared>.index-box').removeClass('large').addClass('hidden');
                $('#shared>.index-box-text').removeClass('large').addClass('hidden');
                    $($privateText).detach();
                    $($commonText).detach();
                $($sharedText).appendTo('#topdiv');
                $($sharedText).addClass('col-lg-7 top');
                var $shadedBox = $('.index-box.large');
                var $shadedText = $('.index-box-text.large')
                $($shadedBox).css('width', sides);
                $($shadedBox).css('height', sides);
                $($shadedBox).css('margin-top', topMargin);
                $($shadedText).css('top', topText);
                $($shadedBox).fadeIn();
            });
            $('#common').click(function() {

              $('#private').removeClass('top col-lg-5');
              $('#private').appendTo('#mobileRow1');
                $('#shared').removeClass('top col-lg-5');
                $('#shared').appendTo('#mobileRow2');
                $('#shared>.index-box').removeClass('hidden').addClass('large');
                $('#private>.index-box').removeClass('hidden').addClass('large');
                $('#shared>.index-box-text').removeClass('hidden').addClass('large');
                $('#private>.index-box-text').removeClass('hidden').addClass('large');
                $($sharedText).detach();
                $($privateText).detach();
                $(this).prependTo('#topdiv');
                $(this).addClass('top col-lg-5');
                $('#common>.index-box').removeClass('large').addClass('hidden');
                $('#common>.index-box-text').removeClass('large').addClass('hidden');
                $($commonText).appendTo('#topdiv');
                $($commonText).addClass('col-lg-7 top');
                var $shadedBox = $('.index-box.large');
                var $shadedText = $('.index-box-text.large')
                $($shadedBox).css('width', sides);
                $($shadedBox).css('height', sides);
                $($shadedBox).css('margin-top', topMargin);
                $($shadedText).css('top', topText);
                $($shadedBox).fadeIn();
            });
            $('#private').click(function() {

              $('#shared').removeClass('top col-lg-5');
              $('#shared').appendTo('#mobileRow1');
                $('#common').removeClass('top col-lg-5');
                $('#common').appendTo('#mobileRow2');
                $('#shared>.index-box').removeClass('hidden').addClass('large');
                $('#common>.index-box').removeClass('hidden').addClass('large');
                $('#shared>.index-box-text').removeClass('hidden').addClass('large');
                $('#common>.index-box-text').removeClass('hidden').addClass('large');
                $(this).prependTo('#topdiv');
                $(this).addClass('top col-lg-5');
                $($sharedText).detach();
                $($commonText).detach();
                $('#private>.index-box').removeClass('large').addClass('hidden');
                $('#private>.index-box-text').removeClass('large').addClass('hidden');
                $($privateText).appendTo('#topdiv');
                $($privateText).addClass('col-lg-7 top');
                var $shadedBox = $('.index-box.large');
                var $shadedText = $('.index-box-text.large')
                $($shadedBox).css('width', sides);
                $($shadedBox).css('height', sides);
                $($shadedBox).css('margin-top', topMargin);
                $($shadedText).css('top', topText);
                $($shadedBox).fadeIn();
            });


            //logic for carousel and screen different sizes
            $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                dots: false,
                speed: 700,
                cssEase: 'linear',
                fade: true,
                autoplay:false,
                variableWidth: false,
                centerMode:true,
                lazyLoad: 'ondemand',
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
            var $grid = $('.grid').imagesLoaded(function() {
                $($grid).packery({
                    gutter: 15,
                    columnWidth: 150,
                    itemSelector: '.grid-item',
                    isFitWidth: true
                });
            });
        } else if ($windowSize <= 991) {
            $('.index-box-text').css('top', textTop);
            $('.index-box').css('margin-top', boxTop);
            $('.index-box').css('margin-left', textLeft);

            $('#topdiv').click(function() {
                $('#private-text').toggleClass('show-text');
                $('html, body').animate({
                    scrollTop: $("#private-text").offset().top
                }, 500);
            });
            $('#mobileRow1').click(function() {
                $('#shared-text').toggleClass('show-text');
                $('html, body').animate({
                    scrollTop: $("#shared-text").offset().top
                }, 500);
            });
            $('#mobileRow2').click(function() {
                $('#common-text').toggleClass('show-text');
                $('html, body').animate({
                    scrollTop: $("#common-text").offset().top
                }, 500);
            });

            $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                adaptiveHeight: true,
                variableWidth: false,
                speed: 500,
                cssEase: 'linear',
                asNavFor: '.slider-nav'
            });
            $('.slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots: false,
                arrows: true,
                lazyLoad: 'ondemand',
                variableWidth: false,
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
            $(".hiddenMobile.hidden-index-text").css('width', $textBoxWidth);
            $(".slider-for").slick("refresh");
            $("#bottomRow").removeClass('row');
            $(".var-rooms.closed-row").addClass('row');
            $(".first.roomColumn").unwrap();
            $("#mobileRow1").unwrap();
            $("#mobileRow2").unwrap();
        }
    }).resize();
});
$(window).load(function() {
  // Animate loader off screen
  $("#loadingDiv").fadeOut("slow");;
});
