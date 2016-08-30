$(document).ready(function() {
	var alumnidinner2016html = "Alumni Dinner 2016 content here";
	var researchexpo2016html = "Research Expo 2016 content here";
	var facultydinner2015html = "Student/Faculty Dinner content here";
	var eeexpo2015html = "Undergraduate EE Expo 2015 content here";
	var alumnidinner2015html = "Alumni Dinner 2015 content here";
	var researchexpo2015html = "Research Expo 2015 content here";
	var studybreakshtml = "Study Breaks content here";

	var uexpoSelect = true;
	var alumdinSelect = false;
	var rexpoSelect = false;
	var facdinSelect = false;
	var studySelect = false;

	document.getElementById("eventct").innerHTML = eeexpo2015html;
	$("#uexpo").css('background-color', '#173e43');
	$("#uexpo").css('color', '#fff');

	$("#uexpo").click(function() {
		$("#eventct").html(eeexpo2015html);

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
		$("#eventct").html(alumnidinner2016html + alumnidinner2015html);

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
		$("#eventct").html(researchexpo2016html + researchexpo2015html);

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
		$("#eventct").html(facultydinner2015html);

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
		$("#eventct").html(studybreakshtml);

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

