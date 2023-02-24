document.addEventListener("DOMContentLoaded", function(p) {
    console.log("The DOM has loaded");

const paragraph = document.querySelector("p")
const change = document.createElement("p");
change.innerHTML = 'This is really cool!';
paragraph.parentNode.replaceChild(change, paragraph);
  });