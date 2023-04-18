const list = document.getElementById("list");
const button = document.getElementById("add_button");
const textentry = document.getElementById("Name");
let index = 1;

button.addEventListener("click", () => {
  let element = document.createElement("li");
  element.textContent = textentry.value;
  element.id = index;
  index++;
  list.appendChild(element);

  document.getElementById("Name").value = "";
});
// locate your element and add the Click Event Listener
list.addEventListener("click", function (e) {
  // e.target is our targetted element.
  // try doing console.log(e.target.nodeName), it will result LI
  console.log(e.target.style.textDecorationLine);
  if (e.target && e.target.nodeName == "LI") {
    if (e.target.style.textDecorationLine == "line-through") {
      e.target.style = "";
      console.log("Clearing the strike");
    } else {
      e.target.style = "text-decoration-line: line-through;";
      console.log("insert the strike");
    }
    console.log(e.target.id + " was clicked");
    console.log(e.target.parentElement);
  }
});
