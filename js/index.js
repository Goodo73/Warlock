$(document).ready(function () {

	var skilGenned = false;
	var stamGenned = false;
	var luckGenned = false;
	var ptnSelected = false;

	$('.button.skill').on("click",function () {
		var roll = getRandom(1,6);
		var total = roll + 6;
		$('.skillRoll').text(roll);
		$('.skillTotal').text(total);
		localStorage.setItem('skill', total);
		skilGenned = true;
	})

	$('.button.stamina').on("click",function () {
		var roll = getRandom(2,12);
		var total = roll + 12;
		$('.staminaRoll').text(roll);
		$('.staminaTotal').text(total);
		localStorage.setItem('stamina', total);
		stamGenned = true;
	})

	$('.button.luck').on("click",function () {
		var roll = getRandom(1,6);
		var total = roll + 6;
		$('.luckRoll').text(roll);
		$('.luckTotal').text(total);
		localStorage.setItem('luck', total);
		luckGenned = true;
	})


	$('.go').on("click",function (event) {
		if ($('#ptnSkil').is(":checked") || $('#ptnStam').is(":checked") || $('#ptnFort').is(":checked")) {
			ptnSelected = true;
			var ptn = $("input[name=potion]:checked").val();
			localStorage.setItem('potionType', ptn);
		}

		if (skilGenned && stamGenned && luckGenned && ptnSelected) {
			// Do nothing
		} else {
			event.preventDefault();
			alert("Skill, Stamina & Luck scores must be generated, and a potion selected!");
		}
	})

	function getRandom (min,max) {
		return Math.floor(Math.random() * ((max + 1) - min)) + min;
	}

});
