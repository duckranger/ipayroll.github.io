$(document).ready(function() {

	$(document).click(function() {
		// Slide in drawer when clicking outside
		$("#second-drawer").animate({
			left: "-60px"
		}, 500, function() {
			// Animation complete.
		});
	});
	
	$(".mdl-layout__drawer").click(function(e) {
		e.stopPropagation();
	});

	// Show selected second drawer
	$(".main-navigation .theme-js-more").click(function(event) {
		event.preventDefault();

		// Show selected list
		var list = $(this).attr('id');
		$("#second-drawer .mdl-navigation").hide();
		$("#" + list + "-list").show();

		// Slide out drawer
		$("#second-drawer").animate({
			left: "240px"
		}, 500, function() {
			// Animation complete.
		});

		// Highlight active
		$(".main-navigation .mdl-navigation__link").removeClass("active")
		$(this).addClass("active");
	});
	
	// Menu Search Filter
	$('#fixed-header-drawer-exp').on('keyup', function() {
		var value = $(this).val().toLowerCase();

		if (value != '') {
			$('#second-drawer > .mdl-navigation > a').each(function() {
				if ($(this).text().toLowerCase().indexOf(value) > -1) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		} else {
			$('#second-drawer > .mdl-navigation > a').show();
		}
	});

	// Reset search feild
	$('#fixed-header-drawer-exp').val('');

	// Slide in second drawer
	$(".list-title, #second-drawer .mdl-navigation__link").click(function() {
		$("#second-drawer").animate({
			left: "-60px"
		}, 500, function() {
			// Animation complete.
		});
	});
	
	$(".main-navigation .mdl-navigation__link").not('.main-navigation .theme-js-more').click(function() {
		$("#second-drawer").animate({
			left: "-60px"
		}, 500, function() {
			// Animation complete.
		});
	});	

	// In Table Dropdowns
	$( ".theme-dropdown-link" ).click(function() {
		var ID = $(this).attr('id');
		$( "."+ID+"-item" ).toggle();
		$( "#"+ID+" .mdl-list__item-icon" ).toggle();
	});
});

// Menu Highlighting
$('.mdl-layout__content').on('scroll', function () {
	var referenceTop = $('#reference').offset().top,
		referenceHeight = $('#reference').outerHeight(), 
		baseTop = $('#base').offset().top,
		baseHeight = $('#base').outerHeight(),
		functionalityTop = $('#functionality').offset().top,
		functionalityHeight = $('#functionality').outerHeight(),
		scopesTop = $('#scopes').offset().top,
		scopesHeight = $('#scopes').outerHeight(),
		gettingStartedTop = $('#getting-started').offset().top,
		gettingStartedHeight = $('#getting-started').outerHeight(),				
		developerTop = $('#developer').offset().top,
		developerHeight = $('#developer').outerHeight(),				
		resourcesTop = $('#resources').offset().top,
		resourcesHeight = $('#resources').outerHeight(),				

		windowPosition = $(window).scrollTop() + $('.mdl-layout__header').outerHeight() + 5;

		$('.mdl-layout__drawer .mdl-navigation__link').removeClass('active');
	
		if (windowPosition > referenceTop && windowPosition < (referenceTop + referenceHeight)){
			$('#main-reference').addClass('active');	
		}
		if (windowPosition > baseTop && windowPosition < (baseTop + baseHeight)){
			$('#main-base').addClass('active');	
		}
		if (windowPosition > functionalityTop && windowPosition < (functionalityTop + functionalityHeight)){
			$('#main-functionality').addClass('active');	
		}
		if (windowPosition > scopesTop && windowPosition < (scopesTop + scopesHeight)){
			$('#main-scopes').addClass('active');	
		}
		if (windowPosition > gettingStartedTop && windowPosition < (gettingStartedTop + gettingStartedHeight)){
			$('#main-getting-started').addClass('active');	
		}			
		if (windowPosition > developerTop && windowPosition < (developerTop + developerHeight)){
			$('#main-developer').addClass('active');	
		}
		if (windowPosition > resourcesTop && windowPosition < (resourcesTop + resourcesHeight)){
			$('#main-resources').addClass('active');	
		}			
}); 