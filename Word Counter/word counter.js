let text = document.getElementById("textbox");
text.addEventListener("input", function () {
  // for char counter
  let textValue = this.value;
  let char = textValue.length;
  document.getElementById("char").innerHTML = char;

  // for word counter
  textValue = textValue.trim(); //start and end space
  let words = textValue.split(" "); // split   store a value in array
  let clenList = words.filter(function (elm) {
    //remove extra spaces from middle
    return elm != "";
  });

  document.getElementById("word").innerHTML = clenList.length;
});
