// import './plant';
$(document).ready(function() {
	$('#feed').click(function() {
		const feed = changeState('soil');
		const blueFood = changeState('soil')(5);
		const newState = stateChanger(blueFood);
		$('#soil-value').text(newState.soil);
	});
	$('#water').click(function() {
		const water = changeState('water')(5);
		const newState = stateChanger(water);
		$('#water-value').text(newState.water);
	});
	$('#sun').click(function() {
		const light = changeState('sun')(5);
		const newState = stateChanger(light);
		$('#sun-value').text(newState.sun);
	});
});
