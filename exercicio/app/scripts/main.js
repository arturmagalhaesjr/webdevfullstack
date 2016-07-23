$(document).ready(function () {
   $('a#menu').click(function (e) {
     e.preventDefault();
      $('body').toggleClass('menu-open');
   })
});
