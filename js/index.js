$(document).ready(function() {

	$('.button.skill').on("click",function(e) {
		var roll = getRandom(1,6);
		var total = roll + 6;
		$('.skillRoll').text(roll);
		$('.skillTotal').text(total);
		localStorage.setItem('skill', total);
		$('.button.skill').addClass('generated');
		allStatsGenerated();
	})

	$('.button.stamina').on("click",function(e) {
		var roll = getRandom(2,12);
		var total = roll + 12;
		$('.staminaRoll').text(roll);
		$('.staminaTotal').text(total);
		localStorage.setItem('stamina', total);
		$('.button.stamina').addClass('generated');
		allStatsGenerated();
	})

	$('.button.luck').on("click",function(e) {
		var roll = getRandom(1,6);
		var total = roll + 6;
		$('.luckRoll').text(roll);
		$('.luckTotal').text(total);
		localStorage.setItem('luck', total);
		$('.button.luck').addClass('generated');
		allStatsGenerated();
	})

	$('.potionSelect').on('change',function(e){
		var ptn = $("input[name=potion]:checked").val();
		localStorage.setItem('potionType', ptn);
		$('.potionSelect').addClass('selected');
	})
});

function getRandom (min,max) {
	return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function allStatsGenerated() {
	if ($('.button.skill').hasClass('generated') && $('.button.stamina').hasClass('generated') && $('.button.luck').hasClass('generated')) {
		$('.scores').addClass('generated');
	}
}
