var attempt = 3;

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "mikes@mail.com" && password == "password123") {
    alert("Login is successful!");
    window.location = "webPages/dashboard.html";
    return false;
  } else {
    attempt--;
    alert("Wrong login credentials, you can try " + attempt + " times.");
  }

  if (attempt == 0) {
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
  }
}
