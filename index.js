// Function to be passsed into Event Listener
function handleClick() {

    // "this" helps identify the identity of the event listener (i.e. which element triggered the )
    console.log(this);

    
    this.style.color = "white";


    // Add audio sound to a specific key
    let audio = new Audio("sounds/crash.mp3");
    audio.play();


    


}

// Creates a constant list containing all elements with class "drum"
const myDrums = document.querySelectorAll(".drum")

// Adds an Event Listener to each element in myDrums const
for (let i = 0; i < myDrums.length; i++) {
    
    // addEventListener passes in a function so it can be called later on
    myDrums[i].addEventListener("click", handleClick)

  
  
}



console.log(myDrums)