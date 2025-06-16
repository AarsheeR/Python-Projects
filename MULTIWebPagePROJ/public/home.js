window.addEventListener("load", initialize);

function initialize()
{
	var usercurrent = localStorage.getItem("currentuser");
	document.getElementById("usermsg").textContent = "Hello, " + usercurrent + "!";
}


function signOut() 
{
    localStorage.setItem("isGuest", "true");
	localStorage.setItem("currentuser", "guest");
    alert("You have been signed out.");
	
	for (var i = localStorage.length - 1; i >= 0; i--) 
	{
        var key = localStorage.key(i);
        if (key.startsWith("item")) 
		{
            localStorage.removeItem(key);
            localStorage.removeItem("size" + key);
            localStorage.removeItem("price" + key);
            localStorage.removeItem("quantity" + key);
	     }
	 }
    window.location.href = "login.html";
}