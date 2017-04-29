$(function () {
  var $dropdownContent = $('.dropdown-content');
  var $mainNav = $('.nav-main li');
  var $dropdownList = $('.dropdown-list');

  $mainNav
    .on('mouseover', function() {
      if ($(this).hasClass('library-trigger')) {
        $dropdownContent.css({'transform': 'translateX(700px)', 'opacity': '1'});
        $dropdownList.css({'transform': 'translateX(0px)'});
      } else if ($(this).hasClass('findme-trigger')) {
        $dropdownContent.css({'transform': 'translateX(800px)', 'opacity': '1'});
        $dropdownList.css({'transform': 'translateX(-180px)'});
      } else {
        $dropdownContent.css({'transform': 'translateX(600px)', 'opacity': '1'});
        $dropdownList.css({'transform': 'translateX(180px)'});
      }
    })
    .on('mouseout', function() {
      $dropdownContent.css({'opacity': '0'});
    });
});