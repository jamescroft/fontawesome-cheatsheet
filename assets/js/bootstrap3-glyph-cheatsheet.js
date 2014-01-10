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

//Finds the classes of the previous font awesome icon and displays it underneath
 
	$(".glyphicon-class").each(function(index){
		 var classCode = $(this).prev().attr("class").split(" ");
		 $(this).text("." + classCode[1]);
	});
 		
});


// Using ZeroClipboard to copy glyph codes to clipboard.

var clip = new ZeroClipboard( $('.copy-button'), {
  moviePath: "../assets/zeroclipboard-1.2.3/ZeroClipboard.swf"
} );

clip.on( "load", function(client, args) {

	clip.on( 'mouseover', function ( client, args ) {
	  //Set the HTML to be injected into the clipboard as the item on mouseover
	  glyphHTML = $(this).parent().prevAll('.glyphicon')[0].outerHTML;	  
	});
	
	clip.on( 'dataRequested', function (client, args) {
	  //Inject the glyph HTML code into the clipboard
	  client.setText(glyphHTML);
	});
  
  client.on( "complete", function(client, args) {
    // `this` is the element that was clicked, we're setting $(this) to 'that' because $(this) doesn't work with the timeout function.
    that = $(this);
	// Animation to indicate element has been copied
	$(that).text("Copied!");
	$(that).removeClass("zeroclipboard-is-hover", 0, "linear");
	$(that).addClass("btn-success", 100, "linear");	
    setTimeout(function() {
        $(that).removeClass("btn-success", 100, "linear"), 
		$(that).text("Copy");
    }, 600)	
  });
});
