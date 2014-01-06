/* Bootstrap Cheat Sheets
   
   Bootstrap 3 Glyphs
   
   By: James Croft (@jamescroft on Twitter)
   
   Contribute or fork this project.  
 */

// Animated scroll to page anchors via nav



$(document).ready(function (){
	var fixedNavHeight = $(".navbar").height();
	$('body').scrollspy({ target: '.navbar', offset: (fixedNavHeight - 1) });
	
	
	$("#scroll-to-about").click(function() {
		var scrollPos = $('#about').offset().top - (fixedNavHeight - 1);
		$('html, body').animate({
			scrollTop: scrollPos
		}, 500, function () {
			if ($("div.navbar-collapse").hasClass("in")) {
				$(".navbar-toggle").click();
			} else {}
    });
	});
	
	$("#scroll-to-home").click(function() {
		var scrollPos = $('#home').offset().top - (fixedNavHeight - 1);
		$('html, body').animate({
			scrollTop: scrollPos
		}, 500, function () {
			if ($("div.navbar-collapse").hasClass("in")) {
				$(".navbar-toggle").click();
			} else {}
    });
	});
});

// Using ZeroClipboard to copy glyph codes to clipboard.

var clip = new ZeroClipboard( $('.copy-button'), {
  moviePath: "assets/zeroclipboard-1.2.3/ZeroClipboard.swf"
} );

clip.on( "load", function(client) {
  // alert( "movie is loaded" );

  client.on( "complete", function(client, args) {
	  
    // `this` is the element that was clicked
    that = this;
	$(that).text("Copied!");
	$(that).removeClass("zeroclipboard-is-hover", 0, "linear");
	$(that).addClass("btn-success", 100, "linear");	
    setTimeout(function() {
        $(that).removeClass("btn-success", 100, "linear"), 
		$(that).text("Copy");
    }, 600)	
  });
});

