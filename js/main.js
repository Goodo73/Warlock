$(document).ready(function () {

	// The following ensures screen stats are retained and displayed properly
	// Record the screen value for each statistic
	character.initSkill = localStorage.getItem('skill');
	character.currSkill = localStorage.getItem('skill');
	character.initStamina = localStorage.getItem('stamina');
	character.currStamina = localStorage.getItem('stamina');
	character.initLuck = localStorage.getItem('luck');
	character.currLuck = localStorage.getItem('luck');
	character.potion.type = localStorage.getItem('potionType');

	// Display each statistical value on screen
	$('.skill .initial').text(character.initSkill);
	$('.skill .current').text(character.currSkill);
	$('.stamina .initial').text(character.initStamina);
	$('.stamina .current').text(character.currStamina);
	$('.luck .initial').text(character.initLuck);
	$('.luck .current').text(character.currLuck);
	$('.potion .type').text(character.potion.type);


	// Upon loading a new 'page'
	// - Display text
	// - Read options and display buttons for each option
	// - Read opponents and display them
	// - If opponent(s) exist, resolve battle(s)

});