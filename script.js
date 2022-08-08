// *******************************
// Start here if you want an easier starting point for this customization
// *******************************
//
// unit 4 customization instructions.
//
// The idea of ​​this task is to take a set of existing names
// Then output either Hello "Name" or Good Bye "Name" to the console.
// The program should say "hello" to any name except for names beginning with "J"
// or "j", otherwise the program should say "Good Bye". So, the final output
The // on the console should look like this:
/*
hi jacob
bye john
bye jin
bye jason
Hello Paul
hello frank
hello larry
Hello Paula
Hi Laura
Bye Jim
warning!!! warning!!!
The code is currently not working! It's your job to make it work
As described in the requirements and steps to complete it
a task.
warning!!! warning!!!
*/

// Step 1: (Nothing to do. This was already done for you)
// Wrap the entire contents of script.js inside IIFE
// See Lecture 52, Part 2
// (Note, step 2 will be done in the SpeakHello.js file.)
(Function(){
names var=["Jacob","John","Jane","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];

// Step 10: (Nothing to do. It's already done for you)
// loop over the array of names and say either 'hello' or 'goodbye'
// using the helloSpeaker or byeSpeaker method.
// See Lecture 50, Part 1
for(var i=0;i<names.length;i++){

// Step 11: (Nothing to do. It's already done for you)
// Retrieve the first character of the current name in the loop.
// Use the 'charAt' function for the String object. What we are looking for
// Nouns beginning with uppercase or lowercase "J" / "j", call
// String the object 'toLowerCase' on the result so we can compare
// to the lowercase 'j' afterwards.
// Find these methods on the Mozilla Developer Network website if necessary.
var firstLetter=names[i].charAt(0).toLowerCase(),

// Step 12: (Nothing to do. This is already done for you)
// Compare the 'firstLetter' retrieved in step 11 with lowercase
// 'j'. If it's the same, call the byeSpeaker 'Speak' method with the current name
// in the loop. Otherwise, call the helloSpeaker 'Speak' style with the tide
// name in the loop.
if(first character==='j'){
Via eSpeaker.pronunciation(nouns[i]);
}else{
hello_pronounce(nouns[i]);}
}
})();