/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let number = parseInt(string);

  if (number >= 0 && number <= 12) {
    return "Good Morning"
  } else if (number > 12 && number <= 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

}

/* Write your implementation of displayMessage() */
function displayMessage(input) {
  document.getElementById("greeting").textContent = input;
}