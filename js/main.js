"use strict";


$(document).ready( () => {

	$("select").change( () => {

		$("#slide-option").is(":selected") ? $(".carousel").removeClass("carousel-fade") : $(".carousel").addClass("carousel-fade");

	})
	



















});