$(document).ready(function() {

	// set inner html for each event content
	$("#uexpo-div").hide();
	var uexpoVar = $("#uexpo-div").html();

	$("#alumdin-div").hide();
	var alumdinVar = $("#alumdin-div").html();

	$("#rexpo-div").hide();
	var rexpoVar = $("#rexpo-div").html();

	$("#facdin-div").hide();
	var facdinVar = $("#facdin-div").html();

	$("#study-div").hide();
	var studyVar = $("#study-div").html();

	// set which event content is selected 
	var uexpoSelect = true;
	var alumdinSelect = false;
	var rexpoSelect = false;
	var facdinSelect = false;
	var studySelect = false;

	// TODO: photo captions no longer show up... 
	$(".photo").hover(function() {
	  $(this).find(".info").fadeIn('fast');
	},
	function(){
	   $(this).find(".info").fadeOut('fast');
	});

	// set default event open as the undergraduate ee expo
	document.getElementById("eventct").innerHTML = uexpoVar;
	$("#uexpo").css('background-color', '#173e43');
	$("#uexpo").css('color', '#fff');

	// event click functions below, much hard code
	$("#uexpo").click(function() {
		$("#eventct").html(uexpoVar);

		$("#uexpo").css('background-color', '#173e43');
		$("#uexpo").css('color', '#fff');

		$("#alumdin").css('background-color', '#f7d455');
		$("#rexpo").css('background-color', '#f7d455');
		$("#facdin").css('background-color', '#f7d455');
		$("#study").css('background-color', '#f7d455');

		uexpoSelect = true;
		alumdinSelect = false;
		rexpoSelect = false;
		facdinSelect = false;
		studySelect = false;
	});

	$("#alumdin").click(function() {
		// $("#eventct").html(alumdinHTML);
		$("#eventct").html(alumdinVar);
		// $("#alumdin-div").show();

		$("#alumdin").css('background-color', '#173e43');
		$("#alumdin").css('color', '#fff');

		$("#uexpo").css('background-color', '#f7d455');
		$("#rexpo").css('background-color', '#f7d455');
		$("#facdin").css('background-color', '#f7d455');
		$("#study").css('background-color', '#f7d455');

		uexpoSelect = false;
		alumdinSelect = true;
		rexpoSelect = false;
		facdinSelect = false;
		studySelect = false;
	});

	$("#rexpo").click(function() {
		$("#eventct").html(rexpoVar);

		$("#rexpo").css('background-color', '#173e43');
		$("#rexpo").css('color', '#fff');

		$("#alumdin").css('background-color', '#f7d455');
		$("#uexpo").css('background-color', '#f7d455');
		$("#facdin").css('background-color', '#f7d455');
		$("#study").css('background-color', '#f7d455');

		uexpoSelect = false;
		alumdinSelect = false;
		rexpoSelect = true;
		facdinSelect = false;
		studySelect = false;
	});

	$("#facdin").click(function() {
		$("#eventct").html(facdinVar);

		$("#facdin").css('background-color', '#173e43');
		$("#facdin").css('color', '#fff');

		$("#alumdin").css('background-color', '#f7d455');
		$("#rexpo").css('background-color', '#f7d455');
		$("#uexpo").css('background-color', '#f7d455');
		$("#study").css('background-color', '#f7d455');

		uexpoSelect = false;
		alumdinSelect = false;
		rexpoSelect = false;
		facdinSelect = true;
		studySelect = false;
	});

	$("#study").click(function() {
		$("#eventct").html(studyVar);

		$("#study").css('background-color', '#173e43');
		$("#study").css('color', '#fff');

		$("#alumdin").css('background-color', '#f7d455');
		$("#rexpo").css('background-color', '#f7d455');
		$("#facdin").css('background-color', '#f7d455');
		$("#uexpo").css('background-color', '#f7d455');

		uexpoSelect = false;
		alumdinSelect = false;
		rexpoSelect = false;
		facdinSelect = false;
		studySelect = true;
	});

	// hover functions...because let's hard code everything
	// easier to add class for hover style...but things overwritten

	$("#uexpo").hover(function() {
		if (!uexpoSelect) {
			$(this).css('background-color', '#21585f');
		    $(this).css('color', '#fff');
		}
	}, function() {
		if (!uexpoSelect) {
			$(this).css('background-color', '#f7d455');
		    $(this).css('color', '#fff');
		}
	});

	$("#alumdin").hover(function() {
		if (!alumdinSelect) {
			$(this).css('background-color', '#21585f');
		    $(this).css('color', '#fff');
		}
	}, function() {
		if (!alumdinSelect) {
			$(this).css('background-color', '#f7d455');
		    $(this).css('color', '#fff');
		}
	});

	$("#rexpo").hover(function() {
		if (!rexpoSelect) {
			$(this).css('background-color', '#21585f');
		    $(this).css('color', '#fff');
		}
	}, function() {
		if (!rexpoSelect) {
			$(this).css('background-color', '#f7d455');
		    $(this).css('color', '#fff');
		}
	});

	$("#facdin").hover(function() {
		if (!facdinSelect) {
			$(this).css('background-color', '#21585f');
		    $(this).css('color', '#fff');
		}
	}, function() {
		if (!facdinSelect) {
			$(this).css('background-color', '#f7d455');
		    $(this).css('color', '#fff');
		}
	});

	$("#study").hover(function() {
		if (!studySelect) {
			$(this).css('background-color', '#21585f');
		    $(this).css('color', '#fff');
		}
	}, function() {
		if (!studySelect) {
			$(this).css('background-color', '#f7d455');
		    $(this).css('color', '#fff');
		}
	});
});

