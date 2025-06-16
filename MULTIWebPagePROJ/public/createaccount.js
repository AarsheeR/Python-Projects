window.addEventListener("load", initializeCart);

function initializeCart() 
{
	document.getElementById("create-account-submit").addEventListener("click", create)
}
	
function create() 
{
		
       var username = document.getElementById("new-user").value;
       var password = document.getElementById("new-password").value;
	   var retypedPassword = document.getElementById("retyped-password").value;
	   
	   if (username === "" || password === "" || retypedPassword === "") {
	           alert("All fields are required.");
	           return;
       }
	   if (password !== retypedPassword) {
	           alert("Passwords do not match.");
	           return;
       }
	   else 
	   {
			
			var accountCount = localStorage.getItem("accountCount");
	        if (accountCount == null) 
			{
	            accountCount = 0;
	        } else {
	            accountCount = parseInt(accountCount);
	        }
	   }

	   accountCount = accountCount + 1
	   localStorage.setItem("accountCount", accountCount);
       localStorage.setItem("user" + accountCount, username);
       localStorage.setItem("password" + accountCount, password);
       localStorage.setItem("isGuest", "false");
	   
       alert("Account created successfully! Please sign in again with your new account.");
       window.location.href = "login.html";

   };