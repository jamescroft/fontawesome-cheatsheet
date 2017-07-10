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

// Micro-plugin that excludes children from text

$.fn.ignore = function(sel){
  return this.clone().find(sel||">*").remove().end();
};


//clipboard.js code

var clipboard = new Clipboard('.copy-button');
clipboard.on('success', function(e) {
	console.info('Action:', e.action);
	console.info('Text:', e.text);
	var buttonText = $(e.trigger).ignore("code").text();
	$(e.trigger).html("<span class=\"copy-success\"> Copied!</span>");
	window.setTimeout(function() {
		e.trigger.textContent = buttonText;
	}, 2000);
});

// prevent Bootstrap dropdown from closing on click

$('.btn-container .btn-group button.dropdown-toggle').on('click', function (event) {
    $(this).parent().toggleClass('open');
});

$('body').on('click', function (e) {
    if (!$('.btn-container .btn-group').is(e.target) 
        && $('.btn-container .btn-group').has(e.target).length === 0 
        && $('.open').has(e.target).length === 0
    ) {
        $('.btn-container .btn-group').removeClass('open');
    }
});

