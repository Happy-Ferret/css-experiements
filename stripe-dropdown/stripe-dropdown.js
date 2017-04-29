$(function () {
  var $dropdownContent = $('.dropdown-content');
  var $mainNav = $('.nav-main li');
  var $dropdownList = $('.dropdown-list');


  $mainNav.on('mouseover', function() {
      var type = $(this).data('trigger');
      $mainNav.removeClass('active');
      $(this).addClass('active')
      $dropdownContent.removeClass('active projects library findme').addClass('active ' + type);
    });

  $dropdownContent.on('mouseleave', function() {
      $(this).removeClass('active');
      $mainNav.removeClass('active')
    });
});