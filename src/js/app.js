function menuPositionLeft(){
    var margin = $('.section-1 .container-fluid').offset();
    var leftMargin = margin.left + 20;
    $('.landing .menu-content').css('left',leftMargin);
    $('.landing .menu-popup-cont').css('margin-left',leftMargin);
}

function bgAnchor(){
    $('.bg-anchor').height($('body').height());
}

var scrollPos = 0;
var navbar = false;
var win = false;
var navbarHeight = false;
var sectionHeight = false;
var firstTimeout = 0;
var secondTimeout = 0;

function handleNavbar(scrollDirection) {

    if(scrollPos > navbarHeight) {
        if(scrollDirection == 'down' && !navbar.hasClass('nav-up')) {
            if(!navbar.hasClass('fixed')) {
                navbar.css('display', 'none');
                firstTimeout = setTimeout(() => {
                    navbar.removeClass('wow nav-down fadeInDown').addClass('fixed nav-up');
                    firstTimeout = 0;
                }, 600);
                secondTimeout = setTimeout(function() {
                    navbar.css('display', 'block');
                }, 1000);
            }
            else {
                navbar.removeClass('nav-down').addClass('fixed nav-up');
            }

        }
        else if(scrollDirection == 'up' && scrollPos > sectionHeight) {

            navbar.removeClass('nav-up').addClass('nav-down');
        }
    }
    else {
        if(scrollDirection == 'up') {
            clearTimeout(firstTimeout);
            clearTimeout(secondTimeout);
            navbar.removeClass('fixed nav-up nav-down wow')
                .css('visibility', '');
        }
    }



}
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

//NET
var whiteRabit = 220;
function animAction(id, type, callback){
    $('svg '+id).addClass('start-animation'+type);
    if(callback){
        setTimeout(function(){
            callback();
        },whiteRabit);
    }
}
function stopAnimAction(callback){
    setTimeout(function(){
        $('svg .start-animation1').removeClass('start-animation1');
        $('svg .start-animation2').removeClass('start-animation2');
        $('svg .start-animation3').removeClass('start-animation3');
        callback();
    },1200);
}
function startAnimAction(){
    startFlow01();
}

///////////////
$(function () {
    navbar = $('.navbar');
    win = $(window);
    navbarHeight = $('.navbar').outerHeight();
    sectionHeight = $('.section-1').height();
    ///////
    menuPositionLeft();
    win.scrollLeft( 0 );
    bgAnchor();

    //PARALLAX
    var rellax = new Rellax('.rellax', {
        center: true
    });

    //MENU
    $('.menu').click(function(){
        $(this).find('.menu-mobile-cont').toggleClass('open');
        $('.menu-content').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    let menuInner = $('.menu-inner');
    setTimeout(() => {
         if(menuInner.css('visibility') == 'hidden') {
             // console.log('menu still hidden');
             menuInner.addClass("animated");
             menuInner.attr("style","visibility: visible; animation-name: fadeInLeft;");
         }
    }, 200);

    //MENU MOBILE
    navbar.find('.menu-mobile').click(function() {
        $(this).find('.menu-mobile-cont').toggleClass('open');
        navbar.toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    var typewriterEl = new Typewriter('#typewriterEl', {
        strings: ['Currencies', 'Collectibles', 'Physical Goods', 'Derivatives', 'Real Estate', 'Storage', 'Data', 'Anything', 'Everything'],
        autoStart: true,
        cursor: '_',
        delay: 50,
        loop: true
    }).stop();

    inView.offset(150);
    inView('#sentence-col').on('enter', () => {
        typewriterEl.start();
    })
    .on('exit', () => {
        typewriterEl.stop();
    });

    //////
    startAnimAction();

    //////
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        duration: win.height()-380,
        offset: 0,
        triggerHook: "onEnter",
        triggerElement: "#yourMarketCol",
        reverse: true
    });
    scene.addTo(controller);

    /*scene.on('enter', () => {
        console.log('your market entered');
    });

    scene.on('leave', () => {
        console.log('your market left');
    });*/


    var yourMarket = $('#yourMarket');
    var yourRules = $('#yourRules');
    var marketMap = 0;
    var rulesMap = 0;

    scene.on("progress", event => {
        // console.log("Scene progress changed to " + event.progress);
        marketMap = map(event.progress, 1, 0, 0, 1)*140;
        rulesMap = map(event.progress, 1, 0, 0, 1)*160;
        yourMarket.css('transform', 'translateX(-'+marketMap+'%)');
        yourRules.css('transform', 'translateX('+rulesMap+'%)');
    });

    win.scroll(debounce(function (event) {
        let newScrollPos = win.scrollTop();
        let scrollDirection = '';
        if(newScrollPos > scrollPos) {
            scrollDirection = 'down';
        }
        else {
            scrollDirection = 'up';
        }
        scrollPos = newScrollPos;
        handleNavbar(scrollDirection);
    }, 100));

    //ON RESIZE
    win.resize(function(event){
        menuPositionLeft();
        $(window).scrollLeft( 0 );
        bgAnchor();
    });

});
