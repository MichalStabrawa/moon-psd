$(document).ready(function(){
    $('#mobile-menu').click(function(){
        $('.nav-mobile-ul').toggle();
    })
    
    
    $('#scroll-down').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#aboutUs').offset().top
    }, 1000);
});
    
    /*myBtn */
    
    window.onscroll = function () {
    scrollFunction()
};
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
    
    $('#myBtn').click(function(){
        $('html, body').animate({
            scrollTop: $('header').offset().top
        },1000);
    })
    
    
})

     $(document).on('click', 'a[href^="#"]', function(event) {
       event.preventDefault();
var menuHeight = $('.nav-mobile-ul').height();
       $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
  });

