// note! The steps in this file are basically identical to the ones you did
// Done in the SpeakHello.js file.

// Step 6: Wrap the entire contents of SpeakGoodBye.js inside IIFE
// See Lecture 52, Part 2


// Step 7: Create an object called "byeSpeaker" which you will attach to
// the 'speak' method that you will expose to the global context
// See Lecture 52, Part 1
// var byeSpeaker =

// Do not attach a talkWord variable to a "byeSpeaker" object.
var talkWord="Goodbye";

// Step 8: Rewrite the 'speak' function so that it is linked to a file
// a byeSpeaker object rather than a standalone function.
// See Lecture 52, Part 2
(function (window) {
	var speechfunction ={};
	 speechfunction.names="jin,john,jason";
	var talkWord="bye";
	speechfunction.saybye =function (){
console.log("bye" +speechfunction.names ) 
}
window.speechfunction = speechfunction;
})(window);

// Step 9: Display the "byeSpeaker" object on a global scale. give him a name
// "byeSpeaker" is also global.
// xxxx.xxxx = byeSpeaker;