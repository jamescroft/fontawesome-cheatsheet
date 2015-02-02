/* Bootstrap Cheat Sheets
   
   Font Awesome Cheat Sheets
   
   By: James Croft (@jamescroft on Twitter)
   
   Contribute or fork this project.  
 */



$(window).load(function() {
  // When the page has loaded, reveal
  $("#home").css("opacity", 1 );
  $("#about").css("opacity", 1 );
});


$(document).ready(function (){

	// Animated scroll to page anchors via nav

	var fixedNavHeight = $(".navbar").height();
	
$("#scroll-to-about").click(function() {
	var scrollPos = $('#about').offset().top - (fixedNavHeight - 1);
		$('html, body').animate({
			scrollTop: scrollPos
		}, 1000, "easeInOutExpo", function () {
			if ($("div.navbar-collapse").hasClass("in")) {
				$(".navbar-toggle").click();
			};
    	});
});

$("#scroll-to-home").click(function() {
	var scrollPos = $('#home').offset().top - (fixedNavHeight - 1);
		$('html, body').animate({
			scrollTop: scrollPos,
		}, 1000, "easeInOutExpo", function () {
			if ($("div.navbar-collapse").hasClass("in")) {
				$(".navbar-toggle").click();
			};
    	});
});

setTimeout(function() {
    
//Create rows: 10 icons per row

	var glyphCount = $("li.grid-icon").length;	
	var rowSize = 10;
	for (var c = 0; c <= glyphCount; c += 20) {
		$("li.grid-icon").slice(c, c + rowSize).wrapAll("<div class='row'><div class='container'></div></div>");
	};
	for (var c = 10; c <= glyphCount; c += 20) {
		$("li.grid-icon").slice(c, c + rowSize).wrapAll("<div class='row row-alt'><div class='container'></div></div>");
	};
	$("ul.font-awesome-icons .row:first").attr("id", "first-row");
    
//Add 2 Adsense banners    

    $("ul.font-awesome-icons .row:nth-child(3)").attr("id", "third-row");
    $("<div class='container-wide text-center ad-break'><script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script><!-- Font-Awesome-2nd --><ins class='adsbygoogle'style='display:inline-block;width:728px;height:90px'data-ad-client='ca-pub-8168184751026221'data-ad-slot='4858614992'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>").insertAfter("#third-row");                           
    $("ul.font-awesome-icons .row:nth-child(6)").attr("id", "sixth-row");
    $("<div class='container-wide text-center ad-break'><script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script><!-- Font Awesome-3rd --><ins class='adsbygoogle'style='display:inline-block;width:728px;height:90px'data-ad-client='ca-pub-8168184751026221'data-ad-slot='7532879794'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});  </script></div>").insertAfter("#sixth-row");
    
	$("ul.font-awesome-icons").css("max-width", "100%");

 //Search: https://github.com/DeuxHuitHuit/quicksearch 
 //The search function needs to be timedOut so the classnames can be loaded in first

	$('input#glyph-search').quicksearch('li.grid-icon', {
		 'onBefore': function () {
        $('ul.font-awesome-icons div.row').hide();
        $('div.ad-break').hide();
		$('li.grid-icon').addClass('temp').appendTo('#first-row');
    },
		'show': function () {
			$(this).show();
			$(this).parent('div.row').show();
		},
		'onAfter': function () {
			window.scrollTo(0, 0);
   		}
		});
}, 1000);

//Supress Enter key

$('#glyph-form').bind("keyup keypress", function(e) {
  var code = e.keyCode || e.which; 
  if (code  == 13) {               
    e.preventDefault();
    return false;
  }
});

if($('#glyph-search').length) {
	var $clear = $('#filter-clear');
	$clear.click(function(e) {
		e.preventDefault();
		$('#glyph-search').val('').trigger('keyup').focus();
	});
};
			
 //End Search

//Initialise scrollspy

$('body').scrollspy({ target: '.navbar', offset: (fixedNavHeight - 1)    });

if (Modernizr.touch) {
	 $("ul.font-awesome-icons li.grid-icon .btn-container").hide();
};

}); //End document ready

// Using ZeroClipboard to copy glyph codes to clipboard. This is set in a Timeout to allow the Mustache-templated items to be loaded in.

setTimeout (function(){
   var client = new ZeroClipboard( $('.copy-button'), {
  moviePath: "assets/zeroclipboard-1.2.3/ZeroClipboard.swf"
});


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

client.on( 'noflash', function ( client, args ) {
  $(".btn-container").hide();
  $(".alert-noflash").removeClass("hide");
  
  
} );	
client.on( 'wrongflash', function ( client, args ) {
  alert("Your flash is too old " + args.flashVersion);
} ); 

},600);



