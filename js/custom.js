$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
$('.testimonialsSlider').owlCarousel({
    loop:true,
    margin:300,
    center: true,
    nav:false,
    items:1,
    dots:true,
    animateOut: 'fadeOut',
    autoplay:true,
    autoplayTimeout:5000
})
$('.projectsSlider').owlCarousel({
    loop:true,
    margin:0,
    center:true,
    nav:false,
    items:1,
    dots:true,
    animateOut: 'fadeOut',
    autoplay:false,
    autoplayTimeout:5000
})