window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",UseLocal);
}

function UseLocal()
{
	localStorage.clear();
	id = document.getElementById("txtid").value;
	localStorage.setItem("id",id);
	
	window.location.href = "practanswer.html"
	
}