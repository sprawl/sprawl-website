var didScroll;
var lastScrollTop = 0;
var delta = 80;

function hasScrolled(navbarHeight, sectionHeight) {

    var windowTop = $(window).scrollTop();

    if(sectionHeight-300 < windowTop){
        $('.navbar').addClass('fixed-op');
    }else{
        //$('.navbar').removeClass('fixed-op');
    }

    if(sectionHeight < windowTop){
        $('.navbar').addClass('fixed-top');
    }else{
        //$('.navbar').removeClass('fixed-top');
    }

    if(sectionHeight+300 < windowTop){
        $('.navbar').addClass('fixed');
    }else{
        //$('.navbar').removeClass('fixed');
    }

    var st = $('.navbar').offset().top;

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st < sectionHeight+200){

        $('.navbar').removeClass('nav-down').removeClass('nav-up').removeClass('fixed-op').removeClass('fixed').removeClass('fixed-top');

    }else if (st > lastScrollTop && st > navbarHeight){
        console.log('Scroll Down', st);
        // Scroll Down
        $('.navbar').removeClass('nav-down').addClass('nav-up');
    } else {
        console.log('Scroll Up', st);
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}
/*
function menuPositionLeft(){
    var margin = $('.section-1 .container-fluid').offset();
    var leftMargin = margin.left + 20;
    $('.landing .menu-content').css('left',leftMargin);
}*/

/*//ON RESIZE
$(window).resize(function(event){
    menuPositionLeft();
    $(window).scrollLeft( 0 );
});

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};*/

/*
//ON LOAD
$(function () {

    //WOOOOW
    //new WOW().init();

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
    // Hide Header on scroll down
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
    console.log(total);
    var ele = $(".textdance");
    var currPosition = ele.position().left + 300;
    var trackLength = 300;

    $(window).scroll(debounce(function (event) {
        console.log('scroll triggered');
        didScroll = true;

        current = $(window).scrollTop();
        var newPosition = -( trackLength * (current/total) );
        var eleTop = ele.offset().top;
        ele.css({left:(currPosition+newPosition)+'px'});
    }, 300));

});*/
