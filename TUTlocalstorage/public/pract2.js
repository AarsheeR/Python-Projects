window.addEventListener("load",GetInfo);

function GetInfo()
{
	firstname = localStorage.getItem("firstname");
	lastname = localStorage.getItem("lastname");
	fullname = firstname + " " + lastname;
	
	document.getElementById("lblfullname").textContent = fullname;	
}