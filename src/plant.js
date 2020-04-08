// require('./plant.js');

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
// class Plant {
// 	constructor() {
// 		this.water = 0;
// 		this.soil = 0;
// 		this.light = 0;
// 	}

// 	hydrate() {
// 		this.water++;
// 	}

// 	feed() {
// 		this.soil++;
// 	}

// 	giveLight() {
// 		this.light++;
// 	}
// }

// let plant = new Plant();
// AnimationPlaybackEvent.hydrate()
// plant
// Plant {water:1, soil: 0, light: 0}

// const hydrate = (plant) => {
// 	return {
// 		...plant,
// 		water: (plant.water || 0) + 1
// 	};
// };

// const feed = (plant) => {
// 	return {
// 		...plant,
// 		soil: (plant.soil || 0) + 1
// 	};
// };

// takes a specific plant argument and property "soil, water, etc"
// const changePlantState = (plant, property) => {
// 	return {
// 		...plant,
// 		[property]: (plant[property] || 0) + 1
// 	};
// };
// make above function more abstract so it can
// work with anything, not just plants.

// const changeState = (state, prop, value) => {
// 	return {
// 		...state,
// 		[prop]: (state[prop] || 0) + value
// 	};
// };

// curry the function so that each closure only takes 1 argument
// This is a function factory. We can easily create more specific
// functions that alter a plant's soil, water, and light to varying degrees.

// const hydrate = changeState('water');
// const giveLight = changeState('light');

// // feed(5)(plant);

// const greenFood = changeState('soil')(10);
// const yuckyFood = changeState('soil')(-5);

// blueFood(plant);

const storeState = () => {
	let oldState = {};
	return (stateChangeFunction) => {
		const newState = stateChangeFunction(oldState);
		oldState = { ...newState };
		return newState;
	};
};

const stateChanger = storeState();

const changeState = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: (state[prop] || 0) + value
		});
	};
};

// const fedPlant = stateChanger(blueFood);
// const plantFedAgain = stateChanger(greenFood);

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
