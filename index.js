// // Function for event listener
// function myEvent() {
//  document.querySelectorAll(".drum")
//  alert("a key was pressed!")
// }

// // Retrieves all elements with '.drum' class & stores it in a list 
// const allKeys = document.querySelectorAll(".drum");

// // for in loop
// for (let key in allKeys) {
//   key.addEventListener("click", myEvent);
// }

// Total number of keys 
let numOfKeys = document.querySelectorAll(".drum").length;

// Adds an Event Listener to each key

for (let i = 0; i < numOfKeys; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("I got clicked!");
  });
}








