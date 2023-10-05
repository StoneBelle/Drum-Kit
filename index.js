// DETECTING CLICKED BUTTONS

// Function to be passsed into Event Listener
function handleClick() {
        
    // "this" is a keyword that refere to an object
    // Depending on how "this" is called will determine which object it refers to 
    // In the case of events, "this" retrieves the identity of the event listener (i.e. element that triggered the event)
    
    console.log(this);
    
    // this.style.color = "white";
   
    // Stores the value of the Button that triggered the event
    let clickedButton = this.inneHTML;

    makeSound(clickedButton)
};



//DETECTING PRESSED KEYS

// Adding Event Listener to "document" will make the entire webpage listen for keyboard strokes
// When the function get triggered there is an option to pass in a parameter
// This allows us to tap into the "event" that triggered event listener

document.addEventListener("keydown", function(event) {
    // "event" has a "key" property that we can tap into
    // the tapped in value will be passed as the parameter for "makeSound(key)"
    makeSound(event.key);
});



// Creates a constant list containing all elements with class "drum"
const myDrums = document.querySelectorAll(".drum")

// Adds an Event Listener to each element in myDrums const
for (let i = 0; i < myDrums.length; i++) {
    
    // addEventListener passes in a function so it can be called later on
    myDrums[i].addEventListener("click", handleClick) 
  
}


function makeSound(key){
    
    // "switch" performs different actions based on different conditions
    // "pressedButton" is the expression that will be "switched"
    // "case" are the conditions being checked

    // "switch works by comparing the value of the expression to the values of the cases
    
    switch (key) {
        // "case"   
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            let tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            let tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            let tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        // "default" acts like an "else"
        // only executed if no "case" above was a match
        default:
            console.log(pressedButton);
    };
}


function buttonAnimation(currentBtn) {
    let activeBtn = document.querySelector("." + currentBtn);
};


// NOTE: addEventListener is a high order function
// The function being passed in is a callback function
// The object that experienced the event is what calls the callback function
