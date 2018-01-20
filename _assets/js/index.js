$(document).ready(function() {
  function goToByScroll(link){
    // Remove "link" from the ID
    // id = link.replace("link", "");
    // Scroll
    $('html, body').animate({scrollTop: $("#"+link).offset().top},'slow');
  }
  $(".navLinkItem").click(function(e) { 
    // Prevent a page reload when a link is pressed
    e.preventDefault(); 
    // Call the scroll function
    goToByScroll(this.title);
  });

  // setTimeout(function(){
  //     $('header, section, .box').css("display","block");
  // }, 1000);
});

$(window).ready(function() {
  var lastScrollTop = 0;
  $(window).on("scroll", function() {
    var scrollCurrent = $(window).scrollTop();
    var scrollHeight = $(document).height();
    var scrollWidth = $(document).width();
    var scrollPosition = $(window).height() + $(window).scrollTop();

    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      // when scroll to bottom of the page
      $("#shortcutButton").css("display", "block");
    }
    
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      // downscroll code
      $("header").addClass("off");
    } else {
      // upscroll code
      $("header").removeClass("off");
    }
    lastScrollTop = st;
  });
});
