const heading = document.getElementById("heading");
heading.textContent = "New Title"; 
heading.style.color = "blue";
heading.style.fontFamily = "Arial";

//  Get button and message elements
const button = document.getElementById("btn");
const message = document.getElementById("message");

// Add click listener
button.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
});
