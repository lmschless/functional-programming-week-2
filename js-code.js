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

const cat = canEat('cat');
cat.eat('salmon');

const salmon = canEat('salmon');
salmon.eat('insects');
