require('./composition.js');

const paint = (color) => ({
	paints: () => {
		return `Paints ${color}!`;
	}
});

const painter1 = paint('green');
console.log(painter1.paints());

const painter2 = paint('red');
console.log(painter2.paints());

const sound = (noise) => ({
	sound: () => {
		return noise;
	}
});

const faucet = sound('drip drip drip');
console.log(faucet.sound());
