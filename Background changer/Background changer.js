function changebg(color) {
  document.body.style.backgroundColor = color;
  // for the dark backgroun (black)
  let txt = document.getElementsByClassName("text");
  if (color == "#000000") {
    for (let elm of txt) {
      elm.style.color = "white";
    }
  } else {
    for (let elm of txt) {
      elm.style.color = "black";
    }
  }
}
