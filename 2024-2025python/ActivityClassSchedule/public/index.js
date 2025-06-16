window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",Clear);
}

function Clear()
{
	localStorage.clear();
}

