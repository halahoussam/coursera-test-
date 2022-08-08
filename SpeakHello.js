// Step 2: Wrap the entire contents of SpeakHello.js inside IIFE
// See Lecture 52, Part 2


// Step 3: Create an object called "helloSpeaker" which you will attach to
// the 'speak' method that you will expose to the global context
// See Lecture 52, Part 1
// var helloSpeaker =

// Do not attach a talkWord variable to a "helloSpeaker" object.
var speechfunction = {};

// Step 4: Rewrite the 'speak' function so that it is linked to a file
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, Part 2
(function (window) {
	var speechfunction ={};
	 speechfunction.names="Paul,frank,larry,Paula";
	var speakWord="Hello";
	speechfunction.sayHello =function (){
console.log("Hello" +speechfunction.names ) 
}
window.speechfunction = speechfunction;
})(window);
var speechfunction ={};
speechfunction.names="jacob,Laura";
var speakWord="Hi";
speechfunction.sayHi =function (){
console.log("Hi" +speechfunction.names )
}
window.speechfunction = speechfunction.names;
(window);
// Step 5: Display the global domain "helloSpeaker" object. give him a name
// 'helloSpeaker' is also global.
// See Lecture 52, Part 2
// (Note, step 6 will be executed in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;