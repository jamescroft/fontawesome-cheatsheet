/* Bootstrap Cheat Sheets
   
   Bootstrap 3 Glyphs
   
   By: James Croft (@jamescroft on Twitter)
   
   Contribute or fork this project.  
 */

// Animated scroll to page anchors via nav

$(document).ready(function (){
	$("#scroll-to-about").click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 500);
	});
	$("#scroll-to-home").click(function() {
		$('html, body').animate({
			scrollTop: $("#home").offset().top
		}, 500);
	});
});

// Using ZeroClipboard to copy glyph codes to clipboard.

var clip = new ZeroClipboard( $('.copy-button'), {
  moviePath: "zeroclipboard-1.2.3/ZeroClipboard.swf"
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

