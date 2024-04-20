//select pharagraphs in HTML tabsContainer...
let phara1 = document.getElementById("aboutTab");
let phara2 = document.getElementById("timeToVisitTab");
let phara3 = document.getElementById("attractionsTab");
//select HTMLButtonElement also here...
let btn1 = document.getElementById("aboutButton");
let btn2 = document.getElementById("timeToVisitButton");
let btn3 = document.getElementById("attractionsButton");
//Now the user onclick the button what actions are do to write here...
//we have three phragraphs
//we can add classList.add("d-none"); ---->this is hide display to all contents in pharagraph Element.
//now Where we need to the pharagarph thre we can remove it...Like //phara1.classList.remove("d-none");
//Now p1 is display the desktop to the user remaining is not diasplay...
btn1.onclick = function() {
  phara1.classList.remove("d-none");
  phara2.classList.add("d-none");
  phara3.classList.add("d-none");
}
btn2.onclick = function() {
  phara1.classList.add("d-none");
  phara2.classList.remove("d-none");
  phara3.classList.add("d-none");
}
btn3.onclick = function() {
  phara1.classList.add("d-none");
  phara2.classList.add("d-none");
  phara3.classList.remove("d-none");
}
