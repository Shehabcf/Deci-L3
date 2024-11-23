document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember").checked;

    if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Login Successful and credentials saved!");
    } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        alert("Login Successful, but credentials were not saved.");
    }
});

window.onload = function() {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
        document.getElementById("email").value = localStorage.getItem("email");
        document.getElementById("password").value = localStorage.getItem("password");
        document.getElementById("remember").checked = true;
    }
};
