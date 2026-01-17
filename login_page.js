function login() {
  const role = document.getElementById("role").value;

  if (role === "") {
    alert("Please select User or Admin");
    return;
  }

  if (role === "user") {
    alert("User selected");
     window.location.href = "user-dashboard.html";
  } else if (role === "admin") {
    alert("Admin selected");
     window.location.href = "admin-clients.html";
  }
}
