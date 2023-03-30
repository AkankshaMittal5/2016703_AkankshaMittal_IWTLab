// get the user's name from a prompt
let userName = prompt("What is your name?");

// get the current time
let now = new Date();

// get the hours from the current time
let hours = now.getHours();

// set the greeting message according to the time of day
let greeting;
if (hours < 12) {
  greeting = "Good morning";
} else if (hours < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

// display the greeting message with the user's name
let greetingMessage = document.createElement("p");
greetingMessage.textContent = greeting + ", " + userName + "!";
document.body.appendChild(greetingMessage);

/*// add a click event listener to the greeting message to hide it
greetingMessage.addEventListener("click", function() {
  greetingMessage.style.display = "none";
});*/
