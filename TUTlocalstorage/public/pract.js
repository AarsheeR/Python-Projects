window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",UseLocal);
}

function UseLocal()
{
	localStorage.clear();
	fname = document.getElementById("txtfname").value;
	localStorage.setItem("firstname",fname);
	lname = document.getElementById("txtlname").value;
	localStorage.setItem("lastname",lname);
	
	window.location.href = "test.html"
	
}