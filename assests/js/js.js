jQuery(document).ready(function(e) {
  var t = e('#BackToTop');

  e(window).scroll(function() {
    e(this).scrollTop() >= 200 ? t.show(10).animate('#BackToTop').addClass('active') : t.animate('#BackToTop').removeClass('active');
  });

  t.click(function(t) {
    t.preventDefault();
    e('html,body').animate({
      scrollTop: 0
    }, 800);
  });
});
