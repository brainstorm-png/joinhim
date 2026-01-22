function checkPassword() {
  const input = document.getElementById("password").value.toLowerCase();
  const message = document.getElementById("message");

  if (input === "sinatra") {
    window.location.href = "wrong.html";
  } 
  else if (input === "observer") {
    window.location.href = "stage2.html";
  } 
  else {
    message.textContent = "ACCESS DENIED";
  }
}
