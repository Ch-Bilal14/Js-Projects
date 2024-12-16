let userName = document.getElementById("user");
let userPass = document.getElementById("pass");
let status = false;

function formvali() {
  if (userName.value == "") {
    document.getElementById("user_error").innerHTML = "User Name is empty";
    status = false;
  } else if (userName.value.length < 3) {
    document.getElementById("user_error").innerHTML =
      "User Name requried min 3 char";
    status = false;
  } else {
    document.getElementById("user_error").innerHTML = "";
    status = true;
  }

  if (userPass.value == "") {
    document.getElementById("pass_error").innerHTML = "password  is empty";
    status = false;
  } else if (userPass.value.length < 5) {
    document.getElementById("pass_error").innerHTML =
      "Password requried min 5 char";
    status = false;
  } else {
    document.getElementById("pass_error").innerHTML = "";
    status = true;
  }

  if (status) {
    return true;
  } else {
    return false;
  }
}
