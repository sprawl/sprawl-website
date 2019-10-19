var didScroll;
var lastScrollTop = 0;
var delta = 80;

function hasScrolled(navbarHeight, sectionHeight) {

    var windowTop = $(window).scrollTop();
    var bool = (sectionHeight < windowTop)?true:false;
    if(bool){
        //$('.navbar').addClass('pastfirst');
    }else{
        //$('.navbar').removeClass('pastfirst');
    }

    var st = $('.navbar').offset().top;

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st < 30){

        $('.navbar').removeClass('nav-down').removeClass('nav-up');

    }else if (st > lastScrollTop && st > navbarHeight){
        //console.log('Scroll Down', st);
        // Scroll Down
        $('.navbar').removeClass('nav-down').addClass('nav-up');
    } else {
        //console.log('Scroll Up', st);
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}

function menuPositionLeft(){
    var margin = $('.section-1 .container-fluid').offset();
    var leftMargin = margin.left + 20;
    $('.landing .menu-content').css('left',leftMargin);
}

/*//ON SCROLL
$(window).scroll(function(event){
    didScroll = true;
});*/

$(window).resize(function(event){
    ///////
    menuPositionLeft();
    $(window).scrollLeft( 0 );
});


//ON LOAD
$(function () {

    //LOADED
    $('.landing').addClass('loaded');

    //MENU
    $('.menu').click(function(){
        $(this).find('.menu-mobile-cont').toggleClass('open');
        $('.menu-content').toggleClass('active');
    });

    //MENU MOBILE
    $('.navbar .menu-mobile').click(function(){
        $(this).find('.menu-mobile-cont').toggleClass('open');
        $('.navbar').toggleClass('active');
    });

    //HEADER BEHAVIOUR
    // Hide Header on on scroll down
    var navbarHeight = $('.navbar').outerHeight();
    var sectionHeight = $('.section-1').height();
    setInterval(function() {
        if (didScroll) {
            hasScrolled(navbarHeight, sectionHeight);
            didScroll = false;
        }
    }, 450);

    ///////
    menuPositionLeft();
    $(window).scrollLeft( 0 );

    //PARALLAX
    var rellax = new Rellax('.rellax', {
      center: true
    });

    var current = $(window).scrollTop();
    var total = $(window).height() - current;
    var ele = $(".textdance");
    var currPosition = ele.position().left + 300;
    var trackLength = 300;
    $(window).scroll(function (event) {

        didScroll = true;

        current = $(window).scrollTop();
        var newPosition = -( trackLength * (current/total) );
        var eleTop = ele.offset().top;
        ele.css({left:(currPosition+newPosition)+'px'});
    });

});
