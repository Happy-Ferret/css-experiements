var couch = $('.couch');

$(window).on('load', function () {
  couch.css({
    transform: 'translate(0px, -150px)',
    opacity: 0
  });
});
$(window).on('scroll', function () {
  var scrollPosition = $(this).scrollTop();
  var couchPostion = -(150-scrollPosition); 
  var couchOpacity = scrollPosition/100; // devided by 100 to get the number between 0 ~ 1

  if (couchPostion < 0) {
    couch.css({
      transform: 'translate(0px, ' + couchPostion + 'px)',
      opacity: couchOpacity
    });
  } else {
    couch.css({ opacity: 1});
  }
});