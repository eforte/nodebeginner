function say(word) {
	console.log(word);
}

// Takes a function - not the function return value but the function
// itsel - as first parameter
function execute(someFunction, value) {
	someFunction(value); // the function in the 'someFuncion' local variable is called.
}

execute(say, "Hola");
