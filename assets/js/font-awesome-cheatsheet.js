/* Bootstrap Cheat Sheets
   
   Font Awesome Cheat Sheets
   
   By: James Croft (@jamescroft on Twitter)
   
   Contribute or fork this project.  
 */

// Animated scroll to page anchors via nav

$(document).ready(function (){
	var fixedNavHeight = $(".navbar").height();
	$('body').scrollspy({ target: '.navbar', offset: (fixedNavHeight - 1)    });
	
	
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
	
	//For each of the icons in the grid 
 
	$(".grid-icon i.fa").each(function(index){		
	//Find the unicode reference in the data-unicode attribute and render it as HTML inside the <i> tag		
		glyphStore = $(this);
		if ($(this).attr("data-unicode")) {
				$(glyphStore).html("&#" + $(glyphStore).attr("data-unicode") + ";");
		};		
	//Finds the class of the font awesome icon in the grid and display it underneath		
		var classCode = glyphStore.attr("class").split(" ");
		 $(glyphStore).next(".fa-class").text("." + classCode[1]);		 
	});
 		
});

// Using ZeroClipboard to copy glyph codes to clipboard.

var clip = new ZeroClipboard( $('.copy-button'), {
  moviePath: "../assets/zeroclipboard-1.2.3/ZeroClipboard.swf"
} );

clip.on( "load", function(client, args) {

	clip.on( 'mouseover', function ( client, args ) {
	  //Sets the HTML to be injected into the clipboard as the item on mouseover
	  //Because of the unicode symbols rendered as contents in the <i> tag, a local clone must be taken and emptied to parse the correct clipboard value	
	  glyphStore = $(this).parents("li.grid-icon").children("i.fa")
	  glyphHTML = glyphStore.clone().empty()[0].outerHTML;
	  glyphUnicode = "&#" + glyphStore.data("unicode") + ";";
	  glyphUnicodeHTML = "\\" + glyphStore.data("unicode");
	  console.log (glyphStore, glyphHTML, glyphUnicode, glyphUnicodeHTML);
	});
	
	clip.on( 'dataRequested', function (client, args) {
	  //Inject the glyph HTML code into the clipboard
	  client.setText(glyphHTML);
	});
  
  client.on( "complete", function(client, args) {
    // `this` is the element that was clicked, we're setting $(this) to 'that' because $(this) doesn't work with the timeout function.
    that = $(this);
	btnString = that.contents();
	// Animation to indicate element has been copied
	$(that).text("Copied!");
	$(that).removeClass("zeroclipboard-is-hover", 0, "linear");
	$(that).addClass("btn-success", 100, "linear");	
    setTimeout(function() {
        $(that).removeClass("btn-success", 100, "linear"), 
		$(that).text(btnString.text());
    }, 600)	
  });
});

