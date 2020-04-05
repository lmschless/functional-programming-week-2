require('./js-code.js');

// new linter can see that let is not allowed
const canEat = function(creature) {
	const obj = {
		eat: function(food) {
			return `The ${creature} eats the ${food}.`;
		}
	};
	return obj;
};

// use two separate methods, one for eat and one for sleep
// keeps code modular and more reusable.
const canSleep = function(creature) {
	const obj = {
		sleep: function() {
			return `The ${creature} sleeps.`;
		}
	};
	return obj;
};

// Make a function factory to assign both
// methods to a single cat object.

const cat = canEat('cat');
cat.eat('salmon');

const salmon = canEat('salmon');
salmon.eat('insects');
