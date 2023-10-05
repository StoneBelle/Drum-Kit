// Function to be passsed into Event Listener
function handleClick() {

    // "this" helps identify the identity of the event listener (i.e. which element triggered the )
    console.log(this);

    
    // this.style.color = "white";


    let buttonInnerHTML = this.inneHTML;

    switch (buttonInnerHTML) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "w":
            let tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;


    }

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