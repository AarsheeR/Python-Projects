window.addEventListener("load", initializeCart);

function initializeCart() 
{
	document.getElementById("login-button").addEventListener("click", logIn);
	document.getElementById("create-account-button").addEventListener("click", createAccount);
	document.getElementById("guest-button").addEventListener("click", continueAsGuest);
}
function logIn() 
{
	var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var accountCount = localStorage.getItem("accountCount");

    var isValid = false;

    for (var i = 1; i <= accountCount; i++) 
	{
		
        var storedUser = localStorage.getItem("user" + i);
        var storedPass = localStorage.getItem("password" + i);
        if (storedUser == username && storedPass == password) {
            isValid = true;
            localStorage.setItem("currentuser", username); //  logged-in username
            localStorage.setItem("isGuest", "false"); //  not guest
            alert("Logged in successfully!");
            redirectToMain(); // ] to the main page or dashboard
            break;
        }
    }

    if (isValid != true) 
	{
        alert("Invalid username or password. Please try again.");
    }
}

function createAccount() {
    window.location.href = "createaccount.html";
}

function continueAsGuest() {
    localStorage.setItem("user", "guest");
    localStorage.setItem("isGuest", "true");
    alert("Continuing as guest...");
    redirectToMain();
}

function redirectToMain() {
    window.location.href = "home.html";
}
