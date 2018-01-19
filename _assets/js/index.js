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
