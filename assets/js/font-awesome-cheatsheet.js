/* Bootstrap Cheat Sheets
   
   Font Awesome Cheat Sheets
   
   By: James Croft (@jamescroft on Twitter)
   
   Contribute or fork this project.  
 */



$(window).load(function() {
  // When the page has loaded, animate in
  $("#home").animate({opacity: 1 });
  $("#about").animate({opacity: 1 });
});


$(document).ready(function (){
	
	// Animated scroll to page anchors via nav

	var fixedNavHeight = $(".navbar").height();

function scrollToAbout() {
	var scrollPos = $('#about').offset().top - (fixedNavHeight - 1);
		$('html, body').animate({
			scrollTop: scrollPos
		}, 1000, "easeInOutExpo", function () {
			if ($("div.navbar-collapse").hasClass("in")) {
				$(".navbar-toggle").click();
			};
    	});
}

function scrollToHome() {
		var scrollPos = $('#home').offset().top - (fixedNavHeight - 1);
		$('html, body').animate({
			scrollTop: scrollPos,
		}, 1000, "easeInOutExpo", function () {
			if ($("div.navbar-collapse").hasClass("in")) {
				$(".navbar-toggle").click();
			};
    	});

}
	
$("#scroll-to-about").click(function() {
	scrollToAbout();
});

$("#scroll-to-home").click(function() {
	scrollToHome();
});

//Create rows: 10 icons per row

function createGlyphRows() {
	var glyphCount = $("li.grid-icon").length;	
	var rowSize = 10;
	for (var c = 0; c<=glyphCount;c+=20) {
		$("li.grid-icon").slice(c, c+rowSize).wrapAll("<div class='row'><div class='container'></div></div>");
	};
	for (var c = 10; c<=glyphCount;c+=20) {
		$("li.grid-icon").slice(c, c+rowSize).wrapAll("<div class='row row-alt'><div class='container'></div></div>");
	};
	$("ul.font-awesome-icons .row:first").attr("id", "first-row");
	$("ul.font-awesome-icons").css("max-width", "100%");
};

createGlyphRows();
	
/* Search: https://github.com/DeuxHuitHuit/quicksearch */
// The search function needs to be timedOut so the classnames can be loaded in first

setTimeout(function() {
	$('input#glyph-search').quicksearch('li.grid-icon', {
		 'onBefore': function () {
        $('ul.font-awesome-icons div.row').hide();
		$('li.grid-icon').addClass('temp').appendTo('#first-row');
    },
		'show': function () {
			$(this).show();
			$(this).parent('div.row').show();
		},
		'onAfter': function () {
			scrollToHome();
   		}
		});
}, 100);

//Supress Enter key

$('#glyph-form').bind("keyup keypress", function(e) {
  var code = e.keyCode || e.which; 
  if (code  == 13) {               
    e.preventDefault();
    return false;
  }
});

// End Search
	
	//For each of the icons in the grid 
 
	$(".grid-icon i.fa").each(function(index){		
	//Find the unicode reference in the data-unicode attribute and render it as HTML inside the <i> tag		
		glyphStore = $(this);
		if ($(this).attr("data-unicode")) {
				$(glyphStore).html("&#x" + $(glyphStore).attr("data-unicode") + ";");
		};		
	//Finds the class of the font awesome icon in the grid and display it underneath		
		var classCode = glyphStore.attr("class").split(" ");
		 $(glyphStore).next(".fa-class").text("." + classCode[1]);		 
	});

//End of element insertions into page, so initialise scrollspy

$('body').scrollspy({ target: '.navbar', offset: (fixedNavHeight - 1)    });

if (Modernizr.touch) {
	 $("ul.font-awesome-icons li.grid-icon .btn-container").hide();
};

}); //End document ready

// Using ZeroClipboard to copy glyph codes to clipboard.

var client = new ZeroClipboard( $('.copy-button'), {
  moviePath: "../assets/zeroclipboard-1.2.3/ZeroClipboard.swf"
} );

client.on( "load", function(client, args) {

	client.on( 'mouseover', function ( client, args ) {
	  //Sets the value to be injected into the clipboard as the item on mouseover
	  	
	  glyphStore = $(this).parents("li.grid-icon").children("i.fa");
	  if ($(this).hasClass("parent-copy")) {
		  //Copy the HTML Tag into the clipboard
		  //Because of the unicode symbols rendered as contents in the <i> tag, a local clone must be taken and emptied to parse the correct clipboard value
		  glyphClipboard = glyphStore.clone().empty().removeAttr("data-unicode")[0].outerHTML;
	  };
	  if ($(this).hasClass("copy-html")) {
		  //Copy the HTML Tag into the clipboard
		  //Because of the unicode symbols rendered as contents in the <i> tag, a local clone must be taken and emptied to parse the correct clipboard value
		  glyphClipboard = glyphStore.clone().empty().removeAttr("data-unicode")[0].outerHTML;
		  $(this).html($("<code/>").text(glyphClipboard));
	  };
	  if ($(this).hasClass("copy-unicode-html")) {
	  	  //Copy the Unicode HTML Entity into the clipboard
		  //The unicode HTML entity is prepended with "&#x" and appended with ";"
		  glyphClipboard = "&#x" + glyphStore.data("unicode") + ";";
		  $(this).html($("<code/>").text(glyphClipboard));
	  };
	  if ($(this).hasClass("copy-unicode-hex")) {
	  	  //Copy the Escaped Unicode Hex (for CSS) into the clipboard
		  //The unicode Hex entity is prepended with " content:"/ " and appended with " "; "
		  glyphClipboard = "content:\"\\" + glyphStore.data("unicode") + "\";";
		  $(this).html($("<code/>").text(glyphClipboard));
	  };
	  
	  
	});
	
	client.on( 'mouseout', function (client, args) {
	  //Revert the button label
	  if ($(this).hasClass("copy-html")) {
		  $(this).text("HTML Tag");
	  };
	  	  if ($(this).hasClass("copy-unicode-html")) {
		  $(this).text("Unicode HTML Entity");
	  };
	  if ($(this).hasClass("copy-unicode-hex")) {
		  $(this).text("CSS Rule");
	  };
	});
	client.on( 'noflash', function ( client, args ) {
	});
	client.on( 'wrongflash', function ( client, args ) {
	  alert("Your flash is too old " + args.flashVersion);
	} );
	
	client.on( 'dataRequested', function (client, args) {
	  //Inject the glyph HTML code into the clipboard
	  client.setText(glyphClipboard);
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
		$(that).html($("<code/>").text(btnString.text()));
    }, 600)	
  });
});


