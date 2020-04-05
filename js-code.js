require('./js-code.js');

// new linter can see that let is not allowed
const canEat = (creature) => ({
	eat: (food) => {
		return `The ${creature.name} eats the ${food}.`;
	}
});

// use two separate methods, one for eat and one for sleep
// keeps code modular and more reusable.
const canSleep = (creature) => ({
	sleep: () => {
		return `The ${creature.name} sleeps.`;
	}
});

// Make a function factory to assign both
// methods to a single cat object.

const sleepingEatingCreature = (name) => {
	let creature = {
		name
	};

	return { ...state, ...canEat(state), ...canSleep(state) };
};

// above is referred to as object composition.

// const platypus = sleepingEatingCreature('platypus');

// const cat = canEat('cat');
// cat.eat('salmon');

// const salmon = canEat('salmon');
// salmon.eat('insects');

// State is a snapshot of the application at a given time.

// Building a functional application
// object orientated way
class Plant {
	constructor() {
		this.water = 0;
		this.soil = 0;
		this.light = 0;
	}

	hydrate() {
		this.water++;
	}

	feed() {
		this.soil++;
	}

	giveLight() {
		this.light++;
	}
}

// let plant = new Plant();
// AnimationPlaybackEvent.hydrate()
// plant
// Plant {water:1, soil: 0, light: 0}

const hydrate = (plant) => {
	return {
		...plant,
		water: (plant.water || 0) + 1
	};
};

const feed = (plant) => {
	return {
		...plant,
		soil: (plant.soil || 0) + 1
	};
};

// takes a specific plant argument and property "soil, water, etc"
const changePlantState = (plant, property) => {
	return {
		...plant,
		[property]: (plant[property] || 0) + 1
	};
};
