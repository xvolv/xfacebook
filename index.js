var eye = document.getElementById("image");
var password = document.getElementById("password");
eye.addEventListener("click", function () {
  if (password.type == "password") {
    password.type = "text";
    eye.src = "opnedEye.PNG";
  } else {
    password.type = "password";
    eye.src = "closedEye.PNG";
  }
})